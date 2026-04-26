const axios = require('axios');

// Task 10: Get all books using Async/Await
public_users.get('/', async function (req, res) {
  try {
    const response = await axios.get("http://localhost:5000/");
    res.send(JSON.stringify(response.data, null, 4));
  } catch (error) {
    res.status(500).json({message: "Error fetching books"});
  }
});

// Task 11: Get book details based on ISBN using Promises
public_users.get('/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  axios.get(`http://localhost:5000/isbn/${isbn}`)
    .then(response => res.status(200).json(response.data))
    .catch(err => res.status(404).json({message: "ISBN not found"}));
});

// Task 12: Get book details based on Author
public_users.get('/author/:author', function (req, res) {
  const author = req.params.author;
  axios.get(`http://localhost:5000/author/${author}`)
    .then(response => res.status(200).json(response.data))
    .catch(err => res.status(404).json({message: "Author not found"}));
});

// Task 13: Get book details based on Title
public_users.get('/title/:title', function (req, res) {
  const title = req.params.title;
  axios.get(`http://localhost:5000/title/${title}`)
    .then(response => res.status(200).json(response.data))
    .catch(err => res.status(404).json({message: "Title not found"}));
});
