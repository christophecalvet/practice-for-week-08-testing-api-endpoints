/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/
// fetch("/posts")
//   .then(readableStream => readableStream.text())
//   .then(bodytext => console.log(bodytext))
//   .catch(err => console.error("Error: " +  err))

  fetch("/posts")
  .then(readableStream => readableStream.json())
  .then(bodyjson => console.log(bodyjson))
  .catch(err => console.error("Error: " +  err))

// Your code here



/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.
*/


fetch('/posts', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    message: "New Post!"
  })
})
.then(readableStream => readableStream.json())
.then(bodyjson => console.log(bodyjson))
.catch(err => console.error("Error: " +  err))




// Your code here
