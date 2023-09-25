import React from 'react';

function Result({ placar }) {
  return (
    <div>
      <br />
      <h2>Escolhas</h2>
      <p>Nós: {placar.jogador}</p>
      <p>pc: {placar.computador}</p>
      <p>Empate: {placar.empates}</p>
    </div>
  );
}

export default Result
