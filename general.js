git add general.js
git commit -m "Optimize author parameter handling and error messages"
git push origin main

const axios = require('axios');

// Get book details based on author using Axios and Promises
public_users.get('/author/:author', function (req, res) {
    const author = req.params.author;
    
    // Task 12: Using Promises and Axios
    const getBooksByAuthor = new Promise((resolve, reject) => {
        axios.get("http://localhost:5000/") // Calling your own base endpoint
            .then(response => {
                const allBooks = response.data;
                const filteredBooks = Object.values(allBooks).filter(book => book.author === author);
                
                if (filteredBooks.length > 0) {
                    resolve(filteredBooks);
                } else {
                    reject({ status: 404, message: "No books found by this author" });
                }
            })
            .catch(err => {
                reject({ status: 500, message: "Error fetching book data" });
            });
    });

    getBooksByAuthor
        .then(result => res.status(200).json(result))
        .catch(error => res.status(error.status || 500).json({ message: error.message }));
});
