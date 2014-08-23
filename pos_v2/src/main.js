$(document).ready(function(){

    hideButton();
    var answerGenerate = new GenerateNum();
    var compareNum = new CompareNumber();
    var guess = new Guess(answerGenerate, compareNum);
    var game = new Interface(guess);

    $('.startButton').on('click',start(game));
    $('.submitButton').on('click', function(){

            var input, judgeInput;

            input = $('.inputBox')[0].value;
            judgeInput = game.judgeInput(input);
            if(!judgeInput){
                alert('请输入四位不相同的数字');
            }else{
                var judgeAnswerString = game.judgeAnswer(input);
                if(judgeAnswerString === 'Congratulation !'){
                    $('.congratulation').text(judgeAnswerString);
                    hideButton();
                }else{
                    var number = game.modifyNumber();
                    if(number != 'Game over !'){
                        alert('你的答案是:' + judgeAnswerString +'你还有' + number +'次机会!');
                        $('.chanceNum').text(number);
                    }else{
                        alert(number);
                        $('.chanceNum').text(0);
                        $('.gameOver').text(number);
                        hideButton();

                    }
                }

            }
    });

});

function start(game){
    var welcomeString = game.startGame();
    alert(welcomeString);

    $('.startButton').hide();
    showButton();
}
function hideButton(){
    $('.submitButton').hide();
    $('.inputPart').hide();
}
function showButton(){

    $('.submitButton').show();
    $('.inputPart').show();
}
