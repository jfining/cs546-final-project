

const express = require('express');
const router = express.Router();
const data = require('../data');
const userData = data.userData;


router.get("/", (req, res) => {
  console.log('hi,,got  /');
  //res.end('Hello')
  res.render('user/home');
});

router.get("/register", (req, res) => {
  res.render('user/register');
});

router.get("/login", (req, res) => {
  res.render('user/login');
});


router.post('/demo', function (req, res) {
  userName = req.body.uname
  userPwd = req.body.pass
  user = userData.getUserByUsername(userName)



  if (user === null) {
    res.end("Login invalid");
  } else if (user.name === userName) {
    // && user.pass === userPwd) {
    res.render('user/completeprofile', { profileData: user });

  } else {
    console.log("Credentials wrong");
    res.end("Login invalid");
  }
});

router.post('/profile', function (req, res) {
  //res.render('user/profile')

  var userdetails = req.body;

  res.render('user/profile', { userdetails });

});

router.post('/completeprofile', async (req, res) => {
  try {
    var userName = req.body;
    var getUser = await userData.getUserByUsername(userName.uname)
    // console.log("Final reg Data : " + getUser.uname);
    console.log(getUser.username)
    //var jsonObj = JSON.parse(obj);

    // userData.createUserByObject(jsonObj)
    var getAccount = getUser.account_details;

    res.render('user/completeprofile', { getUser, getAccount });
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

router.post("/addeduser/:uname", async (req, res) => {
  try {
    const username= req.params.uname
    const newcontent = req.body;
    const userInfo = {
     username: username,
     account_details:{
       name: newcontent.name,
       email: newcontent.email,
       contact_number: newcontent.contact_number,
       address: newcontent.address
     }
    }
   const addUser= await userData.createUserByObject(userInfo);
   console.log(addUser)
   // res.render(user/home);
   res.json(addUser)
      var jsonObj = JSON.parse(addUser);

    var result= userData.createUserByObject(jsonObj);
    console.log(result)
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
})


module.exports = router;