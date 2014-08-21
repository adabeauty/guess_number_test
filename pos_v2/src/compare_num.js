function CompareNumber(){

}
CompareNumber.prototype.compare =function (answer, inputs){

    var aNum = 0;
    var cNum = 0;

    for(var i=0; i<answer.length; i++){
        if(answer.charAt(i) === inputs.charAt(i)){
            aNum++;
        }
        if(answer.search(inputs.charAt(i)) != -1){
            cNum++;
        }
    }

    var bNum = cNum - aNum;
    var result = aNum + 'A' + bNum + 'B';
    return result;
};
