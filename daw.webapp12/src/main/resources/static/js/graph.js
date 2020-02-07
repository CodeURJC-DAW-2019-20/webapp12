$(document).ready(function(){
  /*var data = {
    "labels": ["January", "February", "March", "April", "May", "June", "July", "August","September","October", "November", "December"],
    "datasets": [{
        label: "Sodium intake",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [165, 159, 180, 181, 156, 155, 140,5,330,450,110,130]
    }]
}

var chartDisplay = new Chart(document.getElementById("myChart").getContext("2d")).Line(data); */
  
var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	exportEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	title:{
		text: "Number of sales in 2019"
	},
	data: [{
		type: "column", //change type to bar, line, area, pie, etc
		//indexLabel: "{y}", //Shows y value on all Data Points
		indexLabelFontColor: "#5A5757",
		indexLabelPlacement: "outside",
		dataPoints: [
			{ label: "Enero", y: 71 },
			{ label: "Febrero", y: 55 },
			{ label: "Marzo", y: 50 },
			{ label: "Abril", y: 65 },
			{ label: "Mayo", y: 92},
			{ label: "Junio", y: 68 },
			{ label: "Julio", y: 38 },
			{ label: "Agosto", y: 71 },
			{ label: "Septiembre", y: 54 },
			{ label: "Octubre", y: 60 },
			{ label: "Noviembre", y: 36 },
			{ label: "Diciembre", y: 49 }
		]
	}]
});
chart.render();
});
    