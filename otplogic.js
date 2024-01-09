// generate the otp

function generateOpt() {
  // decalre the digits in var

  let digits = "1234567890";
  let otp = "";
  for (let i = 0; i <= 3; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
}
console.log("otp of 3 digits :");
console.log(generateOpt());
