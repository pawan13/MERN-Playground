const String = require("../model/strModel");

const {
  API_STATUS: { SUCCESSS, FAILURE },
} = require("../utils/constant");

const getAllStr = async (req, res) => {
  try {
    const str = await String.find();
    res.json({
      status: SUCCESSS,
      data: str,
    });
  } catch (error) {
    res.status(500).json({
      status: FAILURe,
      messaage: `something went wrong -${error.messaage}`,
    });
  }
};

const postAllStr = async (req, res) => {
  try {
    const { body } = req;
    const str = await String.create(body);
    res.status(201).json({
      status: SUCCESSS,
      data: str,
    });
  } catch (error) {
    res.status(500).json({
      error: FAILURE,
    });
  }
};

module.exports = {
  getAllStr,
  postAllStr,
};
