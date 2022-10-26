describe('04', () => {
    test('Check if an array of 3 items, contains a 5 or 2', () => {

        const arrayIncludes5Or2 = (array) => {
            // Your code here
            for (let i=0; i<arrayIncludes5Or2.length ; i++){
                if(arrayIncludes5Or2[i] == 5 || arrayIncludes5Or2 ==2){
                    return true
                }else{
                    return false
                }
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