let express = require('express')
let app = new express()

app.set("view engine" , "ejs");

app.get('/', {})
app.use(express.static('www'))
app.listen(8989)
