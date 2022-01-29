//Please, uncomment each exercise to check my homework.

//2.16

// let gallons = +prompt("Enter gallons");
// let miles;
// let totalmiles = 0;
// let totalgallons = 0;
// let average = 0;

// while (gallons != -1) {
//   totalgallons += gallons;
//   miles = +prompt("Enter miles");
//   totalmiles += miles;
//   gallons = +prompt("Enter gallons");
// }
// average = totalmiles / totalgallons;
// alert(average);

//2.17
// տարբերակ 1
// let accountNumber = +prompt('Enter account number');
// let beginningBalance = 0;
// let totalCharges = 0;
// let totalCredits = 0;
// let creditLimit = 0;
// let newBalance = 0;

// if(accountNumber != -1) {
//     beginningBalance = +prompt('Enter begnning balance');
//     totalCharges = +prompt('Enter total charges');
//     totalCredits = +prompt('Enter total credits');
//     creditLimit = +prompt('Enter credt limits');
//     newBalance = beginningBalance + totalCharges - totalCredits;
// }

//   if( newBalance > totalCredits ) {
//  alert('Account number: ' + accountNumber + '\n' + "Credit limit: " + creditLimit +  '\n' + "New balance " + newBalance + '\n' + "Credt limit exceeded")
//  }

// տարբերակ 2
// function calc(accountNumber, beginningBalance, totalCharges, totalCredits, creditLimit ) {
//    let newBalance = beginningBalance + totalCharges - totalCredits;
//    if( newBalance > totalCredits ) {
//     console.log('Account number: ' + accountNumber + '\n' + "Credit limit: " + creditLimit +  '\n' + "New balance " + newBalance + '\n' + "Credt limit exceeded")
// }
// }

// calc(100, 5394.78, 1000, 500, 5500)

//2.18
// տարբերակ 1
// let salary = 200;
// let grossSales = +prompt("Enter your sales amount");
// let result = 0;

// while( grossSales != -1) {
//     result = salary + (grossSales * 9 / 100);
//     alert(result)
//     grossSales = +prompt("Enter your sales amount");
// }

// տարբերակ 2

// function countProfit(grossSales) {
//     let result = salary + (grossSales * 9 / 100)
//     return result
// }

// console.log(countProfit(5000))
// console.log(countProfit(6000))
// console.log(countProfit(7000))

//2.19

// let salary = 0;
// function countSalary(hours, rate) {
//     if ( hours <= 40 )
//     salary = hours * rate;
//  else
//  salary = 40 * rate + ( hours - 40 ) * rate * 1.5;
//  return salary
// }

// console.log(countSalary(50, 10))

//2.20
// let counter = 0;
// let number = +prompt("Enter a number");
// let largest = 0;

// while (counter < 10) {
//     number = +prompt("Enter a number");
//   if (largest < number) {
//     largest = number;
//   }
//   counter++
// }

// alert(largest);

//2.21
// let n = 1;
// while( n <= 5) {
//     console.log(n, 10 * n, 100 * n, 1000 * n );
//     n++
// }

//2.22
// let counter = 0;
// let number = +prompt("Enter a number");
// let largest = 0;
// let secondLargest = 0;

// while (counter < 10) {
//     number = +prompt("Enter a number");
//   if (number > largest) {
//       secondLargest = largest;
//     largest = number;
//   }
//   else if(number > secondLargest) {
//       secondLargest = number;
//   }
//   counter++
// }

// alert(largest);
// alert(secondLargest);

//2.28
// let side =  +prompt('Enter the square side');
// let row = 0;
// let size = side;

// while(side > 0) {
//     row = size;
//     while(row > 0) {
//         if(size == side || side == 1 || row == 1 || row == size){
//            document.write("*")
//         }
//         else {
//             document.write('_');
//         }

//         row--;

//     }
//     document.write("<br>");
//     side--;

// }

//եղանակ 2
// let input = 8;

// for (let i = 0; i < input; i++) {
//     document.write('*')
// }
// document.write('<br />')

// for (let i = 0; i < input - 2; i++) {
//     document.write('*');
//     for( let j = 0; j < input - 2; j++) {
//         document.write('_');
//     }
//      document.write('*');
//      document.write('<br />')
// }

// for (let i = 0; i < input; i++) {
//     document.write('*')
//}

//2․29

// let num = +prompt('Enter a 5 dgit number');
// let first = Math.floor(num / 10000);
// let second = Math.floor(num % 10000 / 1000);
// let fourth = Math.floor(num % 10000 % 1000 % 100 / 10);
// let fifth = num % 10000 % 1000 % 10;

