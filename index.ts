export interface LuaMap<TKey, TValue> {
    next(control: number): [TKey, TValue];
}

export interface LuaArray<T> {
    [key: number]: T;
}

export interface LuaObj<T> {
    [key: string]: T;
}

export function ipairs<T>(a: LuaArray<T>) {
    const pairs: [number, T][] = [];
    for (let i = 1; ; i++) {
        if (!a[i]) break;
        pairs.push([i, a[i]]);
    }
    return pairs;
}

export function pairs<T, TValue>(a: LuaMap<T, TValue>): [T, TValue][];
export function pairs<T>(a: LuaObj<T>): [string, Diff<T, undefined>][];
export function pairs<T>(a: LuaArray<T>): [number, Diff<T, undefined>][];
export function pairs<T>(a: LuaObj<T>): [keyof typeof a, T][] {
    const pairs: [keyof typeof a, T][] = [];
    for (let k in a) {
        pairs.push([k, a[k]]);
    }
    return pairs;
}

declare type Diff<T, U> = T extends U ? never : T;
export function kpairs<T>(
    a: T
): [keyof typeof a, Diff<T[keyof typeof a], undefined>][] {
    const pairs: [
        Extract<keyof typeof a, string>,
        Diff<T[keyof typeof a], undefined>
    ][] = [];
    for (let k in a) {
        pairs.push([k, a[k] as any]);
    }
    return pairs;
}

export function next<T>(a: T) {
    for (let k in a) {
        return [k, a[k]];
    }
    return undefined;
}

export function tonumber(a: any): number {
    const result = parseFloat(a);
    return isNaN(result) ? 0 : result;
}

export function tostring(s: any): string {
    return s.toString();
}

export function type(
    a: any
): "table" | "number" | "string" | "function" | "boolean" | undefined {
    if (typeof a === "number") {
        return "number";
    }
    if (typeof a === "string") {
        return "string";
    }
    if (typeof a === "function") {
        return "function";
    }
    if (typeof a === "boolean") {
        return "boolean";
    }
    if (typeof a === "undefined") {
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

export function unpack<T>(
    t: LuaArray<T>,
    first?: number,
    count?: number
): (T | undefined)[] {
    const ret: (T | undefined)[] = [];
    for (let i = first || 1; ; i++) {
        if (count === undefined) {
            if (t[i] === undefined) break;
        } else {
            if (count == 0) break;
            count--;
        }
        ret.push(t[i]);
    }
    return ret;
}

export function tostringall(...text: object[]) {
    return text.map((x) => (x === undefined ? "nil" : x.toString()));
}

export function select<T>(index: "#", t: T[]): number;
export function select<T>(index: number, t: T[]): T;
export function select<T>(index: number | "#", t: T[]): T | number {
    if (index == "#") return t.length;
    return t[index - 1];
}

export function strjoin(separator: string, ...text: string[]) {
    return text.join(separator);
}

export function hooksecurefunc(
    table: any,
    methodName: string,
    hook: (...args: any[]) => void
) {}

export function error(error: string, info: number): void {}
export function rawset(table: any, key: string, value: any) {}
export function setmetatable<T extends object>(
    table: T,
    metatable: { __index?: (o: T, key: string) => any }
): T {
    const index = metatable.__index;
    if (index) {
        const handler = {
            get: (target: T, key: keyof T) => {
                return key in target ? target[key] : index(target, <string>key);
            },
        };
        return new Proxy(table, handler);
    }
    return table;
}
export function loadstring(t: string): () => any {
    throw Error("Not implemented");
}

export function lualength<T>(array: LuaArray<T> | string): number {
    if (typeof array === "string") return array.length;
    let length = 0;
    for (let i = 1; ; i++) {
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

type ArrayElement<T extends any[]> = T extends (infer U)[] ? U : never;

export function pack<T extends any[]>(...args: T): LuaArray<ArrayElement<T>> {
    let i = 1;
    let result: LuaArray<ArrayElement<T>> = {};
    for (const k of args) {
        result[i++] = k;
    }
    return result;
}

export const _G: any = {};
