const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
  // res.send('index page'); // 데이터를 보냄

  res.render('index' , { // render 메서드를 통해 views의 .ejs 파일로 연결
    title:'Todo 애플리케이션'
  });

});

module.exports = router;