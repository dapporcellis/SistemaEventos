const express = require("express");
const router = express.Router();
const oficinaController = require("../../controller/admin/oficinaController");

//rota para listar todos os oficinas
router.get("/oficina/lst", oficinaController.lst);
//rota para listar todos oficinas de acordo com uma pesquisa
router.post("/oficina/lst", oficinaController.filtro);
//rota para abrir a tela de adicionar oficina
router.get("/oficina/add", oficinaController.abreadd);
//rota que adiciona o oficina
router.post("/oficina/add", oficinaController.add);
//rota para abrir a tela de editar oficina
router.get("/oficina/edt", oficinaController.abreedt);
//rota para editar o oficina
router.post("/oficina/edt", oficinaController.edt);
//rota para deletar oficina
router.get("/oficina/del", oficinaController.del);

module.exports = router;
