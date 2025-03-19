// fetch() is used to make network requests
// The Response object contains useful information about the HTTP response, such as status code, headers, and the response body.
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('Status:', response.status);  // 200 for successful requests
    console.log('Status Text:', response.statusText);  // e.g., "OK" for status 200
    return response.json();  // Parse response body to JSON
  })

  // The response from fetch() is like the resolve from a normal Promise,
  // but it's still just a Promise object, not the actual response body yet.
  //maybe then we need to do somthing with it, like body we need to await res.text()
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json(); // Converts body to JSON
  console.log(data); // { id: 1, title: "...", body: "..." }


  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json()) // Convert response body to JSON
    .then(data => console.log(data)); // Logs JSON data
