function printMessage(msg)
{
	var myMsgDiv = document.createElement('div');
	myMsgDiv.innerHTML = msg;
	document.getElementById('messages').appendChild(myMsgDiv);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function printScore(scorePlayer,scoreComputer)  //WIP
{
	var div = document.createElement('div');
	div.innerHTML = 'Gracz: ' + scorePlayer + ', Komputer: ' + scoreComputer;
	document.getElementById('score').appendChild(div);
}
