const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comments = new Schema(
  {
    text: { type: String, required: true },
    name: { type: String, required: true },
    Posts: { type: mongoose.Schema.Types.ObjectId, ref: 'Posts' }
  },
  { timestamps: true }
)

module.exports = Comments