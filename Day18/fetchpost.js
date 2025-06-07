fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      console.log("User Name:", user.name);
    });
  })
  .catch(error => console.error("Error fetching users:", error));


// Output:

// User Name: Leanne Graham
// User Name: Ervin Howell
// User Name: Clementine Bauch

