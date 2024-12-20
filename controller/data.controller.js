const { createData } = require('../service/data.service');

const addData = async (req, res) => {
  try {
    const { name, value } = req.body;
    if (!name || value === undefined) {
      return res.status(400).json({ message: 'Name and value are required' });
    }
    const savedData = await createData({ name, value });
    res.status(201).json(savedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addData };
