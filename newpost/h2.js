// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myblog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the Post schema and model
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
});

const Post = mongoose.model('Post', postSchema);

// Endpoint to create a post
app.post('/api/posts', async (req, res) => {
  const { title, content } = req.body;
  try {
    const post = await Post.create({ title, content });
    res.json({ success: true, post });
  } catch (err) {
    res.status(500).json({ success: false, message: "Database error." });
  }
});

// Endpoint to retrieve all posts
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ createdAt: -1 }).limit(10);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving posts', error });
  }
});

// Start the server
app.listen(8080, () => console.log('Server running on port 8080'));