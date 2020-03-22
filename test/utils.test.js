const { gerarNumeroAleatorio, acharCaracter } = require('../lib/utils');

describe('Utils', () => {
    describe('gerarNumeroAleatorio', () => {
        test('fim ou inicio nao podem ser negativos', () => {
            expect(gerarNumeroAleatorio(20, -5))
                .toBe(-1);
        });

        test('inicio não pode ser maior que o fim', () => {
            expect(gerarNumeroAleatorio(8, 3))
                .toBe(-1);
        });

       /* test('tudo correto', () => {
            expect(gerarNumeroAleatorio(2, 3))   //podemos adicionar este teste para cobrir mais linhas,
                .toBe(2);             //porém se tratando de número aleatório fica difícil acertar o retorno.
        }); */
    });
    
    describe('acharCaracter', () => {
        test('comprimento invalido', () => {
            expect(acharCaracter(-4, 'abcde', 'c'))
                .toBe('comprimento invalido');
        });

        test('comprimento fornecido diferente do comprimento real', () => {
            expect(acharCaracter(6, 'abcde'))
                .toBe('comprimento fornecido diferente do comprimento real');
        });

        test('caracter encontrado', () => {
            expect(acharCaracter(5, 'abcde', 'c'))
            .toBe('caracter encontrado');
        });
    });    
});