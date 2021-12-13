const app = require("./index.js")

const connect = require("./configs/db")

app.listen(2008, () => {
     connect()
    console.log("listening on port 2008")
})
