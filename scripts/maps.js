let smallMap = [
	{
		origin: { x: 2, y: 2 },
		assignmentSteps: [
			{
				anchors: [
					{ x: 0, y: 3 },
					{ x: 2, y: 0 },
				],
				intermediate: [
					{ x: 0, y: 2 },
					{ x: 0, y: 1 },
					{ x: 1, y: 1 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 2, y: 0 },
					{ x: 4, y: 3 },
				],
				intermediate: [
					{ x: 3, y: 1 },
					{ x: 4, y: 1 },
					{ x: 4, y: 2 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 0, y: 3 },
					{ x: 4, y: 3 },
				],
				intermediate: [
					{ x: 1, y: 4 },
					{ x: 2, y: 4 },
					{ x: 3, y: 4 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 0, y: 3 },
					{ x: 4, y: 3 },
					{ x: 2, y: 0 },
				],
				intermediate: [{ x: 2, y: 2 }],
				mode: "average",
			},
			{
				anchors: [
					{ x: 0, y: 3 },
					{ x: 2, y: 2 },
				],
				intermediate: [{ x: 1, y: 3 }],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 2, y: 2 },
					{ x: 4, y: 3 },
				],
				intermediate: [{ x: 3, y: 3 }],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 2, y: 2 },
					{ x: 2, y: 0 },
				],
				intermediate: [{ x: 2, y: 1 }],
				mode: "average",
			},
		],
	},
	{ x: 2, y: 0, fixed: true },
	{ x: 0, y: 1 },
	{ x: 1, y: 1 },
	{ x: 2, y: 1 },
	{ x: 3, y: 1 },
	{ x: 4, y: 1 },
	{ x: 0, y: 2 },
	{ x: 1, y: 2, rotator: true },
	{ x: 2, y: 2 },
	{ x: 3, y: 2, rotator: true },
	{ x: 4, y: 2 },
	{ x: 0, y: 3, fixed: true },
	{ x: 1, y: 3 },
	{ x: 2, y: 3, rotator: true },
	{ x: 3, y: 3 },
	{ x: 4, y: 3, fixed: true },
	{ x: 1, y: 4 },
	{ x: 2, y: 4 },
	{ x: 3, y: 4 },
];

let giantMap = [
	{
		origin: { x: 3, y: 2.5 },
		assignmentSteps: [
			{
				anchors: [
					{ x: 0, y: 1 },
					{ x: 3, y: 0 },
				],
				intermediate: [
					{ x: 1, y: 1 },
					{ x: 2, y: 0 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 3, y: 0 },
					{ x: 6, y: 1 },
				],
				intermediate: [
					{ x: 4, y: 0 },
					{ x: 5, y: 1 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 0, y: 1 },
					{ x: 0, y: 4 },
				],
				intermediate: [
					{ x: 0, y: 2 },
					{ x: 0, y: 3 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 3, y: 6 },
					{ x: 6, y: 4 },
				],
				intermediate: [
					{ x: 4, y: 5 },
					{ x: 5, y: 5 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 0, y: 4 },
					{ x: 3, y: 6 },
				],
				intermediate: [
					{ x: 1, y: 5 },
					{ x: 2, y: 5 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 6, y: 1 },
					{ x: 6, y: 4 },
				],
				intermediate: [
					{ x: 6, y: 2 },
					{ x: 6, y: 3 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 3, y: 0 },
					{ x: 3, y: 3 },
				],
				intermediate: [
					{ x: 3, y: 1 },
					{ x: 3, y: 2 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 3, y: 3 },
					{ x: 3, y: 6 },
				],
				intermediate: [
					{ x: 3, y: 4 },
					{ x: 3, y: 5 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 0, y: 1 },
					{ x: 3, y: 3 },
				],
				intermediate: [
					{ x: 1, y: 2 },
					{ x: 2, y: 2 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 3, y: 3 },
					{ x: 6, y: 1 },
				],
				intermediate: [
					{ x: 4, y: 2 },
					{ x: 5, y: 2 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 0, y: 4 },
					{ x: 3, y: 3 },
				],
				intermediate: [
					{ x: 1, y: 4 },
					{ x: 2, y: 3 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 3, y: 3 },
					{ x: 6, y: 4 },
				],
				intermediate: [
					{ x: 4, y: 3 },
					{ x: 5, y: 4 },
				],
				mode: "scale",
			},
		],
	},
	{ x: 2, y: 0 },
	{ x: 3, y: 0, fixed: true },
	{ x: 4, y: 0 },
	{ x: 0, y: 1, fixed: true },
	{ x: 1, y: 1 },
	{ x: 2, y: 1, rotator: true },
	{ x: 3, y: 1 },
	{ x: 4, y: 1, rotator: true },
	{ x: 5, y: 1 },
	{ x: 6, y: 1, fixed: true },
	{ x: 0, y: 2 },
	{ x: 1, y: 2 },
	{ x: 2, y: 2 },
	{ x: 3, y: 2 },
	{ x: 4, y: 2 },
	{ x: 5, y: 2 },
	{ x: 6, y: 2 },
	{ x: 0, y: 3 },
	{ x: 1, y: 3, rotator: true },
	{ x: 2, y: 3 },
	{ x: 3, y: 3, fixed: true },
	{ x: 4, y: 3 },
	{ x: 5, y: 3, rotator: true },
	{ x: 6, y: 3 },
	{ x: 0, y: 4, fixed: true },
	{ x: 1, y: 4 },
	{ x: 2, y: 4, rotator: true },
	{ x: 3, y: 4 },
	{ x: 4, y: 4, rotator: true },
	{ x: 5, y: 4 },
	{ x: 6, y: 4, fixed: true },
	{ x: 1, y: 5 },
	{ x: 2, y: 5 },
	{ x: 3, y: 5 },
	{ x: 4, y: 5 },
	{ x: 5, y: 5 },
	{ x: 3, y: 6, fixed: true },
];

