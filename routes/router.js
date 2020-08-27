const express = require('express');
const router = express.Router();

router.use((req,res, next)=>{
  console.log('time: ',Date.now.toString());
  next();
})

router.get('/',(req, res)=>{
  res.send('music home page');
});
router.get('/about',(req, res)=>{
  res.send("music about ");
});


module.exports = router;
