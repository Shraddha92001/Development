function sum(num1 , num2 , fntoCall) {
    let result = num1 + num2
    // return result;
    fntoCall(result)
}
function displayResult(data){
    console.log("result of sum is " + data);
    
}

function displayResultPassive(data){
    console.log("sum's result is " + data);
}

console.log(sum(10,20 , displayResultPassive));
//callbacks