console.clear();

for (let i = 1; i <= 3; i++) {
  for (let x = 1; x <= 3; x++) {
    for (let y = 1; y <= 3; y++) {
      let answer = i * x * y;
      console.log("", i, " x ", x, " x ", y, " = ", answer);
    }
    console.log();
  }
  console.log();
}
