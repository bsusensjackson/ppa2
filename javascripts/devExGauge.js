$(function() {
  $('#dx-test').click(function(){
    setTimeout(function(){ //Delay until chart container is visible in DOM. 
      $('#chart2-TCM-01-01').dxCircularGauge({
        scale: {
          startValue: 0, endValue: 100,
          majorTick: {
            color: '#536878',
            tickInterval: 10
          },
          label: {
            indentFromTick: 3
          }
      },
      rangeContainer: {
        offset: 10,
        ranges: [
          { startValue: 0, endValue: 30, color: '#92000A' },
          { startValue: 30, endValue: 70, color: '#E6E200' },
          { startValue: 70, endValue: 100, color: '#77DD77' }
        ]
      },
      valueIndicator: {
        offset: 50
      },
      subvalueIndicator: {
        offset: -25
      },
      title: {
        text: 'Blended Enhanced and ACT',
        font: { size: 28 }
      },
      value: 85,
      subvalues: [40, 90]
      });
    }, 1)
  });
});

