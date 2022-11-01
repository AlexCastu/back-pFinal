const { Router } = require("express");
const getAccesorios = require("../services/getAccesorios");
const router = Router();
const getMarcas = require("../services/getMarcas");
const getParapentes = require("../services/getParapentes");
const getSillas = require("../services/getSillas");
const getProductosIniciales = require("../services/getProductosIniciales");

router
   .get("/parapentes", async (request, response, next) => {
      try {
         const docs = await getParapentes();
         response.json(docs).status(200).end();
      } catch (err) {
         next(err);
      }
   })
   .get("/marcas", async (request, response, next) => {
      try {
         const docs = await getMarcas();
         response.json(docs).status(200).end();
      } catch (err) {
         next(err);
      }
   })
   .get("/sillas", async (request, response, next) => {
      try {
         const docs = await getSillas();
         response.json(docs).status(200).end();
      } catch (err) {
         next(err);
      }
   })
   .get("/accesorios", async (request, response, next) => {
      try {
         const docs = await getAccesorios();
         response.json(docs).status(200).end();
      } catch (err) {
         next(err);
      }
   }) .get("/productosIniciales", async (request, response, next) => {
       try {
           const docs = await getProductosIniciales;
           response.json(docs).status(200).end();
       } catch (err) {
           next(err);
       }
   });

module.exports = router;
