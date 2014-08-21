function Guess(answerGenerate, compareNum){
    this.answerGenerate = answerGenerate;
    this.compareNum = compareNum;
}

Guess.prototype.guess = function (input){

    var answer = this.answerGenerate.generateNum();
    var results = this.compareNum.compare(answer, input);
    return results;
    
};
