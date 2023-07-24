const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // finds all categories and includes associated products
  Category.findAll({
    attributes: ["id", "category_name"],
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    ],
  })
    .then((categoryData) => {
      res.json(categoryData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
// finds one category by its `id` value including its associated Products
Category.findOne({
  where: {
    id: req.params.id,
  },
  attributes: ["id", "category_name"],
  include: [
    {
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
    },
  ],
})
  .then((data) => {
    res.json(data);
  })
  .catch((err) => {
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
