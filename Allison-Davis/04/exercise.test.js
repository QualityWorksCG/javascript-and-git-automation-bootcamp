describe('04', () => {
    test('Check if an array of 3 items, contains a 5 or 2', () => {


        const arrayIncludes5Or2 = (array) => {
            // Your code here
            // let i = 0;
            // for (i = 0; i < this.length; i++) {
            //     if (array[i] == 5 || array[i] == 2) {
            //         return true;
            //     } else if (i == this.length - 1) {
            //         return false;
            //     }
            // }
            if (array.includes(5)) {
                return true;
            } else if (array.includes(2)) {
                return true;
            } else {
                return false;
            }

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