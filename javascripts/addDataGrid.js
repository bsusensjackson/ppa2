var fixDates = function (encounterData) {
      betterDates = encounterData.map(function (data) {
      data["EncounterStartDate"] = new Date(data["EncounterStartDate"]);
      data["EncounterEndDate"] = new Date(data["EncounterEndDate"]);
      return data;
    });
  return betterDates;
};

var colorData = function() {
  var $elements = $('.elapsedDays');
      $elements.each(function(){
        if ($(this).text() > 30) {
          $(this).css("background", "red");
        } if ($(this).text() > 15 && $(this).text() < 30) {
          $(this).css("background", "yellow");
        };
      })
}

var setGrid = function(container, callback) {
  container.dxDataGrid({
    dataSource: fixedDataSet,
    columns: [
      { dataField: 'Clinician', width: 120 },
      { dataField: 'PatientId', width: 100},
      { dataField: 'PatientName', width: 120},
      { dataField: 'EncounterStartDate', width:120, format: 'shortDate'},
      { dataField: 'EncounterEndDate', width: 120, format: 'shortDate'},
      { dataField: 'ElapsedDays', width: 100, cssClass: 'elapsedDays'}
    ], 
    columnChooser: { enabled: true },
    pager: { visible: true },
    paging: { pageSize: 7 }
  });
}

$(function () {
  $.getJSON("javascripts/encounterdetail.json", function (encounterData) {
    fixedDataSet = fixDates(encounterData);
    setGrid($('#gridContainer'));
    
    setTimeout(function(){ //Color Data Initially
      colorData();
    }, 50)
    
    $('.dx-pages').click(function (){ //Set Event Listener for Pagination
      setTimeout(function() {
        colorData();
      }, 50)
    });
    
  }).fail(function(err) {
    console.log("error");
  });
});
