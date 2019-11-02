// Ruch komputera

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = 'nieznany ruch';

if(randomNumber == 1) {
  computerMove = 'kamień';
} else if(randomNumber == 2) {
  computerMove = 'papier';
} else if(randomNumber == 3) {
  computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

// Ruch gracza

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisałeś: ' + playerInput);
let playerMove = 'nieznany ruch';

if(playerInput == '1') {
  playerMove = 'kamień';
} else if(playerInput == 2) {
  playerMove = 'papier';
} else if(playerInput == 3) {
  playerMove = 'nożyce';
} else {
  playerMove = 'ani kamień, ani papier, ani nożyce';
}

printMessage('Twój ruch to: ' + playerInput + ', czyli ' + playerMove);

// Sprawdzenie i podanie wyniku

// Zasady: remis – jeśli obaj gracze wybrali ten sam ruch,
// wygrana gracza, który zagrał papier, jeśli drugi gracz zagrał kamień,
// wygrana gracza, który zagrał kamień, jeśli drugi gracz zagrał nożyce,
// wygrana gracza, który zagrał nożyce, jeśli drugi gracz zagrał papier.

if  (playerMove == 'ani kamień, ani papier, ani nożyce')
	{
  printMessage('Partia nierozstrzygnięta, wpisałeś ' + playerInput + '.'); 
  } 
else if 	(computerMove == playerMove) 
{
  printMessage('Remis!');
} 
else if ((computerMove == 'papier' && playerMove == 'kamień') || 
		 (computerMove == 'kamień' && playerMove == 'nożyce') ||
		 (computerMove == 'nożyce' && playerMove == 'papier'))
{
  printMessage('Ja wygrywam!');
} else {
  printMessage('Ty wygrywasz!');
}
