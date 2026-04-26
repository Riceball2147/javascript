let num = Math.floor(Math.random() * 30);

console.log(num);

if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
} else if (num % 3 === 0) {
  console.log('3の倍数です');
} else if (num % 5 === 0) {
  console.log('5の倍数です');
} else if (num) {
  console.log(num)
}

let num2 = Math.floor(Math.random() * 100);
console.log(num2);
if (num2 >= 0 && num2 <= 69) {
  console.log("小吉");
} else if (num2 >= 70 && num2 <= 89) {
  console.log("中吉");
} else if (num2 >= 90 && num2 <= 100) {
  console.log("大吉");
}