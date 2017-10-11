"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ipairs(a) {
    var pairs = [];
    for (var k in a) {
        pairs.push([parseInt(k), a[k]]);
    }
    return pairs.sort(function (x, y) { return x[0] < y[0] ? -1 : (x[0] == y[0] ? 0 : 1); });
}
exports.ipairs = ipairs;
function pairs(a) {
    var pairs = [];
    for (var k in a) {
        pairs.push([k, a[k]]);
    }
    return pairs;
}
exports.pairs = pairs;
function next(a) {
    for (var k in a) {
        return [k, a[k]];
    }
    return undefined;
}
exports.next = next;
function tonumber(a) {
    return parseInt(a);
}
exports.tonumber = tonumber;
function tostring(s) {
    return s.toString();
}
exports.tostring = tostring;
function type(a) {
    if (typeof (a) === "number") {
        return "number";
    }
    if (typeof (a) === "string") {
        return "string";
    }
    if (typeof (a) === "function") {
        return "function";
    }
    if (typeof (a) === "boolean") {
        return "boolean";
    }
    return "table";
}
exports.type = type;
function wipe(x) {
    var keys = [];
    for (var i in x) {
        keys.push(i);
    }
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var k = keys_1[_i];
        delete x[k];
    }
}
exports.wipe = wipe;
function assert(condition) {
}
exports.assert = assert;
function unpack(t, first, count) {
    return undefined;
}
exports.unpack = unpack;
function tostringall() {
    var text = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        text[_i] = arguments[_i];
    }
    return text.map(function (x) { return x.toString(); });
}
exports.tostringall = tostringall;
function select(index, t) {
    if (index == "#")
        return t.length;
    return t[index];
}
exports.select = select;
function strjoin(separator) {
    var text = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        text[_i - 1] = arguments[_i];
    }
    return text.join(separator);
}
exports.strjoin = strjoin;
function hooksecurefunc(table, methodName, hook) {
}
exports.hooksecurefunc = hooksecurefunc;
function error(error, info) { }
exports.error = error;
function rawset(table, key, value) { }
exports.rawset = rawset;
function setmetatable(table, metatable) {
    if (metatable.__index) {
        var handler = {
            get: function (target, key) {
                return key in target ? target[key] : metatable.__index(target, key);
            }
        };
        return new Proxy(table, handler);
    }
    return table;
}
exports.setmetatable = setmetatable;
function loadstring(t) { return undefined; }
exports.loadstring = loadstring;
//# sourceMappingURL=index.js.map