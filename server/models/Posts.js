const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Posts = new Schema(
  {
    location: { type: String, required: true },
    country: { type: String, required: true },
    continent: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    story: { type: String, required: true },
    image: { type: String, required: true },
    comments: { type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }
  },
  { timestamps: true }
)

module.exports = Posts