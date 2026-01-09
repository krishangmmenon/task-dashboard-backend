import User from "../models/user.js";

export const getProfile = async (req, res) => {
  const user = await User.findById(req.userId).select("-password");

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};

export const updateProfile = async (req, res) => {
  const allowedUpdates = ["name"];
  const updates = {};

  allowedUpdates.forEach((field) => {
    if (req.body[field]) {
      updates[field] = req.body[field];
    }
  });

  const user = await User.findByIdAndUpdate(req.userId, updates, {
    new: true,
  }).select("-password");

  res.json(user);
};
