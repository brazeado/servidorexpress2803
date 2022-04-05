
console.log("Iniciando Meu Servidor...")


const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/bandas', (req, res) => {
    console.log('Alguém Acessou a Rota /bandas');
    console.log(req.params)
    res.json({
        "1": {
            "id": 1
            "nome": "banda"
        }
})
})

app.listen(port, () => {
  console.log(`Servidor escutando na ${port}`)
})