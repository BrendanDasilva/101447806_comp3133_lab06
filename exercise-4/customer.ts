// exercise 4 - modules
export class Customer {
  private firstName: string;
  private lastName: string;
  private age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greeter() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  }

  getAge() {
    console.log(`Age: ${this.age}`);
  }
}
