"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ipairs(a) {
    const pairs = [];
    for (let k in a) {
        pairs.push([parseInt(k), a[k]]);
    }
    return pairs.sort((x, y) => x[0] < y[0] ? -1 : (x[0] == y[0] ? 0 : 1));
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
function assert(condition) {
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
    if (metatable.__index) {
        const handler = {
            get: (target, key) => {
                return key in target ? target[key] : metatable.__index(target, key);
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
    if (!array.n) {
        for (let i = 1;; i++) {
            if (!array[i]) {
                array.n = i;
                break;
            }
        }
    }
    return array.n;
}
exports.lualength = lualength;
