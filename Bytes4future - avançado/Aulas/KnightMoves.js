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
    
    // position ?? um objeto: { line, column }
    // board ?? uma matriz que representa um tabuleiro de xadrez
    // todas as pe??as t??m 2letras: 
    //  a primeira ?? o jogador (b ou w) 
    //  a segunda ?? a pe??a
    // por exemplo bb ?? um bispo preto (black bishop)