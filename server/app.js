const express = require('express')
const app = express()
const port = process.env.PORT || 5000
require('dotenv').config()
require('express-async-errors')

// packages
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')

// cloudinary setup
const cloudinary = require('cloudinary').v2
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
})

// connectDB
const connectDB = require('./db/connect')

// routers
const authRouter = require('./routes/authRoute')
const userRouter = require('./routes/userRoute')
const newRouter = require('./routes/newRoute')

// middleware
const notFoundMiddleware = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/errorHandler')
const { authenticateUser } = require('./middleware/authentication')

app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET))
app.use(fileUpload({ useTempFiles: true, tempFileDir: '/tmp/' }))
var corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:8000'],
  credentials: true,
}

app.use(cors(corsOptions))

// routes
app.use('/api/auth', authRouter)
app.use('/api/user', authenticateUser, userRouter)
app.use('/api/new', newRouter)

// error handler
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => console.log(`http://localhost:${port}/`))
  } catch (error) {
    console.log(error)
  }
}
start()
