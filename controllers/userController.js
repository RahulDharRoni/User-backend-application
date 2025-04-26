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

async function newUser() {
  try {
    const create_newUser = await User.create(req.body);
    res.status(201).json(create_newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export { userInfo, getUser, newUser };
