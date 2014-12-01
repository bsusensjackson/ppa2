var csvConverter = {
	ConvertToCSV: function (objArray) {
	  var array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
	  var str = '';
	  var headers = Object.keys(array[0]);

	  headers.forEach(function(item) {
	    str += item + ',';
	  });
	  str += '\r\n';

	  array.forEach(function (item, index) {
	  	var line = '';
	  	for (var index in item) {
	  		if (line !== '') { line += ','; }
	  		line += item[index];
	  	}
	  	str += line + '\r\n';
	  });
	 return str;
	}
};
