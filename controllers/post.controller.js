import Post from '../models/post.model'

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  }
  catch(error) {
    res.status(500).json({message: error.message});
  }
}

export const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    if(!post)
    {
      res.status(404).json({message: "Post Not Found"})
    }

    res.status(200).json(post);
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  try {

  }
  catch(error) {
    res.status(500).json({ message: error.message });
  }
}