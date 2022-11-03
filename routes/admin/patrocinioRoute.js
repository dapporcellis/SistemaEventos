const express = require("express");
const router = express.Router();
const patrocinioController = require("../../controller/admin/patrocinioController");

//rota para listar todos os patrocinios
router.get("/patrocinio/lst", patrocinioController.lst);
//rota para listar todos patrocinios de acordo com uma pesquisa
router.post("/patrocinio/lst", patrocinioController.filtro);
//rota para abrir a tela de adicionar patrocinio
router.get("/patrocinio/add", patrocinioController.abreadd);
//rota que adiciona o patrocinio
router.post("/patrocinio/add", patrocinioController.add);
//rota para abrir a tela de editar patrocinio
router.get("/patrocinio/edt", patrocinioController.abreedt);
//rota para editar o patrocinio
router.post("/patrocinio/edt", patrocinioController.edt);
//rota para deletar patrocinio
router.get("/patrocinio/del", patrocinioController.del);

module.exports = router;
