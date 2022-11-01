const Paracaidas = require("../models/ParacaidasModel.js");

const getParacaidas = async () => {
   return await Paracaidas.find().populate("marca._id").exec();
};

module.exports = getParacaidas;
