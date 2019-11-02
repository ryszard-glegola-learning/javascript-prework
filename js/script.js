function playGame(playerInput) 
{
	// Deklaracje funkcji
	function getMoveName(argMoveId)
	{
		if(argMoveId == 1) {
		  return 'kamień';
		} else if(argMoveId == 2) {
		  return 'papier';
		} else if(argMoveId == 3) {
		  return 'nożyce';
		}
		// printMessage('Nie znam ruchu o id ' + argMoveId + '.');
		return 'ani kamień, ani papier, ani nożyce';
	}

	function displayResult(argComputerMove,argPlayerMove,argPlayerInput)
	{
		// Zasady: remis – jeśli obaj gracze wybrali ten sam ruch,
		// wygrana gracza, który zagrał papier, jeśli drugi gracz zagrał kamień,
		// wygrana gracza, który zagrał kamień, jeśli drugi gracz zagrał nożyce,
		// wygrana gracza, który zagrał nożyce, jeśli drugi gracz zagrał papier.

		if  (argPlayerMove == 'ani kamień, ani papier, ani nożyce')
		{
		  printMessage('Partia nierozstrzygnięta, bo wpisałeś "' + argPlayerInput + '".'); 
		} 
		else if (argComputerMove == argPlayerMove) 
		{
		  printMessage('Remis!');
		} 
		else if ((argComputerMove == 'papier' && argPlayerMove == 'kamień') || 
				 (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') ||
				 (argComputerMove == 'nożyce' && argPlayerMove == 'papier'))
		{
		  printMessage('Ja wygrywam!');
		} else {
		  printMessage('Ty wygrywasz!');
		}
	}

	// Ruch komputera

	let randomNumber = Math.floor(Math.random() * 3 + 1);
	let computerMove = getMoveName(randomNumber);

	printMessage('Mój ruch to: ' + computerMove + '.');

	// Ruch gracza

//	let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
	let playerMove = getMoveName(playerInput);

	printMessage('Twój ruch to: ' + playerInput + ', czyli ' + playerMove + '.');

	// Sprawdzenie i podanie wyniku

	displayResult(computerMove,playerMove,playerInput);

	// Pobawmy się console.log

	console.log('### Sprawdzamy wartości :');
	console.log('Komp wylosował: ', randomNumber);
	console.log('Gracz wpisał: ', playerInput);
	console.log('Co zwraca getMoveName dla 1: ', getMoveName('1'));
	console.log('Co zwraca getMoveName dla 2: ', getMoveName('2'));
	console.log('Co zwraca getMoveName dla 3: ', getMoveName('3'));
	console.log('Co zwraca getMoveName dla ', playerInput, ': ', getMoveName(playerInput));
	console.log(' --- Koniec logu tego uruchomienia --- ');
}

function button1Clicked(){
  clearMessages();
  printMessage('Guzik KAMIEŃ został kliknięty');
  playGame(1);
}

function button2Clicked(){
  clearMessages();
  printMessage('Guzik PAPIER został kliknięty');
  playGame(2);
}

function button3Clicked(){
  clearMessages();
  printMessage('Guzik NOŻYCE został kliknięty');
  playGame(3);
}

// clearMessages(); // Umieszczenie tutaj wywołania tej funkcji, jak kazano w lekcji, nic nie daje.

let testButton1 = document.getElementById('play-rock');
testButton1.addEventListener('click', button1Clicked);

let testButton2 = document.getElementById('play-paper');
testButton2.addEventListener('click', button2Clicked);

let testButton3 = document.getElementById('play-scissors');
testButton3.addEventListener('click', button3Clicked);

console.log('testButton1: ', testButton1);
console.log('testButton2: ', testButton2);
console.log('testButton3: ', testButton3);

/* Surowy kod z ostatniego podmodułu:

function buttonClicked(){
  printMessage('Guzik został kliknięty');
}

let testButton = document.getElementById('test-button');

testButton.addEventListener('click', buttonClicked);

*/