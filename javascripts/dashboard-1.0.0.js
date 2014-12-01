/// <reference path="dashboardApi-1.0.0.js" />
// JavaScript source code

var highCharts = {
  tcmChart0102: function (container, summaryData) {
    container.highcharts({
      chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
      },

    title: {
      text: 'Blended Enhanced and ACT'
    },

    pane: {
      startAngle: -150,
      endAngle: 150,
      background: [{
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
          [0, '#FFF'],
          [1, '#333']
          ]
        },
        borderWidth: 0,
        outerRadius: '109%'
        },
        {
          backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
          [0, '#333'],
          [1, '#FFF']
          ]
        },
        borderWidth: 1,
        outerRadius: '107%'
      }, 
      {
      // default background
      }, 
        {
          backgroundColor: '#DDD',
          borderWidth: 0,
          outerRadius: '105%',
          innerRadius: '103%'
      }]
      },

    // the value axis
    yAxis: {
      min: 0,
      max: 100,

      minorTickInterval: 'auto',
      minorTickWidth: 1,
      minorTickLength: 10,
      minorTickPosition: 'inside',
      minorTickColor: '#666',

      tickPixelInterval: 30,
      tickWidth: 2,
      tickPosition: 'inside',
      tickLength: 10,
      tickColor: '#666',
      labels: {
        step: 2,
        rotation: 'auto'
      },
      title: {
        text: summaryData[0].KpiId
      },
      plotBands: [{
        from: summaryData[0].GreenFrom,
        to: summaryData[0].GreenTo,
            color: '#55BF3B' // green
          }, {
            from: summaryData[0].YellowFrom,
            to: summaryData[0].YellowTo,
            color: '#DDDF0D' // yellow
          }, {
            from: summaryData[0].RedFrom,
            to: summaryData[0].RedTo,
            color: '#DF5353' // red
          }]
        },

        series: [{
          name: 'Compliance: ',
          data: [summaryData[0].CompliancePercent],
          tooltip: {
            valueSuffix: '%'
          }
        }]
    });
},

tcmChart0201: function (container, summaryData) {
  container.highcharts({
    chart: {
      type: 'gauge',
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false
    },

    title: {
      text: 'Blended Enhanced and Act'
    },

    pane: {
      startAngle: -150,
      endAngle: 150,
      background: [{
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
          [0, '#FFF'],
          [1, '#333']
          ]
        },
        borderWidth: 0,
        outerRadius: '109%'
      }, {
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
          [0, '#333'],
          [1, '#FFF']
          ]
        },
        borderWidth: 1,
        outerRadius: '107%'
      }, {
                    // default background
        }, {
          backgroundColor: '#DDD',
          borderWidth: 0,
          outerRadius: '105%',
          innerRadius: '103%'
        }]
      },

            // the value axis
    yAxis: {
      min: 0,
      max: 100,

      minorTickInterval: 'auto',
      minorTickWidth: 1,
      minorTickLength: 10,
      minorTickPosition: 'inside',
      minorTickColor: '#666',

      tickPixelInterval: 30,
      tickWidth: 2,
      tickPosition: 'inside',
      tickLength: 10,
      tickColor: '#666',
      labels: {
        step: 2,
        rotation: 'auto'
      },
      title: {
        text: summaryData[1].KpiId
      },
      plotBands: [{
        from: summaryData[1].GreenFrom,
        to: summaryData[1].GreenTo,
            color: '#55BF3B' // green
          }, {
            from: summaryData[1].YellowFrom,
            to: summaryData[1].YellowTo,
            color: '#DDDF0D' // yellow
          }, {
            from: summaryData[1].RedFrom,
            to: summaryData[1].RedTo,
            color: '#DF5353' // red
          }]
        },

        series: [{
          name: 'Speed',
          data: [summaryData[1].CompliancePercent],
          tooltip: {
            valueSuffix: ' P4P'
          }
        }]
  });
},

tcmChart0301: function (container, summaryData) {
  container.highcharts({

  chart: {
    type: 'gauge',
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
    plotShadow: false
  },

  title: {
    text: 'Blended Enhanced'
  },

  pane: {
    startAngle: -150,
    endAngle: 150,
    background: [{
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
        [0, '#FFF'],
        [1, '#333']
        ]
      },
      borderWidth: 0,
      outerRadius: '109%'
    }, {
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
        [0, '#333'],
        [1, '#FFF']
        ]
      },
      borderWidth: 1,
      outerRadius: '107%'
    }, {
                    // default background
      }, {
        backgroundColor: '#DDD',
        borderWidth: 0,
        outerRadius: '105%',
        innerRadius: '103%'
      }]
    },

