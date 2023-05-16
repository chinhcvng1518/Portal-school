const mongoose = require('mongoose')

const NewSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Vui lòng nhập tiêu đề bài viết'],
      trim: true,
    },
    author: {
      type: String,
      required: [true, 'Vui lòng nhập tên tác giả'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Vui lòng nhập nội dung bài viết'],
      trim: true,
    },
    code: {
      type: String,
      required: [true, 'Vui lòng nhập code bài viết'],
      trim: true,
      unique: true,
    },
    category: {
      type: String,
      required: [true, 'Vui lòng nhập thể loại bài viết'],
      enum: {
        values: ['Tuyển sinh - Đào tạo', 'Tin tức sự kiện', 'Nổi bật', 'Hoạt động quốc tế'],
        message: '{VALUE} is not supported',
      },
      trim: true,
    },
    size: {
      type: Array,
      sizeNum: { type: Number },
      sizeStock: { type: Number },
      default: [],
    },
    image: { type: [String], required: true, trim: true, default: [] },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

NewSchema.pre('findOneAndUpdate', async function () {
  let totalStock = 0
  let size = this.getUpdate().size

  if (size) {
    size.map((s) => (totalStock += s.sizeStock))
    if (totalStock < 1) {
      this.set({ available: false })
    } else {
      this.set({ available: true })
    }
  } else return
})

// NewSchema.pre('remove', async function () {
//   await this.model('Review').deleteMany({ product: this._id })
// })

module.exports = mongoose.model('New', NewSchema)
