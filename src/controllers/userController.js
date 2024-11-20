const User = require("../models/User");

exports.createUser = async (req, res) => {
  const { name } = req.body;

  try {
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(400).json({ error: "Usuário já existe." });
    }

    const newUser = new User({ name });
    await newUser.save();
    res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
};

exports.getCounter = async (req, res) => {
  const { name } = req.query;

  try {
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    res.json({ count: user.count });
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar contador" });
  }
};

exports.updateCounter = async (req, res) => {
  const { name, count } = req.body;

  try {
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    user.count = count;
    await user.save();
    res.json({ count: user.count });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar contador" });
  }
};
