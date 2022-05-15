const express = require('express');
const path = require('path')
const fileURLToPath = require('url')


// const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename)

// instantiating the app
const app = express();

// Project name
const appName = 'insta-newversion';

// where build will generate the files

// setting build file to serve the angular content
app.use(express.static(outputPath));

// redirect requests to index.html
app.get('/*', (req, res) => {
  res.sendFile(`${outputPath}/index.html`)
});

// listening PORT
app.listen(process.env.PORT);