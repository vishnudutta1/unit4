const express = require("express")
const router = express.Router()
const Author = require("../models/author.model")


router.post("", async (req, res) => {
    try{
    const author = await Author.create(req.body)
    res.status(201).send(author)
    }catch(e){
        return res.status(500).json({message: e.message, status: "Failed"})
    }
});

router.get("", async (req, res) => {
    try{

        const author = await Author.find().lean().exec()
       return res.status(201).send(author)

    }catch(e){
        return res.status(500).json({message: e.message, status: "Failed"})
    }
})

router.get("/:id", async (req, res) => {
    try{
    const author = await Author.findById(req.params.id).lean().exec()
    return res.status(201).send(author)
    }catch(e){
        return res.status(500).json({message: e.message, status: "Failed"})
    }
})

router.patch("/:id", async (req, res) => {
    try{
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }).lean().exec()
        res.status(201).send(author)
    }catch(e){
        return res.status(500).json({message: e.message, status: "Failed"})
    }
})

router.delete("/:id", async (req, res) => {
    try{
        const author = await Author.findByIdAndDelete(req.params.id).lean().exec()
        res.status(201).send(author)
    }catch(e){
        return res.status(500).json({message: e.message, status: "Failed"})
    }
})

module.exports = router