function Guess(answerGenerate, compareNum){
    this.answerGenerater = answerGenerate.generateNum();
    this.compareNum = compareNum;
}

Guess.prototype.guess = function (input){

    var results = this.compareNum.compare(this.answerGenerater, input);
    return results;

};
