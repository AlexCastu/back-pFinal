const Sillas = require("../models/SillaModel.js");

const getSillas = async () => {
   return await Sillas.find().populate("marca._id").exec();
};

module.exports = getSillas;
