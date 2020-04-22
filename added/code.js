var time = new Array();
var alt = [-23, 796, 4084, 9397, 17580, 26604, 37090, 50977, 66015, 85061, 104251, 
	126969, 148051, 168810, 187797, 207394, 224037, 241070, 255414, 269962, 282092,
	293195, 304260, 313306, 322171, 329270, 335483, 341325, 345766, 349732, 352540,
	354800, 356144, 356854, 356956, 356483, 355421, 354106, 352582, 350664, 348650,
	346242, 343993, 341608, 339658, 338075, 336896, 336418, 336691, 337814, 340036,
	343111, 343421, 343730];

var velocity = [914.4,922.6,1029.6,1165.3,1311.3,1438.8,1603.8,1863.6,2190.9,2600.7,
	2992.8,3415.5,3596.2,3704.6,3830.8,3983.5,4132.9,4308.1,4477.9,4676.3,4865.9,5063.6,
	5290.7,5506.9,5755.1,5991.7,6237.8,6520.1,6788.1,7095,7386.8,7720.9,8038,8368.7,
	8748.5,9110.6,9525.8,9920.7,10333.9,10815.3,11276.9,11814.2,12331.1,12934.6,13519.6,
	14127.9,14797.5,15407.1,16079.4,16689,17329.3,17602,17602.7,17602.7,17602.7,17602.7,
	17602.7];

var gs = [0.3,1.7,1.9,1.9,1.7,1.7,2.1,2.3,2.5,2.5,2.5,2.1,0.9,1,1,1,1.1,1.1,1.1,1.1,1.2,
	1.2,1.2,1.2,1.3,1.3,1.4,1.4,1.4,1.5,1.5,1.6,1.7,1.7,1.8,1.9,1.9,2,2.1,2.2,2.3,2.5,2.6,2.8,
	2.9,3,3,3,3,3,2.8,0,0,0,0,0,0];
var data = [4, 8, 15, 16, 23, 42];

var w = 700, h = 700, margin = 10;

//create chart area
var chart = d3.select("#chart").append("svg")
			.attr("width", w)
			.attr("height", h);

//Handle X Axis
var xAxisScale = d3.scale.linear()
			.domain([0,510])
			.range([0 + margin, w - margin]);

var xAxis = d3.svg.axis()
			.scale(xAxisScale);

var xAxisGroup = chart.append("g")
			.call(xAxis);

//Handle Y Axis
var yAxisScale = d3.scale.linear()
			.domain([0, d3.max(alt)])
			.range([0 + margin, h - margin]);

var yAxis = d3.svg.axis()
			.scale(yAxisScale);
			
yAxisGround = chart.append("g")
			.call(yAxis);
//populate time array
for(var i = 0; i < alt.length; i++){
	time[i] = i * 10;
}

//Create 3d Array
var combined = new Array();
for(var i = 0; i < alt.length; i++){
	combined[i] = [time[i],alt[i],velocity[i],gs[i]];
}

var line = d3.svg.line()
				.x(function(d,i) { return (xAxis(i) * 9.5) - 425; })
				.y(function(d) { return y((h - d/1.05)) + 280; });
