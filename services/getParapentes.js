const PArapentes = require("../models/ProductsModel");

const getParapentes = async (marcaA, precioA, busquedaManual, page = 1) => {
   return await Products.paginate(
      { "manufacter.name": marcaA || /.+/, price: { $lte: precioA }, name: { $regex: busquedaManual, $options: "i" } },
      { page, sort: { price: -1 }, limit: 5 }
   );
};

module.exports = getParapentes;
