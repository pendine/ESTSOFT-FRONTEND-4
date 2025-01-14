const express = require('express');
const router = express.Router();

// 2-1_app3을 보면
// user에서 user.js의 주소를
// /user 로 시작하도록 했음
// 

//라우터 주소에는 특수패턴 추가 가능
router.get('/test22/:id', (req, res) =>{
  // url의 get 파라미터값을 받아 처리 가능
  res.send('user page ', req.params.id);
});



// router.get('/test22', (req, res) =>{
//   res.send('user page ');
// });

module.exports = router;