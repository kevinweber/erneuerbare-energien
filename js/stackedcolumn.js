var energy_production_types = ["Sonnenenergie","Biomasse und Abfälle","Geothermische Energie","Wasserkraft","Windkraft","Stein- und Braunkohle","Rohöl","Naturgas","Kernenergie"];
var energy_consume_types = ["Stein- und Braunkohle","Rohöl","Naturgas","Kernenergie","Erneuerbare Energien"];

var parse_xAxis = [];

for (x in energy){
	parse_xAxis.push(energy[x].name_de);
}

var energy_axis_text = "";

function reloadHS(chart_type) {
	var series = [];
	
	if(chart_type == 'produce'){
		for (x in energy_production_types){
			series.push({name:energy_production_types[x],data:[],stack:"production"});
		}

		for (x in energy){
			series[0].data.push(energy[x].production_renewable_solar_absolute);
			series[1].data.push(energy[x].production_renewable_waste_absolute);
			series[2].data.push(energy[x].production_renewable_geothermic_absolute);
			series[3].data.push(energy[x].production_renewable_water_absolute);
			series[4].data.push(energy[x].production_renewable_wind_absolute);	
			series[5].data.push(energy[x].production_coal_absolute);
			series[6].data.push(energy[x].production_oil_absolute);
			series[7].data.push(energy[x].production_gas_absolute);
			series[8].data.push(energy[x].production_core_absolute);	
		}
		energy_axis_text = "Primärerzeugnis in Tonnen Rohöleinheit";
	}
	else if(chart_type == 'consume'){
		for (x in energy_consume_types){
			series.push({name:energy_consume_types[x],data:[],stack:"consume"});
		}

		for (x in energy){
			series[0].data.push(energy[x].consume_coal_absolute);
			series[1].data.push(energy[x].consume_oil_absolute);
			series[2].data.push(energy[x].consume_gas_absolute);
			series[3].data.push(energy[x].consume_core_absolute);
			series[4].data.push(energy[x].consume_renewable_total_absolute);		
		}
		energy_axis_text = "Inländischer Bruttoenergieverbrauch in Tonnen Rohöleinheit";
	}

    $('#container_pf').highcharts({

        chart: {
            type: 'column'
        },
	   credits: {
            enabled: false
        },
        xAxis: {
            categories: parse_xAxis
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: energy_axis_text
            }
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },

         plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },

        series: series
    });
};


Highcharts.theme = {
    colors: ['#146196','#5195c4','#629fc9','#73a9cf','#84b3d4','#b4481f','#b9562f','#be6440','#c47251']};
	
	//sunburst ['#146196','#5195c4','#629fc9','#73a9cf','#84b3d4','#b4481f','#b9562f','#be6440','#c47251']
			 
Highcharts.setOptions(Highcharts.theme);

$(reloadHS('produce'));
