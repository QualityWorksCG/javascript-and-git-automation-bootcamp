describe("04", () => {
  test("Check if an array of 3 items, contains a 5 or 2", () => {
    const arrayIncludes5Or2 = (array) => {
      let found = false;
      for (const num of array) {
        if (num === 2 || num === 5) {
          found = true;
          break;
        }
      }
      return found;
    };

    // Test cases
    expect(arrayIncludes5Or2([1, 2, 3])).toBe(true);
    expect(arrayIncludes5Or2([1, 4, 3])).toBe(false);
    expect(arrayIncludes5Or2([1, 4, 5])).toBe(true);
    expect(arrayIncludes5Or2([1, 4, 6])).toBe(false);
    expect(arrayIncludes5Or2([1, 4, 7])).toBe(false);
    expect(arrayIncludes5Or2([1, 4, 8])).toBe(false);
    expect(arrayIncludes5Or2([1, 4, 9])).toBe(false);
  });
});
