const obj = {
  getAllOrders: (req, res) => {
    return res.status(200).json({ msg:'Get all orders' });
  },
  
  addNewOrder: (req, res) => {
    return res.status(200).json({ msg:'Add New order' });
  },
  
  getOrderById: (req, res) => {
    return res.status(200).json({ msg:`Get order By Id ${req.params.id}`});
  },
  
  updateOrderById: (req, res) => {
    return res.status(200).json({ msg:`Update order By Id ${req.params.id}`});
  },
  
  deleteOrderById: (req, res) => {
    return res.status(200).json({ msg:`Delete order By Id ${req.params.id}`});
  }
};

module.exports = obj;