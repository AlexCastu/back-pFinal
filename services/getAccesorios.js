const Accesorio = require("../models/AccesoriosModel.js");

const getAccesorios = async () => {
   return await Accesorio.find().populate("marca._id").exec();
};

module.exports = getAccesorios;
