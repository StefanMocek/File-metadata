const express = require("express")
const router = express.Router()
const multer = require("multer")
const { fileAnal } = require("../constrollers/fileAnalCon")


const fileStorageEbngine = multer.diskStorage({
    destination: (req,file,cb) => {
      cb(null, "./pliki")
    },
    filename: (req,file,cb) =>{
      cb (null, file.originalname)
    }
  })
  const upload = multer({storage: fileStorageEbngine})

  router.post("/", upload.single("upfile") , fileAnal)

  module.exports = router