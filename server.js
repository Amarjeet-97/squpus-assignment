const jsonServer= require("json-server");
const { json } = require("react-router-dom");
const server= jsonServer.create("./Endpoints.json");
const middlewares= jsonServer.defaults({
    static:"./build",
})
const port= process.env.PORT || 8080;
server.use({
    "/api/*":"/$1",
})

server.use(router);
server.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})