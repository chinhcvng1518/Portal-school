const New = require('../models/New')

const customError = require('../errors/customError')
const cloudinary = require('cloudinary').v2
const fs = require('fs')
const axios = require('axios')

const uploadImage = require('../utils/uploadImage')

// GET ALL NEWS
const getAllNews = async (req, res) => {
  const news = await New.find(
    {}  )

  res.status(200).json({ totalNews: news.length, news })
}

// GET SINGLE NEW
const getSingleNew = async (req, res) => {
  const news = await New.findOne({ _id: req.params.id })

  if (!news) {
    throw new customError(`No new with the id: ${req.params.id}`, 400)
  }

  res.status(200).json({ news })
}

// CREATE NEW
const createNew = async (req, res) => {
  const { title, code, author, category, image, content } = req.body

  if (!title || !code || !author || !category || !content) {
    throw new customError('Vui lòng nhập đầy đủ thông tin bài viết', 400)
  }

  if (!image) {
    throw new customError('Vui lòng cung cấp ảnh bài viết', 400)
  }

  const isExist = await New.findOne({ code })
  if (isExist) {
    throw new customError('Bài viết này đã tồn tại', 400)
  }

  // try {
  //   // Insert Image To Milvus
  //   const imgToMilvus = await axios.post(
  //     'http://127.0.0.1:8000/api/v1/insert-image-to-milvus',
  //     {
  //       imgURL: req.body.image,
  //       newCode: code,
  //       newCategory: category,
  //     }
  //   )
  //   // console.log(imgToMilvus.data.msg)
  // } catch (error) {
  //   throw new customError('Something went wrong, please try again later', 500)
  // }

  const news = await New.create(req.body)
  return res.status(201).json({ news })
}

// UPDATE NEW
const updateNew = async (req, res) => {
  // if (!req.body.newImages) {
  //   throw new customError("Please provide new images", 400);
  // }

  const news = await New.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, runValidators: true }
  )

  if (!news) {
    throw new customError(
      `Can not find any new with the ID: ${req.params.id}`,
      400
    )
  }

  // Insert only new images to Milvus
  // const imgToMilvus = await axios.post(
  //   "http://127.0.0.1:8000/api/v1/insert-image-to-milvus",
  //   {
  //     imgURL: req.body.newImages,
  //     productCode: code,
  //     productBrand: brand,
  //   }
  // );
  // console.log(imgToMilvus.data)

  res.status(200).json({ news })
}

// DELETE NEW
const deleteNew = async (req, res) => {
  const news = await New.findOne({ _id: req.params.id })

  if (!news) {
    throw new customError(
      `Can not find any new with the ID: ${req.params.id}`,
      400
    )
  }

  // console.log('ok')
  // res.status(200).json({ msg: product })

  // await cloudinary.api.delete_resources_by_prefix(`Products/${product.code}`)
  // cloudinary.api
  //   .delete_resources_by_prefix(`Products/${product.code}`)
  //   .then(() => {
  //     axios
  //       .delete('http://127.0.0.1:8000/api/v1/delete-many-images-from-milvus', {
  //         data: { productBrand: product.brand, productCode: product.code },
  //       })
  //       .then(() => {
  //         product.remove().then(() => {
  //           return res.status(200).json({ msg: 'Delete Product Successfully' })
  //         })
  //       })
  //   })
}

// UPLOAD NEW IMAGE
const uploadNewImage = async (req, res) => {
  const { newCode } = req.params

  const result = await uploadImage(newCode, req.files)

  return res.status(200).json({ result })
}

// DELETE IMAGE
const deleteImage = async (req, res) => {
  // console.log(req.body)
  const { imageURL } = req.body
  const { newCode } = req.params

  if (!imageURL) {
    throw new customError('Vui lòng cung cấp URL ảnh bài viết', 400)
  }
  const imgURL = imageURL

  if (!newCode) {
    throw new customError('Vui lòng cung cấp code bài viết', 400)
  }
  const news = await New.findOne({ code: newCode })
  if (!news) {
    throw new customError('Bài viết không tồn tại', 400)
  }
  const newCategory = news.category

  // REMOVE IMAGE ON CLOUDINARY
  const start = imageURL.indexOf('News')
  const tmpPublicId = imageURL.slice(start) // "News/suv1/tmp-1-1667307770831_klv8lu.jpg"
  const end = tmpPublicId.indexOf('.')
  const publicId = tmpPublicId.slice(0, end) // "News/suv1/tmp-1-1667307770831_klv8lu"

  const deletedImg = await cloudinary.uploader.destroy(publicId)

  // REMOVE IMAGE URL IN DB
  const newImgArr = news.image.filter((image) => image !== imageURL)
  news.image = newImgArr
  await news.save()

  // // DELETE IMAGE FROM MILVUS
  // const deleteImgFromMilvus = await axios.delete(
  //   'http://127.0.0.1:8000/api/v1/delete-image-from-milvus',
  //   {
  //     data: { newCategory, imgURL },
  //   }
  // )
  // // console.log(imgToMilvus.data)

  res.status(200).json({ news })
}

module.exports = {
  getAllNews,
  getSingleNew,
  createNew,
  updateNew,
  deleteNew,
  uploadNewImage,
  deleteImage,
}