// the value axis
  yAxis: {
    min: 0,
    max: 100,

    minorTickInterval: 'auto',
    minorTickWidth: 1,
    minorTickLength: 10,
    minorTickPosition: 'inside',
    minorTickColor: '#666',

    tickPixelInterval: 30,
    tickWidth: 2,
    tickPosition: 'inside',
    tickLength: 10,
    tickColor: '#666',
    labels: {
      step: 2,
      rotation: 'auto'
    },
    title: {
      text: summaryData[2].KpiId
    },
    plotBands: [{
      from: summaryData[2].GreenFrom,
      to: summaryData[2].GreenTo,
          color: '#55BF3B' // green
        }, {
          from: summaryData[2].YellowFrom,
          to: summaryData[2].YellowTo,
          color: '#DDDF0D' // yellow
        }, {
          from: summaryData[2].RedFrom,
          to: summaryData[2].RedTo,
          color: '#DF5353' // red
        }]
      },

      series: [{
        name: 'Compliance: ',
        data: [summaryData[2].CompliancePercent],
        tooltip: {
          valueSuffix: '%'
        }
      }]

  });

},

tcmChart0401: function (container, summaryData) {
  container.highcharts({

  chart: {
    type: 'gauge',
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
    plotShadow: false
  },

  title: {
    text: 'Blended Enhanced'
  },

  pane: {
    startAngle: -150,
    endAngle: 150,
    background: [{
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
        [0, '#FFF'],
        [1, '#333']
        ]
      },
      borderWidth: 0,
      outerRadius: '109%'
    }, {
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
        [0, '#333'],
        [1, '#FFF']
        ]
      },
      borderWidth: 1,
      outerRadius: '107%'
    }, {
                    // default background
      }, {
        backgroundColor: '#DDD',
        borderWidth: 0,
        outerRadius: '105%',
        innerRadius: '103%'
      }]
    },

// the value axis
  yAxis: {
    min: 0,
    max: 100,

    minorTickInterval: 'auto',
    minorTickWidth: 1,
    minorTickLength: 10,
    minorTickPosition: 'inside',
    minorTickColor: '#666',

    tickPixelInterval: 30,
    tickWidth: 2,
    tickPosition: 'inside',
    tickLength: 10,
    tickColor: '#666',
    labels: {
      step: 2,
      rotation: 'auto'
    },
    title: {
      text: summaryData[4].KpiId
    },
    plotBands: [{
      from: summaryData[4].GreenFrom,
      to: summaryData[4].GreenTo,
          color: '#55BF3B' // green
        }, {
          from: summaryData[4].YellowFrom,
          to: summaryData[4].YellowTo,
          color: '#DDDF0D' // yellow
        }, {
          from: summaryData[4].RedFrom,
          to: summaryData[4].RedTo,
          color: '#DF5353' // red
        }]
      },

    series: [{
      name: 'Compliance: ',
      data: [summaryData[4].CompliancePercent],
      tooltip: {
        valueSuffix: '%'
      }
    }]

  });

  }
}
$(function () {

  $(document).bind('mobileinit', function () {
    $.mobile.selectmenu.prototype.options.nativeMenu = false;
  });

  $(".fiscalYearListItem").click(function () {
    var test = this;
    $('.fiscalYearLabel').text($(this).text());
    $('#fiscalYearPopup').popup("close");

  });

  $.getJSON("/javascripts/summary.json", function(summaryData) {
    $('#tcm-01-01').on('click', function(){
      setTimeout(function(){ //Delay until chart container is visible in DOM. 
        dxChart.tcmChart01($('#chart2-TCM-01-01'), summaryData)
      }, 1);

      highCharts.tcmChart0102($('#chart-TCM-01-02'), summaryData);
    });

    $('#tcm-02-01').on('click', function() {
      highCharts.tcmChart0201($('#chart-TCM-02-01'), summaryData);
    });
    
    $('#tcm-03-01').on('click', function() {
      highCharts.tcmChart0301($('#chart-TCM-03-01'), summaryData);
    }); 
    $('#tcm-04-01').on('click', function() {
      highCharts.tcmChart0401($('#chart-TCM-04-01'), summaryData);
    });
  });

  $.getJSON("javascripts/encounterdetail.json", function (encounterData) {
    fixedDataSet = fixDates(encounterData);
    setGrid($('#gridContainer'));
    
    setTimeout(function(){ //Color Data Initially
      colorData();
    }, 50);
    
    $('.dx-pages').click(function (){ //Set Event Listener for Pagination
      
      setTimeout(function() {
        colorData();
      }, 50);
    });

    $('#download-CSV').click(function(){
      var jsonString = JSON.stringify(encounterData);
      var csvString = csvConverter.convertCSV(jsonString);
      window.open("data:text/csv;charset=utf-8," + escape(csvString));
    });
    
    $('.dx-datagrid-action-cursor').on('click', function(){
       setTimeout(function() {
        colorData();
      }, 50);
    })
  }).fail(function(err) {
    console.log("error");
  });
});