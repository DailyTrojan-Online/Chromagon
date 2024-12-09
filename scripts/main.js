let gameSplash, splashDate;

let gameMap = [];
let moveableColors = [];

let gameBoardSvg;
let solutionBoardSvg;
let hexRadius = 32;
let chosenMap;
let origin;
let fixedPositions = [];

let today;

let difficultiesByDay = [
    {map: smallMap, shuffle: 5, minDistance: 80, maxDistance: Infinity, difficulty: 1},
    {map: smallMap, shuffle: 8, minDistance: 40, maxDistance: 60, difficulty: 2},
    {map: leaningMap, shuffle: 10, minDistance: 60, maxDistance: Infinity, difficulty: 2},
    {map: leaningMap, shuffle: 12, minDistance: 40, maxDistance: 50, difficulty: 3},
    {map: tallMap, shuffle: 14, minDistance: 50, maxDistance: 80, difficulty: 4},
    {map: tallMap, shuffle: 16, minDistance: 30, maxDistance: 50, difficulty: 4},
    {map: giantMap, shuffle: 16, minDistance: 20, maxDistance: 40, difficulty: 5},
]

let correctMap = [];

function initialize() {
	gameBoardSvg = document.getElementById("game-board");
    solutionBoardSvg = document.getElementById("solution-board");

	gameSplash = document.getElementById("splash");
	splashDate = document.getElementById("splash-date");
	window.DTGCore = new DTGameCore(gameSplash, splashDate);
	let dayOfWeek = new Date().getDay();
	dayOfWeek--;
	if(dayOfWeek < 0) {
		dayOfWeek = 6;
	}
	today = difficultiesByDay[dayOfWeek];
	console.log(today);

	let difficultyWrapper = document.getElementById("game-difficulty");

	for(let i = 0; i < 5; i++) {
		let difficulty = document.createElement("i");
		difficulty.classList.add("ti");
		if(i < today.difficulty) {
			difficulty.classList.add("ti-star-filled");
		}else {
			difficulty.classList.add("ti-star");
		}
		difficultyWrapper.appendChild(difficulty);
	}

	createHexLayoutWithMap(today.map);
    shuffleMap();
    gameBoardSvg.classList.add("transition")
}

function startGame() {
	DTGCore.hideSplashScreen();
}

function regenerateMap() {
	createHexLayoutWithMap(chosenMap);
    shuffleMap();
}

function createHexLayoutWithMap(map) {
	//the first entry will contain the origin
    gameMap = [];
    fixedPositions = [];

	gameBoardSvg.innerHTML = "";
    solutionBoardSvg.innerHTML = "";
	chosenMap = map;
	origin = map[0].origin;
	let assignmentSteps = map[0].assignmentSteps;
	let originX = origin.x;
	let originY = origin.y;
	map = map.slice(1);
	let fixedColors = [];
	let rotatorPositions = map
		.filter((hex) => hex.rotator)
		.map((hex) => {
			return { x: hex.x, y: hex.y, rotator: true };
		});
	let fixedCoordinates = map
		.filter((hex) => hex.fixed)
		.map((hex) => {
			return { x: hex.x, y: hex.y };
		});
	let colors = generateColors(fixedCoordinates.length);

	for (let i = 0; i < fixedCoordinates.length; i++) {
		let hex = fixedCoordinates[i];

		let color = colors[i];
		fixedColors.push({ ...hex, color: color, fixed: true });
	}

	let coloredCoordinates = [...fixedColors, ...rotatorPositions];

	for (let i = 0; i < assignmentSteps.length; i++) {
		let step = assignmentSteps[i];
		let anchors = step.anchors;
		let mode = step.mode;
		if (mode == "scale") {
			let startAnchor = coloredCoordinates.find(
				(hex) => hex.x == anchors[0].x && hex.y == anchors[0].y
			);
			let endAnchor = coloredCoordinates.find(
				(hex) => hex.x == anchors[1].x && hex.y == anchors[1].y
			);
			let intermediate = step.intermediate;
			let colors = chroma
				.scale([startAnchor.color, endAnchor.color])
				.colors(intermediate.length + 2);
			colors.shift();
			colors.pop();
			for (let j = 0; j < intermediate.length; j++) {
				let hex = intermediate[j];
				let color = colors[j];
				coloredCoordinates.push({ x: hex.x, y: hex.y, color: color });
			}
		}
		if (mode == "average") {
			let coordinates = coloredCoordinates.filter((hex) => {
				return anchors.some((anchor) => anchor.x == hex.x && anchor.y == hex.y);
			});
			coordinates = coordinates.map((hex) => {
				return hex.color;
			});
			let avg = chroma.average(coordinates);
			coloredCoordinates.push({
				x: step.intermediate[0].x,
				y: step.intermediate[0].y,
				color: avg,
			});
		}
	}
    correctMap = [...coloredCoordinates];


	for (let i = 0; i < coloredCoordinates.length; i++) {
		let hex = coloredCoordinates[i];
		let x = hex.x - originX;
		let y = hex.y - originY;
		let color = hex.color;
		let fixed = hex.fixed;
		let rotator = hex.rotator;
		if (fixed) {
			// color = "blue";
		}
		if (rotator) {
			color = "var(--button-bg)";
		}
		let hexEl = createHexAtPoint(x, y, color, fixed, rotator);
        if(rotator) {
            hexEl.hitbox.addEventListener("click", () => {
                rotateAroundHex(x + originX, y + originY);
            });
            hexEl.group.classList.add("rotator");
            hexEl.element.style.cursor = "pointer";
            fixedPositions.push({x: x + originX, y: y + originY});
        }
        gameMap.push({
            x: x + originX,
            y: y + originY,
            color: color,
            ...hexEl
        })
	}
}

