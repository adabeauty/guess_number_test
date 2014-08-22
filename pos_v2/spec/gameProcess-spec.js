describe('interface test', function(){

    var input;
    var answerGenerate;
    var compareAnswer;
    var guess;

    beforeEach(function(){

        input = ['1316', '1234', '2536'];

        answerGenerate = new generateNum();
        spyOn(answerGenerate, "generateNum").and.returnValue('1234');

        resultString_right = new CompareNumber();

        guess_right = new Guess(answerGenerate, resultString_right);

        // resultString_wrong = new CompareNumber();
        // spyOn(resultString_wrong, "compare").and.returnValue('1A1B');
        // guess_wrong = new Guess(answerGenerate, resultString_wrong);

    });

    it('start the game', function(){

        var game = new Interface(guess_right);
        var welcomeString = game.startGame();

        expect(answerGenerate.generateNum.calls.count()).toEqual(1);
        expect(welcomeString).toEqual('Welcome !');
        expect(game.number).toEqual(6);
    });

    it('the form of input is ok', function(){

        var game = new Interface(guess_right);
        var welcomeString = game.startGame();

        var judgeInput_1 = game.judgeInput(input[0]);
        var judgeInput_2 = game.judgeInput(input[1]);

        expect(judgeInput_1).toEqual(false);
        expect(judgeInput_2).toEqual(true);
    });


    it('input is equal to answer', function(){

        var game = new Interface(guess_right);
        var welcomeString = game.startGame();

        var answerString = game.judgeAnswer(input[1]);

        expect(answerString).toEqual('Congratulation !');

    });

    it('input is not equal to answer', function(){
        spyOn(resultString_right, "compare").and.returnValue('1A1B');
        var game = new Interface(guess_right);
        var welcomeString = game.startGame();

        var answerString = game.judgeAnswer(input[2]);

        expect(answerString).toBe('1A1B' + 'start next game !');

    });

    it('number modify is ok', function(){

        var game = new Interface(guess_right);
        var welcomeString = game.startGame();

        var number_5 = game.modifyNumber();
        var number_4 = game.modifyNumber();
        var number_3 = game.modifyNumber();
        var number_2 = game.modifyNumber();
        var number_1 = game.modifyNumber();
        var number_0 = game.modifyNumber();

        expect(number_5).toEqual(5);
        expect(number_4).toEqual(4);

        expect(number_0).toEqual('Game over !');
    });
});
