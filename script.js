window.addEventListener("load",function(){
	ref =[];
	completed=0;
	guessesRemaining = 7;
	totalWords = WORDS.length;
	randomIndex = parseInt(Math.random()*totalWords);
	selectedWord = WORDS[randomIndex].toUpperCase();
	selectedWordLength = selectedWord.length;
	wordLength = document.getElementById("word-length");
	wordLength.innerText = selectedWordLength;
	wordArea = document.getElementById("word-game");
	for(i=0;i<selectedWordLength;i++){
		wordArea.innerHTML+="<div class='word-letters' id=letter-"+i+"></div>";
	}
	keys = document.getElementsByClassName("keys");
	for(i=0;i<keys.length;i++){
		keys[i].addEventListener("click",keyPress.bind(keys[i]));
	}
	newGameEle=document.getElementById("new-game");
	newGameEle.addEventListener("click",newGame);
	function keyPress(){
		keyPressed = this.innerText;
		found=0;
		keyCode = keyPressed.codePointAt(0);
		if(ref[keyCode-65]!=1){
			ref[keyCode-65]=1;
			button = document.getElementById(keyPressed);
			button.className+=" strike"
			for(i=0;i<selectedWordLength;i++){
				if(selectedWord[i]==keyPressed){
					found=1;
					ele = document.getElementById("letter-"+i);
					ele.innerText = keyPressed;
					completed=completed+1;
				}
			}
			if(found!=1){
					guessesRemaining = guessesRemaining - 1;
					guess = document.getElementById("guess");
					guess.innerText = ""+guessesRemaining;
			}
			if(completed==selectedWordLength){
				alert("Congratulations you win!");
			}
			if(guessesRemaining==0){
				alert("Game Over! Word was: "+selectedWord);
			}
		}
	}
	function newGame(){
		location.reload();
	}
});
