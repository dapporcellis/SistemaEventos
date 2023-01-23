const { Op } = require('sequelize');
const models = require('../../database/models')
const Evento = models.Evento 

//função que lista todos ítens
async function lst(req, res) {
  const eventos = await Evento.findAll()
  res.render("admin/evento/lst", {  Eventos:eventos });
}

//função que lista todos ítens de acordo com pesquisa
async function filtro(req, res) {
  const eventos = await Evento.findAll({
    where:{
      nome: {
        [Op.iLike]: '%'+req.body.pesquisar+'%'
      }
    }
  })
  res.render("admin/evento/lst" , { Eventos:eventos});
}

//função que abre a tela de add
async function abreadd(req, res) {
  res.render("admin/evento/add");
}

//função que adiciona
async function add(req, res) {
  
  const evento = await Evento.create({
    nome: req.body.nome,
    frase: req.body.frase,
    sobre: req.body.sobre,
    local: req.body.local,
    datainicio: req.body.datainicio,
    datafim: req.body.datafim,
    logo: req.files.logo[0].filename,
    banner: req.files.banner[0].filename,
    fotosobre: req.files.fotosobre[0].filename,
  })
  res.redirect('/admin/evento/lst')
}

//função que abre tela de edt
async function abreedt(req, res) {
  const evento = await Evento.findByPk(req.params.id);
  res.render("admin/evento/edt", {Evento:evento});
}

//função que edita
async function edt(req, res) {
  const evento = await Evento.findByPk(req.params.id);
  await evento.update({
    nome: req.body.nome,
    frase: req.body.frase,
    sobre: req.body.sobre,
    local: req.body.local,
    datainicio: req.body.datainicio,
    datafim: req.body.datafim,
    logo: req.files.logo[0].filename,
    banner: req.files.banner[0].filename,
    fotosobre: req.files.fotosobre[0].filename
  }).catch(function (err) {console.log(err);});
  res.redirect('/admin/evento/lst')
}

//função que deleta ítens
async function del(req, res) {
  const evento = await Evento.findByPk(req.params.id);
  await evento.destroy()
  res.redirect('/admin/evento/lst')
}

module.exports = { lst, filtro, abreadd, add, abreedt, edt, del };