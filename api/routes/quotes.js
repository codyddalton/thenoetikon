const express = require("express");
const router = express.Router();
const Quote = require("../models/quote");

const getQuote = async (req, res, next) => {
    let quote
    try {
        quote = await Quote.findById(req.params.id)
        if(quote === null){
            return res.status(404).json({ message:"Quote note found"})
        }
    } catch (error) {
        return res.status(500).json({ message:error.message})
    }
    res.quote = quote
    next();
}

router.get('/', async (req, res) => {
    try {
        const quotes = await Quote.find()
        res.json(quotes)
    } catch (error) {
        res.status(500).json({ message:error.message })
    }
})

router.get('/:id', getQuote, (req, res) => {
    res.json(res.quote)
})

router.post('/', async (req, res) => {
    const quote = new Quote({
        era: req.body.era,
        title: req.body.title,
        source: req.body.source,
        author: req.body.author,
        quote: req.body.quote,
        attribution: req.body.attribution,
        tags: req.body.tags
    })
    try {
        const newQuote = await quote.save();
        res.status(201).json(newQuote)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.patch('/:id', getQuote, async (req, res) => {
    if(req.body.era != null){
        res.quote.era = req.body.era
    }
    if(req.body.title != null){
        res.quote.title = req.body.title
    }
    if(req.body.source != null){
        res.quote.source = req.body.source
    }
    if(req.body.author != null){
        res.quote.author = req.body.author
    }
    if(req.body.quote != null){
        res.quote.quote = req.body.quote
    }
    if(req.body.attribution != null){
        res.quote.attribution = req.body.attribution
    }
    if(req.body.tags != null){
        res.quote.tags = req.body.tags
    }
    try {
        const updatedQuote = await res.quote.save()
        res.json(updatedQuote)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.delete('/:id', getQuote, async (req, res) => {
    const id = req.params.id;
    try {
        const deletedQuote = await res.quote.deleteOne({ _id: id });
        res.json({ message: "Removed quote", deletedQuote})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;