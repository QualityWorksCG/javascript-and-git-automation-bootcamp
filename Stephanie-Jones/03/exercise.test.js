
describe('03', () => {
    it('03. Check if any of two number is 6, if the sum of them makes 6 or if the difference is 6', () => {

        function isSix(x, y) {
            if(x==6 || y==6){
                return true;
            } else if(x+y==6){
                return true;
            }else if( Math.abs(x-y)==6){
                return true;
            } else{
                return false;
            }
            

        }

        // Test cases
        expect(isSix(6, 0)).toBe(true);
        expect(isSix(5, 10)).toBe(false);
        expect(isSix(0, 6)).toBe(true);
        expect(isSix(3, 3)).toBe(true);
        expect(isSix(3, 4)).toBe(false);
        expect(isSix(3, 9)).toBe(true);
        expect(isSix(3, 3)).toBe(true);
        expect(isSix(3, 3)).toBe(true);
    });
});