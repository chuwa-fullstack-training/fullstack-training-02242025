const express = require('express');
const app = express();

//把html生成结果返回给前端, 不需要前端做事情
//需要template engine
app.set('view engine', 'pug');
app.set('views', './views'); //设置template存放的地方

app.get('/', (req, res) => {
  res.render('index', { title: 'Pug Template', name: 'Aaron' });
  //动态variable { title: 'Pug Template', name: 'Aaron' }
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
