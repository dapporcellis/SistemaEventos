const { Op } = require('sequelize');
const models = require('../../database/models')
const Admin = models.Admin 

//função que lista todos ítens
async function lst(req, res) {
  const admins = await Admin.findAll()
  res.render("admin/admin/lst", {Admins:admins});
}
//função que lista todos ítens de acordo com pesquisa
async function filtro(req, res) {
  const admins = await Admin.findAll({
    where:{
      nome: {
        [Op.iLike]: '%'+req.body.pesquisar+'%'
      }
    }
  })
  res.render("admin/admin/lst" , {Admins:admins});
}
//função que abre a tela de add
async function abreadd(req, res) {
  res.render("admin/admin/add");
}
//função que adiciona
async function add(req, res) {
  const admin = await Admin.create({
    nome:req.body.nome, 
    email:req.body.email, 
    senha:req.body.senha, 
    foto:req.file.filename //req.file.filename pega o nome da imagem
  })
  res.redirect('/admin/admin/lst')
}
//função que abre tela de edt
async function abreedt(req, res) {
  const admin = await Admin.findByPk(req.params.id);
  res.render("admin/admin/edt", {Admin:admin});
}
//função que edita
async function edt(req, res) {
  const admin = await Admin.findByPk(req.params.id);
  await admin.update({
    nome:req.body.nome, 
    email:req.body.email, 
    senha:req.body.senha, 
    foto:req.file.filename //o arquivo vem na variável req.file
  })
  res.redirect('/admin/admin/lst')
}
//função que deleta ítens
async function del(req, res) {
  const admin = await Admin.findByPk(req.params.id);
  await admin.destroy()
  res.redirect('/admin/admin/lst')
}

module.exports = { lst, filtro, abreadd, add, abreedt, edt, del };