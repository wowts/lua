export interface LuaMap<TKey, TValue> {
    next(control:number):[TKey, TValue];
}

export interface LuaArray<T> {
    [key:number]:T;
}

export interface LuaObj<T> {
    [key: string]:T;
}

export function ipairs<T>(a:LuaArray<T>) {
    const pairs:[number, T][] = [];
    for (let i = 1; ; i++) {
        if (!a[i]) break;
        pairs.push([i, a[i]]);
    }
    return pairs;
}

export function pairs<T>(a:LuaObj<T>):[string, T][]
export function pairs<T, TValue>(a: LuaMap<T, TValue>):[T, TValue][]
export function pairs<T>(a:LuaArray<T>):[keyof typeof a, T][]
export function pairs<T>(a: T):[keyof typeof a, any][]
export function pairs<T = any>(a:T):[keyof typeof a, any][] {
    const pairs:[keyof typeof a, any][] = [];
    for (let k in a) {
        pairs.push([k, a[k]]);
    }
    return pairs;
}

export function next<T>(a:LuaArray<T>) {
    for (let k in a) {
        return [k, a[k]];
    }
    return undefined;
}

export function tonumber(a: any):number {
    return parseInt(a);
}

export function tostring(s: any): string {
    return s.toString();
}

export function type(a: any) : "table" | "number" | "string" | "function" | "boolean" | undefined {
    if (typeof(a) === "number") {
        return "number";
    }
    if (typeof(a) === "string") {
        return "string";
    }
    if (typeof(a) === "function") {
        return "function";
    }
    if (typeof(a) === "boolean") {
        return "boolean";
    }
    if (typeof(a) === "undefined") {
        return undefined;
    }
    return "table";
}

export function wipe(x: any) {
    const keys = [];
    for (let i in x) {
        keys.push(i);
    }
    for (const k of keys) {
        delete x[k];
    }
}

export function assert(condition: any, message?: string) {
    if (!condition) {
        throw new Error("assert " + condition);
    }
}

export function unpack<T>(t:LuaArray<T>, first?:number, count?:number):T[] {
    const ret:T[] = [];
    for(let i = first || 1;; i++) {
        if (count === undefined) {
            if (ret[i] === undefined) break;
        }
        else {
            if (count == 0) break;
            count --;
        }        
        ret.push(t[i]);
    }
    return ret;
}

export function tostringall(...text: object[]){
    return text.map(x => x.toString());
}

export function select<T>(index: "#", t: T[]): number;
export function select<T>(index: number, t: T[]): T;
export function select<T>(index: number|"#", t: T[]): T|number{
    if (index == "#") return t.length;
    return t[index];
}

export function strjoin(separator: string, ...text:string[]) {
    return text.join(separator);
}

export function hooksecurefunc(table:any, methodName:string, hook:(...args:any[])=>void) {
}

export function error(error:string, info:number):void{}
export function rawset(table: any, key:string, value:any){}
export function setmetatable<T extends object>(table: T, metatable: { __index?: (o:T, key:string) => any}):T { 
    const index = metatable.__index;
    if (index) {
        const handler = {
            get: (target: T, key: keyof T) => {
                return key in target ? target[key] : index(target, <string>key);
            }
        };
        return new Proxy(table, handler);
    }
    return table;
}
export function loadstring(t: string):() => any { throw Error("Not implemented") }

export function lualength<T>(array: (LuaArray<T>|string)):number {
    if (typeof (array) === "string") return array.length;
    let length = 0;
    for (let i = 1; ; i++){
        if (array[i] === undefined) {
            length = i - 1;
            break;
        }
    }
    return length;
}

export function truthy<T>(a: T[]) {
    return a.length > 0;
}

export const _G:any = {};