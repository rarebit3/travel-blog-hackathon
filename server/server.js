const express = require('express')
const cors = require('cors')
const postController = require('./controllers/PostController')
const db = require('./db')
const logger = require('morgan')

const app = express()

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))

app.get('/', postController.getPostDetails)
app.post('/post', postController.createPostDetails)
app.post('/post/:id/comment', postController.createCommentPost)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))