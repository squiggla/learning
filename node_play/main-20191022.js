console.clear();

// const a_number = 15
// const a_string = "felix"
// const an_array = ["matilda", "felix", "gracie", "ambrose"]
// cosnt an_object = { name: "Felix", weight: 55, hangTime: 120 }

const triangle = function() {
  for (let i = 1; i <= 10; i++) {
    console.log("*".padStart(i * 2, " "));
  }
  console.log("*".padStart(10 * 2, "*"));
};

const saw = function() {
  for (let i = 1; i <= 10; i++) {
    console.log("*".padStart(i * 2, " "));
  }
  for (let i = 10; i >= 1; i--) {
    console.log("*".padStart(i * 2, " "));
  }
};

const square = function({ size, character, fill }) {
  character = character || "*";
  fill = fill || " ";
  console.log(character.padStart(size * 2, character));
  for (let outCount = 1; outCount <= size; outCount++) {
    console.log(character.padStart(size * 2, fill));
  }
  console.log(character.padStart(size * 2, character));
  for (let inCount = 1; inCount <= size; inCount++) {
    console.log(character);
  }
};

triangle();
saw();
square({ size: 2 });
square({ size: 3 });
square({ size: 4 });
square({ size: 5, character: "+", fill: "-" }); //5
