//função que lista todos ítens
async function lst(req, res) {
  res.render("admin/admin/lst");
}
//função que lista todos ítens de acordo com pesquisa
async function filtro(req, res) {
  res.render("admin/admin/lst");
}
//função que abre a tela de add
async function abreadd(req, res) {
  res.render("admin/admin/add");
}
//função que adiciona
async function add(req, res) {}
//função que abre tela de edt
async function abreedt(req, res) {
  res.render("admin/admin/edt");
}
//função que edita
async function edt(req, res) {}
//função que deleta ítens
async function del(req, res) {}

module.exports = { lst, filtro, abreadd, add, abreedt, edt, del };
