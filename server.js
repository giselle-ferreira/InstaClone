const express = require('express');
const path = require('path')
const fileURLToPath = require('url')

// instantiating the app
const app = express();

// Project name
const appName = 'insta-clone';

// where build will generate the files
const outputPath = `${__dirname}/dist/${appName}`

// setting build file to serve the angular content
app.use(express.static(outputPath));

// redirect requests to index.html
app.get('/*', (req, res) => {
  res.sendFile(`${outputPath}/index.html`)
});

// listening PORT
app.listen(process.env.PORT);