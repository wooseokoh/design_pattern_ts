import EvenBettingPlayer from './EvenBettingPlayer';
import FairDiceGame from './FairDiceGame';
import NBettingPlayer from './NBettingPlayer';
import OddBettingPlayer from './OddBettingPlayer';

const diceGame = new FairDiceGame();

const players = [
  new OddBettingPlayer('홀'),
  new EvenBettingPlayer('짝'),
  new NBettingPlayer('점쟁이', [2, 3, 5]),
];

players.forEach((player) => diceGame.addPlayer(player));

function updateBoard() {
  const domPlayers = document.querySelector('.players');
  domPlayers.innerHTML = '';

  players.forEach((player) => {
    const domPlayer = document.createElement('div');
    domPlayer.innerHTML = player.name;
    if (player.winning) domPlayer.classList.add('win');
    domPlayer.append(domPlayer);
  });

  updateBoard();

  document.querySelector('button').addEventListener('click', () => {
    const diceNumber = diceGame.play();
    const domDice = document.querySelector('.dice') as HTMLElement;
    domDice.innerText = diceNumber.toString();
  });
}
