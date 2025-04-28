import { Post } from "../models/user_model.js";

async function create_blog_post(req, res) {
  try {
    await Post.deleteMany({});
    await Post.create(
      {
        user: "6612e7b567f30c8f5b9c1234",
        content: "Had an amazing time hiking today! 🥾🌲 #NatureLover",
        imageUrls: [
          "https://example.com/images/hiking1.jpg",
          "https://example.com/images/hiking2.jpg",
        ],
        likes: ["6612e7c867f30c8f5b9c5678", "6612e7d967f30c8f5b9c9101"],
        comments: [
          {
            user: "6612e7c867f30c8f5b9c5678",
            text: "Wow, that view is incredible!",
            createdAt: "2025-04-25T12:00:00Z",
          },
          {
            user: "6612e7d967f30c8f5b9c9101",
            text: "Next time, take me with you! 😂",
            createdAt: "2025-04-25T12:15:00Z",
          },
        ],
        visibility: "Public",
        createdAt: "2025-04-25T11:00:00Z",
      },
      {
        user: "6612e7b567f30c8f5b9c2345",
        content:
          "Happy birthday to my best friend! 🎂🎉 You deserve all the love today.",
        imageUrls: ["https://example.com/images/birthday-party.jpg"],
        likes: ["6612e7d967f30c8f5b9c9101"],
        comments: [],
        visibility: "Friends",
        createdAt: "2025-04-24T18:00:00Z",
      },
      {
        user: "6612e7b567f30c8f5b9c3456",
        content:
          "Just sharing this amazing article about AI and the future of technology! 🤖",
        imageUrls: [],
        likes: [],
        comments: [],
        sharedPost: "6612f00167f30c8f5b9cd234",
        visibility: "Public",
        createdAt: "2025-04-26T10:30:00Z",
      },
      {
        user: "6612e7b567f30c8f5b9c4567",
        content: "Good night everyone. Tomorrow is a brand new day. 🌙✨",
        imageUrls: [],
        likes: [],
        comments: [],
        visibility: "Private",
        createdAt: "2025-04-26T22:00:00Z",
      }
    );
    req.status(201).redirect("/");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function get_blog_post(req, res) {
  try {
    const product = await Post.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function new_blog_post(req, res) {
  try {
    req.body.status === "login"
      ? (req.body.status = true)
      : (req.body.status = false);
    const create_new_blog_post = await Post.create(req.body);
    console.log(create_new_blog_post);
    res.status(201).json(create_new_blog_post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function registration(req, res) {
  try {
    res.render("../blog_post/blog_post.ejs");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function update_blog_post(req, res) {
  try {
    const { id } = req.params;
    const updated_blog_post = await Post.findByIdAndUpdate(id, req.body, {
      new: true, // return the updated document
      runValidators: true, // to validate updated data
    });

    if (!updated_blog_post) {
      return res.status(404).json({ error: "blog_post not found" });
    }

    res.status(200).json(updated_blog_post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
async function delete_blog_post(req, res) {
  try {
    const { id } = req.params;
    const delete_blog_post = await blog_post.findByIdAndDelete(id);

    if (!delete_blog_post) {
      return res.status(404).json({ error: "blog_post not found" });
    }

    res.status(200).json({ message: "blog_post deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function patch_blog_post(req, res) {
  try {
    const { id } = req.params;
    const patch_blog_post = await blog_post.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!patch_blog_post) {
      return res.status(404).json({ error: "blog_post not found" });
    }

    res.status(200).json(patch_blog_post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function get_blog_postById(req, res) {
  try {
    const { id } = req.params;

    const blog_post = await blog_post.findById(id); // Mongoose handles ObjectId conversion

    if (!blog_post) {
      return res.status(404).json({ message: "blog_post not found" });
    }

    res.status(200).json(blog_post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export {
  create_blog_post,
  get_blog_post,
  new_blog_post,
  registration,
  update_blog_post,
  delete_blog_post,
  get_blog_postById,
  patch_blog_post,
};
