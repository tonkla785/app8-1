const express = require('express')
const app = express()
const port = 8000
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))

app.post('/api/form-post',(request, response) => {
    let name = request.body.name ||''
    let email = request.body.email ||''
    let message = request.body.message ||''
    let r = `
    <table border = "1">
    <caption>sent data</caption>
    <tr><td>name:</td><td>${name}</td></tr>
    <tr><td>email:</td><td>${email}</td></tr>
    <tr><td>msg:</td><td>${message}</td></tr>
    </table>
    `

    response.send(r)
})

app.listen(port,() => {
    console.log('Server listen on port' + port)
})