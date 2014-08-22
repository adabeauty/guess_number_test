function generateNum(){

}

generateNum.prototype.generateNum = function(){
    var randomNum = '';
    var num = 0;
    while(num<4){
        var temp = Math.floor((Math.random() * 10));
        if(randomNum.search(temp) === -1){
            randomNum += temp;
            num++;
        }
    }
    console.log(randomNum);
    return randomNum;
};
