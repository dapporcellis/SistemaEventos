const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/admin/imgs"); //Aqui é o local onde será salvo os arquivos
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); //aqui é o nome do arquivo.S
  },
});
const upload = multer({ storage: storage });
module.exports = upload;