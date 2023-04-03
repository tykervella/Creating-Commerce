const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
 
// find all categories 
// be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product}],
    });
    // checks that there is a category with the requested id 
    if (!categoryData) {
      res.status(404).json({ message: 'No Category found with that id!' });
      return;
    }
    // makes a json of category if the id exist 
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    // checks that there is a category with the requested id 
    if (!categoryData) {
      res.status(404).json({ message: 'No Category found with that id!' });
      return;
    }
    // gives a response message that category has been deleted via destroy method
    res.status(200).json({message: 'Category deleted!'});
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to update category information 
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    // checks that there is a category with the requested id 
    if (!categoryData) {
      res.status(404).json({ message: 'No Category found with that id!' });
      return;
    }
  // gives a response message that category has been updated via update method
    res.status(200).json({ message: 'Category updated!' });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
