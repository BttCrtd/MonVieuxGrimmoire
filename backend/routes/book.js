const express = require('express');
const router = express.Router();

router.get('/', bookCtrl.getAllBooks);
router.get('/bestrating', bookCtrl.top3)
router.get('/:id', bookCtrl.getOneBook);
router.post('/', bookCtrl.createBook);
router.post('/:id/rating', bookCtrl.ratingBook)
router.put('/:id', bookCtrl.modifyBook);
router.delete('/:id', bookCtrl.deleteBook);


module.exports = router;