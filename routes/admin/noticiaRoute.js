const express = require("express");
const router = express.Router();
const noticiaController = require("../../controller/admin/noticiaController");

//rota para listar todos os noticias
router.get("/noticia/lst", noticiaController.lst);
//rota para listar todos noticias de acordo com uma pesquisa
router.post("/noticia/lst", noticiaController.filtro);
//rota para abrir a tela de adicionar noticia
router.get("/noticia/add", noticiaController.abreadd);
//rota que adiciona o noticia
router.post("/noticia/add", noticiaController.add);
//rota para abrir a tela de editar noticia
router.get("/noticia/edt", noticiaController.abreedt);
//rota para editar o noticia
router.post("/noticia/edt", noticiaController.edt);
//rota para deletar noticia
router.get("/noticia/del", noticiaController.del);

module.exports = router;
