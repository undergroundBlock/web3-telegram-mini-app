const express = require('express')
require('express-async-errors')
const path = require('path')
const app = express()
const helmet = require('helmet')

const port = process.env.PORT || '5000'

const staticDir = path.join(__dirname, 'build')
const staticIndex = path.join(staticDir, 'index.html')

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
)

app.use(express.static(staticDir))
app.get(/^(?!.*(js|json|svg|png|jpg)).*$/, (req, res) =>
  res.sendFile(staticIndex)
)

app.use((err, req, res, next) => {
  console.log(err)
  return res
    .status(500)
    .send({ response: 'Internal server error', status: false })
})

app.listen(port, () =>
  console.log(`Server ready at http(s)://localhost:${port}!`)
)
