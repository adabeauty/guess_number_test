function Interface(guess){
    this.guess = guess;
    this.rightAnswer;
    this.number;
}

Interface.prototype.startGame = function(){

    this.rightAnswer = this.guess.answerGenerater;
    this.number = 6;
    return 'Welcome !';
};
Interface.prototype.judgeInput = function(input){

    var judgeValue = true;
    var repeatNum = 0;
    for(var i=0; i<input.length; i++){
        if(input.lastIndexOf(input.charAt(i)) != i){
            judgeValue = false;
            break;
        }
      }
      return judgeValue;
};

Interface.prototype.judgeAnswer = function(input){

    var judgeResults = this.guess.guess(input);

    if(this.rightAnswer === input){
        return 'Congratulation !';
    }else{
        return judgeResults + 'start next game !';
    }
};

Interface.prototype.modifyNumber = function(){

    this.number--;
    if(this.number === 0){
        return 'Game over !';
    }else{
        return this.number;
    }
}
