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

	clearMessages();
	
	// Ruch gracza

	let playerMove = getMoveName(playerInput);
	printMessage('Twój ruch to: ' + playerInput + ', czyli ' + playerMove + '.');

	// Ruch komputera

	let randomNumber = Math.floor(Math.random() * 3 + 1);
	let computerMove = getMoveName(randomNumber);

	printMessage('Mój ruch to: ' + computerMove + '.');

	// Sprawdzenie i podanie wyniku

	displayResult(computerMove,playerMove,playerInput);

	// Pobawmy się console.log

	console.log('### Sprawdzamy wartości :');
	console.log('Komp wylosował: ', randomNumber);
	console.log('Gracz wpisał: ', playerInput);
	console.log('Co zwraca getMoveName dla playerInput (',playerInput,'): ', getMoveName(playerInput));
	console.log('Co zwraca getMoveName dla 1: ', getMoveName('1'));
	console.log('Co zwraca getMoveName dla 2: ', getMoveName('2'));
	console.log('Co zwraca getMoveName dla 3: ', getMoveName('3'));
	console.log(' --- Koniec logu tego uruchomienia --- ');
}

function buttonClicked(buttonID, buttonName){
	clearScore();	
	playGame(buttonID);
//  printScore(scorePlayer,scoreComputer);
}

// Deklaracje zmiennych



// Koniec deklaracji, początek właściwego skryptu

let testButton1 = document.getElementById('play-rock');
testButton1.addEventListener('click', function(){buttonClicked(1,'Kamień')});

let testButton2 = document.getElementById('play-paper');
testButton2.addEventListener('click', function(){buttonClicked(2,'Papier')});

let testButton3 = document.getElementById('play-scissors');
testButton3.addEventListener('click', function(){buttonClicked(3,'Nożyce')});

