function computeBishopMoves(board, position) {

    const positions = [
    { line: 0, column: 0 },
    { line: 1, column: 1 },
    { line: 2, column: 2 },
    { line: 3, column: 3 },
    { line: 4, column: 4 },
    { line: 5, column: 5 },
    { line: 6, column: 6 }
    ]

    return positions.map(p => ({
        line: p.line + position.line,
        column: p.column + position.column
    }))
        .filter(o => o.column >= 0 && o.line >= 0 && o.column <= 7 && o.line <= 7)
}

// position é um objeto: { line, column }
// board é uma matriz que representa um tabuleiro de xadrez
// todas as peças têm 2letras: 
//  a primeira é o jogador (b ou w) 
//  a segunda é a peça
// por exemplo bb é um bispo preto (black bishop)