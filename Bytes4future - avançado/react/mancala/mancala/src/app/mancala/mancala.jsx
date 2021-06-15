import { useDispatch, useSelector } from "react-redux";
import React from "react"
import { restartGame } from "./mancalaSlice"

function Mancala() {
    const {tabuleiro} = useSelector(state => state.mancala);
    const dispatch = useDispatch();

    return (
    <div>
        <h1>Mancala</h1>

        <table>
            <tbody>
                {
                    board.map{(linha, i) => (
                        <tr key={i}>
                        {
                            linha.map((casa, j) => (
                                <td
                                    rowSpan={(i === 0 && j === 0)
                                    || (i === 0 && j === 7)
                                        ? 2 : 1}
                                    key={j}>
                                    { casa }
                                </td>
                            ))
                        }
                        </tr>
                    ))
                }
            </tbody>
        </table>

        <button onClick={() => dispatch(restartGame())}>
            Recomeçar
        </button>
    </div>
    )
}

export default Mancala;