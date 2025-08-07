console.log("== - Loose Equality Operator");
console.log("1" == 1); // Loose equality
console.log(true == 1);
console.log(true == undefined);
console.log(null == undefined);
console.log(null == false);
console.log(undefined == false);
console.log("" == 0);
console.log("" == []);
console.log("1,2" == [1,2]);

console.log("\n=== - strict Equality Operator");
console.log(undefined === null); // Strict equality
console.log(undefined === "");
console.log(1 === "1");

console.log("\n< - Less Than Operator");
console.log(1 < "2");
console.log(3 < "2");
console.log(1 < 2);