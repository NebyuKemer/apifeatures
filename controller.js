const User = "";

const APIFeatures = require("./index");

exports.getAllUsers = async (req, res, next) => {
  try {
    const apiFeatures = new APIFeatures(User.find(), req.query)
      .filter()
      .sort()
      .project()
      .paginate();
    const users = await apiFeatures.query;
    res.status(200).json({
      status: "SUCCESS",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    next(error);
  }
};
