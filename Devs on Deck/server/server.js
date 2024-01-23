const express = require('express')
const cors = require('cors')

require('./config/mongoose.config')



const PORT = 3001
const app = express()

//middleware
app.use(express.json(),
    express.urlencoded({ extended: true }),
    cors(
        {
            origin: ["http://localhost:5000"], // specify the origin that is allowed to access the server resources
            credentials: true // allowed to send credentials (cookies/tokens)
        }))

const devRoutes = require('./routes/developer.route')
devRoutes(app)




app.listen(PORT, () => console.log(`The server is running on PORT ${PORT}`))