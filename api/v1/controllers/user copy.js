const obj = {
  getAllUsers: (req, res) => {
    return res.status(200).json({ msg:'Get all users'});
  },
  
  addNewUser: (req, res) => {
    return res.status(200).json({ msg:'Add New user'});
  },
  
  getUserById: (req, res) => {
    return res.status(200).json({ msg:`Get user By Id ${req.params.id}`});
  },
  
  updateUserById: (req, res) => {
    return res.status(200).json({ msg:`Update user By Id ${req.params.id}`});
  },
  
  deleteUserById: (req, res) => {
    return res.status(200).json({ msg:`Delete user By Id ${req.params.id}`});
  }
};

module.exports = obj;