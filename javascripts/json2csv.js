var csvConverter = {
	ConvertToCSV: function (objArray) {
	  var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
	  var str = '';
	  var headers = Object.keys(array[0]);
	  headers.forEach(function(item) {
	    str += item;
	    str += ',';
	  });
	  str += '\r\n';
	  for (var i = 0; i < array.length; i++) {
	    var line = '';
	    for (var index in array[i]) {
	      if (line != '') line += ','
	 
	        line += array[i][index];
	      }
	 
	      str += line + '\r\n';
	    }
	 return str;
	}
}
