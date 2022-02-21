const http = require('http')
const hostName = "127.0.0.1"
const port = 3000

const okResponse = 200

const server = http.createServer( (req, res) => {
    res.statusCode = okResponse
    res.setHeader('Content-Type', 'text-plain')
    res.end('Hello World')
})

server.listen(port, hostName, () => {
    console.log('Server is running on ' + port)
})