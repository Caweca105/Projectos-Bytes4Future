# Implementa o Jogo de Damas usando o **React**
## Regras

- Cada peça que não seja dama só pode avançar uma casa na diagonal;
- As peças só se tornam damas quando chegam à última linha do tabuleiro;
- As damas podem avançar mais do que uma casa em qualquer diagonal;
- Uma peça do jogador adversário pode ser comida se uma das diagonais atrás de si estiver livre;
- O primeiro jogador a ficar sem peças perde o jogo.

## Passo a Passo
### 1. Tabuleiro

Para se construir o tabuleiro segui-se a ideia do tabuleiro do xadrez em que as colunas estão identificadas de *a a h* e as linhas de *1 a 8* tal como na figura 
![tabuleiro](https://www.centroxogo.pt/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/1/8/187T137_1.jpg)
definindo-se primeiro as colunas e de seguida inicou-se o tabuleiro já com a identificação onde cada jogador iria se encontrar no inicio do jogo (initPlayers), implementou-se a peça (createPiece) consoante o jogador, a localizaçao e colocou-se a propriedade dama a falso. 
De seguida implemetou-se o handleClik que tinha a condição de se o utilizador carregava na peça ou seja `!== null` não poderia clicar na peça do adversário, não pode escolher uma peça que ja se moveu. Por fim o movimento das peças.
### 2. Peças

#### 2.1 Movimento

As opções em que as peças se movem é [linha + 1][coluna + 1] ou entao [linha + 1][coluna - 1].
    Implementou-se a função getCorners que recebia como argumento as coordenadas das peças e verificava o seu movimento nos cantos do tabuleiro.
De seguida coloca-se a as condições em que a peça era comida e posteriormente a sua remoção do tabuleiro.
Por ultimo, a função shouldKing que verifica as condições para converter uma peça em dama de modo a que esta tivesse mais hipoteses de movimento.

### 4. Vencedor

A vitoria ocorre quando um dos jogadores captura todas as peças do adversário, ou o adversário fica com as peças “prisioneiras” na vez de jogar não podendo efectuar a jogada que se implementou na função evaluateWinner();
### 5. Adicionais

Criou-se um ficheiro adicional designado por util que contém funções menos complexas que foram usadas ao longo do código e foram importadas no inicio do código.
No final criou-se também um botão reset de modo a reinicar o jogo.
