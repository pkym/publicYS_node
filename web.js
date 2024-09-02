const express = require('express')
const path = require('path')
const app = express()
const PORT = 8001
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')
// app.get('/', (req, res) => {
//   res.render('index')
// })
app.use(express.static(path.join(__dirname, 'my-react/build')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/my-react/build/index.html'))
})
app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`)
})
// web.js