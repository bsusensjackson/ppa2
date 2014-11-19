



function kpiViewModel() {
    var self = this;

    self.kpiDetail = [
    { id: "1", program: "TCM", kpiId: "TCM-01-01", clinician: "Nancy Jones", patientId: "101123", patientName: "Joe B", encounterStartDate: "1/05/2014", encounterEndDate: "3/10/2014", elapsedDays: "5" },
    { id: "2", program: "TCM", kpiId: "TCM-01-01", clinician: "Nancy Jones", patientId: "101124", patientName: "Richard G", encounterStartDate: "1/05/2014", encounterEndDate: "3/12/2014", elapsedDays: "7" },
    { id: "3", program: "TCM", kpiId: "TCM-01-01", clinician: "Bobby Brains", patientId: "101123", patientName: "Joe B", encounterStartDate: "1/05/2014", encounterEndDate: "1/10/2014", elapsedDays: "5" },
    { id: "4", program: "TCM", kpiId: "TCM-01-01", clinician: "Bobby Brains", patientId: "101124", patientName: "Richard G", encounterStartDate: "1/05/2014", encounterEndDate: "1/12/2014", elapsedDays: "7" },
    { id: "5", program: "TCM", kpiId: "TCM-01-01", clinician: "Susan Mindfull", patientId: "101125", patientName: "Trudy B", encounterStartDate: "1/07/2014", encounterEndDate: "1/22/2014", elapsedDays: "15" },
    { id: "6", program: "TCM", kpiId: "TCM-01-01", clinician: "Susan Mindfull", patientId: "101126", patientName: "Ronald J", encounterStartDate: "1/07/2014", encounterEndDate: "2/12/2014", elapsedDays: "36" }
    ];

    self.kpiSummary = [
    { kpiId: "TM-01-01", monthStart: "7/01/2013", monthEnd: "7/31/2014", fiscalYearDisplay: "July 2012-June 2014", monthCompliancePercent: 20, greenFrom: 0, greenTo: 3, yellowFrom: 4, yellowTo: 10, redFrom: 11, redTo: 100 },
    { kpiId: "TM-01-02", monthStart: "7/01/2014", monthEnd: "7/31/2014", fiscalYearDisplay: "July 2013-June 2014", monthCompliancePercent: 20, greenFrom: 0, greenTo: 3, yellowFrom: 4, yellowTo: 10, redFrom: 11, redTo: 100 }
    ];

    programList: ko.observableArray([])

};

function navigationViewModel() {
    var self = this;

    self.Program = [
    { id: "1", program: "TCM", alias: "ETCM" },
    { id: "2", program: "BHRS", alias: "BHRS" },
    { id: "3", program: "CIRC", alias: "CIRC" },
    { id: "4", program: "LTSR", alias: "LTSR" },
    { id: "5", program: "OutPatient", alias: "OutPatient" }
    ];

    self.kpiDates = [
    { fiscalYear: "2013", fiscalYearDisplay: "July 2013-June 2014", startDate: "07/01/2013", endDate: "06/30/2014", enabled: true },
    { fiscalYear: "2012", fiscalYearDisplay: "July 2012-June 2013", startDate: "07/01/2012", endDate: "06/30/2013", enabled: true },
    { fiscalYear: "2011", fiscalYearDisplay: "July 2011-June 2012", startDate: "07/01/2011", endDate: "06/30/2012", enabled: true }
    ];


};

function kpiDetailRow(id, kpiId, clinician, patientID, patientName, encounterStartDate, encounterEndDate, elapsedDays) {
    var self = this;
    self.id = id;
    self.kpiId = name;
    self.clinician = koObservable(kpiDetail.clinician);
    self.patientName = koObservable(kpiDetail.patientName);
    self.encounterStartDate = koObservable(kpiDetail.encounterStartDate);
    self.encounterEndDate = koObservable(kpiDetail.encounterEndDate);
    self.elapesedDays = koObservable(kpiDetail.elapsedDays);
};

function getkpiGraphRow(kpiId) {

};

//viewModel.filteredItems = ko.computed(function () {
//    var filter = this.filter().toLowerCase();
//    if (!filter) {
//        return this.items();
//    } else {
//        return ko.utils.arrayFilter(this.items(), function (item) {
//            return ko.utils.stringStartsWith(item.name().toLowerCase(), filter);
//        });
//    }
//}, viewModel);


