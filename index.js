// start your server herec
const server = require('./api/server')

const port = process.env.PORT || 8800

server.listen(port, () => console.log(`\n_____Running on port ${port}_____\n`))