function computeBishopMoves(board, position) {
    let moves = []
    const player = board[position.line][position.column][0]

    const dirs = [
        { line: 1, column: 1 },
        { line: -1, column: 1},
        { line: 1, column: -1},
        { line: -1, column: -1}
    ]

    for (const { line, column } of dirs) {
        for (let i = 1; i < 8; i++) {
            const l = position.line + line * i
            const c = position.column + column * i

            if (l < 0 || l > 7 || c < 0 || c > 7) break;

            const casa = board[l][c]
            if (casa === "") {
                moves.push({ line: l, column: c})
            } else {
                if (eAdversario(casa, player)) {
                    moves.push({ line: l, column: c})
                }
                break;
            }
        }
    }
    return moves;
}

function eJogador(casa, player) {
    return casa[0] === player
}

function eAdversario(casa, player) {
    return casa[0] !== player
}

// position é um objeto: { line, column }
// board é uma matriz que representa um tabuleiro de xadrez
// todas as peças têm 2letras: 
//  a primeira é o jogador (b ou w) 
//  a segunda é a peça
// por exemplo bb é um bispo preto (black bishop)