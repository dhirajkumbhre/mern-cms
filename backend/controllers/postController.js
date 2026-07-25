import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
};

export const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.json(post);
};

export const createPost = async (req, res) => {
  const { title, content, excerpt, status } = req.body;

  const post = await Post.create({
    title,
    content,
    excerpt,
    status,
    author: req.user?._id,
  });

  res.status(201).json(post);
};

export const updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.json(post);
};

export const deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);

  res.json({
    message: "Post deleted",
  });
};

export const getDashboardStats = async (req, res) => {
  const totalPosts = await Post.countDocuments();

  const draftPosts = await Post.countDocuments({
    status: "Draft",
  });

  const publishedPosts = await Post.countDocuments({
    status: "Published",
  });

  res.json({
    totalPosts,
    draftPosts,
    publishedPosts,
  });
};