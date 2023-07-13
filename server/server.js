const express = require("express");
const path = require("path");
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require("morgan");

const getTranslatedServer = (lang) => {
    const serverFolder = path.join(process.cwd(), `dist/TradeMF/server/${lang}`);
    const browserFolder = path.join(process.cwd(), `dist/TradeMF/browser/${lang}`);
    const server = require(`${serverFolder}/main.js`);
    return server.app(lang, browserFolder);
}


const server = express();
//==============================================================================================
// server.use - is a middleware with no mount path; gets executed for every request to the app
//==============================================================================================
// Logging
server.use(morgan('dev'));
//================================================
// app.use((req, res, next) => {
//   res.append('Access-Control-Allow-Origin', ['*']);
//   res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.append('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });
//================================================
// Authorization
server.use('/user', (req, res, next) => {
  if (req.headers.authorization) {
    next();
  } else {
    res.sendStatus(403);
  }
});
//================================================
//server.use('*.xml', createProxyMiddleware('http://bmfn.bmfn.us:8080/'));
server.use('*.xml', createProxyMiddleware({
  target: 'https://aws.bmfn.com/',
  changeOrigin: true,
}));
server.use('/api', createProxyMiddleware({
  target: 'https://aws.bmfn.com/',
  changeOrigin: true,
}));
//================================================
// server.use('/ar', getTranslatedServer("ar-AE"));
server.use('/', getTranslatedServer("en-US"));
//==============================================================================================
//==============================================================================================

var port = process.env.PORT || 3000;
server.listen(port, function () {
    console.log('Server running at http://127.0.0.1:' + port + '/');
});
//docker build -t bmfn:v1 .
//docker run -d -p 80:80 bmfn:v1

//docker tag bmfn:v1 530460237251.dkr.ecr.eu-central-1.amazonaws.com/bmfn:v1


//docker push 530460237251.dkr.ecr.eu-central-1.amazonaws.com/bmfn:v1
