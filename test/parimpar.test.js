const ParImpar = require('../lib/parimpar');
const num = new ParImpar();

describe('ParImpar', () => {
    test('só números pares', () => {
        expect(num.verif([], 2, 4, 8, 14))
            .toBe(-1);
    });

    test('só números ímpares', () => {
        expect(num.verif([], 5, 7, 15, 19))
            .toBe(-1);
    });   
});