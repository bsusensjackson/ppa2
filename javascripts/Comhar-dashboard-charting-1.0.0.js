/// <reference path="Comhar-namespaces-1.0.0.js" />

Comhar.eW.Dashboard.Charting.GetCharts = function () {
   
//    $().highcharts({

//         chart: {
//             type: 'gauge',
//             plotBackgroundColor: null,
//             plotBackgroundImage: null,
//             plotBorderWidth: 0,
//             plotShadow: false
//         },

//         title: {
//             text: 'Blended Enhanced and ACT'
//         },

//         pane: {
//             startAngle: -150,
//             endAngle: 150,
//             background: [{
//                 backgroundColor: {
//                     linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
//                     stops: [
//                         [0, '#FFF'],
//                         [1, '#333']
//                     ]
//                 },
//                 borderWidth: 0,
//                 outerRadius: '109%'
//             }, {
//                 backgroundColor: {
//                     linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
//                     stops: [
//                         [0, '#333'],
//                         [1, '#FFF']
//                     ]
//                 },
//                 borderWidth: 1,
//                 outerRadius: '107%'
//             }, {
//                 // default background
//             }, {
//                 backgroundColor: '#DDD',
//                 borderWidth: 0,
//                 outerRadius: '105%',
//                 innerRadius: '103%'
//             }]
//         },

//         // the value axis
//         yAxis: {
//             min: 0,
//             max: 100,

//             minorTickInterval: 'auto',
//             minorTickWidth: 1,
//             minorTickLength: 10,
//             minorTickPosition: 'inside',
//             minorTickColor: '#666',

//             tickPixelInterval: 30,
//             tickWidth: 2,
//             tickPosition: 'inside',
//             tickLength: 10,
//             tickColor: '#666',
//             labels: {
//                 step: 2,
//                 rotation: 'auto'
//             },
//             title: {
//                 text: 'P4P'
//             },
//             plotBands: [{
//                 from: 0,
//                 to: 3,
//                 color: '#55BF3B' // green
//             }, {
//                 from: 3,
//                 to: 10,
//                 color: '#DDDF0D' // yellow
//             }, {
//                 from: 11,
//                 to: 100,
//                 color: '#DF5353' // red
//             }]
//         },

//         series: [{
//             name: 'Speed',
//             data: [9],
//             tooltip: {
//                 valueSuffix: ' P4P'
//             }
//         }]

//     });

//     $('#chart-TCM-01-02').highcharts({

//         chart: {
//             type: 'gauge',
//             plotBackgroundColor: null,
//             plotBackgroundImage: null,
//             plotBorderWidth: 0,
//             plotShadow: false
//         },

//         title: {
//             text: 'Blended Enhanced and ACT'
//         },

//         pane: {
//             startAngle: -150,
//             endAngle: 150,
//             background: [{
//                 backgroundColor: {
//                     linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
//                     stops: [
//                         [0, '#FFF'],
//                         [1, '#333']
//                     ]
//                 },
//                 borderWidth: 0,
//                 outerRadius: '109%'
//             }, {
//                 backgroundColor: {
//                     linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
//                     stops: [
//                         [0, '#333'],
//                         [1, '#FFF']
//                     ]
//                 },
//                 borderWidth: 1,
//                 outerRadius: '107%'
//             }, {
//                 // default background
//             }, {
//                 backgroundColor: '#DDD',
//                 borderWidth: 0,
//                 outerRadius: '105%',
//                 innerRadius: '103%'
//             }]
//         },

//         // the value axis
//         yAxis: {
//             min: 0,
//             max: 100,

//             minorTickInterval: 'auto',
//             minorTickWidth: 1,
//             minorTickLength: 10,
//             minorTickPosition: 'inside',
//             minorTickColor: '#666',

//             tickPixelInterval: 30,
//             tickWidth: 2,
//             tickPosition: 'inside',
//             tickLength: 10,
//             tickColor: '#666',
//             labels: {
//                 step: 2,
//                 rotation: 'auto'
//             },
//             title: {
//                 text: 'P4P'
//             },
//             plotBands: [{
//                 from: 0,
//                 to: 3,
//                 color: '#55BF3B' // green
//             }, {
//                 from: 3,
//                 to: 10,
//                 color: '#DDDF0D' // yellow
//             }, {
//                 from: 11,
//                 to: 100,
//                 color: '#DF5353' // red
//             }]
//         },

//         series: [{
//             name: 'Speed',
//             data: [20],
//             tooltip: {
//                 valueSuffix: ' P4P'
//             }
//         }]

//     });

//     $('#chart-TCM-02-01').highcharts({

//         chart: {
//             type: 'gauge',
//             plotBackgroundColor: null,
//             plotBackgroundImage: null,
//             plotBorderWidth: 0,
//             plotShadow: false
//         },

//         title: {
//             text: 'Blended Enhanced and Act'
//         },

//         pane: {
//             startAngle: -150,
//             endAngle: 150,
//             background: [{
//                 backgroundColor: {
//                     linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
//                     stops: [
//                         [0, '#FFF'],
//                         [1, '#333']
//                     ]
//                 },
//                 borderWidth: 0,
//                 outerRadius: '109%'
//             }, {
//                 backgroundColor: {
//                     linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
//                     stops: [
//                         [0, '#333'],
//                         [1, '#FFF']
//                     ]
//                 },
//                 borderWidth: 1,
//                 outerRadius: '107%'
//             }, {
//                 // default background
//             }, {
//                 backgroundColor: '#DDD',
//                 borderWidth: 0,
//                 outerRadius: '105%',
//                 innerRadius: '103%'
//             }]
//         },

//         // the value axis
//         yAxis: {
//             min: 0,
//             max: 100,

//             minorTickInterval: 'auto',
//             minorTickWidth: 1,
//             minorTickLength: 10,
//             minorTickPosition: 'inside',
//             minorTickColor: '#666',

//             tickPixelInterval: 30,
//             tickWidth: 2,
//             tickPosition: 'inside',
//             tickLength: 10,
//             tickColor: '#666',
//             labels: {
//                 step: 2,
//                 rotation: 'auto'
//             },
//             title: {
//                 text: 'p/p'
//             },
//             plotBands: [{
//                 from: 0,
//                 to: 6,
//                 color: '#55BF3B' // green
//             }, {
//                 from: 7,
//                 to: 15,
//                 color: '#DDDF0D' // yellow
//             }, {
//                 from: 16,
//                 to: 100,
//                 color: '#DF5353' // red
//             }]
//         },

//         series: [{
//             name: 'Speed',
//             data: [18],
//             tooltip: {
//                 valueSuffix: ' P4P'
//             }
//         }]

//     });

//     $('#chart-TCM-03-01').highcharts({

//         chart: {
//             type: 'gauge',
//             plotBackgroundColor: null,
//             plotBackgroundImage: null,
//             plotBorderWidth: 0,
//             plotShadow: false
//         },

//         title: {
//             text: 'Blended Enhanced'
//         },

//         pane: {
//             startAngle: -150,
//             endAngle: 150,
//             background: [{
//                 backgroundColor: {
//                     linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
//                     stops: [
//                         [0, '#FFF'],
//                         [1, '#333']
//                     ]
//                 },
//                 borderWidth: 0,
//                 outerRadius: '109%'
//             }, {
//                 backgroundColor: {
//                     linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
//                     stops: [
//                         [0, '#333'],
//                         [1, '#FFF']
//                     ]
//                 },
//                 borderWidth: 1,
//                 outerRadius: '107%'
//             }, {
//                 // default background
//             }, {
//                 backgroundColor: '#DDD',
//                 borderWidth: 0,
//                 outerRadius: '105%',
//                 innerRadius: '103%'
//             }]
//         },

//         // the value axis
//         yAxis: {
//             min: 0,
//             max: 100,

//             minorTickInterval: 'auto',
//             minorTickWidth: 1,
//             minorTickLength: 10,
//             minorTickPosition: 'inside',
//             minorTickColor: '#666',

//             tickPixelInterval: 30,
//             tickWidth: 2,
//             tickPosition: 'inside',
//             tickLength: 10,
//             tickColor: '#666',
//             labels: {
//                 step: 2,
//                 rotation: 'auto'
//             },
//             title: {
//                 text: 'P4P'
//             },
//             plotBands: [{
//                 from: 0,
//                 to: 33,
//                 color: '#55BF3B' // green
//             }, {
//                 from: 34,
//                 to: 66,
//                 color: '#DDDF0D' // yellow
//             }, {
//                 from: 67,
//                 to: 100,
//                 color: '#DF5353' // red
//             }]
//         },

//         series: [{
//             name: 'Speed',
//             data: [10],
//             tooltip: {
//                 valueSuffix: ' P4P'
//             }
//         }]

//     });


//     $('#chart-TCM-04-01').highcharts({

//         chart: {
//             type: 'gauge',
//             plotBackgroundColor: null,
//             plotBackgroundImage: null,
//             plotBorderWidth: 0,
//             plotShadow: false
//         },

//         title: {
//             text: 'Blended Enhanced'
//         },

//         pane: {
//             startAngle: -150,
//             endAngle: 150,
//             background: [{
//                 backgroundColor: {
//                     linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
//                     stops: [
//                         [0, '#FFF'],
//                         [1, '#333']
//                     ]
//                 },
//                 borderWidth: 0,
//                 outerRadius: '109%'
//             }, {
//                 backgroundColor: {
//                     linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
//                     stops: [
//                         [0, '#333'],
//                         [1, '#FFF']
//                     ]
//                 },
//                 borderWidth: 1,
//                 outerRadius: '107%'
//             }, {
//                 // default background
//             }, {
//                 backgroundColor: '#DDD',
//                 borderWidth: 0,
//                 outerRadius: '105%',
//                 innerRadius: '103%'
//             }]
//         },

//         // the value axis
//         yAxis: {
//             min: 0,
//             max: 100,

//             minorTickInterval: 'auto',
//             minorTickWidth: 1,
//             minorTickLength: 10,
//             minorTickPosition: 'inside',
//             minorTickColor: '#666',

//             tickPixelInterval: 30,
//             tickWidth: 2,
//             tickPosition: 'inside',
//             tickLength: 10,
//             tickColor: '#666',
//             labels: {
//                 step: 2,
//                 rotation: 'auto'
//             },
//             title: {
//                 text: 'km/h'
//             },
//             plotBands: [{
//                 from: 0,
//                 to: 10,
//                 color: '#55BF3B' // green
//             }, {
//                 from: 11,
//                 to: 25,
//                 color: '#DDDF0D' // yellow
//             }, {
//                 from: 26,
//                 to: 100,
//                 color: '#DF5353' // red
//             }]
//         },

//         series: [{
//             name: 'Speed',
//             data: [20],
//             tooltip: {
//                 valueSuffix: ' P4P'
//             }
//         }]

//     });

// };
