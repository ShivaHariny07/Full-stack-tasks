const https = require("https");

https.get("https://jsonplaceholder.typicode.com/posts/5", (res) => {
  let data = "";

  res.on("data", chunk => {
    data += chunk;
  });

  res.on("end", () => {
    const post = JSON.parse(data);
    console.log("Fetched Post:", post);
  });
});

// Output:

// Fetched Post: {
//   userId: 1,
//   id: 5,
//   title: "nesciunt quas odio",
//   body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est..."
// }
