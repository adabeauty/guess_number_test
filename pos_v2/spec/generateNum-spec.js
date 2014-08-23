describe('generateNum',function(){

    var tip;
    var digit;
    var str_digit;
    var judgeRandom;
    beforeEach(function(){
        tip = true;
        digit =true;
        str_digit = '0123456789';
        judgeRandom = true;
    });

    it('the length of generateNum is 4', function(){
        var generateNumber = new GenerateNum();
        var results = generateNumber.generateNum();
        var length = results.length;
        expect(length).toBe(4);
    });
    it('generateNum is number', function(){
        var generateNumber = new GenerateNum();
        var results = generateNumber.generateNum();

        for(var i=0; i<4; i++){
            if(str_digit.search(results.charAt(i)) === -1){
                digit = digit && false;
            }
        }
        expect(digit).toBe(true);
    });

    it('generateNum is random', function(){

        var generateNumber_1 = new GenerateNum();
        var results_1 = generateNumber_1.generateNum();
        var generateNumber_2 = new GenerateNum();
        var results_2 = generateNumber_2.generateNum();

        if(results_1 === results_2){
            judgeRandom = false;
        }
        expect(judgeRandom).toBe(true);
    });

    it('generateNum is repeat',function(){

        var generateNumber = new GenerateNum();
        var results = generateNumber.generateNum()

        var tip = true;
        for(var i=0; i<results.length; i++){
            for(var j=0; j<results.length; j++){
                if(i!=j && results.charAt(i) === results.charAt(j))
                    tip = tip && false;
            }
        }
        expect(tip).toBe(true);
    });


});
