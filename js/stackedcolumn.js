var energy_production_types = ["Sonnenenergie","Biomasse und Abfälle","Geothermische Energie","Wasserkraft","Windkraft","Stein- und Braunkohle","Rohöl","Naturgas","Kernenergie"];
var energy_consume_types = ["Erneuerbare Energien","Stein- und Braunkohle","Rohöl","Naturgas","Kernenergie"];
var chart_pf;

var parse_xAxis = [];

for (x in energy){
	parse_xAxis.push(energy[x].name_de);
}

var energy_axis_text = "";
var last_chart_type;

function reloadHS(chart_type) {
	var series = [];
	var ceiling_buffer = null;
	var ceiling_reset = null;
	$("#toggle_renew").removeClass('inactive');
	$("#toggle_burn").removeClass('inactive');
	
	updateTheme(chart_type);
	last_chart_type = chart_type;
	if(chart_type == 'produce'){
		$('#toggle_renew').show();
		$('#legend-multiple_select').width(450);
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
		$('#toggle_renew').hide();
		$('#legend-multiple_select').width(300);
		
		for (x in energy_consume_types){
			series.push({name:energy_consume_types[x],data:[],stack:"consume"});
		}

		for (x in energy){
			series[0].data.push(energy[x].consume_renewable_absolute);
			series[1].data.push(energy[x].consume_coal_absolute);
			series[2].data.push(energy[x].consume_oil_absolute);
			series[3].data.push(energy[x].consume_gas_absolute);
			series[4].data.push(energy[x].consume_core_absolute);			
		}
		energy_axis_text = "Inländischer Bruttoenergieverbrauch in Tonnen Rohöleinheit";
	}

	
	
$('#container_pf').highcharts({

        chart: {
            type: 'column',
			events: {
				load: function() {
					chart_pf = this; // `this` is the reference to the chart
				}	
			}
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
            },
			ceiling: ceiling_buffer
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },
		title: {
            style: {
                display: 'none'
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
	        },
			series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function () {
							if (ceiling_buffer == null){
								ceiling_reset = chart_pf.yAxis[0].getExtremes().max;
							}
							
							if (ceiling_buffer == this.total){
								ceiling_buffer = ceiling_reset;
							}
							else ceiling_buffer = this.total;
							
							chart_pf.yAxis[0].update({
									ceiling: ceiling_buffer
								},true);
                        }
                    }
                }
            }
        },

        series: series
    });
	
	
};

$( "#toggle_renew" ).click(function() {
  if($(this).hasClass('inactive')){
	$(this).removeClass('inactive');
	chart_pf.series[0].show(); 	
	chart_pf.series[1].show(); 	
	chart_pf.series[2].show(); 	
	chart_pf.series[3].show(); 	
	chart_pf.series[4].show(); 	
  }
  else{
	$(this).addClass('inactive');
	chart_pf.series[0].hide(); 
	chart_pf.series[1].hide(); 
	chart_pf.series[2].hide(); 
	chart_pf.series[3].hide(); 
	chart_pf.series[4].hide(); 
  }
});

$( "#toggle_burn" ).click(function() {
  if (last_chart_type == 'produce'){
	  if($(this).hasClass('inactive')){
		$(this).removeClass('inactive');
		chart_pf.series[5].show();	
		chart_pf.series[6].show();	
		chart_pf.series[7].show();	
		chart_pf.series[8].show();	
	  }
	  else{
		$(this).addClass('inactive');
		chart_pf.series[5].hide();
		chart_pf.series[6].hide();
		chart_pf.series[7].hide();
		chart_pf.series[8].hide();
	  }
  }
  else{
		if($(this).hasClass('inactive')){
		$(this).removeClass('inactive');
		chart_pf.series[1].show();	
		chart_pf.series[2].show();	
		chart_pf.series[3].show();	
		chart_pf.series[4].show();	
	  }
	  else{
		$(this).addClass('inactive');
		chart_pf.series[1].hide();
		chart_pf.series[2].hide();
		chart_pf.series[3].hide();
		chart_pf.series[4].hide();
	  }
  }
});

$( "#select_all" ).click(function() {
	$("#toggle_renew").removeClass('inactive');
	$("#toggle_burn").removeClass('inactive');
	chart_pf.series[0].show(); 	
	chart_pf.series[1].show(); 	
	chart_pf.series[2].show(); 	
	chart_pf.series[3].show(); 	
	chart_pf.series[4].show(); 	
	chart_pf.series[5].show();	
	chart_pf.series[6].show();	
	chart_pf.series[7].show();	
	chart_pf.series[8].show();	

});


Highcharts.theme = {
    colors: ['#146196','#5195c4','#629fc9','#73a9cf','#84b3d4','#b4481f','#b9562f','#be6440','#c47251']};
	
	//sunburst ['#146196','#5195c4','#629fc9','#73a9cf','#84b3d4','#b4481f','#b9562f','#be6440','#c47251']
			 
Highcharts.setOptions(Highcharts.theme);

function updateTheme(type){
	 if(type == 'consume'){
		Highcharts.theme = {colors: ['#146196','#b4481f','#b9562f','#be6440','#c47251']};
	 }
	 else {
		Highcharts.theme = {colors: ['#146196','#5195c4','#629fc9','#73a9cf','#84b3d4','#b4481f','#b9562f','#be6440','#c47251']};
	}
	Highcharts.setOptions(Highcharts.theme);
}

$(reloadHS('produce'));
