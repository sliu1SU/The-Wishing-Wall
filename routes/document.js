/*
this is my controller
 */

const { Router } = require('express')
const mongoDataStore = require('../modelMongoDB')
const router = Router();

// render index page - list all documents in the database
router.get('/', async (req, res)=>{
    const docData = await mongoDataStore.getAllDocuments()
    res.render('document/index', {data: docData})
})

// render create page
router.get('/create', (req, res)=> {
    res.render('document/create')
})

// render detail page - show one document
router.get('/detail/:id', async (req, res) => {
    const doc = await mongoDataStore.getOneDocument(req.params.id)
    res.render('document/detail', {_id: doc._id, title: doc.title, content: doc.content, time: doc.time})
})

// render edit page
router.get('/edit/:id', async (req, res)=> {
    const doc = await mongoDataStore.getOneDocument(req.params.id)
    res.render('document/edit', {_id: req.params.id, title: doc.title, content: doc.content})
})

// add a new document to the database
router.post('/create', async (req, res)=> {
    const doc = req.body
    const id = await mongoDataStore.addDocument(doc)
    console.log(id)
    res.redirect('/document/detail/' + id)
})

// delete a document
// question>>>>>????? pass in id via url????
router.post('/delete/:id', async (req, res)=>{
    await mongoDataStore.deleteDocument(req.params.id)
    res.redirect('/document')
})

// edit/modify one document
router.post('/edit/:id', async (req, res)=>{
    await mongoDataStore.modDocument(req.params.id, req.body)
    res.redirect('/document/detail/' + req.params.id)
})

module.exports = router