const Data = require('../model/data.model');

const createData = async (data) => {
  const newData = new Data(data);
  return await newData.save();
};

module.exports = { createData };
