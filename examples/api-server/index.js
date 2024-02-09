const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// 使用 body-parser 中间件来处理 POST 请求中的数据
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 添加CORS头部信息
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// POST 接口用于验证用户名和密码
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // 假设这是您的用户名和密码验证逻辑
  if (username === 'admin' && password === '123456') {
    res.status(200).json({ message: '登录成功' });
  } else {
    res.status(401).json({ message: '8989用户名或密码不正确' });
  }
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});
