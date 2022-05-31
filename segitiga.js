function segitiga() {
  let result = "";
  for (let i = 9; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      result += `${j} `;
    }
    result += "\n";
  }
  return result;
}
console.log(segitiga());
