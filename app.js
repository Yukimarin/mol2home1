// Câu 1: Thế nào là cơ chế hoisting?
// Hoisting là cơ chế mặc định của JavaScript để di
// chuyển tất cả các biến và hàm khi khai báo lên đầu scope trước khi chúng được thực thi.

// Câu 2: 2. Một file Javascript khi chạy trải qua mấy giai đoạn. Các giai đoạn đó là giai đoạn gì?
// Khi một chương trình Javascript chạy sẽ có 2 giai đoạn:
// Creation phase (giai đoạn khởi tạo)
// Executiong phase (giai đoạn thực thi)

// Câu 3:
// var age = 20; // undefine
// let firstName = "Peter"; // age 20; undefine
// let lastName = "Parker"; // firstName = Peter; undefined
// const yearOfBirth = "1995"; // lastName = Parker; undefine

// // Function declaration
// function calAge(year) {
//   return 2022 - year;
// } // định nghĩa trong global

// // Function expression
// var getFullName = function (firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }; // định nghĩa trong global

// Câu 4:
// console.log(`1. ${age}`); // global undefined
// var age = 20;
// console.log(`2. ${age}`); //20

// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";
// console.log(`3. ${calAge(yearOfBirth)}`); //27
// // Function declaration
// function calAge(year) {
//   return 2022 - year;
// }
// console.log(`4. ${calAge(yearOfBirth)}`); //27

// console.log(`5. ${getFullName(firstName, lastName)}`); // Peter Parker
// // Function expression
// var getFullName = function (firstName, lastName) {
//   return `${firstName} ${lastName}`;
// };
// console.log(`6. ${getFullName(firstName, lastName)}`); // Peter Parker

// Câu 5:
// // console.log(age);// Script undefined
// let age = 27;
// console.log(age); //27

// {
//   // console.log(firstName);
//   console.log(age);
//   console.log(age);

//   let firstName = "Peter";
//   let lastName = "Parker";
//   const job = "Spider man";

//   console.log(firstName); // Block Peter
//   console.log(lastName); // Block Parker
//   console.log(job); // Bloc Spider man
// }

// Câu 6:
// a = 2;
// var a;
// console.log( a );//2

// Câu 7:
// console.log(a);// global undefined
// var a =2;

// Câu 8:
// var a = 10;
// function foo() {
// var a;
// console.log( a );// Funtion undefined
// a = 2;
// }
// foo();

// Câu 9
// foo();
// var foo();//err
// // function foo() {
// // console.log(1);//1
// // }
// foo = function() {
// console.log(2);// Error
// }

// Câu 10:
// var foo;
// function foo() {
// console.log(1);
// }
// foo = function() {
// console.log(2);
// }
// foo();

// Câu 11: Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// function removeEnd(arr, n) {
//   let a = arr.length - n;
//   arr.splice(a, n);
//   console.log(arr);
// }
// removeEnd(arr, 4);

// Câu 12: Viết 1 chương trình trả về n phần tử đầu tiên có trong 1 array
// arr = [1, 2, 3, 4, 5, 6, 7];
// function first(arr, n) {
//   var arr1 = [];
//   for (i = 0; i < arr.length; i++) {
//     if (i < n) {
//       arr1.push(arr[i]);
//     }
//   }
//   return arr1;
// }

// Câu 13:
// const users = [
//   {
//     name: "Angelina Jolie",
//     age: 80,
//   },
//   {
//     name: "Eric Jones",
//     age: 2,
//   },
//   {
//     name: "Paris Hilton",
//     age: 5,
//   },
//   {
//     name: "Kayne West",
//     age: 16,
//   },
//   {
//     name: "Bob Ziroll",

//     age: 100,
//   },
// ];
// let User = users.map(function (user) {
//   return `<h1>${user.name} </h1><h2>${user.age}</h2>`;
// });
// console.log(User);

// Câu 14:
// const users = [
//   {
//     name: "Angelina Jolie",
//     age: 80,
//   },
//   {
//     name: "Eric Jones",
//     age: 2,
//   },
//   {
//     name: "Paris Hilton",
//     age: 5,
//   },
//   {
//     name: "Kayne West",
//     age: 16,
//   },
//   {
//     name: "Bob Ziroll",

//     age: 100,
//   },
// ];
// let name = users.map(function (user) {
//     return user.name;
//   });
//   console.log(name);

// Câu 15
// - Viết một hàm triple() trả về một số đã được nhân 3
// Sử dụng phương thức map của arr, viết hàm multiply() nhận vào một mảng và trả về mảng mới với các số nhân 3, sử dụng hàm triple để nhân 3 các số đó
// function triple(num) {
//   return num * 3;
// }
// function Multiply(arr) {
//   return arr.map(triple);
// }
// console.log(Multiply([1, 2, 3, 4, 5]));

// Câu 16: Sử dụng hàm filter của array. Viết một hàm nhận vào một mảng số ngẫu nhiên,
// hàm đó trả về một mảng mới chỉ chứa các phần tử lớn hơn 5
// var number = [3, 5, 7, 100, 32, 33, 16, 40];
// let x = number.filter(checkNumber);
// function checkNumber(number) {
//   return number > 5;
// }
// console.log(x);

// Câu 17
// var members = [
//   { name: 'Lan', gender: 'female' },
//   { name: 'Linh', gender: 'female' },
//   { name: 'Trung', gender: 'male' },
//   { name: 'Peter', gender: 'gay' }
// ];
// function filterMember(arr) {
//   return arr.filter(function (e, i) {
//     return e.gender === "female";
//   });
// }
// console.log(filterMember(members));

