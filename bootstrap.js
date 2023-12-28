
import express from 'express'
import { AppError } from './src/utils/error.handler.js'
import authRouter from './src/modules/Auth/routes/auth.routes.js'
import questionRouter from './src/modules/Question/routes/Question.routes.js'

export const bootstrap = (app) => {
	app.use(express.json())

	app.use('/auth', authRouter)
	app.use('/questions', questionRouter)

	app.all('*', (req, res) => {
		throw new AppError("This route doesn't exist", 404)
	})

	app.use((error, req, res, next) => {
		const { message, status, stack } = error
		res.status(status || 500).json({ message, stack })
	})
}