//     if(first == fifth && second == fourth ) {
//         console.log('number is a palindrome')
//     } else {
//         console.log('number is not a palindrome')
//     }

//2.30 

// let binary = +prompt('Enter a binary number: max 5 digit');
// let number = binary;
// let decimal = 0;
// let highbit = 16;
// let factor = 10000
// let i = 1;

// while(highbit >= 1){
//   decimal += binary / factor * highbit;
//   highbit /= 2;
//   binary %= factor;
//   factor /= 10;
// }
// console.log("The decimal number is equal of" + number + ' is '  + Math.floor(decimal));



//2.31
// let side = 8;
// let row = 0;
// while (side > 0) {
//   row = 8;
//   if (side % 2 !== 0) document.write("_");

//   while (row > 0) {
//     document.write("* ");
//     row--;
//   }
//   document.write("<br />");
//   side--;
// }

// 2.33

// let radius = +prompt('Enter the radius');
// let pi = 3.14159;
// console.log("The diameter is " + radius * 2 );
// console.log("The circumference is " + radius * 2 * pi);
// console.log("The area is " + radius * radius * pi)

//2.35
// ուղղանկյուն եռանկյան համար
// let a = +prompt('Enter first number');
// let b = +prompt('Enter second number');
// let c = +prompt('Enter third number');

// if ( c * c == a * a + b * b ) {
//     console.log('can be sides of a triangle')
// } else {
//     console.log("can't be sides of a triangle")
// }

// լուծում պարզապես եռանկյան համար
// let a = +prompt('Enter first number');
// let b = +prompt('Enter second number');
// let c = +prompt('Enter third number');

// if ( a + b > c || a + c > b || b + c > a ) {
//     console.log('can be sides of a triangle')
// } else {
//     console.log("can't be sides of a triangle")
// }

//2.36

// do {
//     let a = +prompt('Enter first number');
//     let b = +prompt('Enter second number');
//     let c = +prompt('Enter third number');
// }
//  while ( a <= 0 || b <= 0 || c <= 0 );
// if ( c * c == a * a + b * b ) {
//     console.log('are sides of a triangle')
// } else {
//     console.log("are not sides of a triangle")
// }

//2․38
//a
// function factorial(num)
// {
//     let result = 1;
//     for (let i = 2; i <= num; i++)
//         result = result * i;
//     return result;
// }

// console.log(factorial(5))

//b
// let n = 0;
// let fact = 1;
// let accuracy = 10;
//  Math.E= 1;

//  while ( n < accuracy ) {
//  fact *= n;
//  Math.E += 1 / fact;
// n++
// }
// console.log(Math.E)

//c 

// let n = 0;
// let accuracy = 15;
// let x = 3;
// let times = 0;
// let count = 0;
// Math.E = 1.0;
// Math.Exp = 0.0;
// let  fact = 1;

// while ( n <= accuracy ) {
//      count = n;
//      fact *= n == 0 ? 1 : n;
//      while ( times < count ) {
//      if ( times == 0 )
//      Math.Exp = 1.0;
//      Math.Exp *= x;
//      times++;
//      }
//      Math.E += Math.Exp / fact;
//     n++
//      }
//      console.log(Math.E ** x)

//2.40
// let sum = 0;
// let number = +prompt("Enter the number of values to be summed");
// let value = 0;

// for (let i = 1; i <= number; i++) {
//   value = +prompt("Enter a value: ");
//   sum += value;
// }

// console.log("Sum of the " + number + " values is " + sum);

//2.43

// let number = +prompt("Enter the number of values");
// let value = 0;
// let min = +prompt("Enter a value");

//  for ( let i = 2; i <= number; i++ ) {
//    value = +prompt("Enter next value")

//  if ( value < min )
//  min = value;
//  }

//  console.log(min)

//2.44

// let multi = 1;
// for(let i = 3; i <= 15; i += 2) {
//     multi *= i;
// }
// console.log(multi)

//2.46

// let amount;
// let principal = 1000;

// for (let rate = 5; rate <= 10; rate++) {
//   console.log(
//     "Interest Rate: " + rate / 100 + "\n" + "Year   Amount on deposit"
//   );

//   for (let year = 1; year <= 10; year++) {
//     amount = Math.floor(principal * Math.pow(1 + rate / 100, year));
//     console.log(year + "        " + amount);
//   }
//   console.log("\n");
// }

//2.47

//a
// for(let i = 0; i <= 10; i++) {
//     for(let j = 0; j < i; j++) {
//         document.write('*');

//     }
//     document.write('<br />')
// }

// document.write('<br />')

// //b

// for(let i = 10; i > 0; i--) {
//     for(let j = i; j > 0; j--) {
//         document.write('*');

