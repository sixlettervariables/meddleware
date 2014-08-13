'use strict';

module.exports = function (options) {
    var middleware = [];
    
    middleware.push(function ArrayFirst(req, res, next) {
        res.locals.arrayFirst = options.arrayFirst;
        next();
    });
    
    middleware.push(function ArraySecond(req, res, next) {
        if (res.locals.arrayFirst) res.locals.arraySecond = options.arraySecond;
        next();
    });
    
    return middleware;
};
