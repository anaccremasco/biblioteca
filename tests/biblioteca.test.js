import {
    cadastrarLivro,
    livroExiste,
    livroDisponivel,
    listarLivros,
    contarLivros,
    obterInformacoes,
    calcularTaxaAtraso,
} from '../src/biblioteca.js';

describe('Sistema de biblioteca', () => {
    describe('Livros', () => {
        it('Verificar se existem livros cadastrados', () => {
            expect(listarLivros() === 0).toBeFalsy();
        });

        //
        it('Verificar se a lista possui a quantidade de livros esperada', () => {
            expect(listarLivros()).toHaveLength(5);
        });

        it('Verificar se um livro específico pode ser encontrado', () => {
            expect(livroExiste('Harry Potter e a Pedra Filosofal')).toBeTruthy();
        });

        it('verificar se o título de um livro aparece na biblioteca', () => {
            const titulos = listarLivros().map((livro) => livro.titulo);
            expect(titulos).toContain('Harry Potter e a Pedra Filosofal');
        });

        it('Verificar se um livro inexistente esta identificado corretamente', () => {
            expect(livroExiste()).toBeFalsy();
        });

        it('Cadastrar livro', () => {
            const livro = cadastrarLivro({
                titulo: 'O pequeno principe',
                autor: 'Antoine de Saint-Exupéry',
            });
            expect(livro.titulo).toBe('O pequeno principe');
            expect(livro.autor).toBe('Antoine de Saint-Exupéry');
        });
    });

    describe('Disponibilidade', () => {
        it('Verificar se um livro disponível é identificado como disponível', () => {
            expect(livroDisponivel('É Assim que Acaba')).toBeTruthy();
        });

        it('Não deve considerar um livro emprestado como disponível', () => {
            expect(livroDisponivel('One Piece, Vol. 1')).toBe(false);
        });

        it('Não deve tratar um livro inexistente como disponível', () => {
            expect(livroDisponivel()).toBeFalsy();
        });
    });

    describe('Quantidade', () => {
        it('A biblioteca deve informar corretamente a quantidade de livros', () => {
            expect(listarLivros()).toHaveLength(contarLivros());
        });

        it('A quantidade de livros retornada deve ser coerente com a lista', () => {
            expect(contarLivros()).toBe(listarLivros().length);
        });
    });

    describe('Informações', () => {
        
        it('A biblioteca deve possuir nome', () => {
            expect(typeof obterInformacoes().nome).toBe('string');
        });

        it('O nome da biblioteca deve ser o esperado', () => {
            expect(obterInformacoes().nome).toBe('Biblioteca Codeverse');
        });

        it('As informações retornadas devem possui a estrutura correta', () => {
            expect(obterInformacoes(obterInformacoes)).toEqual({
                nome: 'Biblioteca Codeverse',
                totalLivros: contarLivros(),
                cidade: 'London',
                provincia: 'ON',
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
