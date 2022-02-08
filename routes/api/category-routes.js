const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET route
router.get('/', async (req, res) => {
  // Finds all categories, includes its associated Products
  try {
    const categoryData = await Category.findAll({ include: [{ model: Product}] });

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET route
router.get('/:id', async (req, res) => {
  // Finds one category by its `id` value, includes its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if(!categoryData) {
      res.status(404).json({ message: 'No category is found with this id!' });
      return;
    };

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST route
router.post('/', async (req, res) => {
  // creates a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);

  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT route
router.put('/:id', async (req, res) => {
  // updates a category by its `id` value
  const categoryData = await Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    },
  )
});

// DELETE route
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const categoryData = await Category.destroy({
    where: {
      id: req.params.id,
    },
  })
});

module.exports = router;
