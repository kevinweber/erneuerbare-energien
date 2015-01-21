// Source: http://www.highcharts.com/demo/line-labels
$(function () {
var yourLabels = ["Very Low", "Low", "Medium"];

    $('#container-line-labels').highcharts({
        chart: {
            type: 'line',
            backgroundColor: '#fff'
        },
        title: {
            text: ''
        },
        // subtitle: {
        //     text: 'Source: WorldClimate.com'
        // },
        xAxis: {
            categories: ['1998', '2008', '2020']
        },
        yAxis: {
            labels: {
                enabled: false
            },
            title: {
                text: ''
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Ziel',
            data: [5.5, 8.4, 20],
        }],
        legend: {
        	enabled: false
        },
        exporting: {
        	enabled: false
        },
        credits: {
      		enabled: false
  		}
    });

    $( "#container-line-labels .highcharts-data-labels g text" ).each( function( index, element ){
        var $this = $( this );
        var text = $this.text();
        $this.text( text + '%' );
        $this.attr('y',9).attr('x',-2).css({'font-weight':'bold'});
    });
});
