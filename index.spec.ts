import { test } from "ava";
import { LuaArray, lualength, pack, tonumber } from "./index";

test("length of a two items array", (t) => {
    // Arrange
    const array: LuaArray<string> = { 1: "first", 2: "second" };

    // Act
    const result = lualength(array);

    // Assert
    t.is(result, 2);
});

test("length of a two items array with a hole", (t) => {
    // Arrange
    const array: LuaArray<string> = { 1: "first", 3: "second" };

    // Act
    const result = lualength(array);

    // Assert
    t.is(result, 1);
});

test("length of an empty array", (t) => {
    // Arrange
    const array: LuaArray<string> = {};

    // Act
    const result = lualength(array);

    // Assert
    t.is(result, 0);
});

test("tonumber of a number returns a number", (t) => {
    // Act
    const result = tonumber("18");

    // Assert
    t.is(result, 18);
});

test("tonumber of a decimal number returns a number", (t) => {
    // Act
    const result = tonumber("18.5");

    // Assert
    t.is(result, 18.5);
});

test("tonumber of a string returns 0", (t) => {
    // Act
    const result = tonumber("toto");

    // Assert
    t.is(result, 0);
});

test("pack", (t) => {
    // Act
    const result = pack(3, 4, 5);

    // Assert
    t.deepEqual(result, { 1: 3, 2: 4, 3: 5 });
});
