const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET route
router.get('/', async (req, res) => {
  // Find all tags, includes its associated Product data
  try {
    const tagData = await Tag.findAll({ include: [{ model: Product}] });

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET route
router.get('/:id', async (req, res) => {
  // Find a single tag by its `id`, include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if(!tagData) {
      res.status(404).json({ message: 'No tag is found with this id!' });
      return;
    };

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST route
router.post('/', async (req, res) => {
  // Creates a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);

  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT route
router.put('/:id', async (req, res) => {
  // Updates a tag's name by its `id` value
  const tagData = await Tag.update(
    {
      tag_name: req.body.tag_name,
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
  // Deletes a tag by its `id` value
  const tagData = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
});

module.exports = router;
