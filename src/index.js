import express from 'express'
import mongoose from 'mongoose'
import { loginValidation, registerValidation } from './validations/auth.js'
import { postCreateValidation } from './validations/post.js'
import checkAuth from './utils/checkAuth.js'
import * as UserController from './controllers/UserController.js'
import * as PostController from './controllers/PostController.js'
mongoose
	.connect(
		'mongodb+srv://Kiz9Ka:wwwww@chucstud.s5dkafd.mongodb.net/CHUCSTUD?retryWrites=true&w=majority'
	)
	.then(() => console.log('BD OK'))
	.catch(err => console.log('BD error1111111', err))

const app = express()

app.use(express.json())

app.post('/auth/login', loginValidation, UserController.login)
app.post('/auth/register', registerValidation, UserController.register)
app.get('/auth/me', checkAuth, UserController.getMe)

app.post('/posts', checkAuth, postCreateValidation, PostController.create)
app.get('/posts', PostController.getAll)
app.get('/posts/:id', PostController.getOne)
// app.delete('/posts', PostController.remove)
// app.patch('/posts', PostController.update)

app.listen(4444, err => {
	if (err) {
		return console.log(err)
	}
	console.log('Server OK')
})
