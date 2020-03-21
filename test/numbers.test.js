const Numbers = require('../lib/numbers');
const n = new Numbers();

describe('Numbers', () => {
    test('só números negativos', () => {
        expect(n.num([], -1, -3, -5))
            .toBe(-1);
    });

    test('só números positivos', () => {
        expect(n.num([], 10, 5, 12))
            .toBe(-1);
    });

    test('só números neutros/zero', () => {
        expect(n.num([], 0, 0, 0))
            .toBe(-1);
    });    
});