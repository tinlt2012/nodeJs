const app = require("./app")

app
const PORT = 3389
const server = app.listen (PORT,() => {
    console.log(`running with ${PORT}`)
})
process.on('SIGINT', ()=>{
   server.close (() => console.log('running out')) 
})