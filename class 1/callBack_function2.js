function sum(num1, num2, callbackFunction){
    const result = callbackFunction(num1 + num2)
    return result
}
function callbackFunction(data){
    console.log("this is callback function" , + data);
}

console.log(sum(10,50, callbackFunction));