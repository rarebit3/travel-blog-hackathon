const Posts = require('../models/Posts')
const Comments = require('../models/Comments')

const getPostDetails = async (req, res) => {
  try {
    const posts = await Posts.find()
    return res.status(200).json({ posts })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createPostDetails = async (req, res) => {
  try {
    const posts = await new Posts(req.body)
    await posts.save()
    return 'test'
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createCommentPost = async (req, res) => {
  try {
    const id = req.params.id
    const comment = new Comments({ text: req.body, Posts: id })
    await comment.save()
    const postRelated = await Posts.findById(id)
    postRelated.comments.push(comment)
    await postRelated.save()
    return 'test'
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getPostDetails,
  createPostDetails,
  createCommentPost
}