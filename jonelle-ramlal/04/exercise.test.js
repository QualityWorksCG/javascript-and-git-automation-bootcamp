describe('04', () => {
    test('Check if an array of 3 items, contains a 5 or 2', () => {

        const arrayIncludes5Or2 = (array) => {
            //if arrayIncludes5Or2.length = 3{

                return (array.includes(5,0) || array.includes(2,0));
          
            //for (var i=0;i <= arrayIncludes5Or2.length;i++){
            //    if (arrayIncludes5Or2.at(i) == 2 || 5){
             //       return true
            //}
            
            // for (var i=0; i < 3; i++){
            //     if ((array[i] === 5) || (array[i] === 2)){
            //         return true
            //     }else{
            //         return false
            //     }
            // }

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