// exercise 2 - types, classes and objects
class Customer {
  firstName: string;
  lastName: string;

  greeter() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  }
}

let customer = new Customer();
customer.firstName = "Brendan";
customer.lastName = "Dasilva";

customer.greeter();
