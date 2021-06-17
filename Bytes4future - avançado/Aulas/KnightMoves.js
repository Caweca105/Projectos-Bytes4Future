
function computeKnightMoves(board, position) {
    
    const positions = [
        { line: 2, column: 1},
        { line: 2, column: -1},
        { line: -2, column: -1},
        { line: -2, column: 1},
        { line: 1, column: 2},
        { line: 1, column: -2},
        { line: -1, column: 2},
        { line: -1, column: -2}
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
// por exemplo bk é um cavaleiro branco

console.log(computeKnightMoves([], { line: 7, column: 7}))