//     }
//     document.write('<br />')
// }

// document.write('<br />')

// //c

// for(let i = 10; i > 0; i--) {
//     for(let j = 0; j < 10 - i; j++) {
//         document.write('_');

//     }
//     for(let k = 1; k <= i; k++) {
//         document.write('*');
//     }
//     document.write('<br />')
// }

// document.write('<br />')

// //d
// for(let i = 0; i < 10; i++) {
//     for(let j = 0; j < 10 - i; j++) {
//         document.write('_');

//     }
//     for(let k = 1; k <= i; k++) {
//         document.write('*');
//     }
//     document.write('<br />')
// }

// document.write('<br />')

// 2-nd soluton 

// let i;
// let j;
// let k;

// for (i = 1; i <= 10; i++) {
// //a
//   for (j = 1; j <= i; j++) {
//     document.write("*");
//   }
//   for (k = 1; k <= 10 - i; k++) {
//     document.write("_");
//   }
 
//   document.write(".....");
// //b
//   for( j = 10; j >= i; j--) {
//     document.write("*");
//   }
//   for(k = 1; k < i; k++) {
//     document.write("_");
//   }
//   document.write('....');
// //c
//   for(k = 10; k > i; k--) {
//     document.write("_");
//   }
//   for(j = 1; j <= i; j++) {
//     document.write("*");
//   }
//   document.write(".....");
// //d
//   for(k = 1; k < i; k++) {
//     document.write("_");
//   }
//   for( j = 10; j >= i; j--) {
//     document.write("*");
//   }
//   document.write(".....");
//   document.write("<br />");
//   }

//2.48

// let number = 0;

// for (let i = 1; i <= 5; i++) {
//   number = +prompt("Enter 5 numbers between 1 and 30: ");
//   for (let j = 1; j <= number; j++) {
//       document.write("*")
//     };
//   document.write("<br />");
// }

//2.55
// let count = 0;
// let c;
// let ab;
// for (let i = 1; i <= 500; i++) {
//   for (let j = 1; j <= 500; j++) {
//     for (let k = 1; k <= 500; k++) {
//       c = k * k;
//       ab = i * i + j * j;
//       if (c == ab) {
//         console.log(i, j, k);
//         count++;
//       }
//     }
//   }
// }

// console.log(count)

//2.56

// let managers = 0; //weekly sal
// let hourlyWorkers = 0; // 40 hour, then 1.5 * hour
// let comissionWorkers = 0; // 250 usd + 5.7% of the weekly sales
// let pieceworkers = 0; // fixed ammount for items prodeced
// let pieces;
// let pay = 0;
// let payCode = +prompt("Enter your paycode from 1 to 4");
// let managersSalary,
//   hourlyWorkersSalary,
//   comissionWorkersSalary,
//   pieceWorkersSalary,
//   hours;

// while (payCode != -1) {
//   switch (payCode) {
//     case 1:
//       console.log("Manager selected.");
//       managersSalary = +prompt("Enter weekly salary: ");
//       console.log("The manager's pay is $ " + managersSalary);
//       managers++;
//       break;
//     case 2:
//       console.log("Hourly worker selected.");
//       hourlyWorkersSalary = +prompt("Enter the hourly salary: ");
//       hours = +prompt("Enter the total hours worked: ");
//       pay =
//         hours > 40
//           ? (hours - 40) * 1.5 * hourlyWorkersSalary +
//             hourlyWorkersSalary * 40
//           : hourlyWorkersSalary * hours;
//       console.log("Worker's pay is $ " + pay);
//       hourlyWorkers++;
//       break;
//       case 3:
//         console.log("Comission worker selected.");
//         comissionWorkersSalary = +prompt('Enter weekly sales')
//         pay = 250 + comissionWorkersSalary * 0.57;
//         console.log("Comission worker's pay is $ " + pay);
//         comissionWorkers++;
//         break;
//       case 4:
//         console.log("Piece worker selected.");
//           pieces = +prompt('Enter number of pieces');
//           pieceWorkersSalary = +prompt('Enter salary per piece');
//           pay = pieces * pieceWorkersSalary;
//           console.log("Piece worker's pay is $ " + pay);
//           pieceworkers++;
//           break;
//     default:
//       console.log("Invalid pay code.");
//       break;
//   }
//   payCode = +prompt("Enter your paycode from 1 to 4");
// }

// console.log(
//   "Total number of managers paid :" +
//     managers +
//     "\n" +
//     "Total number of hourly workers paid :" +
//     hourlyWorkers +
//     "\n" +
//     "Total number of commission workers paid: " +
//     comissionWorkers +
//     "\n" +
//     "Total number of piece workers paid : " +
//     pieceworkers
// );