// Câu 18: Viết một hàm nhận vào một mảng số tự nhiên,
// sử dụng find method của array trả về số chẵn đầu tiên của mảng đó, nếu không tìm thấy trả về undefined
// let n = prompt('Nhập các số ngăn cách bằng dấu ,');
// let arr = n.split(",");
// let newArr = arr.find(function(arr){
//     return arr%2==0
// });
// console.log(newArr);

// Câu 19: Viết một hàm nhận vào 2 tham số, tham số đầu tiên là một mảng số tự nhiên,
// tham số thứ 2 là số cần chia hết. Sử dụng find method của array,
// trả về số đầu tiên trong mảng đầu vào chia hết cho tham số thứ 2. Nếu không tìm thấy trả về undefined
// let n = prompt('Nhập các số ngăn cách bằng dấu ,');
// let a = n.split(",");
// let b = prompt("nhập số");
// let Number = a.find(function(a){
//     return a % b == 0
// });
// console.log(Number)

// Câu 20: Viết một hàm nhận vào một mảng ngẫu nhiên. Sử dụng phương thức reduce của array,
// trả về object mới với các phần tử trong mảng là key, và value sẽ là số lần xuất hiện của chúng ở trong mảng
// let arr = ["a", "b", "c", "b", "a"];
// function countOccurrences(arr) {
//   let result = {};
//   for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     if (!result[element]) {
//       result[element] = 1;
//     } else {
//       result[element] = result[element] + 1;
//     }
//   }
//   return result;
// }
// countOccurrences(arr);

// Câu 21: Viết một hàm nhận vào một mảng 2 chiều, sử dụng phương thức reduce và trả về một
// mảng một chiều chứa toàn bộ những phần tử con trong các mảng con
// Input:
// flatternArr([['a', 'b'], ['c', 'b', 'a']])
// Expected output:
//  ['a', 'b', 'c', 'b', 'a']
// let arr = [
//   ["a", "b"],
//   ["c", "b", "a"],
// ];
// let newArr = arr.reduce((pre, cur) => pre.concat(cur), []);
// console.log(newArr);

// Câu 22: Viết một hàm nhận vào một mảng số gồm 2 số.
// Tính tổng của các số tự nhiên trong khoảng 2 số đó
// C1
// let a = Number(prompt("nhập số a"));
// let b = Number(prompt("nhập số b"));
// function sum(a, b) {
//   if (a < b) {
//     var s = 0;
//     for (let i = a + 1; i < b; i++) {}
//     console.log(s);
//   } else if (a > b) {
//     var s = 0;
//     for (let i = a - 1; i > b; i--) {}
//     console.log(s);
//   }
// }

// Câu 23: Viết một hàm nhận vào 2 mảng số, so sánh 2 mảng
// và trả về một mảng mới chứa các phần tử độc nhất giữa 2 mảng. Chú ý sử dụng hàm filter
// function diff(arr1, arr2) {
//   let result1 = arr1.filter(function (e, i) {
//     return arr2.indexOf(e) === -1;
//   });
//   let result2 = arr2.filter(function (e, i) {
//     return arr1.indexOf(e) === -1;
//   });
//   return result1.concat(result2);
// }
// let result = diff([1, 2, 3, 4], [-1, 2, 1, 5, 4]);
// console.log(result);

// Câu 24: Viết một hàm nhận vào 1 số n, tính tổng các số lẻ của dãy fibonacci nhỏ hơn số n
// Lưu ý: Dãy fibonacci bắt đầu từ 1 (1, 1, 2, 3, 5, 8….)
// function sumFib(n) {
//   let num1 = 1;
//   let num2 = 1;
//   let temp;
//   let result = [];
//   for (let i = 0; i < n; i++) {
//     if (num1 <= n) {
//       result.push(num1);
//     }
//     temp = num1;
//     num1 = num2;
//     num2 = temp + num2;
//   }
//   let sum = 0;
//   for (let e of result) {
//     if (e % 2 == 1) {
//       sum = sum + e;
//     }
//   }
//   return sum;
// }
// console.log(sumFib(10));

// Câu 25:Viết một hàm nhận vào 1 đoạn mã nhị phân. Convert đoạn mã nhị phân đó thành tiếng người :))
// Expected output:
// Aren't bonfires fun!?
// function binary(str) {
//   var newBin = str.split(" ");
//   var binCode = [];

//   for (i = 0; i < newBin.length; i++) {
//     binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
//   }
//   return binCode.join("");
// }
// console.log(
//   binary(
//     "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
//   )
// );

// Câu 26: Viết một hàm nhận vào 2 hoặc nhiều mảng, trả về một mảng mới chứa các phần tử
//  không trùng lặp trong các mảng truyền vào
// function flatternArr(arr) {
//   return arr.reduce(function (pre, cur) {
//     return [...pre, ...cur]; // spread operator (arr,obj)
//   });
// }

// function uniqueArr() {
//   let result = [];
//   for (let i = 0; i < arguments.length; i++) {
//     result.push(arguments[i]);
//   }
//   result = flatternArr(result);
//   return result.filter(function (e, i) {
//     return result.indexOf(e) === i;
//   });
// }

// let result = uniqueArr([1, 2, -3, 3], [3, 4, 5, 6], [3, 7, 8, 9]);
// console.log(result);

