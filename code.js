var d1 = "https://raw.githubusercontent.com/freemanbach/Python/master/python3/covid/worlddata/newzealand/nza_vacc_data.csv";
var d2 = "https://raw.githubusercontent.com/freemanbach/Python/master/python3/covid/worlddata/newzealand/nza_case_data.csv";
var appl_close = "https://raw.githubusercontent.com/freemanbach/itec225/main/financedata/src/aapl/aapl_close_data.csv";

function initChart() {
	chartOne();
	chartTwo();
	chartThree();
}

function chartOne() {
	var chartDiv = document.getElementById("chart-one");
	
	Plotly.d3.csv(d1, function(err, rows){
		function unpack(rows, key) {
			return rows.map(function(row) { return row[key]; });
		}
		
		var data = [{
			type: "scatter",
			mode: "lines",
			name: "NZ Vaccinations",
			x: unpack(rows, Object.keys(rows[0])[1]),
			y: unpack(rows, Object.keys(rows[0])[0]),
			line: {color: "#21A216"}
		}];
		
		var layout = {
			title: {
				text : "New Zealand Vaccinations"
			},
			xaxis: {
				title : {
					text : "Dates" 
				}
			} ,
			yaxis : {
				title : {
					text : "Vaccinated"
				}
			},
			autosize: true
		};
		
		var config = {
			responsive: true
		};
		
		Plotly.newPlot(chartDiv, data, layout, config);
	});
}

function chartTwo() {
	var chartDiv = document.getElementById("chart-two");
	
	Plotly.d3.csv(d2, function(err, rows){
		function unpack(rows, key) {
			return rows.map(function(row) { return row[key]; });
		}
		
		var data = [{
			type: "scatter",
			mode: "lines",
			name: "NZ Covid Cases",
			x: unpack(rows, Object.keys(rows[0])[1]),
			y: unpack(rows, Object.keys(rows[0])[0]),
			line: {color: "#00A2E8"}
		}];
		
		var layout = {
			title: {
				text : "New Zealand Covid Cases"
			},
			xaxis: {
				title : {
					aaaaaaaatext : "Dates" 
				}
			} ,
			yaxis : {
				title : {
					text : "Total"
				}
			},
			autosize: true
		};
		
		var config = {
			responsive: true
		};
		
		Plotly.newPlot(chartDiv, data, layout, config);
	});
}

function chartThree() {
	var chartDiv = document.getElementById("chart-three");
	
	Plotly.d3.csv(appl_close, function(err, rows){
		function unpack(rows, key) {
			return rows.map(function(row) { return row[key]; });
		}
		
		var data = [{
			type: "scatter",
			mode: "lines",
			name: "AAPL Close",
			x: unpack(rows, "date"),
			y: unpack(rows, "close"),
			line: {color: "#A349A4"}
		}];
		
		var layout = {
			title: {
				text : "AAPL Close Price"
			},
			xaxis: {
				title : {
				text : "Dates" 
				}
			} ,
			yaxis : {
				title : {
					text : "Close Price"
				}
			},
			autosize: true
		};
		
		var config = {
			responsive: true
		};
		
		Plotly.newPlot(chartDiv, data, layout, config);
	});
}