//2.57

// let x = 10, y = 6, a = 3, b = 3,
//  g = 5, Y = 1, i = 2, j = 9;

// if ((!(x < 5) && !(y >= 7)) && (!((x < 5) || (y >= 7))))
// console.log('equivalent');
// else {
//     console.log('not equivalet')
// }

// //  !( a == b ) || !( g != 5 )
// if ((!(a == b) || !(g != 5)) && (!((a == b) && (g != 5)))) {
//     console.log('equivalent');
// }
// else {
//     console.log('not equivalet')
// }

// //!( ( x <= 8 ) && ( y > 4 ) )

// if (!((x <= 8) && (Y > 4)) && (!((x <= 8) || (Y > 4)))) {
//     console.log('equivalent');
// }
// else {
//     console.log('not equivalet')
// }

// // !( ( i > 4 ) || ( j <= 6 ) )

// if( !(( i > 4 ) || ( j <= 6 ) && (!(( i > 4 ) && ( j <= 6 )) )))
//  {
//     console.log('equivalent');
// }
// else {
//     console.log('not equivalet')
// }

//2.58
// for(let i = 1; i <= 5; i++){
//     for(let j = 1; j <= 5 - i; j++) {
//         document.write('_')
//     }
//     for(let k = 1; k <= 2 * i - 1; k++) {
//         document.write('*')
//     }
//     document.write('<br />')
// }
// for(let i = 4; i >= 1; i--) {
//     for(let j = 1; j <= 5 - i; j++) {
//         document.write('_')
//     }
//     for(let k = 1; k <= 2 * i - 1; k++) {
//         document.write('*')
//     }
//     document.write('<br />')
// }

//2.59

// let size = +prompt('Enter an odd number for a diamond');
// for(let i = 1; i <= size; i += 2){
//     for(let j = (size - i) / 2; j > 0; j--) {
//         document.write('_')
//     }
//     for(let k = 1; k <= i; k++) {
//         document.write('*')
//     }
//     document.write('<br />')
// }
// for(let i = size; i >= 0; i -= 2) {
//     for(let j = (size - i) / 2; j > 0; j--) {
//         document.write('_')
//     }
//     for(let k = 1; k <= i; k++) {
//         document.write('*')
//     }
//     document.write('<br />')
// }

//3.20 page 268

// function multiple(num1, num2) {
//     if (num2 % num1 === 0) {
//         console.log(num2 + ' is a multiple of ' + num1)
//     } else {
//         console.log(num2 + ' is not a multiple of ' + num1)
//     }
// }

// multiple(3, 12)

//3.21

// let num = +prompt('Enter a number');

// function isEven(num) {
//     while(num != -1) {
//         if(num % 2) {
//             console.log(num + ' is even')
//         } else {
//             console.log(num + ' is odd')
//         }
//         num = +prompt('Enter a number');
//     }

// }
// isEven(num)

//3.22

// let side = +prompt('Enter number');

// function square(side) {
//     for(let i = 0; i < side; i++) {
//         for(let j = 0; j < side; j++){
//         document.write('*')
//     }
//         document.write('<br />')
//     }
// }

// square(side)

//3.25

// function quotient(a, b) {
//     return a / b
// }

// function remainder(a, b) {
//     return a % b
// }

// // console.log(quotient(5, 2))
// // console.log(remainder(5, 2))

// let number = +prompt('Enter an integer between 1 and 32767');
// let divisor = 10000;

// while( number >=  1) {
//     if(number >= divisor) {
//         console.log(Math.floor(quotient(number, divisor)));
//         number = remainder( number, divisor );
//         divisor = quotient( divisor, 10 );

//     } else {
//         divisor = quotient( divisor, 10 );
//     }
// }

//3.26

// let hours = +prompt('Enter hours');
// let minutes = +prompt('Enter minutes');
// let seconds = +prompt('Enter seconds');
// let temp = 0;

// function calcTime(hours, minutes, seconds) {
//     return 3600 * ( hours >= 12 ? hours - 12 : hours ) + 60 * minutes + seconds;

// }

// temp = calcTime(hours, minutes, seconds);

//  hours = +prompt('Enter hours');
//  minutes = +prompt('Enter minutes');
//  seconds = +prompt('Enter seconds');

// console.log( calcTime(hours, minutes, seconds) - temp )

//3.27
// function toCelcius(num) {
//     return Math.round(5 / 9 * (num - 32));
// }

