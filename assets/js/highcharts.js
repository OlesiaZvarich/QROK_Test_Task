$(document).ready(function () {

    $('#containerHighcharts1').highcharts({

        chart: {
            marginRight: 0,
            marginBottom: 60,
            marginTop: 40,
            type: 'spline',

        },
        xAxis: {

            categories: ['28 February 2017', '11 May 2017', '8 August 2017', '21 November 2017','15 February 2018', '21 May 2018' ],


        },
        yAxis: {

            labels: {
                format: '{value}$',
            },
            lineWidth: 2,


        },


        series: [{
            name: 'bitcoin',
            data: [ 3500, 9000, 10000, 20000, 2000, 13000]


        }],


    });




    $('#containerHighcharts2').highcharts({


        chart: {
            marginRight: 0,
            marginBottom: 60,
            marginTop: 40,

        },
        xAxis: {
            categories: ['28 February 2017', '11 May 2017', '8 August 2017', '21 November 2017','15 February 2018', '21 May 2018' ],

        },
        yAxis: {

            labels: {
                format: '{value}$',
            },
            lineWidth: 2,


        },



        series: [{
            name: 'etherium',
            data: [ 1000, 8000, 2000, 10000, 15000, 7000]

        }]
    });


    $('#containerHighcharts3').highcharts({


        chart: {
            marginRight: 0,
            marginBottom: 60,
            marginTop: 40,
            type: 'area'
        },

        xAxis: {
            categories: ['28 February 2017', '11 May 2017', '8 August 2017', '21 November 2017','15 February 2018', '21 May 2018' ],

        },

        yAxis: {

            labels: {
                format: '{value}$',
            },
            lineWidth: 2,


        },



        series: [{
            name: 'LITECOIN',
            data: [9000, 5000, 1000, 1500, 6000 ],
            type: 'column'

        }]

    });
    $('#containerHighcharts4').highcharts({


        chart: {
            marginRight: 0,
            marginBottom: 60,
            marginTop: 40,
            type: 'area'
        },

        xAxis: {
            categories: ['28 February 2017', '11 May 2017', '8 August 2017', '21 November 2017','15 February 2018', '21 May 2018' ],

        },

        yAxis: {

            labels: {
                format: '{value}$',
            },
            lineWidth: 2,


        },



        series: [{
            name: 'DASH',
            data: [9000, 5000, 1000, 1500, 6000 ],
            type: 'column'

        }]

    });
    $('#containerHighcharts5').highcharts({


        chart: {
            marginRight: 0,
            marginBottom: 60,
            marginTop: 40,
            type: 'area'
        },

        xAxis: {
            categories: ['28 February 2017', '11 May 2017', '8 August 2017', '21 November 2017','15 February 2018', '21 May 2018' ],

        },

        yAxis: {

            labels: {
                format: '{value}$',
            },
            lineWidth: 2,


        },



        series: [{
            name: 'RIPPLE',
            data: [9000, 5000, 1000, 1500, 6000 ],
            type: 'column'

        }]

    });
    $('#containerHighcharts6').highcharts({


        chart: {
            marginRight: 0,
            marginBottom: 60,
            marginTop: 40,
            type: 'area'
        },

        xAxis: {
            categories: ['28 February 2017', '11 May 2017', '8 August 2017', '21 November 2017','15 February 2018', '21 May 2018' ],

        },

        yAxis: {

            labels: {
                format: '{value}$',
            },
            lineWidth: 2,


        },



        series: [{
            name: 'BITCOINCASH',
            data: [9000, 5000, 1000, 1500, 6000 ],
            type: 'column'

        }]

    });
});


