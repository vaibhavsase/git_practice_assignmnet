let n = 7;

let count = 0;
for (let i = 1; i <= 9; i++) {
  if (n % 1 === 0) {
    count++;
  }
}
if (count === 2) {
  console.log("Number is prime");
} else {
  console.log("Number is  not prime");
}
