window.addEventListener("load",function(){
	totalWords = WORDS.length;
	randomIndex = parseInt(Math.random()*totalWords);
	selectedWord = WORDS[randomIndex];
	selectedWordLength = selectedWord.length

});