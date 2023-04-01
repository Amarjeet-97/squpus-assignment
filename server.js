const jsonServer = require('json-server')
const auth= require('json-server-auth')

const server = jsonServer.create()
const router = jsonServer.router('Endpoints.json')
// const middlewares = "./node_modules/json-server-auth"
server.Endpoints=router.Endpoints
server.use(auth)
server.use(router)
server.listen(process.env.PORT || 8080, () => {
  console.log('JSON Server is running')
})