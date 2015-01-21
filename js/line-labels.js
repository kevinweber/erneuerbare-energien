// Source: http://www.highcharts.com/demo/line-labels
$(function () {
    $('#container-line-labels').highcharts({
        chart: {
            type: 'line',
            backgroundColor: '#f7f7f7'
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
            data: [5.5, 8.4, 20]
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
});