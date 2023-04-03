const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// shows all tags 
// includes the associated products 
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    // return a json with tagData 
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find a single tag by its `id`
// includes associated products 
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product}],
    });
    // checks that there is a tag with the requested id 
    if (!tagData) {
      res.status(404).json({ message: 'No Tag found with that id!' });
      return;
    }
    // return a json with tagData 
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new tag
router.post('/', async (req, res) => {
  try {
    // takes req body and uses it to create new tag
    const tagData = await Tag.create(req.body);
    // return a json with tagData for new tag 
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete a tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    // checks that there is a tag with the requested id 
    if (!tagData) {
      res.status(404).json({ message: 'No Tag found with that id!' });
      return;
    }
    // gives response that tag was deleted via destroy method 
    res.status(200).json({message: 'Tag deleted!'});
  } catch (err) {
    res.status(500).json(err);
  }
});

// update tag data 
router.put('/:id', async (req, res) => {
  try {
    // takes input from the request body to update the specified columns' data 
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    // checks that there is a tag with the requested id 
    if (!tagData) {
      res.status(404).json({ message: 'No Tag found with that id!' });
      return;
    }
    // provides message that tag was updated via update method 
    res.status(200).json({ message: 'Tag updated!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
