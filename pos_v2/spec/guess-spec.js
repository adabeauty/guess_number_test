describe('guess', function(){

    var input;
    var answer;

    beforeEach(function(){
        input = '6243';
    });

    it('results is right', function(){

        var answerGenerate = new generateNum();
        spyOn(answerGenerate, "generateNum").and.returnValue('1234');

        var results = new CompareNumber();
        var finalResult = results.compare(answerGenerate.generateNum(), input);

        var guess = new Guess(answerGenerate, results);
        var tip = guess.guess(input);


        expect(tip).toBe(finalResult);
    });

});
