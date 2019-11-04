function printMessage(msg)
{
	var myMsgDiv = document.createElement('div');
	myMsgDiv.innerHTML = msg;
	document.getElementById('messages').appendChild(myMsgDiv);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function printScore(argScorePlayer,argScoreComputer)  
{
	var div = document.createElement('div');
	div.innerHTML = '<h3>Wynik rozgrywki</h3>';
	document.getElementById('score_header').appendChild(div);

	var div = document.createElement('div');
	div.innerHTML = 'Gracz: ' + argScorePlayer + ', Komputer: ' + argScoreComputer;
	document.getElementById('score').appendChild(div);
}

function clearScore(){
	document.getElementById('score').innerHTML = '';
	document.getElementById('score_header').innerHTML = '';
}
