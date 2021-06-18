function computeBishopMoves(board, position) {

    const possibleMoves = [
            {line: position.line + 1, column: position.column + 1},
            {line: position.line + 1, column: position.column - 1},
            {line: position.line - 1, column: position.column + 1},
            {line: position.line - 1, column: position.column - 1},
            {line: position.line + 2, column: position.column - 2},
            {line: position.line + 2, column: position.column + 2},
            {line: position.line - 2, column: position.column - 2},
            {line: position.line - 2, column: position.column + 2},
            {line: position.line + 3, column: position.column + 3},
            {line: position.line + 3, column: position.column - 3},
            {line: position.line - 3, column: position.column + 3},
            {line: position.line - 3, column: position.column - 3},
            {line: position.line + 4, column: position.column + 4},
            {line: position.line + 4, column: position.column - 4},
            {line: position.line - 4, column: position.column + 4},
            {line: position.line - 4, column: position.column - 4},
            {line: position.line + 5, column: position.column + 5},
            {line: position.line + 5, column: position.column - 5},
            {line: position.line - 5, column: position.column + 5},
            {line: position.line - 5, column: position.column - 5},
            {line: position.line + 6, column: position.column + 6},
            {line: position.line + 6, column: position.column - 6},
            {line: position.line - 6, column: position.column + 6},
            {line: position.line - 6, column: position.column - 6},
            {line: position.line + 7, column: position.column + 7},
            {line: position.line + 7, column: position.column - 7},
            {line: position.line - 7, column: position.column + 7},
            {line: position.line - 7, column: position.column - 7}
        ]
    
        
      return possibleMoves.filter((e) => (e.line >= 0 && e.line <= 7) && (e.column >= 0 && e.column <= 7))
    }
    
    // position é um objeto: { line, column }
    // board é uma matriz que representa um tabuleiro de xadrez
    // todas as peças têm 2letras: 
    //  a primeira é o jogador (b ou w) 
    //  a segunda é a peça
    // por exemplo bb é um bispo preto (black bishop)