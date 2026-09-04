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
describe('Sistema de biblioteca', () => {
    describe('Livros', () => {

        // it(): cada um é UM caso de teste
        it('deve verificar se existem livros cadastrados', () => {

            // expect(valorRecebido).matcher(valorEsperado)
            expect(listarLivros() === 0).toBeFalsy();
        });

        //
        it('deve verificar se a lista possui a quantidade de livros esperada', () => {
            expect(listarLivros()).toHaveLength(4);
        });

        it('deve verificar se um livro específico pode ser encontrado', () => {
            expect(livroExiste('Harry Potter e a Pedra Filosofal')).toBeTruthy();
        });

        it('deve verificar se o título de um livro aparece na biblioteca', () => {
            const titulos = listarLivros().map((livro) => livro.titulo);
            expect(titulos).toContain('Harry Potter e a Pedra Filosofal');
        });

        it('deve verificar se um livro inexistente esta identificado corretamente', () => {
            expect(livroExiste()).toBeFalsy();
        });

        //???
        it('deve verificar se um livro pode ser cadastrado', () => {
            expect(cadastrarLivro()).toBe();
        });
    });

    describe('Disponibilidade', () => {

        it('deve verificar se um livro disponível é identificado como disponível', () => {
            expect(livroDisponivel()).toBeTruthy();
        });

        it('Não deve considerar um livro emprestado como disponível', () => {
            expect(livroDisponivel('One Piece, Vol. 1')).toBe(false);
        });

        it('Não deve tratar um livro inexistente como disponível', () => {
            const disponivel = livroDisponivel('Livro Fastama');
            expect(disponivel).toBeFalsy();
        });
    });

    describe('Quantidade', () => {

        it('A biblioteca deve informar corretamente a quantidade de livros', () => {
            const lista = listarLivros();
            const quantidadeLivros = contarLivros();
            expect(lista).toHaveLength(quantidadeLivros);
        });

        //não faço ideia????
        it('A quantidade de livros retornada deve ser coerente com a lista', () => {
            expect(contarLivros(contarLivros.length)).toBe(4);
        });
    });

    describe('Informações', () => {

        //acho q ta errado
        it('A biblioteca deve possuir nome', () => {
            expect(obterInformacoes('Biblioteca Codeverse')).toBe("string");
        });

        it('O nome da biblioteca deve ser o esperado', () => {
            expect(obterInformacoes()).toBe('Biblioteca Codeverse');
        });

        it('As informações retornadas devem possui a estrutura correta', () => {
            expect(obterInformacoes(obterInformacoes)).toEqual({
                nome: 'Biblioteca Codeverse',
                totalLivros: contarLivros(),
                cidade: 'London',
                provincia: 'ON'
            });
        });
    });

    describe('Taxas de atraso', () => {
        it('Deve adicionar 1.50 por dia de atraso na taxa', () => {
            const Taxa2Dias = calcularTaxaAtraso(2);
            expect(Taxa2Dias).toBeCloseTo(3.0);
        });
    });
});
