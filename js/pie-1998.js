$(function () {
    $('#container-pie-1998').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
            plotShadow: false
        },
        title: {
            text: '1998'
        },
        tooltip: {
            pointFormat: ''
        },
        plotOptions: {
            pie: {
                allowPointSelect: false,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: ' ',
            data: [
                {
                    name: 'Anteil erneuerbarer Energien',
                    y: 5.5,
                    sliced: true,
                    // selected: true
                },
                ['',       94.5],
            ]
        }],
        exporting: {
        	enabled: false
        },
        credits: {
      		enabled: false
  		}
    });
});



$(function () {
    $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
            plotShadow: false
        },


    });
});

