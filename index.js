
console.log("Iniciando Meu Servidor...")


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/teste', (req, res) => {
    res.send('Você Acessou a Rota /teste!')
  })

app.listen(port, () => {
  console.log(`Servidor escutando na ${port}`)
})