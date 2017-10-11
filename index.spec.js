"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const index_1 = require("./index");
ava_1.test("length of a two items array", t => {
    // Arrange
    const array = { 1: "first", 2: "second" };
    // Act
    const result = index_1.lualength(array);
    // Assert
    t.is(result, 2);
});
ava_1.test("length of a two items array with a hole", t => {
    // Arrange
    const array = { 1: "first", 3: "second" };
    // Act
    const result = index_1.lualength(array);
    // Assert
    t.is(result, 1);
});
ava_1.test("length of an empty array", t => {
    // Arrange
    const array = {};
    // Act
    const result = index_1.lualength(array);
    // Assert
    t.is(result, 0);
});
