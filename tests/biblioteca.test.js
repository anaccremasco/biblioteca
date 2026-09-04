import {
    cadastrarLivro,
    livroExiste,
    livroDisponivel,
    listarLivros,
    contarLivros,
    obterInformacoes,
    calcularTaxaAtraso,
} from '../src/biblioteca.js';

// describe() agrupa testes relacionados em um bloco
describe('Livros', () => {

    // it(): cada um é UM caso de teste
    it('deve verificar se existem livros cadastrados', () => {
        
        // expect(valorRecebido).matcher(valorEsperado)
        expect(listarLivros() === 0).toBeFalsy();
    });

    //
    it('deve verificar se a lista possui a quantidade de livros espearada', () => {
         expect(listarLivros()).toHaveLength(4);
    });

     it('deve verificar se um livro específico pode ser encontrado', () => {
         expect(livroExiste('Harry Potter e a Pedra Filosofal')).toBeTruthy();
    });

     it('deve verificar se o título de um livro aparece na bibliotca', () => {
         expect(listarLivros()).toContain('Harry Potter e a Pedra Filosofal');
    });

     it('deve verificar se um livro inexistente esta identificado corretamente', () => {
         expect(livroExiste()).toBeFalsy();
    });
});

describe('Disponibilidade', () => {

     it('deve verificar se um livro disponível é identificado como disponível', () => {
         expect(livroDisponivel()).toBeTruthy();
    });

     it('Não deve considerar um livro emprestado como disponível', () => {
         expect(livroDisponivel("Percy Jackson e o Ladrão de Raios")).toBeFalsy();
    });

     it('Não deve tratar um livro iexistente como disponível', () => {
         expect(livroDisponivel()).toBeFalsy();
    });
});

    describe('Quantidade', () => {

        it('A biblioteca deve informar corretamente a quantidade de livros', () => {
         expect(contarLivros()).toBe(4);
    });

    //não faço ideia????
     it('A quantidade de livros retornada deve ser coerente com a lista', () => {
         expect(contarLivros(contarLivros.length)).toBe(4);
    });
});

 describe('Informações', () => {

    //acho q ta errado
      it('A biblioteca deve possuir nome', () => {
         expect(obterInformacoes()).toBe("string");
    });

    it('O nome da biblioteca deve ser o esperado', () => {
         expect(obterInformacoes()).toBe('Biblioteca Codeverse');
    });

     it('As informações retornadas devem possui a estrutura correta', () => {
          expect(obterInformacoes(obterInformacoes)).toEqual({
            nome: 'Biblioteca Codeverse',
            totalLivros: contarLivros(),
            cidade: 'London',
            provincia: 'ON'});
    });

    //Taxa e cadastro de livros



     it('toEqual() compara objetos e arrays por atributos', () => {
        expect(obterInformacoes(obterInformacoes)).toEqual({ nome: 'Ana' });
    });





   

    //Verificar se existe
    it('toContain() verifica se um array ou string contém um item/trecho', () => {
        expect([1, 2, 3]).toContain(2);
        expect('JavaScript').toContain('Script');
    });

    //Verificar se esta esta disponivel
    it('toBeTruthy() verifica se o valor é "verdadeiro" (truthy)', () => {
        expect(1).toBeTruthy();
    });

    it('toBeFalsy() verifica se o valor é "falso" (falsy: 0, "", null, undefined, NaN, false)', () => {
        expect(0).toBeFalsy();
    });

    //Contar a quantidade
    it('toHaveLength() verifica o tamanho (length) de um array ou string', () => {
        expect(contarLivros[(1, 2, 3)]).toHaveLength(3);
        expect('abc').toHaveLength(3);
    });

    //calcular
    it('toBeCloseTo() compara números decimais evitando erros de ponto flutuante', () => {
        expect(0.1 + 0.2).toBeCloseTo(0.3);
    });
});