function createHexAtPoint(x, y, color, fixed, rotator) {
	let hex = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let solutionHex = document.createElementNS("http://www.w3.org/2000/svg", "path");
	let hexVertices = [];
	let w = 32 * Math.cos((30 * Math.PI) / 180);
    let group = document.createElementNS("http://www.w3.org/2000/svg", "g");
	hexVertices = [
		{
			x: hexRadius,
			y: 0,
		},
		{
			x: hexRadius / 2,
			y: w,
		},
		{
			x: -hexRadius / 2,
			y: w,
		},
		{
			x: -hexRadius,
			y: 0,
		},
		{
			x: -hexRadius / 2,
			y: -w,
		},
		{
			x: hexRadius / 2,
			y: -w,
		},
	];
	//convert to svg path string
	let path = `M ${hexVertices[0].x} ${hexVertices[0].y} `;
	for (let i = 1; i < hexVertices.length; i++) {
		path += `L ${hexVertices[i].x} ${hexVertices[i].y} `;
	}
	path += `L ${hexVertices[0].x} ${hexVertices[0].y} `;
	hex.setAttribute("d", path);
    solutionHex.setAttribute("d", path);

	hex.setAttribute("fill", color);
    solutionHex.setAttribute("fill", color);
	if (Math.abs(x + origin.x) % 2 == 1) {
		y -= 0.5;
	}
    let transformedPositionX = (x * hexRadius * 3) / 2;
    let transformedPositionY = y * Math.sqrt(3) * hexRadius;
	hex.setAttribute(
		"transform",
		`translate(${transformedPositionX},${transformedPositionY})`
	);
    solutionHex.setAttribute(
        "transform",
        `translate(${transformedPositionX},${transformedPositionY})`
    );
    group.appendChild(hex);
	gameBoardSvg.appendChild(group);
    solutionBoardSvg.appendChild(solutionHex);
    if(fixed) {
        let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", (x * hexRadius * 3) / 2);
        circle.setAttribute("cy", y * Math.sqrt(3) * hexRadius);
        circle.setAttribute("r", 10);
        circle.setAttribute("fill", "white");
        gameBoardSvg.appendChild(circle);
    }

	let hitbox;

    if(rotator) {
        let icon = document.createElementNS("http://www.w3.org/2000/svg", "path");
        icon.setAttribute("d", "M 25 0 l -12.5 21.651 H -12.5 L -25 0 L -12.5 -21.651 h 25 l 12.5 21.651 Z M -10.009 4.445 c 1.705 3.832 5.545 6.503 10.009 6.503 c 5.596 0 10.212 -4.199 10.869 -9.618 M -5.239 3.993 h -5.71 s 0 5.596 0 5.596 M 10.009 -4.446 c -1.705 -3.832 -5.545 -6.503 -10.009 -6.503 c -5.596 0 -10.212 4.199 -10.869 9.618 M 5.239 -3.994 h 5.71 s 0 -5.596 0 -5.596");
        icon.setAttribute("stroke", "var(--button-text)");
        icon.setAttribute("fill", "#0000");
        icon.setAttribute("stroke-width", 3);
        icon.setAttribute("stroke-linecap", "round");
        icon.setAttribute("stroke-linejoin", "round");
        icon.style.pointerEvents = "none";
        icon.setAttribute("transform", `translate(${(x * hexRadius * 3) / 2},${y * Math.sqrt(3) * hexRadius})`);
        group.appendChild(icon);
		hex.classList.add("rotator-hex");

		hitbox = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		hitbox.setAttribute("cx", (x * hexRadius * 3) / 2);
		hitbox.setAttribute("cy", y * Math.sqrt(3) * hexRadius);
		hitbox.setAttribute("r", 40);
		hitbox.setAttribute("fill", "transparent");
		hitbox.style.cursor = "pointer";
		hitbox.classList.add("rotator-hitbox");
		group.appendChild(hitbox);

    }

    return {element: hex,group, hitbox, transformedPositionX, transformedPositionY};
}
function counterRotateAroundHex(x, y) {
    for(let i = 0; i < 5; i++) {
        rotateAroundHex(x, y);
    }
}

