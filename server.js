import express from 'express'
import 'dotenv/config'
import cookieParser from 'cookie-parser'

const PORT = process.env.PORT ?? 3000
const app = express()

app.use(cookieParser()) // middleware

app.get('/', (req, res) => {
  res.cookie('cookie_hour', 'orteg', {
    maxAge: 1000 * 60 * 60,
    // expires: new Date('2026-10-27'),
    httpOnly: true,
    secure: true, // activarlo en produccion
    // sameSite: 'strict' unico dominio 'lax' entre dominios f1
  })
  res.send('Hello World!')
})

app.get('/getcookies', (req, res) => {
  console.log(req.cookies)

  res.header('Content-Type', 'text/html')
  res.send('<h1>reading cookies</h1>')
})

app.get('/deletecookies', (req, res) => {
  console.log(req.cookies)
  res.clearCookie('cookie_hour')
  res.send('cookies cleaning')
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
