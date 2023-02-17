//const { e } = require("vitest/dist/index-40e0cb97");

describe('03', () => {
    it('03. Check if any of two number is 6, if the sum of them makes 6 or if the difference is 6', () => {

        function isSix(x, y) {
            let sum = Math.abs(x + y) == 6;
            let sub = Math.abs(x - y) == 6;
            return (x == 6|| y == 6 || sub || sum)
            
        }

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