
/// <reference path="Comhar-namespaces-1.0.0.js" />

Comhar.eW.Dashboard.Data.GetApiUrl = function () {
    var apiUrl = window.location.protocol + '//' + window.location.hostname + '/PayForPerformanceWebApi/api/';
    return (apiUrl);
}


Comhar.eW.Dashboard.Data.GetEncounterListViaPost = function (kpiId, startDate, endDate, sortField,sortOrder, pageIndex, pageSize  ) {
    jQuery.support.cors = true;
    var fullUrl = Comhar.eW.Dashboard.Data.GetApiUrl() + 'EncounterDetail/RequestPageByObject';
    var ProgramRequestByName = {
        kpiId: kpiId,
        startDate: startDate,
        endDate: endDate,
        sortField: sortField,
        sortOrder: sortOrder,
        pageIndex: pageIndex,
        pageSize: pageSize
    };


    $.ajax({
        url: fullUrl,
        type: 'POST',
        data: JSON.stringify(ProgramRequestByName),
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            var newList = ko.mapping.fromJS(data)(); // convert to view model objects
            viewModel.encounterList(newList); // replace the empty array with a populated one
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}

Comhar.eW.Dashboard.Data.GetSummaryViaPost = function () {
    jQuery.support.cors = true;
    var fullUrl = Comhar.eW.Dashboard.Data.GetApiUrl() + 'Summary/RequestBySummaryRequestObject';
    var SummaryRequest = {
        ProgramName: 'TCM',
        FiscalYearStartDate: "2013-07-01",
        FiscalYearEndDate:   "2014-06-30",
        CompliancePercent: "-1"
    }

    $.ajax({
        url: fullUrl,
        type: 'POST',
        data: JSON.stringify(SummaryRequest),
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            var newList = ko.mapping.fromJS(data)(); // convert to view model objects

            viewModel.summaryList(newList); // replace the empty array with a populated one
            ko.utils.arrayForEach(viewModel.summaryList(), function (item) {
            Comhar.eW.Dashboard.Data.GetEncounterListViaPost(
                    item.KpiId(),
                    item.FiscalYearStartDate(),
                    item.FiscalYearEndDate(),
                    "ElapsedDays",
                    "DESC",
                    1,
                    10
                );

            });

 
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}


