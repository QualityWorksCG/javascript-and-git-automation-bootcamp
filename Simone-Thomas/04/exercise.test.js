describe('04', () => {
    test('Check if an array of 3 items, contains a 5 or 2', () => {

        const arrayIncludes5Or2 = (array) => {
            // Your code here
            
            if (array.includes (5)||array.includes (2) )
            return true;

          return false;   
                  
       

        }

        // Test cases
        expect(arrayIncludes5Or2([1, 2, 3]));
        expect(arrayIncludes5Or2([1, 4, 3]));
        expect(arrayIncludes5Or2([1, 4, 5]));
        expect(arrayIncludes5Or2([1, 4, 6]));
        expect(arrayIncludes5Or2([1, 4, 7]));
        expect(arrayIncludes5Or2([1, 4, 8]));
        expect(arrayIncludes5Or2([1, 4, 9]));
    });
});