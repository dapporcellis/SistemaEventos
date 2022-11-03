const express = require("express");
const router = express.Router();
const palestraController = require("../../controller/admin/palestraController");

//rota para listar todos os palestras
router.get("/palestra/lst", palestraController.lst);
//rota para listar todos palestras de acordo com uma pesquisa
router.post("/palestra/lst", palestraController.filtro);
//rota para abrir a tela de adicionar palestra
router.get("/palestra/add", palestraController.abreadd);
//rota que adiciona o palestra
router.post("/palestra/add", palestraController.add);
//rota para abrir a tela de editar palestra
router.get("/palestra/edt", palestraController.abreedt);
//rota para editar o palestra
router.post("/palestra/edt", palestraController.edt);
//rota para deletar palestra
router.get("/palestra/del", palestraController.del);

module.exports = router;
