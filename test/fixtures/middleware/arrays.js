'use strict';

module.exports = function (config) {
    var middleware = [];
    
    middleware.push(function ArrayFirst(req, res, next) {
        res.locals.arrayFirst = true;
        next();
    });
    
    middleware.push(function ArraySecond(req, res, next) {
        if (res.locals.arrayFirst) res.locals.arraySecond = true;
        next();
    });
    
    return middleware;
};
