describe('Exercise 03', () => {
    it('03. Check if any of two number is 6, if the sum of them makes 6 or if the difference is 6', () => {

        function isSix(x, y) {
            let result = arrayH[1] - arrayH[0];

let x, y;
for (i = arrayC.length - 1; x >= 1; x--) { 
    for (y = arrayC.length - 1; y >= 1; y--) { 
        if (x !== y) {
            if (
                arrayC[x] - arrayC[y] === resul/t 
                || arrayC[x] + arrayC[y] === result
            ) return [arrayC[x], arrayC[y]];

        }
    
    
    console.log(result);


        // Test cases
        expect(isSix(6, 0)).toBe(true);
        expect(isSix(0, 6)).toBe(true);
        expect(isSix(3, 3)).toBe(true);
        expect(isSix(3, 4)).toBe(false);
        expect(isSix(3, 9)).toBe(true);
        expect(isSix(3, 3)).toBe(true);
        expect(isSix(3, 3)).toBe(true);
     
    };
});