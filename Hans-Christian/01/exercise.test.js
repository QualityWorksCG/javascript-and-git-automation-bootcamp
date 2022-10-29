describe('Exercise 01', () => {
    test('01. Check if a positive number is a multiple of 5 or 9', () => {
        /**
         * You are expected to return a boolean value
         */

        function multipleOf5Or9(positiveNumber) {
            if (positiveNumber % 5 == 0 || positiveNumber % 9 == 0)
            {
                return true;
            }
            else {
                return false;
            }
        }
    
        else {
                return false;
            }
    }
            console.log(positiveNumber(10));
            console.log(positiveNumber(20));
            console.log(positiveNumber(21));
            console.log(positiveNumber(36));
            console.log(positiveNumber(22));
            console.log(positiveNumber(23));
        // Test cases
        expect(multipleOf5Or9(10)).toBe(true);
        expect(multipleOf5Or9(20)).toBe(true);
        expect(multipleOf5Or9(21)).toBe(false);
        expect(multipleOf5Or9(36)).toBe(true);
        expect(multipleOf5Or9(22)).toBe(false);
        expect(multipleOf5Or9(23)).toBe(false);
    });
});