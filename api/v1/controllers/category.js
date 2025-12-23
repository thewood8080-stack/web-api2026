const obj = {
  getAllCategories: (req, res) => {
    return res.status(200).json({ msg:'Get all categories'});
  },
  
  addNewCategory: (req, res) => {
    return res.status(200).json({ msg:'Add New category'});
  },
  
  getCategoryById: (req, res) => {
    return res.status(200).json({ msg:`Get category By Id ${req.params.id}`});
  },
  
  updateCategoryById: (req, res) => {
    return res.status(200).json({ msg:`Update category By Id ${req.params.id}`});
  },
  
  deleteCategoryById: (req, res) => {
    return res.status(200).json({ msg:`Delete category By Id ${req.params.id}`});
  }
};

module.exports = obj;