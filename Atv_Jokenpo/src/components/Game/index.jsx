import React, { useState } from 'react';

const opcoes = ['Pedra', 'Papel', 'Tesoura'];

function Game({ atualizarPlacar }) {
  const [escolhaJogador, setEscolhaJogador] = useState(null);
  const [escolhaComputador, setEscolhaComputador] = useState(null);

  const getEscolhaAleatoria = () => opcoes[Math.floor(Math.random() * 3)];

  const determinarVencedor = () => {
    const escolhaComputador = getEscolhaAleatoria();
    setEscolhaComputador(escolhaComputador);

    if (escolhaJogador === escolhaComputador) {
      atualizarPlacar('empates');
    } else if (
      (escolhaJogador === 'Pedra' && escolhaComputador === 'Tesoura') ||
      (escolhaJogador === 'Papel' && escolhaComputador === 'Pedra') ||
      (escolhaJogador === 'Tesoura' && escolhaComputador === 'Papel')
    ) {
      atualizarPlacar('jogador');
    } else {
      atualizarPlacar('computador');
    }
  };

  return (
    <div>
      <button onClick={() => setEscolhaJogador('Pedra')}>👊</button>
      <button onClick={() => setEscolhaJogador('Papel')}>🖐️</button>
      <button onClick={() => setEscolhaJogador('Tesoura')}>🖖</button><br />
      <button onClick={determinarVencedor}>Go!</button>
      {escolhaComputador && <p>Computador escolheu: {escolhaComputador}!</p>}
    </div>
  );
}

export default Game
