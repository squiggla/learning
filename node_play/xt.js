// all times tabels 1-12
console.clear();

for (let tableNumber = 1; tableNumber < 13; tableNumber++) {
  const accumulator = [];
  for (let multiplier = 1; multiplier < 13; multiplier++) {
    accumulator.push(multiplier * tableNumber);
  }
  console.log(
    accumulator
      .map(number => number.toString(10).padStart(4, " "))
      .join(" ")
  );
}
