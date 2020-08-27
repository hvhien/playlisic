var express=require('express');
var router = express.Router();

router.get('/',(req, res)=>{
  res.render('musicHome',{title: 'concac'});
});
router.get('/us-uk',(req,res)=>{
  res.send('page for music us-uk <a href="/">home</a>');
});
router.get('/vi',(req,res)=>{
  res.send('page for music vietnam <a href="/">home</a>');
});
router.get('/korean',(req,res)=>{
  res.send('page for music korean <a href="/">home</a>');

});
router.get('/ost',(req,res)=>{
  res.send('pager for music ost <a href="/">home</a>');
});
module.exports = router;
