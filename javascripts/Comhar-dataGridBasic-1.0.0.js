/// <reference path="Comhar-namespaces-1.0.0.js" />
/// <reference path="Comhar-ajax.js" />
/// <reference path="Comhar-dataGridAjax.js" />

// Data Grid Control via DOM methods

Comhar.eW.DataGridBasic = (function () {
    var getDataUrl = '';
    var allDataRows = new Array();
    function DataGridBasic(url, pageSize) {
        var self = this;
        getDataUrl = url;
        self.GridParams = {
            pageIndex: ko.observable(1),
            pageSize: ko.observable(pageSize),
            sortField: ko.observable(''),
            sortOrder: ko.observable('ASC'),
            totalRows: ko.observable(0),
            totalPages: ko.observable(0),
            requestedPage: ko.observable(0),
            pageSizeOptions: [5, 10, 20, 30, 50, 100]
        };
        self.DataRows = ko.observableArray();
        self.SelectedPageSizeOption = ko.observable(pageSize);
        self.GridParams.requestedPage.subscribe(self.FlipPageDirect, self);
        self.SelectedPageSizeOption.subscribe(self.ChangePageSize, self);
    }
    DataGridBasic.prototype.GetData = function () {
        var self = this;
        Comhar.eW.Services.AjaxPostCall(getDataUrl, '', $.proxy(self.OnGetDataDone, this));
    };
    DataGridBasic.prototype.OnGetDataDone = function (data) {
        var self = this;
        allDataRows = Comhar.eW.Utils.GetJson(data.result);
        self.GridParams.totalRows(Comhar.eW.Utils.GetJson(data.totalRows));
        self.UpdateData();
    };
    DataGridBasic.prototype.UpdateData = function () {
        var self = this;
        self.DataRows(self.GetPagedData());
        var totalPages = Math.ceil(self.GridParams.totalRows() / self.GridParams.pageSize());
        self.GridParams.totalPages(totalPages);
        self.GridParams.requestedPage(self.GridParams.pageIndex());
    };
    DataGridBasic.prototype.FlipPage = function (newPageNo) {
        var self = this;
        if (parseInt(newPageNo) > 0 && parseInt(newPageNo) <= self.GridParams.totalPages()) {
            self.GridParams.pageIndex(newPageNo);
            self.UpdateData();
        }
    };
    DataGridBasic.prototype.FlipPageDirect = function (newValue) {
        var self = this;
        var ri = parseInt(self.GridParams.requestedPage());
        if (ri == NaN) {
            self.GridParams.requestedPage(self.GridParams.pageIndex());
            return;
        }
        if (ri > 0 && ri <= self.GridParams.totalPages()) {
            self.GridParams.pageIndex(ri);
            self.UpdateData();
            return;
        }
        self.GridParams.requestedPage(self.GridParams.pageIndex());
        return;
    };
    DataGridBasic.prototype.ChangePageSize = function () {
        var self = this;
        if (self.GridParams.pageSize() != self.SelectedPageSizeOption()) {
            self.GridParams.pageSize(self.SelectedPageSizeOption());
            self.GridParams.pageIndex(1);
            self.GridParams.requestedPage(1);
            self.UpdateData();
        }
    };
    DataGridBasic.prototype.Sort = function (col) {
        var self = this;
        if (self.GridParams.sortField() === col) {
            if (self.GridParams.sortOrder() === 'ASC') {
                self.GridParams.sortOrder('DESC');
            } else {
                self.GridParams.sortOrder('ASC');
            }
        } else {
            self.GridParams.sortOrder('ASC');
            self.GridParams.sortField(col);
        }
        allDataRows.sort(self.dynamicSort(self.GridParams.sortField(), self.GridParams.sortOrder()));
        self.UpdateData();
    };
    DataGridBasic.prototype.GetPagedData = function () {
        var self = this;
        var size = self.GridParams.pageSize();
        var start = (self.GridParams.pageIndex() - 1) * size;
        return allDataRows.slice(start, start + size);
    };
    DataGridBasic.prototype.dynamicSort = function (sortProperty, direction) {
        debugger;
        var thisMethod = function (a, b) {
            var valueA = a[sortProperty];
            var valueB = b[sortProperty];
            if (typeof valueA != "number" && typeof valueA != "object") {
                valueA = a[sortProperty].toLowerCase();
                valueB = b[sortProperty].toLowerCase();
            }
            if (direction.toLowerCase() == "asc") {
                if (valueA < valueB) {
                    return -1;
                }
                if (valueA > valueB) {
                    return 1;
                }
            } else {
                if (valueA > valueB) {
                    return -1;
                }
                if (valueA < valueB) {
                    return 1;
                }
            }
            return 0;
        };
        return thisMethod;
    };

    return DataGridBasic;
})();