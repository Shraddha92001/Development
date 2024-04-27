const currentDate = new Date();

console.log(" date is " + currentDate.getDate());
console.log("year "+currentDate.getFullYear());
console.log("day "+currentDate.getDay());

console.log( "hours "+ currentDate.getHours());
console.log( 'milli seconds ' + currentDate.getMilliseconds());
console.log( "minuts " + currentDate.getMinutes());

console.log( "month " +currentDate.getMonth());
console.log(  currentDate.getSeconds());
console.log(  currentDate.getTime());


//setting components  of the date

currentDate.setFullYear(2022)
console.log("after setfullYear :: " + currentDate);