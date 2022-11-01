const Accesorio = require("../models/AccesoriosModel.js");
const Parapentes = require("../models/ParapenteModel.js");
const Sillas = require("../models/SillaModel.js");
const Paracaidas = require("../models/ParacaidasModel.js");

const getProductosIniciales = async () => {
    const resultado = {
        parapentes: await Parapentes.find().populate("marca._id").limit(4).exec(),
        sillas: await Sillas.find().populate("marca._id").limit(4).exec(),
        paracaidas: await Paracaidas.find().populate("marca._id").limit(4).exec(),
        accesorios:await  Accesorio.find().populate("marca._id").limit(4).exec(),
    }
    return  resultado;
};

module.exports = getProductosIniciales();
