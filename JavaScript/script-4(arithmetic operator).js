var x = 6;
var y = "7";
console.log(`Number (6) x\nString ("7") y\nx + y: ${x + y}\n`);

y = true;
console.log(`Number (6) x\nBoolean (true) y\nx + y: ${x + y}\n`);

x = "hello";
console.log(`String ("hello") x\nBoolean (true) y\nx + y: ${x + y}\n`);

x = "123";
y = 2;
console.log(`String ("123") x\nNumber (2) y\nx * y: ${x * y}\n`);

x = "123";
y = 2;
console.log(`String ("123") x\nNumber (2) y\nx / y: ${x / y}\n`);

x = "123";
y = 2;
console.log(`String ("123") x\nNumber (2) y\nx - y: ${x - y}\n`);

x = "hello";
y = 2;
console.log(`String ("123") x\nNumber (2) y\nx - y: ${x - y}\n`);

x = "123";
y = 2;
console.log(`String ("123") x\nNumber (2) y\nNumber(x) - y: ${Number(x) - y}\n`);

x = "123px";
y = 2;
console.log(`String ("123px") x\nNumber (2) y\nparseInt(x) + y: ${parseInt(x) + y}\n`);

x = "123.50px";
y = 2;
console.log(`String ("123px") x\nNumber (2) y\nparseFloat(x) + y: ${parseFloat(x) + y}\n`);

x = true;
y = 2;
console.log(`Boolean (true) x\nNumber (2) y\nNumber(x) + y: ${Number(x) + y}\n`);

x = 123;
y = 2;
console.log(`Boolean (123) x\nNumber (2) y\nString(x) + y: ${String(x) + y}\n`);

x = 123;
y = 2;
console.log(`Boolean (123) x\nNumber (2) y\nx.toString() + y: ${x.toString() + y}\n`);