function rotateAroundHex(x, y) {
    let positionsInOrder = [];
    if(x % 2 == 0) {
        positionsInOrder = [
            {x: x, y: y - 1},
            {x: x + 1, y: y},
            {x: x + 1, y: y + 1},
            {x: x, y: y + 1},
            {x: x - 1, y: y+1},
            {x: x - 1, y: y},
        ]
    }else {
        positionsInOrder = [
            {x: x, y: y - 1},
            {x: x + 1, y: y - 1},
            {x: x + 1, y: y},
            {x: x, y: y + 1},
            {x: x - 1, y: y},
            {x: x - 1, y: y - 1},
        ]
    }
    let elements = [];
    for(let i = 0; i < positionsInOrder.length; i++) {
        let pos = positionsInOrder[i];
        let element = gameMap.find((hex) => hex.x == pos.x && hex.y == pos.y);
        elements.push(element);
    }
    for(let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let nextElement = elements[(i + 1) % elements.length];
        element.element.setAttribute(
            "transform",
            `translate(${nextElement.transformedPositionX},${nextElement.transformedPositionY})`
        );
        let newElement = {
            ...gameMap[gameMap.indexOf(element)],
        }
        newElement.x = nextElement.x;
        newElement.y = nextElement.y;
        newElement.transformedPositionX = nextElement.transformedPositionX;
        newElement.transformedPositionY = nextElement.transformedPositionY;
        gameMap[gameMap.indexOf(element)]= newElement;
    }
    if(checkCorrectness()) {
        console.log("correct");
    }
}

function shuffleMap() {
    for(let i = 0; i < today.shuffle; i++) {
        let randomIndex = DTGCore.randomInt(0, fixedPositions.length - 1);
        counterRotateAroundHex(fixedPositions[randomIndex].x, fixedPositions[randomIndex].y);

    }
}
function checkCorrectness() {
    for(let i = 0; i < correctMap.length; i++) {
        let correct = correctMap[i];
        let current = gameMap.find((hex) => hex.x == correct.x && hex.y == correct.y);
        if(correct.rotator || correct.fixed) continue;
        if(correct.color != current.color) {
            return false;
        }
    }
    return true;
}
function gameWon() {

}
function toggleSolution() {
    let el = document.getElementById("solution");
    el.classList.toggle("hidden");
}

function generateColors(numColors) {
	const colors = [];
	const attempts = 100; // Limit attempts to find distinct colors
	let dist = [];

	for (let i = 0; i < numColors; i++) {
		let color;

		for (let attempt = 0; attempt < attempts; attempt++) {
			// Generate a random color in HCL (Hue, Chroma, Lightness)
			const randomHue = DTGCore.randomFloat(0, 360); // Hue: 0-360 degrees
			const randomChroma = DTGCore.randomFloat(0, 100); // Chroma: 0-100
			const randomLightness = DTGCore.randomFloat(0, 100); // Lightness: 0-100

			color = chroma.hcl(randomHue, randomChroma, randomLightness);

			// Ensure the color is distinguishable from others
			const isDistinct = colors.every(
				(existingColor) => {
					let distance = chroma.distance(color, existingColor, "lab");
					let valid = distance > today.minDistance && distance < today.maxDistance;
					if(valid){
						dist.push(distance);
					}
					return distance > today.minDistance && distance < today.maxDistance;}
			);

			if (isDistinct) {
				console.log(attempt);
				break;
			}
		}

		colors.push(color);
	}
	//log average distance
	const sum = dist.reduce((a, b) => a + b, 0);
	const avg = sum / dist.length || 0;
	console.log(avg);

	// Convert all colors to hex format for consistency
	return colors.map((c) => c.hex());
}

initialize();
