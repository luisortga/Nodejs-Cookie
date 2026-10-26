import express from 'express'
import 'dotenv/config'
import cookieParser from 'cookie-parser'

const PORT = process.env.PORT ?? 3000
const app = express()

app.use(cookieParser()) // middleware

app.get('/', (req, res) => {
  res.cookie('cookie_hour', 'orteg', {
    maxAge: 1000 * 60 * 60,
    expires: new Date('2026-10-27'),
  })
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
