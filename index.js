function _Class(obj, parent){
	var _constructor = function(){};

	if(typeof obj.initialize === 'function'){
		_constructor = obj.initialize;
	}

	if(typeof parent === 'function'){
		var ctor = function(){};
		ctor.prototype = parent.prototype;
		_constructor.prototype = new ctor();
		_constructor.prototype.constructor = _constructor;
		_constructor.__super__ = parent;
	}else{
		_constructor.__super__ = Object;
	}

	for(var key in obj){
		if(typeof obj[key] === 'function' && key !== 'initialize'){
			_constructor.prototype[key] = obj[key];
		}
	}

	return _constructor;

};

module.exports = _Class