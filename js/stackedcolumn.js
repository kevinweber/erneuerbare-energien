$(function () {
    $('#container_pf').highcharts({

        chart: {
            type: 'column'
        },
	
        xAxis: {
            categories: parse_xAxis
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Number of fruits'
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
                stacking: 'normal'
            }
        },

        series: [
		{
            name: 'Sonnenenergie',
            data: [5, 3, 4, 7, 2,5,3,4,5, 3, 4, 7, 2,5,3,4,5, 3, 4, 7, 2,5,3,4],
            stack: 'production'
        }, 
		{
            name: 'Biomasse und Abfälle',
            data: [5, 3, 4, 7, 2,5,3,4,5, 3, 4, 7, 2,5,3,4,5, 3, 4, 7, 2,5,3,4],
            stack: 'production'
        }, 
		{
            name: 'Geothermische Energie',
            data: [3, 4, 4, 2, 5, 2, 1, 7,3, 4, 4, 2, 5, 2, 1, 7,3, 4, 4, 2, 5, 2, 1, 7],
            stack: 'production'
        },
		{
            name: 'Wasserkraft',
            data: [3, 4, 4, 2, 5, 2, 1, 7,3, 4, 4, 2, 5, 2, 1, 7,3, 4, 4, 2, 5, 2, 1, 7],
            stack: 'production'
        },
		{
            name: 'Windkraft',
            data: [3, 4, 4, 2, 5, 2, 1, 7,3, 4, 4, 2, 5, 2, 1, 7,3, 4, 4, 2, 5, 2, 1, 7],
            stack: 'production'
        },
		{
            name: 'Stein- und Braunkohle',
            data: [3, 4, 4, 2, 5, 2, 1, 7,3, 4, 4, 2, 5, 2, 1, 7,3, 4, 4, 2, 5, 2, 1, 7],
            stack: 'production'
        },
		{
            name: 'Mineralölprodukte',
            data: [3, 4, 4, 2, 5, 2, 1, 7,3, 4, 4, 2, 5, 2, 1, 7,3, 4, 4, 2, 5, 2, 1, 7],
            stack: 'production'
        },
		{
            name: 'Naturgas',
            data: [3, 4, 4, 2, 5, 2, 1, 7,3, 4, 4, 2, 5, 2, 1, 7,3, 4, 4, 2, 5, 2, 1, 7],
            stack: 'production'
        },
		{
            name: 'Kernenergie',
            data: [3, 4, 4, 2, 5, 2, 1, 7,3, 4, 4, 2, 5, 2, 1, 7,3, 4, 4, 2, 5, 2, 1, 7],
            stack: 'production'
        },
		{
            name: 'Jane',
            data: [2, 5, 6, 2, 1],
            stack: 'use'
        }, 
		{
            name: 'Janet',
            data: [3, 0, 4, 4, 3],
            stack: 'use'
        }]
    });
});

