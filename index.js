var express = require('express');
var cors = require('cors');
require('dotenv').config()
const multer = require("multer")

const app = express();

const fileStorageEbngine = multer.diskStorage({
  destination: (req,file,cb) => {
    cb(null, "./pliki")
  },
  filename: (req,file,cb) =>{
    cb (null, file.originalname)
  }
})
const upload = multer({storage: fileStorageEbngine})

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});


app.post("/api/fileanalyse", upload.single("upfile") , (req,res) => {
  const {originalname, mimetype, size} = req.file
  console.log(req.file)
  res.json({"name":originalname,"type":mimetype,"size":size})
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
