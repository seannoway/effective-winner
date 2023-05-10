const express = require('express');
const html_routes = require('./routes/html-routes')
const api_routes = require('./routes/api-routes')
const PORT = process.env.PORT || 3001;
// sets port for the app
const app = express();

// defines middleware for the application to run
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(html_routes)
app.use(api_routes)

//this code sets up the Express application to start a server on the specified port and displays a message in the console indicating the URL where the server can be accessed.
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});