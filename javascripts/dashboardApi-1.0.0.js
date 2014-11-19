function GetApiUrl()
{
    var apiUrl = window.location.protocol + '//' + window.location.hostname + '/PayForPerformanceWebApi/api/';
    return(apiUrl);
}

function GetAllPrograms() {
    jQuery.support.cors = true;
    var fullUrl = GetApiUrl() + 'Summary';
    $.ajax({


        url: fullUrl,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            WriteResponse(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}

function GetProgramViaPost() {
    jQuery.support.cors = true;
    var fullUrl = GetApiUrl() + 'Program/RequestByName';
    var ProgramRequestByName = {
        ProgramName: 'TCM',
    };                      

    $.ajax({
        url: fullUrl,
        type: 'POST',
        data: JSON.stringify(ProgramRequestByName),
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            //bind data
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}