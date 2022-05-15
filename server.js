const express = require('express');

const app = express();

// Project name
const appName = 'insta-newversion';

// where build will generate the files
const outputPath = `${___dirname}/dist/${appName}`

// setting build file to serve the angular content
app.use(express.static(outputPath));

// redirect requests to index.html
app.get('/*', (req, res) => {
  res.sendFile(`${outputPath}/index.html`)
});

// listening PORT
app.listen(process.env.PORT);