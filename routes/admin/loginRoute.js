const express = require("express");
const router = express.Router();
const loginController = require("../../controller/admin/loginController");

//rota para abrir tela de login
router.get("/", loginController.abretela);
//rota para logar
router.post("/", loginController.logar);

module.exports = router;
