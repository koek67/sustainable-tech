$(function () {
    $('#e-by-school').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            margin: 75,
            text: 'Electricity Consuption by School'
        },
        xAxis: {
            categories: ['UGA', 'Georgia Tech', 'Emory'],
            title: {
                text: null
            }
        },
        // yAxis: {
        //     min: 0,
        //     title: {
        //         // text: 'Population (millions)',
        //         // align: 'high'
        //     }
        //     // labels: {
        //     //     overflow: 'justify'
        //     // }
        // },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },

        legend: {
            layout: 'vertical',
            align: 'center',
            verticalAlign: 'top',
            x: 30,
            y: 30,
            floating: true,
            borderWidth: .5,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Monthy Avg. Electricity Consumption (MegaWatts)',
            data: [23.1, 25.8, 25.0]
        }, {
            name: 'Avg. Electricity Consuption per captia (kWh)',
            data: [656, 1155, 1531]
        }, {
            name: 'Total Population',
            data: [35197, 22336, 16327]
        }]
    });
});
