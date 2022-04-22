import express from 'express'
import { bookRoutes } from './routes/CreateBook.routes'
const app = express()

app.use(express.json())
app.use('/book', bookRoutes)
app.use('/', bookRoutes)

export { app }