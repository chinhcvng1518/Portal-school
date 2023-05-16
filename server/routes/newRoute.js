const {
  getAllNews,
  getSingleNew,
  createNew,
  updateNew,
  deleteNew,
  uploadNewImage,
  deleteImage,
  getCategory,
} = require('../controllers/newController')

const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication')

const express = require('express')
const router = express.Router()

router
  .route('/')
  .get(getAllNews)
  .post([authenticateUser, authorizePermissions('admin')], createNew)
// .post(createProduct)

router
  .route('/upload-new-image/:newCode')
  .post([authenticateUser, authorizePermissions('admin')], uploadNewImage)

router
  .route('/delete-image/:newCode')
  .delete([authenticateUser, authorizePermissions('admin')], deleteImage)

router
  .route('/:id')
  .get(getSingleNew)
  .patch([authenticateUser, authorizePermissions('admin')], updateNew)
  .delete([authenticateUser, authorizePermissions('admin')], deleteNew)

router.route('/category').get([authenticateUser, authorizePermissions('admin')],getCategory)
module.exports = router
