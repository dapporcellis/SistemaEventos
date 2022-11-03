const express = require("express");
const router = express.Router();
const ministranteController = require("../../controller/admin/ministranteController");

//rota para listar todos os ministrantes
router.get("/ministrante/lst", ministranteController.lst);
//rota para listar todos ministrantes de acordo com uma pesquisa
router.post("/ministrante/lst", ministranteController.filtro);
//rota para abrir a tela de adicionar ministrante
router.get("/ministrante/add", ministranteController.abreadd);
//rota que adiciona o ministrante
router.post("/ministrante/add", ministranteController.add);
//rota para abrir a tela de editar ministrante
router.get("/ministrante/edt", ministranteController.abreedt);
//rota para editar o ministrante
router.post("/ministrante/edt", ministranteController.edt);
//rota para deletar ministrante
router.get("/ministrante/del", ministranteController.del);

module.exports = router;
