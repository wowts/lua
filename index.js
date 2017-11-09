"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ipairs(a) {
    const pairs = [];
    for (let i = 1;; i++) {
        if (!a[i])
            break;
        pairs.push([i, a[i]]);
    }
    return pairs;
}
exports.ipairs = ipairs;
function pairs(a) {
    const pairs = [];
    for (let k in a) {
        pairs.push([k, a[k]]);
    }
    return pairs;
}
exports.pairs = pairs;
function next(a) {
    for (let k in a) {
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
    if (typeof (a) === "undefined") {
        return undefined;
    }
    return "table";
}
exports.type = type;
function wipe(x) {
    const keys = [];
    for (let i in x) {
        keys.push(i);
    }
    for (const k of keys) {
        delete x[k];
    }
}
exports.wipe = wipe;
function assert(condition, message) {
    if (!condition) {
        throw new Error("assert " + condition);
    }
}
exports.assert = assert;
function unpack(t, first, count) {
    const ret = [];
    for (let i = first || 1;; i++) {
        if (count === undefined) {
            if (ret[i] === undefined)
                break;
        }
        else {
            if (count == 0)
                break;
            count--;
        }
        ret.push(t[i]);
    }
    return ret;
}
exports.unpack = unpack;
function tostringall(...text) {
    return text.map(x => x.toString());
}
exports.tostringall = tostringall;
function select(index, t) {
    if (index == "#")
        return t.length;
    return t[index];
}
exports.select = select;
function strjoin(separator, ...text) {
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
    const index = metatable.__index;
    if (index) {
        const handler = {
            get: (target, key) => {
                return key in target ? target[key] : index(target, key);
            }
        };
        return new Proxy(table, handler);
    }
    return table;
}
exports.setmetatable = setmetatable;
function loadstring(t) { throw Error("Not implemented"); }
exports.loadstring = loadstring;
function lualength(array) {
    if (typeof (array) === "string")
        return array.length;
    let length = 0;
    for (let i = 1;; i++) {
        if (array[i] === undefined) {
            length = i - 1;
            break;
        }
    }
    return length;
}
exports.lualength = lualength;
function truthy(a) {
    return a.length > 0;
}
exports.truthy = truthy;
exports._G = {};
