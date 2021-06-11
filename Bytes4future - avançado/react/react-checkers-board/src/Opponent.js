import {ReactCheckers} from './ReactCheckers.js';

export class Opponent extends ReactCheckers {

    getComputerMoves(boardState, player) {
        const self = this;
        let computerMoves = {};

        for (const coordinates in boardState) {
            if (!boardState.hasOwnProperty(coordinates)) {
                continue;
            }

            const currentSquare = boardState[coordinates];

            if (currentSquare == null) {
                continue;
            }

            if (currentSquare.player !== player) {
                continue;
            }

            const pieceMoves = self.getMoves(boardState, coordinates, boardState[coordinates].isKing, false);

            if (pieceMoves[0].length > 0 || pieceMoves[1] !== null) {
                computerMoves[coordinates] = pieceMoves;
            }
        }

        return computerMoves;
    }
}