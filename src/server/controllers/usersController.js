const User = require('../models/Users');

// GET - Return all users in the DB
exports.findAllUsers = (req, res) => {
  User.find((err, users) => {
    if (err) res.status(500).send(err.message);
    
    console.log('AllUsers!!!!');
    res.status(200).json(users);
  });
};

//GET - Return a User with specified ID
exports.findById = (req, res) => {
	User.findById(req.params.id, (err, user) => {
    if(err) res.status(501).send(err.message);

    console.log('GET /user/' + req.params.id);
		res.status(200).json(user);
	});
};


//POST - Insert a new User in the DB
exports.addUser = (req, res) => {
  console.log('POST');
	console.log(req.body);

  // Agregar validaciones
  const user = new User({
    name: req.body.name,
    email: req.body.email,
  });

  user.save((err, user) => {
    if(err) res.status(500).send(err.message);

    res.status(201).json(user);
  });
};


//PUT - Update a register already exists
exports.updateUser = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    user.name = req.bode.name;
    user.email = req.body.email;

    user.save((err, user) => {
      if(err) res.status(500).send(err.message);
  
      res.status(201).json(user);
    });
  });
};


//DELETE - Delete a TVShow with specified ID
exports.deleteUser = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    user.remove(err => {
      if(err) res.status(500).send(err.message);

      res.status(200)
    });
  });
};