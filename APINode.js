// mock 模拟本地接口服务

var http = require('http');
var express = require('express');
var app = express();


//设置跨域访问

app.all('*', function (req, res, next) {

  res.header('Access-Control-Allow-Origin', 'http://test.test.com:8080');

  res.header('Access-Control-Allow-Credentials', true);

  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')

  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');

  res.header('Content-Type', 'application/json;charset=utf-8');

  next()

});

// 接口1 数据 
let api = '/api/user';
let data = {
  code: 200,
  msg: 'success',
  data: {
    name: '测试用户',
    phone: '13227098788',
    id: 10999,
  }
}
app.get(api, (req, res) => {
  console.log('%% api/user request %%', req)
  res.send(data);
});



// 配置 服务器端口  8080 

var server = app.listen(8080, () => {
  console.log('% node 服务运行中 %')
})

