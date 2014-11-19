var fixDates = function (encounterData) {
      betterDates = encounterData.map(function (data) {
      data["EncounterStartDate"] = new Date(data["EncounterStartDate"]);
      data["EncounterEndDate"] = new Date(data["EncounterEndDate"]);
      return data;
    });
  return betterDates;
};

var setTableId = function (callback) {
  $('.dx-datagrid-table').slice(1).each(function() {
    $(this).attr('id', 'table2');
  });
  callback();
};

var setGrid = function(container, callback) {
  container.dxDataGrid({
        dataSource: fixedDataSet,
        columns: [
          { dataField: 'Clinician', width: 120 },
          { dataField: 'PatientId', width: 100},
          { dataField: 'PatientName', width: 120},
          { dataField: 'EncounterStartDate', width:120, format: 'shortDate'},
          { dataField: 'EncounterEndDate', width: 120, format: 'shortDate'},
          { dataField: 'ElapsedDays', width: 100}
          ], 
        columnChooser: { enabled: true },
        pager: { visible: true },
        paging: { pageSize: 7 }
      });
  callback();
}

$(function () {
  $.getJSON("javascripts/encounterdetail.json", function (encounterData) {
    fixedDataSet = fixDates(encounterData);
    setGrid($('#gridContainer'), function() {

      $('.dx-datagrid-table').slice(1).each(function () {
        $(this).attr('id', 'table2');
      });
      $('#table2 tr td:nth-child(6)').each(function () {
        $(this).css("background", "red");
      });
    });
  }).fail(function(err) {
    console.log("error");
  });
});
