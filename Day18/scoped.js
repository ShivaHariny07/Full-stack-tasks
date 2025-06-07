function greet() {
  let greeting = "Hello from the outer function!";
  function sayHello() {
    let message = "Hello from the inner function!";
    console.log(greeting); // Accesses variable from outer scope
  }
  sayHello();
  // console.log(message); // ❌ Error: message is not defined here
}

greet();


// Output:

// Hello from the outer function!
