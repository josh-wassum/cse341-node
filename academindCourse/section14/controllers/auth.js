const User = require('../models/user')


exports.getLogin = (req, res, next) => {
      const isLoggedIn = req 
        res.render('auth/login', {
          path: '/login',
          pageTitle: 'Login',
          isAuthenticated: isLoggedIn
        });
    
  };

exports.postLogin = (req, res, next) => {
    User.findById('61f41920efe6558df11927db')
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save((err) => {
        console.log(err);
        res.redirect('/');
      });
    })
    .catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect('/');
  });
};