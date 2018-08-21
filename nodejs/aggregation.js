exports.sum = function(){
    this._sum = 0;
    for (var i = 0; i < arguments.length; i++) {
     this._sum+=arguments[i];
    }
}

exports.avg = function(){
    this._sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        this._sum+=arguments[i];
    }
this._avg = this._sum / arguments.length;
}