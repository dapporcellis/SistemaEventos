const express = require("express");
const router = express.Router();
const adminController = require("../../controller/admin/adminController");
const upload = require("../../config/upload")

//rota para listar todos os admins
router.get("/admin/lst", adminController.lst);
//rota para listar todos admins de acordo com uma pesquisa
router.post("/admin/lst", adminController.filtro);
//rota para abrir a tela de adicionar admin
router.get("/admin/add", adminController.abreadd);
//rota que adiciona o admin
router.post("/admin/add", upload.single('foto'), adminController.add); //foto é o nome do campo do formulário
//rota para abrir a tela de editar admin
router.get("/admin/edt/:id", adminController.abreedt);
//rota para editar o admin
router.post("/admin/edt/:id", upload.single('foto') ,adminController.edt); //foto é o nome do campo do formulário
//rota para deletar admin
router.get("/admin/del/:id", adminController.del);

module.exports = router;
