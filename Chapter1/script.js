// Valriables 
var num = 1;
console.log(num*124);

// loop
for (var i = 1; i < 6; i++) {
    console.log(i)
} // output: 1 2 3 4 5 

//var with math
var x = 3;
var y = 1.1;
console.log(x+y);
console.log(x*y);
console.log((x+y)*(x-y));
var z = 9;
console.log(Math.sqrt(z)); // using Math function in javaScript output: 3
console.log(Math.abs(y/x)); // output: 0.3666666666666667
var t = x * y;
console.log(t.toFixed(2)); //output: 3.30

// if statment 
var mid = 25;
var high = 50;
var low = 1;
var current = 26;
var found = -1;
if(current < mid) {
    mid = (current - low) / 2;
    
} else {
    mid = (current + high) / 2;
}
console.log(mid) // output: 38

// the switch statment 

// alert("Enter a month number");
// var monthNum = readline();
// var monthName; 
// switch(monthNum) {
//     case "1" :
//         monthNum = "January";
//         break;
//     case "2" :
//         monthName = "February";
//         break;
//     case "3" :
//         monthName = "March";
//         break;
//     default: 
//     console.log("Bad input")
// }

// Repetition Constructs 

var number = 1;
var sum = 0;
while(number < 11 ) {
    sum += number;
    ++number;
}

console.log(sum); // output: 55

// loop
var numbers = [3, 7, 12, 22, 100];
var sums = 0;
for(var i = 0; i < numbers.length; i++) {
    sums += numbers[i]; 
}

console.log(sums); // output: 144 "sums all the unmbers in the array"

// Functions 



