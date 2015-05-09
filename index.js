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
	var current_class = _constructor;
	_constructor.prototype.super = function(method){
		current_class = current_class.__super__;
		var result = current_class.prototype[method].apply(this,[].slice.call(arguments,1));
		return result;
	}

	return _constructor;

};

module.exports = _Class