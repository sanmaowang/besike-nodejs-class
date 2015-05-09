function _Class(obj){
	var _constructor = function(){};

	if(typeof obj.initialize === 'function'){
		_constructor = obj.initialize;
	}

	return _constructor;

};

module.exports = _Class