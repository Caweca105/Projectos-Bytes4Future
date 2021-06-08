import React from "react"
import './JogoDasDamas.css'
class JogoDasDamas extends React.Component {
    //ToDO
    // [x] Criar Tabuleiro
    // [o] Visualizar Tabuleiro
    // [] Implementar como as peças se movem (diagonais)
    // [] Implementar a dama (depois ela move-se em mais direções)
    // [] Verificar se jogo acabou
    //    [] Quando a ultima peça está presa
    //    [] Quando já não existem mais peças numa certa equipa 
    // [] Implementar o Vencedor
    // [] Implementar o Reset do Jogo
    constructor(props) {
      super(props) 
  
      this.state = {
        tabuleiro: [
          [" ", "x", " ", "x", " ", "x", " ", "x"],
          ["x", " ", "x", " ", "x", " ", "x", " "],
          [" ", "x", " ", "x", " ", "x", " ", "x"],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          ["o", " ", "o", " ", "o", " ", "o", " "],
          [" ", "o", " ", "o", " ", "o", " ", "o"],
          ["o", " ", "o", " ", "o", " ", "o", " "],
        ]
      }
      
      this.analisaJogada = this.analisaJogada.bind(this);
      this.clear = this.clear.bind(this)
    }
  
    clear() {
      this.setState({
        tabuleiro: [
          [" ", "x", " ", "x", " ", "x", " ", "x"],
          ["x", " ", "x", " ", "x", " ", "x", " "],
          [" ", "x", " ", "x", " ", "x", " ", "x"],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          ["o", " ", "o", " ", "o", " ", "o", " "],
          [" ", "o", " ", "o", " ", "o", " ", "o"],
          ["o", " ", "o", " ", "o", " ", "o", " "],
        ]
      })
    }
    render() { 
    return (
      <div className="Damas">
      <p>Jogador 2</p>
      <table>
          <tbody>
            {
              this.state.tabuleiro.map((linha, i) => (
                <tr key={i}>
                  {
                    linha.map((celula, j) => (
                      <td key={j}
                          onClick={() => this.analisaJogada(i + 1, j + 1)}>
                        {celula}
                      </td>
                    ))
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
        <p>Jogador1</p>
      </div>
      )
    }

    analisaJogada(linha, coluna) {
      this.setState((state) => {
        <div className="highlight"></div>
      })
    }
}
export default JogoDasDamas;