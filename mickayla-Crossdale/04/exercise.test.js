describe('04', () => {
    test('Check if an array of 3 items, contains a 5 or 2', () => {

        const arrayIncludes5Or2 = (array) => {

        

            let has5= array.includes(5);
            let has2=array.includes(2);

            return has5 ||  has2;

        }

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