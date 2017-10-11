import { test } from "ava";
import { LuaArray, lualength } from "./index";

test("length of a two items array", t => {
    // Arrange
    const array:LuaArray<string> = { 1: "first", 2: "second" };

    // Act
    const result = lualength(array);

    // Assert
    t.is(result, 2);
});

test("length of a two items array with a hole", t => {
    // Arrange
    const array:LuaArray<string> = { 1: "first", 3: "second" };

    // Act
    const result = lualength(array);

    // Assert
    t.is(result, 1);
});


test("length of an empty array", t => {
    // Arrange
    const array:LuaArray<string> = {};

    // Act
    const result = lualength(array);

    // Assert
    t.is(result, 0);
});