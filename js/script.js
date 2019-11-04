{
const 	MOVE_ROCK = 'kamień',
		MOVE_PAPER = 'papier',
		MOVE_SCISSORS = 'nożyce',
		WIN_DRAW = 'remis',
		WIN_PC = 'komp',
		WIN_PLAYER = 'gracz';


	function playGame(playerInput) 
	{

		// Deklaracje funkcji
		function getMoveName(argMoveId)
		{
			if(argMoveId == 1) {
			  return (MOVE_ROCK);
			} else if(argMoveId == 2) {
			  return (MOVE_PAPER);
			} else if(argMoveId == 3) {
			  return (MOVE_SCISSORS);
			}
		}

		function displayResult(argComputerMove,argPlayerMove,argPlayerInput)
		{
			// Zasady: remis – jeśli obaj gracze wybrali ten sam ruch,
			// wygrana gracza, który zagrał papier, jeśli drugi gracz zagrał kamień,
			// wygrana gracza, który zagrał kamień, jeśli drugi gracz zagrał nożyce,
			// wygrana gracza, który zagrał nożyce, jeśli drugi gracz zagrał papier.

			if (argComputerMove == argPlayerMove) 
			{
			  printMessage('Remis!');
			  return(WIN_DRAW);
			} 
			else if ((argComputerMove == 'papier' && argPlayerMove == 'kamień') || (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'papier'))
			{
			  printMessage('Ja wygrywam!');
			  return(WIN_PC);
			} else {
			  printMessage('Ty wygrywasz!');
			  return (WIN_PLAYER)
			}
		}

		// Deklaracja zmiennych

		let winnerCheck = '';

		// Początek algorytmu funkcji

		clearMessages();
		
		// Ruch gracza

		let playerMove = getMoveName(playerInput);
		printMessage('Twój ruch to: ' + playerInput + ', czyli ' + playerMove + '.');

		// Ruch komputera

		let randomNumber = Math.floor(Math.random() * 3 + 1);
		let computerMove = getMoveName(randomNumber);

		printMessage('Mój ruch to: ' + computerMove + '.');

		// Sprawdzenie i podanie wyniku

		winnerCheck = displayResult(computerMove,playerMove,playerInput);

		// Pobawmy się console.log

		console.log('### Sprawdzamy wartości :');
		console.log('Komp wylosował: ', randomNumber);
		console.log('Gracz kliknął: ', getMoveName(playerInput));
		console.log('Wynik (winnerCheck):', winnerCheck);	

		return(winnerCheck);
	}

	function buttonClicked(argButtonID, argButtonName, argScoreComputer, argScorePlayer)
	{
		let Winner = playGame(argButtonID);
		clearScore()
		return(Winner);
	}

	// Deklaracje zmiennych

	let scorePlayerTotal = '0';
	let scoreComputerTotal = '0';

	// Koniec deklaracji, początek właściwego skryptu

	let testButton1 = document.getElementById('play-rock');
	testButton1.addEventListener('click', function()
	{
		let Winner = buttonClicked(1,'Kamień',scorePlayerTotal,scoreComputerTotal);	
		if (Winner == WIN_PC) 
		{
			scoreComputerTotal++;
		}
		else if (Winner == WIN_PLAYER) 
		{
			scorePlayerTotal++;
		}
		printScore(scorePlayerTotal,scoreComputerTotal); 	
	});

	let testButton2 = document.getElementById('play-paper');
	testButton2.addEventListener('click', function()
	{
		let Winner = buttonClicked(2,'Papier',scorePlayerTotal,scoreComputerTotal);	
		if (Winner == WIN_PC) 
		{
			scoreComputerTotal++;
		}
		else if (Winner == WIN_PLAYER) 
		{
			scorePlayerTotal++;
		}
		printScore(scorePlayerTotal,scoreComputerTotal); 	
	});


	let testButton3 = document.getElementById('play-scissors');
	testButton3.addEventListener('click', function()
	{
		let Winner = buttonClicked(3,'Nożyce',scorePlayerTotal,scoreComputerTotal);	
		if (Winner == WIN_PC) 
		{
			scoreComputerTotal++;
		}
		else if (Winner == WIN_PLAYER) 
		{
			scorePlayerTotal++;
		}
		printScore(scorePlayerTotal,scoreComputerTotal); 	
	});
}