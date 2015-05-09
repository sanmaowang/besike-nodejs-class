function _Class(obj){
	var _constructor = function(){};

	if(typeof obj.initialize === 'function'){
		_constructor = obj.initialize;
	}

	for(var key in obj){
		if(typeof obj[key] === 'function' && key !== 'initialize'){
			_constructor.prototype[key] = obj[key];
		}
	}

	return _constructor;

};

module.exports = _Class