const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/publish', (req, res) => {
  const { title, content } = req.body;

  // Validate the data (you can add more validation as needed)
  if (!title || !content) {
    return res.status(400).json({ success: false, message: "Title and content are required." });
  }

  // Save the post in the database (use any database like MongoDB, MySQL, etc.)
  // For example:
  // Post.create({ title, content }, (err, post) => {
  //   if (err) return res.status(500).json({ success: false, message: "Database error." });
  //   res.json({ success: true, post });
  // });

  // Simulating a successful post creation for this example
  res.json({ success: true });
});

app.listen(8080, () => console.log('Server running on port 8080'));
