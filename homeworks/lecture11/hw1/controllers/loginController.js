const jwt = require('jsonwebtoken');

exports.generateToken = (req, res) => {
  const { lastName, firstName } = req.body;

  if (!lastName || !firstName) {
    return res.status(400).json({ message: 'lastName and firstName are required' });
  }

  const payload = {
    username: lastName,
    password: firstName,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET || 'defaultSecret', {
    expiresIn: '30d', 
  });

  res.json({ token });
};
