import { User } from "../models/user_model.js";

async function userInfo(req, res) {
  try {
    await User.deleteMany({});
    await User.create(
      {
        Name: "Robin",
        email: "robin@gmail.com",
        password: "robin-password",
        status: true,
      },
      {
        Name: "Pappu",
        email: "pappu@gmail.com",
        password: "Pappu-password",
        status: true,
      },
      {
        Name: "Tinku",
        email: "tinku@gmail.com",
        password: "Tinku-password",
        status: true,
      }
    );
    req.status(201).redirect("/users");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getUser(req, res) {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function newUser(req, res) {
  try {
    req.body.status === "login"
      ? (req.body.status = true)
      : (req.body.status = false);
    const create_newUser = await User.create(req.body);
    console.log(create_newUser);
    res.status(201).json(create_newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function registration(req, res) {
  try {
    res.render("../Register/signup.ejs");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true, // return the updated document
      runValidators: true, // to validate updated data
    });

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function patchUser(req, res) {
  try {
    const { id } = req.params;
    const patchedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!patchedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(patchedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getUserById(req, res) {
  try {
    const { id } = req.params;

    const user = await User.findById(id); // Mongoose handles ObjectId conversion

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export {
  userInfo,
  getUser,
  newUser,
  registration,
  updateUser,
  deleteUser,
  getUserById,
  patchUser,
};
