// Challenge at https://www.freecodecamp.com/challenges/request-header-parser-microservice
// Deployed at https://kah-fcc-whoami.herokuapp.com/

/* I'm thinking there is no need for express, as the User Story 
doesn't specify any route so I'll accept any. */

const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'})

  const software = req.headers['user-agent'].match(/\(([^\)]*)\)/)[1]
  const language = req.headers['accept-language'].slice(0,5)
  const ipaddress = req.connection.remoteAddress

  let result = {
    "ipaddress": ipaddress,
    "language": language,
    "software": software
  }
  
  res.end(JSON.stringify(result))
})

server.listen(process.env.PORT || 5000)

