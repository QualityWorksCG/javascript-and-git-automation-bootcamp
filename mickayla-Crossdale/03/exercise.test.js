describe('03', () => {
    it('03. Check if any of two number is 6, if the sum of them makes 6 or if the difference is 6', () => {

        function isSix(x, y) {
            if ((x == 6 || y == 6) || (x + y == 6) || (Math.abs(x - y) == 6))
            {
            return true;
            }
            else{
                return false;
            }
        }
        console.log(isSix(6, 0))
        console.log(isSix(0, 6))
        console.log(isSix(3, 3))
        console.log(isSix(3, 4))
        console.log(isSix(3, 9))
        console.log(isSix(3, 3))
        console.log(isSix(3, 3))

        // Test cases
        expect(isSix(6, 0)).toBe(true);
        expect(isSix(0, 6)).toBe(true);
        expect(isSix(3, 3)).toBe(true);
        expect(isSix(3, 4)).toBe(false);
        expect(isSix(3, 9)).toBe(true);
        expect(isSix(3, 3)).toBe(true);
        expect(isSix(3, 3)).toBe(true);
    });
});