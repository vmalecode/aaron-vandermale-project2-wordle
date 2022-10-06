
const express = require('express')
const path = require("path");
const app = express()
const dotenv = require("dotenv");

const PORT = process.env.PORT || 8000;
dotenv.config();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
// serve the frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './build')))

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, 'build', 'index.html')
    )
  )
} else {
  app.get('/', (req, res) => res.send('set environment to production' ))
}
module.exports = app;
