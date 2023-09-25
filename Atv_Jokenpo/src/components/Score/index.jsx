import React from 'react';

function Score({ placar }) {
  return (
    <div>
      <br />
      <h2>Resultados</h2>
      <p>Nós: {placar.jogador}</p>
      <p>pc: {placar.computador}</p>
    </div>
  );
}

export default Score
