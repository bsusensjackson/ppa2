/// <reference path="Comhar-namespaces-1.0.0.js" />
/// <reference path="Comhar-ajax.js" />
/// <reference path="Comhar-dataGridAjax-1.0.0.js" />
/// <reference path="Comhar-dataGridBasic-1.0.0.js" />
/// <reference path="Comhar-dashboard-data-1.0.0.js" />
/// <reference path="Comhar-dashboard-dataMock-1.0.0.js" />
/// <reference path="Comhar-dashboard-charting-1.0.0.js" />


var viewModel = {
    programList: ko.observableArray([]), // empty array for now
    summaryList: ko.observableArray([]),
    encounterList: ko.observableArray([]),
    currentProgram: ko.observableArray([0]),
    currentProgramAlias: ko.observableArray([0]),
    currentKPI: ko.observableArray([0]),

}

ko.applyBindings(viewModel);

$(function () {
    viewModel.currentProgram("TCM");
    viewModel.currentProgramAlias("ETCM");
    $(".touchme").collapsible({
        expand: function (event, ui) {
            var test = this;
        }
    });

    $(".touchme2").collapsible({
        expand: function (event, ui) {

            Comhar.eW.Dashboard.Data.GetEncounterListViaPost(
                    item.KpiId(),
                    item.FiscalYearStartDate(),
                    item.FiscalYearEndDate(),
                    "ElapsedDays",
                    "DESC",
                    1,
                    10
                );
        }
    });



    $(".fiscalYearListItem").click(function () {
        var test = this;
        $('.fiscalYearLabel').text($(this).text());
        $('#fiscalYearPopup').popup("close");

    });


    // Listen for any attempts to call changePage().
    $(document).bind("pagebeforechange", function (e, data) {

        // We only want to handle changePage() calls where the caller is
        // asking us to load a page by URL.
        if (typeof data.toPage === "string") {

            // We are being asked to load a page by URL, but we only
            // want to handle URLs that request the data for a specific
            // category.
            var u = $.mobile.path.parseUrl(data.toPage);
            Comhar.eW.Dashboard.SetPage(u.hash)
        }

    });

    Comhar.eW.Dashboard.SetPage = function (pageRef) {
        viewModel.currentProgramAlias(pageRef("#", ""));
        viewModel.currentProgram(viewModel.currentProgramAlias() == "ETCM" ? "TCM" : viewModel.currentProgramAlias());
        Comhar.eW.Dashboard.Data.GetSummaryViaPost();
    };

    Comhar.eW.Dashboard.Charting.GetCharts();





    //$.getJSON("/api/Program", function (data) {
    //    var newLeads = ko.mapping.fromJS(data)(); // convert to view model objects
    //    viewModel.leads(newLeads); // replace the empty array with a populated one
    //});
});












//Comhar.ew.dashboard.BillingGrid = new Comhar.eW.DataGridAjax('/Home/GetStudentList', 10);
//Comhar.ew.dashboard.BillingGrid = new Comhar.eW.DataGridAjax('/Home/GetAllStudentList',5);
//Comhar.ew.dashboard.BillingGrid.Init = function () {
//    Comhar.ew.dashboard.BillingGrid.GetData();
//    ko.applyBindings(Comhar.ew.dashboard.BillingGrid.DataRows, $("#studentListGrid")[0]);
//};
//Comhar.eW.Dashboard.Init();





