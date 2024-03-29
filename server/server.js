const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname, '../client/build/index.html'));
  });
} else {
  // build mode
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
  });
}

// start server
app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
