// exercise 1 - TypeScript first start
var greeter = function (name) {
  console.log("Hello " + name);
};

greeter("Brendan");

// part 2
const sayHello = (firstName: string, lastName: string) => {
  console.log(`Hello ${firstName} ${lastName}`);
};

sayHello("Brendan", "Dasilva");
