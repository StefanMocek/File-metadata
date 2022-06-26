var express = require('express');
var cors = require('cors');
require('dotenv').config()
const fileAnal = require("./routes/fileAnal")
const {home} = require("./constrollers/fileAnalCon")

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', home);


app.use("/api/fileanalyse", fileAnal)

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
