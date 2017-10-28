export interface LuaArray<T> {
    [key: number]: T;
}
export interface LuaObj<T> {
    [key: number]: T;
    [key: string]: T;
}
export declare function ipairs<T>(a: LuaArray<T>): [number, T][];
export declare function pairs<T = any>(a: LuaObj<T>): [string, T][];
export declare function pairs<T = any>(a: LuaArray<T>): [number, T][];
export declare function next<T>(a: LuaArray<T>): (string | T)[] | undefined;
export declare function tonumber(a: any): number;
export declare function tostring(s: any): string;
export declare function type(a: any): "table" | "number" | "string" | "function" | "boolean" | undefined;
export declare function wipe(x: any): void;
export declare function assert(condition: any, message?: string): void;
export declare function unpack<T>(t: LuaArray<T>, first?: number, count?: number): T[];
export declare function tostringall(...text: object[]): string[];
export declare function select<T>(index: "#", t: T[]): number;
export declare function select<T>(index: number, t: T[]): T;
export declare function strjoin(separator: string, ...text: string[]): string;
export declare function hooksecurefunc(table: any, methodName: string, hook: (...args: any[]) => void): void;
export declare function error(error: string, info: number): void;
export declare function rawset(table: any, key: string, value: any): void;
export declare function setmetatable<T extends object>(table: T, metatable: {
    __index?: (o: T, key: string) => any;
}): T;
export declare function loadstring(t: string): () => void;
export declare function lualength<T>(array: (LuaArray<T> | string)): number;
export declare function truthy<T>(a: T[]): boolean;
export declare const _G: any;
