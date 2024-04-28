const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const allCategories = await Category.findAll({
      include: Product
    })

    res.json(allCategories)

  } catch(err) {
    console.log(err)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const id = req.params.id
    const category = await Category.findByPk(id, {
      include: Product
    })

    if(!category){
      return res.json({message: 'Category entered does not exist'})
    }

    res.json(category)

  } catch(err) {
    console.log(err)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    const newCategory = req.body

    if(!newCategory){
      return res.json({message: 'Please enter a Catagory'})
    }

    const addCategory = await Category.create(newCategory)
    res.json(addCategory)

  } catch(err) {
    console.log(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const id = req.params.id
  try{
    const updateName = req.body.category_name

    const category = await Category.findByPk(id)
    if(!category){
      return res.json({message: 'Category not found'})
    }

    await Category.update({category_name: updateName}, {
      where:{
        id: id
      }
    })

  } catch(err) {
    console.log(err)
  }
  
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const id = req.params.id
  try {
    const category = await Category.findByPk(id)

    if (category) {
      category.destroy()
      return res.json({
        message: 'Category deleted successfully'
      })
    }

    res.status(400).json({
      message: 'Category does not exist'
    })
  } catch (err) {
    console.log(err)
  }
});

module.exports = router;
