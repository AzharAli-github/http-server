const http = require('http')
const PORT = process.env.PORT || 5000

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": "text/plain"
    })
    response.end('Hello')
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.log('Port is already in use')
    }
})
