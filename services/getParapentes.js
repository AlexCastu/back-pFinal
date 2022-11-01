const Parapentes = require("../models/ParapenteModel");

const getParapentes = async () => {
   return await Parapentes.find().populate("marca._id").exec();
};

module.exports = getParapentes;
