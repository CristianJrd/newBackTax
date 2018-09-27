require('dotenv').config()
const { GraphQLServer } =  require('graphql-yoga')
const { Prisma } = require('prisma-binding')
const { request } = require('graphql-request')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Subscription = require('./resolvers/Subscription')

const PRISMA_ENDPOINT = process.env.PRISMA_ENDPOINT || "https://back-taxi.herokuapp.com/backtax/dev"

const messageQuery = `{
    Messageses{
        device
        timestamp
        data
        creae_at
    }
}`

request('https://newbacktax.herokuapp.com/createMessage', messageQuery).then(data => console.log(data))

const resolvers = {
    Query,
    Mutation,
    Subscription
}

//wss://back-taxi.herokuapp.com/backtax/dev

const server = new GraphQLServer({
    typeDefs:'./src/schema.graphql',
    resolvers,
    context: req => ({
        //spreat separator : 
        ...req,
        db: new Prisma({
            typeDefs: 'src/generated/prisma.graphql',
            endpoint: PRISMA_ENDPOINT,
            debug: true
        })
    }),
    resolverValidationOptions:{
        requireResolversForResolveType:false
    }
})

module.exports = {
    server,
    resolvers
};