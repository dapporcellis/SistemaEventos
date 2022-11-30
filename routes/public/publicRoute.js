const express = require("express");
const router = express.Router();
const publicController = require("../../controller/public/publicController");


router.get("/", publicController.home);

router.post("/sobre", publicController.sobre);

router.post("/ministrantes", publicController.ministrantes);

router.get("/cronograma", publicController.cronograma);

router.get("/noticias", publicController.noticias);

router.post("/contatos", publicController.contatos);


module.exports = router;
