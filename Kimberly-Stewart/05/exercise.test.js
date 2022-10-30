describe('05', () => {
    it('Take an array of any length and add all elements to return a sum', () => {


        const sum = (array) => {
            // Your code here

        }

        // Test cases
        expect(sum([1, 2, 3])).toBe(6);
        expect(sum([1, 4, 3, 50, 10])).toBe(68);
        expect(sum([1, 4, 5, 6, 7, 8, 9, 10])).toBe(50);
        expect(sum([1, 4, 6, 7, 8, 9, 10])).toBe(45);
        expect(sum([1, 4, 7, 8, 9, 10])).toBe(39);
        expect(sum([1, 4, 8, 9, 10])).toBe(32);
    });
})