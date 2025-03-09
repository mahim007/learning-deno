interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return "Hello, " + person.name + "!";
}

console.log(greet({
  name: "Ashraful",
  age: 29,
}));
