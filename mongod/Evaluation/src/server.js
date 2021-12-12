const connect = require("./configs/db")
const app = require("./index")

app.listen(2121, async () => {
    await connect()
    console.log("Listening on PORT 2121")
})