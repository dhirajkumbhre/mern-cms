import Post from "../models/Post.js";

/* ==========================================================
   Get All Posts
========================================================== */

export const getPosts = async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });

  res.json(posts);
};

/* ==========================================================
   Get Single Post
========================================================== */

export const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  res.json(post);
};

/* ==========================================================
   Create Post
========================================================== */

export const createPost = async (req, res) => {
const {
  title,
  content,
  excerpt,
  imageUrl,
  status,
} = req.body;


const post = await Post.create({
  title,
  content,
  excerpt,
  imageUrl,
  status,
  author: req.user?._id,
});

  res.status(201).json(post);
};

/* ==========================================================
   Update Post
========================================================== */

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

/* ==========================================================
   Delete Post
========================================================== */

export const deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);

  res.json({
    message: "Post deleted",
  });
};

/* ==========================================================
   Dashboard Statistics
========================================================== */

export const getDashboardStats = async (req, res) => {
  try {
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
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to load dashboard statistics",
    });
  }
};

/* ==========================================================
   Monthly Posts Analytics
========================================================== */

export const getMonthlyPosts = async (req, res) => {
  try {
    const monthlyData = await Post.aggregate([
      {
        $group: {
          _id: {
            $month: "$createdAt",
          },
          posts: {
            $sum: 1,
          },
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
    ]);

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const formattedData = monthlyData.map((item) => ({
      month: monthNames[item._id - 1],
      posts: item.posts,
    }));

    res.json(formattedData);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to load monthly analytics",
    });
  }
};