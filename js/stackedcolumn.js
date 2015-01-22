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
			useHTML: true,
            formatter: function () {
				var name_de = this.x;
				var energy_type = this.series.name;
				var total_production_selection = this.point.stackTotal;
				
                /*var dyn_tooltip = '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;*/
					
				var bufferObject = jQuery.grep(energy, function(obj) {
					return obj.name_de == name_de;
				});
				
				var dyn_tooltip;
					
				function roundToTwo(num) {    
					return +(Math.round(num + "e+2")  + "e-2");
				}	
					
				if(last_chart_type == 'produce'){
					switch(energy_type){
						case "Sonnenenergie":
							dyn_tooltip = '<b>' + bufferObject[0].name_de + '</b><br/>' +
							energy_type + ':<span style="float:right">' + bufferObject[0].production_renewable_solar_absolute + ' k</span><br/>' +
							'Anteil an erneuerbaren Energien:<span style="float:right">' + bufferObject[0].production_renewable_solar_percentage_fraction + '%</span><br/><br/>' +
							'Gesamtproduktion:<span style="float:right">' + bufferObject[0].production_total_absolute + ' k</span><br/>' +
							'Anteil an Gesamtproduktion:<span style="float:right">' + bufferObject[0].production_renewable_solar_percentage_total + '%</span><br/><br/>' +
							'Gesamtproduktion aktuelle Auswahl:&nbsp;&nbsp;&nbsp;&nbsp;' + total_production_selection + ' k<br/>' +
							'Anteil an aktueller Auswahl:<span style="float:right">' + roundToTwo(bufferObject[0].production_renewable_solar_absolute/total_production_selection*100) +'%</span>';						
						break;
						
						case "Biomasse und Abfälle":
							dyn_tooltip = '<b>' + bufferObject[0].name_de + '</b><br/>' +
							energy_type + ':<span style="float:right">' + bufferObject[0].production_renewable_waste_absolute + ' k</span><br/>' +
							'Anteil an erneuerbaren Energien:<span style="float:right">' + bufferObject[0].production_renewable_waste_percentage_fraction + '%</span><br/><br/>' +
							'Gesamtproduktion:<span style="float:right">' + bufferObject[0].production_total_absolute + ' k</span><br/>' +
							'Anteil an Gesamtproduktion:<span style="float:right">' + bufferObject[0].production_renewable_waste_percentage_total + '%</span><br/><br/>' +
							'Gesamtproduktion aktuelle Auswahl:&nbsp;&nbsp;&nbsp;&nbsp;' + total_production_selection + ' k<br/>' +
							'Anteil an aktueller Auswahl:<span style="float:right">' + roundToTwo(bufferObject[0].production_renewable_waste_absolute/total_production_selection*100) +'%</span>';
						break;
						
						case "Geothermische Energie":
							dyn_tooltip = '<b>' + bufferObject[0].name_de + '</b><br/>' +
							energy_type + ':<span style="float:right">' + bufferObject[0].production_renewable_geothermic_absolute + ' k</span><br/>' +
							'Anteil an erneuerbaren Energien:<span style="float:right">' + bufferObject[0].production_renewable_geothermic_percentage_fraction + '%</span><br/><br/>' +
							'Gesamtproduktion:<span style="float:right">' + bufferObject[0].production_total_absolute + ' k</span><br/>' +
							'Anteil an Gesamtproduktion:<span style="float:right">' + bufferObject[0].production_renewable_geothermic_percentage_total + '%</span><br/><br/>' +
							'Gesamtproduktion aktuelle Auswahl:&nbsp;&nbsp;&nbsp;&nbsp;' + total_production_selection + ' k<br/>' +
							'Anteil an aktueller Auswahl:<span style="float:right">' + roundToTwo(bufferObject[0].production_renewable_geothermic_absolute/total_production_selection*100) +'%</span>';
						break;
						
						case "Wasserkraft":
							dyn_tooltip = '<b>' + bufferObject[0].name_de + '</b><br/>' +
							energy_type + ':<span style="float:right">' + bufferObject[0].production_renewable_water_absolute + ' k</span><br/>' +
							'Anteil an erneuerbaren Energien:<span style="float:right">' + bufferObject[0].production_renewable_water_percentage_fraction + '%</span><br/><br/>' +
							'Gesamtproduktion:<span style="float:right">' + bufferObject[0].production_total_absolute + ' k</span><br/>' +
							'Anteil an Gesamtproduktion:<span style="float:right">' + bufferObject[0].production_renewable_water_percentage_total + '%</span><br/><br/>' +
							'Gesamtproduktion aktuelle Auswahl:&nbsp;&nbsp;&nbsp;&nbsp;' + total_production_selection + ' k<br/>' +
							'Anteil an aktueller Auswahl:<span style="float:right">' + roundToTwo(bufferObject[0].production_renewable_water_absolute/total_production_selection*100) +'%</span>';
						break;
						
						case "Windkraft":
							dyn_tooltip = '<b>' + bufferObject[0].name_de + '</b><br/>' +
							energy_type + ':<span style="float:right">' + bufferObject[0].production_renewable_wind_absolute + ' k</span><br/>' +
							'Anteil an erneuerbaren Energien:<span style="float:right">' + bufferObject[0].production_renewable_wind_percentage_fraction + '%</span><br/><br/>' +
							'Gesamtproduktion:<span style="float:right">' + bufferObject[0].production_total_absolute + ' k</span><br/>' +
							'Anteil an Gesamtproduktion:<span style="float:right">' + bufferObject[0].production_renewable_wind_percentage_total + '%</span><br/><br/>' +
							'Gesamtproduktion aktuelle Auswahl:&nbsp;&nbsp;&nbsp;&nbsp;' + total_production_selection + ' k<br/>' +
							'Anteil an aktueller Auswahl:<span style="float:right">' + roundToTwo(bufferObject[0].production_renewable_wind_absolute/total_production_selection*100) +'%</span>';
						break;
						
						case "Stein- und Braunkohle":		
							dyn_tooltip = '<b>' + bufferObject[0].name_de + '</b><br/>' +
							energy_type + ':<span style="float:right">' + bufferObject[0].production_coal_absolute + ' k</span><br/><br/>' +
							'Gesamtproduktion:<span style="float:right">' + bufferObject[0].production_total_absolute + ' k</span><br/>' +
							'Anteil an Gesamtproduktion:<span style="float:right">' + bufferObject[0].production_coal_percentage_total + '%</span><br/><br/>' +
							'Gesamtproduktion aktuelle Auswahl:&nbsp;&nbsp;&nbsp;&nbsp;' + total_production_selection + ' k<br/>' +
							'Anteil an aktueller Auswahl:<span style="float:right">' + roundToTwo(bufferObject[0].production_coal_absolute/total_production_selection*100) +'%</span>';
						break;
						
						case "Rohöl":
							dyn_tooltip = '<b>' + bufferObject[0].name_de + '</b><br/>' +
							energy_type + ':<span style="float:right">' + bufferObject[0].production_oil_absolute + ' k</span><br/><br/>' +
							'Gesamtproduktion:<span style="float:right">' + bufferObject[0].production_total_absolute + ' k</span><br/>' +
							'Anteil an Gesamtproduktion:<span style="float:right">' + bufferObject[0].production_oil_percentage_total + '%</span><br/><br/>' +
							'Gesamtproduktion aktuelle Auswahl:&nbsp;&nbsp;&nbsp;&nbsp;' + total_production_selection + ' k<br/>' +
							'Anteil an aktueller Auswahl:<span style="float:right">' + roundToTwo(bufferObject[0].production_oil_absolute/total_production_selection*100) +'%</span>';
						break;
						
						case "Naturgas":
							dyn_tooltip = '<b>' + bufferObject[0].name_de + '</b><br/>' +
							energy_type + ':<span style="float:right">' + bufferObject[0].production_gas_absolute + ' k</span><br/><br/>' +
							'Gesamtproduktion:<span style="float:right">' + bufferObject[0].production_total_absolute + ' k</span><br/>' +
							'Anteil an Gesamtproduktion:<span style="float:right">' + bufferObject[0].production_gas_percentage_total + '%</span><br/><br/>' +
							'Gesamtproduktion aktuelle Auswahl:&nbsp;&nbsp;&nbsp;&nbsp;' + total_production_selection + ' k<br/>' +
							'Anteil an aktueller Auswahl:<span style="float:right">' + roundToTwo(bufferObject[0].production_gas_absolute/total_production_selection*100) +'%</span>';
						break;
						
						case "Kernenergie":
							dyn_tooltip = '<b>' + bufferObject[0].name_de + '</b><br/>' +
							energy_type + ':<span style="float:right">' + bufferObject[0].production_core_absolute + ' k</span><br/><br/>' +
							'Gesamtproduktion:<span style="float:right">' + bufferObject[0].production_total_absolute + ' k</span><br/>' +
							'Anteil an Gesamtproduktion:<span style="float:right">' + bufferObject[0].production_core_percentage_total + '%</span><br/><br/>' +
							'Gesamtproduktion aktuelle Auswahl:&nbsp;&nbsp;&nbsp;&nbsp;' + total_production_selection + ' k<br/>' +
							'Anteil an aktueller Auswahl:<span style="float:right">' + roundToTwo(bufferObject[0].production_core_absolute/total_production_selection*100) +'%</span>';
						break;
					
					}
				}
				else {
					switch(energy_type){
						case "Erneuerbare Energien":
							dyn_tooltip = '<b>' + bufferObject[0].name_de + '</b><br/>' +
							energy_type + ':<span style="float:right">' + bufferObject[0].consume_renewable_absolute + ' k</span><br/><br/>' +
							'Gesamtverbrauch:<span style="float:right">' + bufferObject[0].consume_total_absolute + ' k</span><br/>' +
							'Anteil an Gesamtverbrauch:<span style="float:right">' + bufferObject[0].consume_renewable_percentage + '%</span><br/><br/>' +
							'Gesamtverbrauch aktuelle Auswahl:&nbsp;&nbsp;&nbsp;&nbsp;' + total_production_selection + ' k<br/>' +
							'Anteil an aktueller Auswahl:<span style="float:right">' + roundToTwo(bufferObject[0].consume_renewable_absolute/total_production_selection*100) +'%</span>';						
						break;
						
						case "Stein- und Braunkohle":		
							dyn_tooltip = '<b>' + bufferObject[0].name_de + '</b><br/>' +
							energy_type + ':<span style="float:right">' + bufferObject[0].consume_coal_absolute + ' k</span><br/><br/>' +
							'Gesamtverbrauch:<span style="float:right">' + bufferObject[0].consume_total_absolute + ' k</span><br/>' +
							'Anteil an Gesamtverbrauch:<span style="float:right">' + bufferObject[0].consume_coal_percentage + '%</span><br/><br/>' +
							'Gesamtverbrauch aktuelle Auswahl:&nbsp;&nbsp;&nbsp;&nbsp;' + total_production_selection + ' k<br/>' +
							'Anteil an aktueller Auswahl:<span style="float:right">' + roundToTwo(bufferObject[0].consume_coal_absolute/total_production_selection*100) +'%</span>';
						break;
						
						case "Rohöl":
							dyn_tooltip = '<b>' + bufferObject[0].name_de + '</b><br/>' +
							energy_type + ':<span style="float:right">' + bufferObject[0].consume_oil_absolute + ' k</span><br/><br/>' +
							'Gesamtverbrauch:<span style="float:right">' + bufferObject[0].consume_total_absolute + ' k</span><br/>' +
							'Anteil an Gesamtverbrauch:<span style="float:right">' + bufferObject[0].consume_oil_percentage + '%</span><br/><br/>' +
							'Gesamtverbrauch aktuelle Auswahl:&nbsp;&nbsp;&nbsp;&nbsp;' + total_production_selection + ' k<br/>' +
							'Anteil an aktueller Auswahl:<span style="float:right">' + roundToTwo(bufferObject[0].consume_oil_absolute/total_production_selection*100) +'%</span>';
						break;
						
						case "Naturgas":
							dyn_tooltip = '<b>' + bufferObject[0].name_de + '</b><br/>' +
							energy_type + ':<span style="float:right">' + bufferObject[0].consume_gas_absolute + ' k</span><br/><br/>' +
							'Gesamtverbrauch:<span style="float:right">' + bufferObject[0].consume_total_absolute + ' k</span><br/>' +
							'Anteil an Gesamtverbrauch:<span style="float:right">' + bufferObject[0].consume_gas_percentage + '%</span><br/><br/>' +
							'Gesamtverbrauch aktuelle Auswahl:&nbsp;&nbsp;&nbsp;&nbsp;' + total_production_selection + ' k<br/>' +
							'Anteil an aktueller Auswahl:<span style="float:right">' + roundToTwo(bufferObject[0].consume_gas_absolute/total_production_selection*100) +'%</span>';
						break;
						
						case "Kernenergie":
							dyn_tooltip = '<b>' + bufferObject[0].name_de + '</b><br/>' +
							energy_type + ':<span style="float:right">' + bufferObject[0].consume_core_absolute + ' k</span><br/><br/>' +
							'Gesamtverbrauch:<span style="float:right">' + bufferObject[0].consume_total_absolute + ' k</span><br/>' +
							'Anteil an Gesamtverbrauch:<span style="float:right">' + bufferObject[0].consume_core_percentage + '%</span><br/><br/>' +
							'Gesamtverbrauch aktuelle Auswahl:&nbsp;&nbsp;&nbsp;&nbsp;' + total_production_selection + ' k<br/>' +
							'Anteil an aktueller Auswahl:<span style="float:right">' + roundToTwo(bufferObject[0].consume_core_absolute/total_production_selection*100) +'%</span>';
						break;
					
					}
				
				}
				
				
				return dyn_tooltip;
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
