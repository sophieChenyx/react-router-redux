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

// 接口1 数据  用户基础信息 
app.get('/api/user', (req, res) => {
  console.log('%% api/user get  request %%', req)
  res.send({
    code: 200,
    msg: 'success',
    data: {
      name: '测试用户',
      phone: '13227098788',
      id: 10999,
    }
  });
});

function addList() {
  var newArray = [], i = 0;
  for (; i <= 10; i++) {
    newArray.push({
      id: i, name: '000' + i, url: '作品000' + i, description: '当前作品是来自意大利作家'
    })
  }
  return newArray
}


// 请求 分页组件 
app.get('/api/artslist', (req, res) => {
  var resList = addList();
  console.log('%% api/user get  request %%', req)
  res.send({
    code: 200,
    msg: 'success',
    data: {
      pageNum: 10,
      pageSize: 1,
      list: resList,
      total: 100
    }
  });
});

// 请求登陆接口 设置cookie  进行登陆验证  登陆接口 
// 设置 cookie 的有效期为 24 小时 
// 账号: chenyongxin  密码 chenyongxin
app.get('/api/login', (req, res) => {
  var resList = addList();
  console.log('%% api/user get  request %%', req)
  res.send({
    code: 200,
    msg: 'success',
    data: {
      pageNum: 10,
      pageSize: 1,
      list: resList,
      total: 100
    }
  });
});

// 配置 服务器端口  8080 

var server = app.listen(8080, () => {
  console.log('% node 服务运行中 %')
})

