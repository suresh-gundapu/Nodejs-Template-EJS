var express = require('express');

var router = express.Router();

router.get("/",(req,res)=>{
    res.render('index');
});
router.get("/about",(req,res)=>{
    res.render("about.ejs");
  });
  router.get("/login",(req,res)=>{
    res.render("login.ejs");
  });
  router.get("/registration",(req,res)=>{
    res.render("registration.ejs");
  });
  router.get("/contact",(req,res)=>{
    res.render("contact.ejs");
  });


module.exports = router;