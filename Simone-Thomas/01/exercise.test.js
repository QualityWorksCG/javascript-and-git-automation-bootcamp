describe('Exercise 01', () => {
    test('01. Check if a positive number is a multiple of 5 or 9', () => {
        /**
         * You are expected to return a boolean value
         */

         function multipleOf5Or9(positiveNumber) {
            // Your code here
            if (positiveNumber % 5 == 0 || positiveNumber % 9 == 0) 
                {
                    return true;
                } 
            else {
                     return false;
                 }

        }

        // Test cases
        expect(multipleOf5Or9(10));
        expect(multipleOf5Or9(20));
        expect(multipleOf5Or9(21));
        expect(multipleOf5Or9(36));
        expect(multipleOf5Or9(22));
        expect(multipleOf5Or9(23));
    });
});