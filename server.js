const express = require('express')
const cors = require('cors')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/', async (req, res) => {

    try {
        // Capturando valores de uma API no backend com axios
        // response é a resposta do axios, mas é possível retirar o data de dentro do response
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')
        //console.log(data)

        // return res.json([
        //     { name: 'Leonardo' },
        //     { name: 'Josilene' }
        // ])

        return res.json(data)
    }
    catch (error) {
        console.error(error)
    }


})

app.listen(3000)

