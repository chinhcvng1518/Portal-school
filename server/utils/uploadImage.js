const customError = require('../errors/customError')
const cloudinary = require('cloudinary').v2
const fs = require('fs')

const uploadImage = async (newCode, reqFiles) => {
  if (!newCode) {
    throw new customError('Vui lòng cung cấp code bài viết', 400)
  }

  if (!reqFiles) {
    throw new customError('No File Uploaded', 400)
  }

  const newImgs = reqFiles.image
  // console.log(productImgs)
  let result = []

  // If user upload more than 1 image
  if (newImgs.length >= 2) {
    for (const img of newImgs) {
      if (!img.mimetype.startsWith('image')) {
        throw new customError('Image Only!!!', 400)
      }
      if (img.size > 1024 * 1024) {
        throw new customError('Please upload image smaller than 1MB', 400)
      }

      try {
        let uploadImg = await cloudinary.uploader.upload(img.tempFilePath, {
          use_filename: true,
          folder: `News/${newCode}`,
        })
        result.push(uploadImg.secure_url)
        fs.unlinkSync(img.tempFilePath)
      } catch (error) {
        throw new customError(error.message, 400)
      }
    }
    return result
  }

  // If only 1 image
  if (!newImgs.mimetype.startsWith('image')) {
    throw new customError('Image Only!!!', 400)
  }
  if (newImgs.size > 1024 * 1024) {
    throw new customError('Please upload image smaller than 1MB', 400)
  }

  try {
    let uploadImg = await cloudinary.uploader.upload(newImgs.tempFilePath, {
      use_filename: true,
      folder: `News/${newCode}/`,
    })
    result.push(uploadImg.secure_url)
    fs.unlinkSync(newImgs.tempFilePath)
  } catch (error) {
    throw new customError(error.message, 400)
  }

  return result
}

module.exports = uploadImage