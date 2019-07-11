const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Working fine, with new push!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))