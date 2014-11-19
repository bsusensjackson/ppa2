
/// <reference path="Comhar-namespaces-1.0.0.js" />

// AJAX  Helper Methods
// The following AJAX Helper meathods ideally encapsulate AJAX logic, or at least begin to do this by wrapping methods.

Comhar.eW.Utils.GetJson = function (data) {
    /// <summary>GetJson - wraps calls json parser for error handling</summary>
    /// <param name="data" type="string">the JSON data to parse</param>
    if (data == '' || data == 'undefined') return null;
    return (JSON && JSON.parse(data) || $.parseJSON(data));
};

Comhar.eW.Utils.GetJson = function (data) {
    /// <summary>GetJson - wraps calls json parser for error handling</summary>
    /// <param name="data" type="string">the JSON data to parse</param>
    if (data == '' || data == 'undefined') return null;
    return (JSON && JSON.parse(data) || $.parseJSON(data));
};

Comhar.eW.Services.AjaxGetCall = function (fullUrl, callbackFunction) {
    /// <summary>AjaxGetCall - executes an HTTP GET using the desired callback function</summary>
    /// <param name="fullUrl" type="string">The fullUrl of the call</param>
    /// <param name="callbackFunction" type="function">The callback function to execute in the format of a JQuery AJAX function callback</param>
    /// <returns type="asynchronously, the return value of the callback function"></returns>
    jQuery.support.cors = true;
    $.ajax({
        url: fullUrl,
        cache: false,
        success: function (data) { callbackFunction(Comhar.eW.Utils.GetJson(data)); },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("error :" + XMLHttpRequest.responseText);
            alert('There was an error in performing this operation.');
        }
    });
};
Comhar.eW.Services.AjaxPostCall = function (fullUrl, dataObj, callbackFunction) {
    /// <summary>AjaxGetCall - executes an HTTP POST using the desired callback function</summary>
    /// <param name="fullUrl" type="string">The fullUrl of the call</param>
    /// <param name="dataObj" type="string">The object data to pass to method, in JSON format, matching the server method signature</param>
    /// <param name="callbackFunction" type="function">The callback function to execute in the format of a JQuery AJAX function callback</param>
    /// <returns type="asynchronously, the return value of the callback function"></returns>
    jQuery.support.cors = true;
    $.ajax({
        url: fullUrl,
        cache: false,
        type: 'post',
        data: dataObj,
        success: function (data) { callbackFunction(Comhar.eW.Utils.GetJson(data)); },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("error :" + XMLHttpRequest.responseText);
            alert('There was an error in performing this operation.');
        }
    });
};
Comhar.eW.Services.AjaxJsonPostCall = function (fullUrl, dataObj, callbackFunction) {
    /// <summary>AjaxGetCall - executes an HTTP POST using the desired callback function</summary>
    /// <param name="fullUrl" type="string">The fullUrl of the call</param>
    /// <param name="dataObj" type="string">The object data to pass to method, in a JavaScript object format that can be serialized to JSON, matching the server method signature</param>
    /// <param name="callbackFunction" type="function">The callback function to execute in the format of a JQuery AJAX function callback</param>
    /// <returns type="asynchronously, the return value of the callback function"></returns>
    jQuery.support.cors = true;
    $.ajax({
        type: 'post',
        url: fullUrl,
        data: JSON.stringify(dataObj),
        dataType: 'json',
        cache: false,
        success: function (data) { callbackFunction(Comhar.eW.Utils.GetJson(data)); },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("error :" + XMLHttpRequest.responseText);
            alert('There was an error in performing this operation.');
        }
    });
};