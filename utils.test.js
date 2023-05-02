import strictEquals from "./utils.js";
import getEquality from "./utils.js";

describe("Given a strictEquals function", () => {
  describe("When it receives as values, 1 and 1", () => {
    test("Then it should return true", () => {
      const value1 = 1;
      const value2 = 1;
      const calculate = strictEquals(value1, value2);
      const expectedResult = true;

      expect(calculate).toBe(expectedResult);
    });
  });

  describe("When it receive two values NaN AND NaN", () => {
    test("It should return false", () => {
      const value1 = NaN;
      const value2 = NaN;
      const calculate = strictEquals(value1, value2);
      const expectedResult = false;

      expect(calculate).toBe(expectedResult);
    });
  });
  describe("When it receive two values 0 , -0", () => {
    test("It should return true", () => {
      const value1 = 0;
      const value2 = -0;
      const calculate = strictEquals(value1, value2);
      const expectedResult = true;

      expect(calculate).toBe(expectedResult);
    });
  });
  describe("When it receives as value, -0 and 0", () => {
    test("Then it should return true", () => {
      const value1 = -0;
      const value2 = 0;
      const calculate = strictEquals(value1, value2);
      const expectedResult = true;

      expect(calculate).toBe(expectedResult);
    });
  });
  describe("When it receives as value, 1 and '1'", () => {
    test("Then it should return false", () => {
      const value1 = 1;
      const value2 = `1`;
      const calculate = strictEquals(value1, value2);
      const expectedResult = false;

      expect(calculate).toBe(expectedResult);
    });
  });
  describe("When it receives as value, true and false", () => {
    test("Then it should return false", () => {
      const value1 = true;
      const value2 = false;
      const calculate = strictEquals(value1, value2);
      const expectedResult = false;

      expect(calculate).toBe(expectedResult);
    });
  });
  describe("When it receives as value, false and false", () => {
    test("Then it should return false", () => {
      const value1 = false;
      const value2 = false;
      const calculate = strictEquals(value1, value2);
      const expectedResult = true;

      expect(calculate).toBe(expectedResult);
    });
  });
  describe("When it receives as value, water and oil", () => {
    test("Then it should return false", () => {
      const value1 = "Water";
      const value2 = "oil";
      const calculate = strictEquals(value1, value2);
      const expectedResult = false;

      expect(calculate).toBe(expectedResult);
    });
  });
});
