describe('compareNum', function () {
    var answer, inputs;
    var correctString;
    beforeEach(function () {
        inputs = ['1234', '4321', '5678', '1574', '7623', '4231'];
        answer = '1234';
        correctString = ['4A0B', '0A4B', '0A0B', '2A0B', '0A2B', '2A2B'];
    });

    it('all of position and value are correct', function () {

        var compareNum = new CompareNumber();
        var results = compareNum.compare(answer, inputs[0]);
        expect(results).toBe('4A0B');

    });
    it('value is correct', function () {

        var compareNum = new CompareNumber();
        var results = compareNum.compare(answer, inputs[1]);
        expect(results).toBe('0A4B');

    });
    it('all all of position and value are wrong', function () {

        var compareNum = new CompareNumber();
        var results = compareNum.compare(answer, inputs[2]);
        expect(results).toBe('0A0B');

    });
    it('two of value and positons are correct', function () {

        var compareNum = new CompareNumber();
        var results = compareNum.compare(answer, inputs[3]);
        expect(results).toBe('2A0B');

    });
    it('two of value  is correct', function () {

        var compareNum = new CompareNumber();
        var results = compareNum.compare(answer, inputs[4]);
        expect(results).toBe('0A2B');

    });
    it('two of value  is correct and two of positons are correct', function () {

        var compareNum = new CompareNumber();
        var results = compareNum.compare(answer, inputs[5]);
        expect(results).toBe('2A2B');

    });

});
