const {Livro, adicionarLivro, livros, removerLivro} = require('./livro')

test('Adicionar novo livro', () => {
    const livro = new Livro('A pedra Filosofal', 'Jk Rowling', 2001)
    adicionarLivro(livro)

    expect(livros).toContain(livro)
})

test('Remover livro pelo titulo', () => {
    const livro = new Livro('A pedra Filosofal', 'Jk Rowling', 2001)
    adicionarLivro(livro)

const resultado = removerLivro('A pedra Filosofal')

    expect(livros).toContain(livro)
})