const LoginTimes = require("../models/LoginTimes");

exports.getAllLoginTimes = async (req, res) => {
    try {
      const loginTimes = await LoginTimes.find();
      res.json(loginTimes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to retrieve login times" });
    }
  };
  
  exports.getLoginTimesByUserId = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const loginTimes = await LoginTimes.findOne({ userId });
      if (loginTimes) {
        res.json(loginTimes);
      } else {
        res.status(404).json({ message: "Login times not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to retrieve login times" });
    }
  };

exports.createLoginTimes = async (req, res) => {
    const { userId } = req.body;
  
    try {
      const newLoginTimes = new LoginTimes({ userId });
      const savedLoginTimes = await newLoginTimes.save();
      res.status(201).json(savedLoginTimes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to create login times" });
    }
  };

exports.updateLoginTimes = async (req, res) => {
    const { userId, logintime } = req.body;
  
    const updatedLoginTimes = await LoginTimes.findOneAndUpdate(
      { userId },
      { logintime },
      { new: true }
    );

    if (updatedLoginTimes) {
      res.status(200).json(updatedLoginTimes);
    } else {
      res.status(404).json({ message: "Login times not found" });
    }
  };