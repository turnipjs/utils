import io from "./utils.js";

let cMath = io.moonen.utils.Math;

let tests = [
  { function: cMath.chooseWithoutReplacement, args: [5, 3], result: 10 },
  { function: cMath.chooseWithoutReplacement, args: [0, 3], result: 0 },
  { function: cMath.multinomialCoefficient, args: [8,[3,1,1,1,2]], result: 3360 },
  { function: cMath.multinomialCoefficient, args: [6,[3,2,1]], result: 60 },
  { function: cMath.multinomialCoefficient, args: [10,[3,5,2]], result: 2520 },
  { function: cMath.multinomialCoefficient, args: [0,[3,5,2]], result: 0 },
  { function: cMath.multinomialCoefficient, args: [0,[1]], result: 0 },
];

for (let test of tests) {
    let result = test.function(...test.args);
    if (result === test.result) console.log(`PASSED: ${test.function.name} with ${JSON.stringify(test.args)} gave ${result}!`);
    else console.log(`FAILURE!!!!!!: ${test.function.name} with ${JSON.stringify(test.args)} gave ${result} which is not the right result of ${test.result}`);
}