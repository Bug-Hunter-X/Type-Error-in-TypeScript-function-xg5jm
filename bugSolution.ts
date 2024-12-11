function greeter(person: string[]): string {
  return "Hello, " + person.join(', ');
}

let user = ["Jane User", "John Smith"];
console.log(greeter(user)); //Correct

//Alternative solution
function greeter2(person: string): string {
  return "Hello, " + person;
}

let user2 = "Jane User";
console.log(greeter2(user2)); //Correct