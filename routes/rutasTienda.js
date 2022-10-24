const { Router } = require("express");
const router = Router();
const getManufacters = require("../services/manufactersMongoose");

router
   .get("/parapentes", async (request, response, next) => {
      try {
         const docs = await getParapentes();
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
         response.json(docs).end();
      } catch (err) {
         next(err);
      }
   });

module.exports = router;
