
const home = (req, res) => {
    res.sendFile(process.cwd() + '/views/index.html');
}

const fileAnal = (req,res) => {
    const {originalname, mimetype, size} = req.file
    // console.log(req.file)
    res.json({"name":originalname,"type":mimetype,"size":size})
  }

module.exports = {home, fileAnal}