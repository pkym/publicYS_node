const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // 재난문자 api
  app.use(
    "/safeText", //proxy가 필요한 path parameter
    createProxyMiddleware({
      target: "https://www.safetydata.go.kr", //타겟이 되는 api url
      changeOrigin: true, // 서버 구성에 따른 호스트 헤더 변경 여부 설정
      pathRewrite: {
        "^/safeText": "",
      },
    })
  );

  // 대피소 select api
  app.use(
    "/shelter",
    createProxyMiddleware({
      target: "https://www.safekorea.go.kr",
      changeOrigin: true,
      pathRewrite: {
        "^/shelter": "",
      },
    })
  );
};
