// controllers/profileController.js
exports.updateProfile = async (req, res) => {
    const updates = Object.keys(req.body);
    updates.forEach(update => req.user[update] = req.body[update]);
    await req.user.save();
    res.json(req.user);
  };
  