let tallMap = [
	{
		origin: { x: 2, y: 3 },
		assignmentSteps: [
			{
				anchors: [
					{ x: 0, y: 3 },
					{ x: 2, y: 0 },
				],
				intermediate: [
					{ x: 0, y: 2 },
					{ x: 0, y: 1 },
					{ x: 1, y: 1 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 2, y: 0 },
					{ x: 4, y: 3 },
				],
				intermediate: [
					{ x: 3, y: 1 },
					{ x: 4, y: 1 },
					{ x: 4, y: 2 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 0, y: 3 },
					{ x: 4, y: 3 },
					{ x: 2, y: 0 },
				],
				intermediate: [{ x: 2, y: 2 }],
				mode: "average",
			},
			{
				anchors: [
					{ x: 0, y: 3 },
					{ x: 2, y: 2 },
				],
				intermediate: [{ x: 1, y: 3 }],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 2, y: 2 },
					{ x: 4, y: 3 },
				],
				intermediate: [{ x: 3, y: 3 }],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 2, y: 2 },
					{ x: 2, y: 0 },
				],
				intermediate: [{ x: 2, y: 1 }],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 0, y: 3 },
					{ x: 4, y: 3 },
					{ x: 2, y: 6 },
				],
				intermediate: [
					{ x: 2, y: 4 },
				],
				mode: "average",
			},
			{
				anchors: [
					{ x: 0, y: 3 },
					{ x: 2, y: 6 },
				],
				intermediate: [
					{ x: 0, y: 4 },
					{ x: 0, y: 5 },
					{ x: 1, y: 6 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 4, y: 3 },
					{ x: 2, y: 6 },
				],
				intermediate: [
					{ x: 4, y: 4 },
					{ x: 4, y: 5 },
					{ x: 3, y: 6 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 0, y: 3 },
					{ x: 2, y: 4 },
				],
				intermediate: [
					{ x: 1, y: 4 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 2, y: 4 },
					{ x: 4, y: 3 },
				],
				intermediate: [
					{ x: 3, y: 4 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 2, y: 4 },
					{ x: 2, y: 6 },
				],
				intermediate: [
					{ x: 2, y: 5 },
				],
				mode: "scale",
			},
		],
	},
	{ x: 2, y: 0, fixed: true },
	{ x: 0, y: 1 },
	{ x: 1, y: 1 },
	{ x: 2, y: 1 },
	{ x: 3, y: 1 },
	{ x: 4, y: 1 },
	{ x: 0, y: 2 },
	{ x: 1, y: 2, rotator: true },
	{ x: 2, y: 2 },
	{ x: 3, y: 2, rotator: true },
	{ x: 4, y: 2 },
	{ x: 0, y: 3, fixed: true },
	{ x: 1, y: 3 },
	{ x: 2, y: 3, rotator: true },
	{ x: 3, y: 3 },
	{ x: 4, y: 3, fixed: true },
	{ x: 0, y: 4 },
	{ x: 1, y: 4 },
	{ x: 2, y: 4 },
	{ x: 3, y: 4 },
	{ x: 4, y: 4 },
	{ x: 0, y: 5 },
	{ x: 1, y: 5, rotator: true },
	{ x: 2, y: 5 },
	{ x: 3, y: 5, rotator: true },
	{ x: 4, y: 5 },
	{ x: 1, y: 6},
	{ x: 2, y: 6, fixed: true },
	{ x: 3, y: 6},
];

let leaningMap = [
	{
		origin: { x: 1.5, y: 3 },
		assignmentSteps: [
			{
				anchors: [
					{ x: 0, y: 0},
					{ x: 3, y: 2 },
				],
				intermediate: [
					{ x: 1, y: 1 },
					{ x: 2, y: 1 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 0, y: 0},
					{ x: 0, y: 3},
				],
				intermediate: [
					{ x: 0, y: 1 },
					{ x: 0, y: 2 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 0, y: 3},
					{ x: 0, y: 6},
				],
				intermediate: [
					{ x: 0, y: 4 },
					{ x: 0, y: 5 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 3, y: 2},
					{ x: 3, y: 5},
				],
				intermediate: [
					{ x: 3, y: 3 },
					{ x: 3, y: 4 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 0, y: 6},
					{ x: 3, y: 5},
				],
				intermediate: [
					{ x: 1, y: 6 },
					{ x: 2, y: 5 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 0, y: 4},
					{ x: 3, y: 5},
				],
				intermediate: [
					{ x: 1, y: 4 },
					{ x: 2, y: 4 },
				],
				mode: "scale",
			},
			{
				anchors: [
					{ x: 0, y: 4},
					{ x: 3, y: 2},
				],
				intermediate: [
					{ x: 1, y: 3 },
					{ x: 2, y: 2 },
				],
				mode: "scale",
			},
		]

	},
	{x: 0, y: 0, fixed: true},
	{x: 0, y:1},
	{x: 1, y:1},
	{x: 2, y:1},
	{x: 0, y:2},
	{x: 1, y:2, rotator: true},
	{x: 2, y:2},
	{x: 3, y:2, fixed: true},
	{x: 0, y:3, fixed: true},
	{x: 1, y:3},
	{x: 2, y:3, rotator: true},
	{x: 3, y:3},
	{x: 0, y:4},
	{x: 1, y:4},
	{x: 2, y:4},
	{x: 3, y:4},
	{x: 0, y:5},
	{x: 1, y:5, rotator: true},
	{x: 2, y:5},
	{x: 3, y:5, fixed: true},
	{x: 0, y:6, fixed: true},
	{x: 1, y:6},

]