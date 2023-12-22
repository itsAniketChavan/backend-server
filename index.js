const express = require('express')
const app = express()
const PORT = 4000


app.get('/home', (req, res) => {
  // res.status(200).json('Welcome, your app is working well');
  res.json("Hello app is working")
})


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app