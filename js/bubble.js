$(function () {
    $('#container').highcharts({

        chart: {
            type: 'bubble',
            zoomType: 'xy'
        },
        credits: {
      		enabled: false
  		},
		
		legend: {
			verticalAlign: 'top'
		},
		
		xAxis: {
			gridLineColor: '#C0C0C0',
			gridLineWidth: 1,
			plotLines: [{
                color: '#FF0000',
                width: 2,
                value: 0
            }],
//			title: {
//				text: 'Energieabhängigkeit in Prozent'
//			}
			
		},
		
		yAxis: {
			lineWidth: '1',
			gridLineWidth: 0,
			labels: {
				style: {
					display: 'none'
				}
			},
			title: {
				style: {
					display: 'none'
				}
			}
		},
		
		tooltip: {
			useHTML: true,
			backgroundColor: '#e5e5e5',
			borderColor: '#222',
			formatter: function () {
				var s = '<b>' + this.key + '</b><table>',
					name = this.point.name;
				$.each(this.series.chart.series, function (i, serie) {
					$.each(serie.data, function (j, p) {
						if (p.name === name) {
							s += '<tr><td>' + this.series.name + ' in 1000t RÖE:</td>' + '<td style="text-align: right"><b>'+ p.z +' t</b></td></tr>';
						}
					});
				});
				s += '<tr><td>Anteil erneuerbarer Energien:</td>' +
				'<td style="text-align: right"><b>'+ this.point.y +' %</b></td></tr>' +
				'<tr><td>Energieabhängigkeit:</td>' +
				'<td style="text-align: right"><b>' + this.point.x + '%</b></td></tr></table>';
				return s;
			},
			shared: true
		},
        
        plotOptions: {
			
            bubble: {
                dataLabels: {
                    enabled: true,
                    style: { 
						    color: "#f7f7f7",
							textShadow: '0px 0px 2px #000',
						   },
                    formatter: function() {
                        return this.point.name;
                    }
                },
                sizeBy: 'width',
                minSize: '1%',
                maxSize: '40%',
				
            }
        },

        title: {
            text: ''
        },

        series: [
            { 
                name: 'Verbrauch',
				color:'rgba(34, 34, 34, 0.9)',
                marker: { 
					fillColor: 'rgba(34, 34, 34, 0.9)', // B25553
					fillOpacity: 0.8
				},
                data: [
{name: 'Deutschland ', x: 60.9, y: 10.4, z: 343675},
{name: 'Belgien ', x: 79.5, y: 4.8, z: 58275},
{name: 'Bulgarien ', x: 52.3, y: 36.9, z: 20034},
{name: 'Dänemark ', x: -22.3, y: 11.9, z: 19861},
{name: 'Estland ', x: 23.8, y: 31.4, z: 5851},
{name: 'Finnland ', x: 55.0, y: 42.4, z: 36319},
{name: 'Frankreich ', x: 51.2, y: 69.7, z: 273747},
{name: 'Griechenland ', x: 72.9, y: 32.3, z: 31894},
{name: 'Irland ', x: 89.9, y: 34.3, z: 15786},
{name: 'Italien ', x: 85.4, y: 51.0, z: 181373},
{name: 'Lettland ', x: 57.9, y: 91.9, z: 4595},
{name: 'Litauen ', x: 59.6, y: 48.6, z: 9155},
{name: 'Luxemburg ', x: 98.6, y: 50.0, z: 4563},
{name: 'Malta ', x: 100.0, y: 39, z: 948},
{name: 'Niederlande ', x: 34.6, y: 31.7, z: 83668},
{name: 'Österreich ', x: 69.7, y: 39.7, z: 33895},
{name: 'Polen ', x: 30.4, y: 47.8, z: 98755},
{name: 'Portugal ', x: 83.0, y: 71.0, z: 24919},
{name: 'Rumänien ', x: 27.7, y: 36, z: 40616},
{name: 'Schweden ', x: 38.0, y: 49.0, z: 49996},
{name: 'Slowakei ', x: 65.1, y: 51.3, z: 18528},
{name: 'Slowenien ', x: 55.0, y: 96.9, z: 7736},
{name: 'Spanien ', x: 81.4, y: 24.4, z: 141879},
{name: 'Tschech. Rep. ', x: 27.6, y: 26.7, z: 45080},
{name: 'Ungarn ', x: 63.7, y: 44.9, z: 26781},
{name: 'V. Königreich ', x: 26.1, y: 2.9, z: 218506},
{name: 'Zypern ', x: 97.5, y: 44.0, z: 2860}
                ]
            },
            { 
                name: 'Erzeugung',
				color:'#fff',
                marker: { 
					fillColor: '#a0c884',
					fillOpacity: 1
				},
                data: [
{name: 'Deutschland ', x: 60.9, y: 10.4, z: 132488},
{name: 'Belgien ', x: 79.5, y: 4.8, z: 13561},
{name: 'Bulgarien ', x: 52.3, y: 36.9, z: 10060},
{name: 'Dänemark ', x: -22.3, y: 11.9, z: 26527},
{name: 'Estland ', x: 23.8, y: 31.4, z: 4217},
{name: 'Finnland ', x: 55.0, y: 42.4, z: 16251},
{name: 'Frankreich ', x: 51.2, y: 69.7, z: 135027},
{name: 'Griechenland ', x: 72.9, y: 32.3, z: 10022},
{name: 'Irland ', x: 89.9, y: 34.3, z: 1520},
{name: 'Italien ', x: 85.4, y: 51.0, z: 26447},
{name: 'Lettland ', x: 57.9, y: 91.9, z: 1784},
{name: 'Litauen ', x: 59.6, y: 48.6, z: 3584},
{name: 'Luxemburg ', x: 98.6, y: 50.0, z: 84},
{name: 'Malta ', x: 100.0, y: 39, z: 0},
{name: 'Niederlande ', x: 34.6, y: 31.7, z: 66319},
{name: 'Österreich ', x: 69.7, y: 39.7, z: 10610},
{name: 'Polen ', x: 30.4, y: 47.8, z: 70445},
{name: 'Portugal ', x: 83.0, y: 71.0, z: 4441},
{name: 'Rumänien ', x: 27.7, y: 36, z: 29059},
{name: 'Schweden ', x: 38.0, y: 49.0, z: 32781},
{name: 'Slowakei ', x: 65.1, y: 51.3, z: 6097},
{name: 'Slowenien ', x: 55.0, y: 96.9, z: 3641},
{name: 'Spanien ', x: 81.4, y: 24.4, z: 30266},
{name: 'Tschech. Rep. ', x: 27.6, y: 26.7, z: 32496},
{name: 'Ungarn ', x: 63.7, y: 44.9, z: 10410},
{name: 'V. Königreich ', x: 26.1, y: 2.9, z: 164499},
{name: 'Zypern ', x: 97.5, y: 44.0, z: 74}
                ]
            }
        ]
    });
});