var energie = [
  {
    "id":"de",
    "name":"Deutschland",
    "renewable":8.6,
    "power_consumption":4.2,
    "energy_production_sun":2.5,
    "energy_production_shit":78.9,
    "energy_production_geo":0.8,
    "energy_production_water":6.1,
    "energy_production_wind":11.7,
    "energy_production_coal":37.8,
    "energy_production_oil":2.3,
    "energy_production_gas":8.5,
    "energy_production_radioactive":28.9,
    "energy_production_renewable":22.4,
    "energy_use_solid_fuel":23.7, 
    "energy_use_oil":34.8,
    "energy_use_gas":22.3,
    "energy_use_radioactive":11.1,
    "energy_use_renewable":8.6 
  },
  {
    "id":"be",
    "name":"Belgien",
    "renewable":3.7,
    "power_consumption": 0.0,
    "energy_production_sun":0.5,
    "energy_production_shit":94.4,
    "energy_production_geo":0.2,
    "energy_production_water":1.9,
    "energy_production_wind":3.0,
    "energy_production_coal":0.0,
    "energy_production_oil":0.0,
    "energy_production_gas":0.0,
    "energy_production_radioactive":86.7,
    "energy_production_renewable":13.3,
    "energy_use_solid_fuel":7.5,
    "energy_use_oil":41.1,
    "energy_use_gas":25.5,
    "energy_use_radioactive":20.3,
    "energy_use_renewable":3.7
  },
  {
    "id":"bg",
    "name":"Bulgarien",
    "renewable":4.9,
    "power_consumption":0.0,
    "energy_production_sun":0.0,
    "energy_production_shit":71.3,
    "energy_production_geo":3.3,
    "energy_production_water":24.4,
    "energy_production_wind":1.0,
    "energy_production_coal":47.9,
    "energy_production_oil":0.2,
    "energy_production_gas":1.6,
    "energy_production_radioactive":40.4,
    "energy_production_renewable":9.9,
    "energy_use_solid_fuel":37.6,
    "energy_use_oil":24.6,
    "energy_use_gas":14.5,
    "energy_use_radioactive":20.3,
    "energy_use_renewable":4.9
  },
  {
    "id":"dk",
    "name":"Dänemark",
    "renewable":18.1,
    "power_consumption":0.0,
    "energy_production_sun":0.4,
    "energy_production_shit":80.0,
    "energy_production_geo":0.7,
    "energy_production_water":0.1,
    "energy_production_wind":18.9,
    "energy_production_coal":0.0,
    "energy_production_oil":54.1,
    "energy_production_gas":34.0,
    "energy_production_radioactive":0.0,
    "energy_production_renewable":11.9,
    "energy_use_solid_fuel":20.2,
    "energy_use_oil":40.5,
    "energy_use_gas":20.5,
    "energy_use_radioactive":0.0,
    "energy_use_renewable":18.1
  },
  {
    "id":"ee",
    "name":"Estland",
    "renewable":11.0,
    "power_consumption":0.0, 
    "energy_production_sun":0.0,
    "energy_production_shit":98.3,
    "energy_production_geo":0.0,
    "energy_production_water":0.3,
    "energy_production_wind":1.5,
    "energy_production_coal":82.1,
    "energy_production_oil":0.0,
    "energy_production_gas":0.0,
    "energy_production_radioactive":0.0,
    "energy_production_renewable":17.9,
    "energy_use_solid_fuel":58.7,
    "energy_use_oil":18.5,
    "energy_use_gas":13.2,
    "energy_use_radioactive":0.0,
    "energy_use_renewable":11.0
  },
  {
    "id":"fi",
    "name":"Finnland",
    "renewable":25.2,
    "power_consumption":6.9,
    "energy_production_sun":0.0,
    "energy_production_shit":83.7,
    "energy_production_geo":0.0,
    "energy_production_water":16.0,
    "energy_production_wind":0.2,
    "energy_production_coal":7.1,
    "energy_production_oil":0.0,
    "energy_production_gas":0.0,
    "energy_production_radioactive":36.4,
    "energy_production_renewable":56.4,
    "energy_use_solid_fuel":14.8,
    "energy_use_oil":29.9,
    "energy_use_gas":10.6,
    "energy_use_radioactive":16.3,
    "energy_use_renewable":25.2
  },
  {
    "id":"fr",
    "name":"Frankreich",
    "renewable":7.4,
    "power_consumption":4.3,
    "energy_production_sun":0.2,
    "energy_production_shit":68.9,
    "energy_production_geo":0.6,
    "energy_production_water":27.9,
    "energy_production_wind":2.5,
    "energy_production_coal":0.0,
    "energy_production_oil":0.8,
    "energy_production_gas":0.6,
    "energy_production_radioactive":84.0,
    "energy_production_renewable":14.7,
    "energy_use_solid_fuel":4.9,
    "energy_use_oil":33.2,
    "energy_use_gas":14.6,
    "energy_use_radioactive":41.4,
    "energy_use_renewable":7.4
  },
  {
    "id":"gr",
    "name":"Griechenland",
    "renewable":5.0,
    "power_consumption":0.0, 
    "energy_production_sun":10.9,
    "energy_production_shit":60.9,
    "energy_production_geo":1.1,
    "energy_production_water":17.9,
    "energy_production_wind":9.3,
    "energy_production_coal":83.3,
    "energy_production_oil":0.6,
    "energy_production_gas":0.1,
    "energy_production_radioactive":0.0,
    "energy_production_renewable":15.9,
    "energy_use_solid_fuel":26.8,
    "energy_use_oil":55.7,
    "energy_use_gas":11.0,
    "energy_use_radioactive":0.0,
    "energy_use_renewable":7.8
  },
  {
    "id":"ie",
    "name":"Irland",
    "renewable":3.6,
    "power_consumption":0.0, 
    "energy_production_sun":0.6,
    "energy_production_shit":43.0,
    "energy_production_geo":0.8,
    "energy_production_water":15.9,
    "energy_production_wind":39.7,
    "energy_production_coal":42.4,
    "energy_production_oil":0.0,
    "energy_production_gas":23.3,
    "energy_production_radioactive":0.0,
    "energy_production_renewable":34.3,
    "energy_use_solid_fuel":15.0,
    "energy_use_oil":52.8,
    "energy_use_gas":28.4,
    "energy_use_radioactive":0.0,
    "energy_use_renewable":3.6
  },
  {
    "id":"it",
    "name":"Italien",
    "renewable":7.8,
    "power_consumption":3,
    "energy_production_sun":0.6,
    "energy_production_shit":33.0,
    "energy_production_geo":36.8,
    "energy_production_water":26.5,
    "energy_production_wind": 3.1,
    "energy_production_coal":0.3,
    "energy_production_oil":20.0,
    "energy_production_gas":28.7,
    "energy_production_radioactive":0.0,
    "energy_production_renewable":51.0,
    "energy_use_solid_fuel":9.0,
    "energy_use_oil":42.9,
    "energy_use_gas":38.3,
    "energy_use_radioactive":0.0,
    "energy_use_renewable":7.8
  },
  {
    "id":"lv",
    "name":"Lettland",
    "renewable":30.1 ,
    "power_consumption":0.0,
    "energy_production_sun":0.0,
    "energy_production_shit":84.7,
    "energy_production_geo":0.0,
    "energy_production_water":15.0,
    "energy_production_wind":0.3,
    "energy_production_coal":0.2,
    "energy_production_oil":0.0,
    "energy_production_gas":0.0,
    "energy_production_radioactive":0.0,
    "energy_production_renewable":99.9,
    "energy_use_solid_fuel":2.3,
    "energy_use_oil":33.8,
    "energy_use_gas":29.0,
    "energy_use_radioactive":0.0,
    "energy_use_renewable":30.1
  }, 
  {
    "id":"lt",
    "name":"Litauen",
    "renewable":9.3,
    "power_consumption":0.0,
    "energy_production_sun":0.0,
    "energy_production_shit":94.8,
    "energy_production_geo":0.1,
    "energy_production_water":4.0,
    "energy_production_wind":1.2,
    "energy_production_coal":0.5,
    "energy_production_oil":3.6,
    "energy_production_gas":0.0,
    "energy_production_radioactive":71.2,
    "energy_production_renewable":24.6,
    "energy_use_solid_fuel":2.4,
    "energy_use_oil":33.0,
    "energy_use_gas":28.4,
    "energy_use_radioactive":27.9,
    "energy_use_renewable":9.3
  },
  {
    "id":"lu",
    "name":"Luxemburg",
    "renewable":2.7,
    "power_consumption":0.0, 
    "energy_production_sun":2.4,
    "energy_production_shit":78.6,
    "energy_production_geo":0.0,
    "energy_production_water":13.1,
    "energy_production_wind":6.0,
    "energy_production_coal":0.0,
    "energy_production_oil":0.0,
    "energy_production_gas":0.0,
    "energy_production_radioactive":0.0,
    "energy_production_renewable":100.0,
    "energy_use_solid_fuel":1.6,
    "energy_use_oil":63.6,
    "energy_use_gas":24.0,
    "energy_use_radioactive":0.0,
    "energy_use_renewable":2.7
  },        
  {
    "id":"nl",
    "name":"Niederlande",
    "renewable":4.2,
    "power_consumption":0.0,
    "energy_production_sun":0.8,
    "energy_production_shit":87.2,
    "energy_production_geo":0.1,
    "energy_production_water":0.3,
    "energy_production_wind":11.7,
    "energy_production_coal":0.0,
    "energy_production_oil":3.3,
    "energy_production_gas":90.3,
    "energy_production_radioactive":1.6,
    "energy_production_renewable":4.7,
    "energy_use_solid_fuel":9.6,
    "energy_use_oil":41.7,
    "energy_use_gas":41.6,
    "energy_use_radioactive":1.3,
    "energy_use_renewable":4.2
  },      
  {
    "id":"at",
    "name":"Österreich",
    "renewable":25.3,
    "power_consumption":0.0, 
    "energy_production_sun":1.4,
    "energy_production_shit":56.7,
    "energy_production_geo":0.5,
    "energy_production_water":39.4,
    "energy_production_wind":2.1,
    "energy_production_coal":0.0,
    "energy_production_oil":9.4,
    "energy_production_gas":12.4,
    "energy_production_radioactive":0.0,
    "energy_production_renewable":78.2,
    "energy_use_solid_fuel":10.7,
    "energy_use_oil":39.4,
    "energy_use_gas":22.0,
    "energy_use_radioactive":0.0,
    "energy_use_renewable":25.3
  },      
  {
    "id":"pl",
    "name":"Polen",
    "renewable":5.7,
    "power_consumption":2.6,
    "energy_production_sun":0.0,
    "energy_production_shit":95.0,
    "energy_production_geo":0.2,
    "energy_production_water":3.4,
    "energy_production_wind":1.3,
    "energy_production_coal":85.9,
    "energy_production_oil":1.1,
    "energy_production_gas":5.2,
    "energy_production_radioactive":0.0,
    "energy_production_renewable":7.7,
    "energy_use_solid_fuel":55.6,
    "energy_use_oil":25.5,
    "energy_use_gas":12.7,
    "energy_use_radioactive":0.0,
    "energy_use_renewable":5.7
  },
  {
    "id":"pt",
    "name":"Portugal",
    "renewable":17.8,
    "power_consumption":0.0,
    "energy_production_sun":0.8,
    "energy_production_shit":70.8,
    "energy_production_geo":4.2,
    "energy_production_water":13.2,
    "energy_production_wind":11.1,
    "energy_production_coal":0.0,
    "energy_production_oil":0.0,
    "energy_production_gas":0.0,
    "energy_production_radioactive":0.0,
    "energy_production_renewable":100.0,
    "energy_use_solid_fuel":10.1,
    "energy_use_oil":52.2,
    "energy_use_gas":16.6,
    "energy_use_radioactive":0.0,
    "energy_use_renewable":17.8
  },
  {
    "id":"ro",
    "name":"Rumänien",
    "renewable":13.5,
    "power_consumption":1.9,
    "energy_production_sun":0.0,
    "energy_production_shit":72.2,
    "energy_production_geo":0.5,
    "energy_production_water":27.3,
    "energy_production_wind":0.0,
    "energy_production_coal":24.0,
    "energy_production_oil":16.5,
    "energy_production_gas":30.9,
    "energy_production_radioactive":10.0,
    "energy_production_renewable":18.6,
    "energy_use_solid_fuel":23.6,
    "energy_use_oil":25.8,
    "energy_use_gas":30.7,
    "energy_use_radioactive":7.1,
    "energy_use_renewable":13.5
  },  
  {
    "id":"se",
    "name":"Schweden",
    "renewable":32.1,
    "power_consumption":0.0,
    "energy_production_sun":0.1,
    "energy_production_shit":61.9,
    "energy_production_geo":0.0,
    "energy_production_water":37.0,
    "energy_production_wind":1.1,
    "energy_production_coal":0.8,
    "energy_production_oil":0.0,
    "energy_production_gas":0.0,
    "energy_production_radioactive":50.3,
    "energy_production_renewable":49.0,
    "energy_use_solid_fuel":4.9,
    "energy_use_oil":28.7,
    "energy_use_gas":1.7,
    "energy_use_radioactive":33.0,
    "energy_use_renewable":32.1
  },  
  {
    "id":"sk",
    "name":"Slowakei",
    "renewable":5.5,
    "power_consumption":0.0,
    "energy_production_sun":0.0,
    "energy_production_shit":66.0,
    "energy_production_geo":1.0,
    "energy_production_water":32.9,
    "energy_production_wind":0.1,
    "energy_production_coal":10.2,
    "energy_production_oil":0.3,
    "energy_production_gas":1.4,
    "energy_production_radioactive":70.7,
    "energy_production_renewable":17.3,
    "energy_use_solid_fuel":21.5,
    "energy_use_oil":21.5,
    "energy_use_gas":27.9,
    "energy_use_radioactive":23.3,
    "energy_use_renewable":5.5
  },
  {
    "id":"si",
    "name":"Slowenien",
    "renewable":11.0,
    "power_consumption":0.0,
    "energy_production_sun":0.0,
    "energy_production_shit":58.7,
    "energy_production_geo":0.0,
    "energy_production_water":41.3,
    "energy_production_wind":0.0,
    "energy_production_coal":32.5,
    "energy_production_oil":0.0,
    "energy_production_gas":0.1,
    "energy_production_radioactive":44.4,
    "energy_production_renewable":22.9,
    "energy_use_solid_fuel":19.8,
    "energy_use_oil":38.5,
    "energy_use_gas":11.4,
    "energy_use_radioactive":20.9,
    "energy_use_renewable":11.0
  },  
  {
    "id":"es",
    "name":"Spanien",
    "renewable":7.7,
    "power_consumption":3.1,
    "energy_production_sun":3.3,
    "energy_production_shit":51.9,
    "energy_production_geo":0.1,
    "energy_production_water":18.9,
    "energy_production_wind":25.8,
    "energy_production_coal":13.9,
    "energy_production_oil":0.4,
    "energy_production_gas":0.0,
    "energy_production_radioactive":50.3,
    "energy_production_renewable":35.4,
    "energy_use_solid_fuel":9.8,
    "energy_use_oil":47.8,
    "energy_use_gas":24.6,
    "energy_use_radioactive":10.7,
    "energy_use_renewable":7.7
  },
  {
    "id":"cz",
    "name":"Tschechische Republik",
    "renewable":5.0,
    "power_consumption": 0.0,
    "energy_production_sun":0.2,
    "energy_production_shit":91.9,
    "energy_production_geo":0.0,
    "energy_production_water":7.1,
    "energy_production_wind":0.9,
    "energy_production_coal":70.1,
    "energy_production_oil":0.8,
    "energy_production_gas":0.5,
    "energy_production_radioactive":21.1,
    "energy_production_renewable":7.6,
    "energy_use_solid_fuel":43.8,
    "energy_use_oil":22.0,
    "energy_use_gas":15.8,
    "energy_use_radioactive":15.2,
    "energy_use_renewable":5.0
  },
    {
    "id":"hu",
    "name":"Ungarn",
    "renewable":6.1,
    "power_consumption": 0.0,
    "energy_production_sun":0.2,
    "energy_production_shit":91.8,
    "energy_production_geo":5.8,
    "energy_production_water":1.1,
    "energy_production_wind":1.1,
    "energy_production_coal":16.3,
    "energy_production_oil":11.8,
    "energy_production_gas":19.3,
    "energy_production_radioactive":36.7,
    "energy_production_renewable":15.9,
    "energy_use_solid_fuel":11.4,
    "energy_use_oil":27.5,
    "energy_use_gas":39.4,
    "energy_use_radioactive":14.3,
    "energy_use_renewable":6.1
  },  
  {
    "id":"gb",
    "name":"Vereintes Königreich",
    "renewable":2.6,
    "power_consumption":0.0,
    "energy_production_sun":1.2,
    "energy_production_shit":76.5,
    "energy_production_geo":0.0,
    "energy_production_water":9.4,
    "energy_production_wind":12.9,
    "energy_production_coal":6.4,
    "energy_production_oil":44.4,
    "energy_production_gas":38.1,
    "energy_production_radioactive":8.2,
    "energy_production_renewable":2.9,
    "energy_use_solid_fuel":16.4,
    "energy_use_oil":35.7,
    "energy_use_gas":38.7,
    "energy_use_radioactive":6.2,
    "energy_use_renewable":2.6
  },  
    {
    "id":"cy",
    "name":"Zypern",
    "renewable":3.0,
    "power_consumption":0.0,
    "energy_production_sun":75.7,
    "energy_production_shit":23.0,
    "energy_production_geo":0.0,
    "energy_production_water":0.0,
    "energy_production_wind":0.0,
    "energy_production_coal":0.0,
    "energy_production_oil":0.0, 
    "energy_production_gas":0.0,
    "energy_production_radioactive":0.0,
    "energy_production_renewable":100.0,
    "energy_use_solid_fuel":1.0,
    "energy_use_oil":95.8,
    "energy_use_gas":0.0,
    "energy_use_radioactive":0.0,
    "energy_use_renewable":3.0
  },  
];

var parse_xAxis = [];
for (x in energie){
	parse_xAxis.push(energie[x].name);
}