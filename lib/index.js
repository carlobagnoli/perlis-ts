'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var mcomp = function (f, g) { return function (x) { return f(g(x)); }; };
var ccomp = function (f) { return function (g) { return function (x) { return f(g(x)); }; }; };
var comp = function () {
    var f = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        f[_i] = arguments[_i];
    }
    return f.reduce(mcomp);
};
var mpipe = function (f, g) { return mcomp(g, f); };
var cpipe = function (f) { return function (g) { return mcomp(g, f); }; };
var pipe = function () {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    return x.reduce(pipe);
};
var id = function (x) { return x; };
var constant = function (x) { return function () { return x; }; };
var call = function (f) { return f(); };
var scomb = function (f, g, x) { return f(x, g(x)); };
var cscomb = function (f) { return function (g) { return function (x) { return f(x, g(x)); }; }; };
var first = function (x) { return x[0]; };
var last = function (x) { return x.slice(-1)[0]; };
var rest = function (x) { return x.slice(1); };
var init = function (x) { return x.slice(0, -1); };
var foldl = function (x, f, init) { return Array.prototype.reduce.bind(x)(f, init); };
var foldl1 = function (x, f) { return Array.prototype.reduce.bind(x)(f); };
var cfoldl = function (x) { return function (f) { return function (init) { return Array.prototype.reduce.bind(x)(f, init); }; }; };
var cfoldl1 = function (x) { return function (f) { return Array.prototype.reduce.bind(x)(f, init); }; };
var foldr = function (x, f, init) { return Array.prototype.reduceRight.bind(x)(f, init); };
var foldr1 = function (x, f) { return Array.prototype.reduceRight.bind(x)(f); };
var cfoldr = function (x) { return function (f) { return function (init) { return Array.prototype.reduceRight.bind(x)(f, init); }; }; };
var cfoldr1 = function (x) { return function (f) { return Array.prototype.reduceRight.bind(x)(f, init); }; };

exports.call = call;
exports.ccomp = ccomp;
exports.cfoldl = cfoldl;
exports.cfoldl1 = cfoldl1;
exports.cfoldr = cfoldr;
exports.cfoldr1 = cfoldr1;
exports.comp = comp;
exports.constant = constant;
exports.cpipe = cpipe;
exports.cscomb = cscomb;
exports.first = first;
exports.foldl = foldl;
exports.foldl1 = foldl1;
exports.foldr = foldr;
exports.foldr1 = foldr1;
exports.id = id;
exports.init = init;
exports.last = last;
exports.mcomp = mcomp;
exports.mpipe = mpipe;
exports.pipe = pipe;
exports.rest = rest;
exports.scomb = scomb;
