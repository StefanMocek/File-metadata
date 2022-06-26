const express = require("express")
const router = express.Router()
const multer = require("multer")


const fileStorageEbngine = multer.diskStorage({
    destination: (req,file,cb) => {
      cb(null, "./pliki")
    },
    filename: (req,file,cb) =>{
      cb (null, file.originalname)
    }
  })
  const upload = multer({storage: fileStorageEbngine})

  router.post("/", upload.single("upfile") , (req,res) => {
    const {originalname, mimetype, size} = req.file
    console.log(req.file)
    res.json({"name":originalname,"type":mimetype,"size":size})
  })

  module.exports = router