export async function fetchUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/3");
  const user = await res.json();
  console.log("ESM User:", user);
}

fetchUser();


// Output:

// ESM User: {
//   id: 3,
//   name: "Clementine Bauch",
//   username: "Samantha",
//   email: "Nathan@yesenia.net",
//   ...
// }
