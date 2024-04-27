const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const allTags = Tag.findAll({
      include: Product
    })

    res.json(allTags)

  } catch(err) {
    console.log(err)
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const id = req.params.id
  try{
    const tag = Tag.findByPk(id, {
      include: Product
    })

    if(!tag){
      return res.json({message: 'Tag not found'})
    }

    res.json(tag)

  } catch(err) {
    console.log(err)
  }
});

router.post('/', (req, res) => {
  // create a new tag
  try{
    const newTag = req.body

    if(!newTag){
      return res.json({message: 'No Tag entered'})
    }
    
    const addTag = Tag.create(newTag)
    res.json(addTag)

  } catch(err) {
    console.log(err)
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  const id = req.params.id
  try{
    const newTagName = req.body.tag_name

    const tag = Tag.findByPk(id)
    if(!tag) {
      return res.json({message: 'Tag not found'})
    }

    const updateTag = Tag.update({tag_name: newTagName}, {
      where: {
        tag_id: id
      }
    })
    res.json(updateTag)

  } catch(err) {
    console.log(err)
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  const id = req.params.id
  try {
    const tag = Tag.findByPk(id)

    if (tag) {
      tag.destroy()
      return res.json({
        message: 'Tag deleted successfully'
      })
    }

    res.status(400).json({
      message: 'Tag does not exist'
    })
  } catch (err) {
    console.log(err)
  }
});

module.exports = router;
