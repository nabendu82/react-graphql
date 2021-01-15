const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(cors())

const connection_url = 'mongodb+srv://admin:2eHJQ6XDioIwYwgR@cluster0.91nul.mongodb.net/graphqLReactDB?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

app.use('/graphql', graphqlHTTP({ 
    schema,
    graphiql: true 
}))

app.listen(4000, () => {
    console.log('Listening at port 4000')
})