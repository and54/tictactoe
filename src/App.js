import React, { useState } from 'react';
import { Container, Centered, Header, TicTacToeContainer } from './styles';
import { TicTacToeCell } from './TicTacCell';

const winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [player, setPlayer] = useState('X');
  const [cells, setCells] = useState([...new Array(9)]);
  const [winner, setWinner] = useState('');

  const selectCell = position => {
    if (!cells[position] && !winner) {
      const newCells = [...cells];
      newCells[position] = player;
      checkWinner(newCells, player);
      setCells(newCells);
      setPlayer(player === 'X' ? 'O' : 'X');
    }
  }

  const checkWinner = (cells, player) => {
    const won = winning.reduce((win, wp) => 
      win || (cells[wp[0]] === cells[wp[1]] &&  cells[wp[1]] === cells[wp[2]] && cells[wp[2]] === player)
    , false);
    if (won) setWinner(player);
  }

  const getHeader = () => {
    if (winner) return `Winner ${winner}`;
    return `Playing ${player}`;
  }

  return (
    <Container>
      <Centered>
        <Header>
          {getHeader()}
        </Header>
        <TicTacToeContainer>
          {cells.map((v, i) => 
            <TicTacToeCell key={i} position={i} selectCell={selectCell} value={v} />
          )}
        </TicTacToeContainer>
      </Centered>
    </Container>
  );
}

export default App;
