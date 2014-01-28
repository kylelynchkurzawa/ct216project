
var array = [];

exports.addMessage = function(t) {
        // comments
	array.push({ time: t });
}

exports.getMessages = function() {
	return array;
}	