// function toFarenheit(num) {
//     return Math.round(9 / 5 * (num + 32));
// }
// console.log(toCelcius(34));
// console.log(toFarenheit(5))

//  for ( let i = 0; i <= 100; i++ ){
// console.log(i + ' Celcius is equivalent to ' + toFarenheit(i) + ' farenheit' + '\n' )
// }
//  for ( let j = 32; j <= 212; j++ ) {
//     console.log(j +  ' Farenheit is equivalent to ' + toCelcius(j) + ' celcius' + '\n')
// }

//3.30
//a
// function isPrime(num) {
//   if (num < 2) return false;
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) return false;
//   }
//   return true;
// }

// console.log(isPrime(8));
// //b
// for (let i = 0; i < 1000; i++) {
//   if (isPrime(i)) {
//     console.log(i);
// }
// }

// // c
// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i < Math.sqrt(num); i++) {
//       if (num % i == 0) return false;
//     }
//     return true;
//   }

//   console.log(isPrime(8));

//   for (let i = 0; i < 100; i++) {
//     if (isPrime(i)) {
//       console.log(i);
//   }
//   }

//3.31

// function reverseNumber(number) {
//     let revNumber = 0;
//     while (number > 0) {
//       revNumber = (revNumber * 10) + (number % 10);
//       number = Math.floor(number / 10);
//     }
//     return revNumber;
//   }
//   console.log(reverseNumber(12));

//3.32

// function gcd(a, b) {
//     if (a == 0)
//     return b;

// while (b != 0) {
//     if (a > b)
//         a = a - b;
//     else
//         b = b - a;
// }
// return a;
// }

// console.log(gcd(9999, 27))

//3.33

// function qualityPoints(average) {
//     if(average >= 90 && average <= 100) {
//         return 4;
//     } else if(average >= 80 && average < 90) {
//         return 3;
//     } else if(average >= 70 && average < 80) {
//         return 2;
//     } else if( average >= 60 && average < 70){
//         return 1;
//     } else if( average < 60) {
//         return 0
//     }
// }

// console.log(qualityPoints(60));
// console.log(qualityPoints(70))
// console.log(qualityPoints(89))
// console.log(qualityPoints(100))

//3.35

// let x = +prompt("Enter first number");
// let y = +prompt("Enter second number");

// let response = +prompt("How much is" + x + " * " + y);

// while (response != -1 && response != x * y) {
//   response = +prompt("No, please try again");
// }

// while (response != -1) {
//   console.log("Very good");
//   x = +prompt("Enter first number");
//   y = +prompt("Enter second number");
//   response = +prompt("How much is" + x + " * " + y);
// }

//3.37

// let x = 0;
// let y = 0;
// let response = 0;

// let rightAns = 0;
// let wrongAns = 0;

// for(let i = 0; i < 5; i++) {

//     x = +prompt("Enter first number");
//     y = +prompt("Enter second number");

//    response = +prompt("How much is " + x + " * " + y);
//    if(response != x * y) {
//     wrongAns++;
//    } else{
//     rightAns++;
//    }
// }

// if(rightAns / (rightAns + wrongAns) < 0.75 ){
// console.log("Please ask your instructor for extra help.");
// }

//3.42

// function towerOfHanoi(n, start,  end,  temp)
// {
//         if (n == 0)
//         {
//             return;
//         }
//         towerOfHanoi(n - 1, start,  temp,  end);
//         console.log("Move disk " + n + " from pilar " + start +
//         " to pilar " + end +"\n");
//         towerOfHanoi(n - 1, temp, end, start);
//     }

//     let n = 4; // Number of disks
//     towerOfHanoi(n, 'A', 'C', 'B');

//3.43 not finished yet, review

// function iterative(n, start, end, temp) {
//     start = 'A';
//     end = 'C';
//     temp = 'B';
//   n = 4;

//   let m = 2 ** n - 1;
//   if (n % 2 !== 0) {
//     start = end;
//     end = temp;
//     temp = start;
//   }

//   for (let i = 1; i <= m; i++) {
//     if (i % 3 === 1) {
//       temp = start;

//     }
//     if (i % 3 === 2) {
//       end = start;
      
//     }
//     if (i % 3 === 0) {
//       end = temp;
      
//     }
//     console.log(
//         "Move disk " + n + " from pilar " + start + " to pilar " + end + "\n"
//       );
//   }
// }

// iterative();

    


//3.44 p 226 p 273

// for (let i = 0; i <= 10; i++) {
// console.log(i + "! = " + factorial(i));
// }

// function factorial(number) {
//   if (number <= 1) return 1;
//   else {
//     console.log("number = " + number + "\n");
//     return number * factorial(number - 1);
//   }
// }

