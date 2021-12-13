const app = require("./index")

const connect  = require("./configs/db")

app.listen(2011, () => {
     connect()
    console.log("Listening on port 2011")
})