import {createSlice} from "@reduxjs/toolkit"


    name: "mancala",
    initialState: {
        board: [0, 3, 3, 3, 3, 3, 3],
               [3, 3, 3, 3, 3, 3, 0],
        currentPlayer: 1,
    },
    reducers: {
        selectPosition: (state, action) => {
            // TODO
            console.log(action.payload);
            const {i, j} = action.payload;

            let const board = state.board.slice(0)
                                     .map(l => l.slice(0))

            board[i][j] = 0
        },
        restartGame: (state) => {
            return {
                ...state,
                board1: [0, 3, 3, 3, 3, 3, 3],
                board2: [3, 3, 3, 3, 3, 3, 0],
                currentPlayer: 1,
            }
        }
    }
})

export const {selectPosition, restartGame} = slice.actions
export default slice.reducer