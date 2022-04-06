const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.post('/createCommentPost', controllers.createCommentPost);
router.post('/createPostDetails', controllers.createPostDetails);
router.get('/', controllers.getPostDetails);


module.exports = router;