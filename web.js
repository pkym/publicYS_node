const express = require('express')
const path = require('path')
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express()
const PORT = 8001
// const cors = require('cors');
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs')
// app.use(cors({
//     origin: "http://localhost:8001",
//     credentials: true,
//   })
// )
app.use('/safeText', (req, res, next) => {
    console.log(`Request received: ${req.url}`);
    next();
  },createProxyMiddleware({
    target: 'https://www.safetydata.go.kr',
    changeOrigin: true,
    pathRewrite: {
        '^/safeText': '',
      },   
  }));

app.use(express.static(path.join(__dirname, 'my-react/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/my-react/build/index.html'))
})
app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`)
})
// web.js
