import express from 'express'
import multer from 'multer'
import { loginValidation, registerValidation } from './validations/auth.js'
import { postCreateValidation } from './validations/post.js'
import checkAuth from './utils/checkAuth.js'
import * as UserController from './controllers/UserController.js'
import * as PostController from './controllers/PostController.js'
import { connect } from './controllers/ConnectDB.js'

connect();
const app = express()

const storage = multer.diskStorage({
	destination: (_, __, cb) =>{
		cb(null, 'uploads')
	},
	filename: (_, file, cb) =>{
		cb(null, 'file.originalname')
	},
})

const upload = multer({ storage })

app.use(express.json())

app.post('/auth/login', loginValidation, UserController.login)
app.post('/auth/register', registerValidation, UserController.register)
app.get('/auth/me', checkAuth, UserController.getMe)

app.post('/upload', upload.single('image'), (req, res) => {
	res.json({
		url: `/uploads/${req.file.originalname}`,
	})
})

app.post('/posts', checkAuth, postCreateValidation, PostController.create)
app.get('/posts', PostController.getAll)
app.get('/posts/:id', PostController.getOne)
app.delete('/posts/:id', checkAuth, PostController.remove)
app.patch('/posts/:id', checkAuth, PostController.update)

app.listen(4444, err => {
	if (err) {
		return console.log(err)
	}
	console.log('Server OK')
})
