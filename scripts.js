
/*
	stroke style = box outline
	fillstyle - inside of rectangle

*/

var smoothie = new SmoothieChart(
{	grid: { strokeStyle: 'rgb(0, 32, 119)', fillStyle: 'rgb(0, 0, 0)', lineWidth: 1, millisPerLine: 250, verticalSections: 6 },
	horizontalLines:[{color:'#ffffff',lineWidth:1,value:0},{color:'#880000',lineWidth:2,value:3333},{color:'#880000',lineWidth:2,value:-3333}],
	labels: { fillStyle: 'rgb(60, 0, 0)' }
		
		

});
	smoothie.streamTo(document.getElementById("mycanvas"));
	
//Data
var line1 = new TimeSeries();
var xTime = new Date().getTime();
var dataset;

	d3.csv("dataroo.csv", function(data) {
		console.log(data);
		
		dataset = data;
		
	//	for (var i=1; i < data.length; i++) {
		//	console.log(typeof data[i].x);
		//	console.log(Number(data[i].x));
		//	console.log(data[i].y);
		
		
	//	line1.append(Number(data[i].x), Number(data[i].y));
		
		
	//	}
	//	console.log(line1);
		
	});
	
var counter = 1;


setInterval(function() {
	
	line1.append(new Date().getTime(), Number(dataset[counter].y));
	console.log(counter++);
}, 1000);




smoothie.addTimeSeries(line1,
	{ strokeStyle:'rgb(0, 169, 224)', fillStyle:'rgba(0, 191, 254, 0.4)', lineWidth:2 }
	);

smoothie.streamTo(document.getElementById("mycanvas"), 1000);

