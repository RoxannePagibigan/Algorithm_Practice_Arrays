var testArr = [6,3,5,1,2,4];
var Num = 0;
var Sum = 0;
for(i=0; i<testArr.length; i++){
    Num = testArr[i];
    console.log(Num);
    Sum = testArr[i] + Sum;
    console.log(Sum);
}

var testArr = [6,3,5,1,2,4];
var newArr = [];
temp = 0;
for(i=0; i<testArr.length; i++){
    temp = testArr[i] * i;
    newArr.push(temp);
}
console.log(newArr);
