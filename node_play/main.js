console.clear();

const RandomStatements = () => {
	let mother = "sarah";

	const statements = [
		"I love Gracie",
		"I am going to Lake Tyres",
		"Tilda and Ambrose are anoying",
		"I love the beach"
	];

	for (let i = 0; i < 3; i++) {
		let index = Math.random();
		index = index * 3;
		index = Math.round(index);
		console.log("      index stmt: ", index);
		console.log("      index loop: ", i);
		console.log(`${mother} says ${statements[index]}`);
	}
};

const SevenTimesTable = () => {
	// 7 times table from 1 to 12 print it out
	for (let i = 1; i <= 12; i++) {
		let answer = 7 * i;
		console.log("7 times ", i, " equals ", answer);
	}
};

const FindNthPrime = nthPrime => {
	const primes = [2];
	for (let index = 0; primes.length < nthPrime; index++) {
		index = index + 1;
		if (index === 1) {
			// ignore 1
		} else if (!primes.find(prime => index % prime === 0)) {
			primes.push(index);
		}
	}
	console.log(`the ${nthPrime} prime is ${primes[nthPrime - 1]}`);
};

const PrimesInFirst100 = () => {
	console.log("Primes in first 100 numbers");
	const primesFirst100 = [2];
	[...Array(100).keys()].map(index => {
		index = index + 1;
		if (index === 1) {
			// ignore 1
		} else if (!primesFirst100.find(prime => index % prime === 0)) {
			primesFirst100.push(index);
		}
	});
	return primesFirst100;
};

const times = (unit, count) =>
	[...Array(count).keys()].map(() => unit).join("");

const GapBetweenNumbers = numbers => {
	let accum = numbers[0];
	numbers.map(index => {
		const graph = times("*", index - accum);
		console.log(`${accum} ${index - accum} ${graph}`);
		accum = index;
	});
};

RandomStatements();
SevenTimesTable();
FindNthPrime(10);
console.log(PrimesInFirst100());
GapBetweenNumbers(PrimesInFirst100());
