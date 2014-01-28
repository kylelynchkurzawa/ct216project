
var array = [];

exports.addMessage = function(t) {
	array.push({ time: t });
}

exports.getMessages = function() {
	return array;
}	
