/*
this is my model
 */
const { DocumentSchema } = require('./data/dataMongoDB')

// implement my APIs here
// get all documents for the database
async function getAllDocuments() {
    return await DocumentSchema.find({})
}

// find one document from the database
async function getOneDocument(id) {
    return await DocumentSchema.findById(id)}

// add one document
async function addDocument(body) {
    const doc = new DocumentSchema(body)
    const res = await doc.save()
    return res._id
}

// delete a document from the collection with id
async function deleteDocument(id){
    const doc = await DocumentSchema.findOneAndDelete({_id: id})}

// modify a document in the collection
async function modDocument(id, body) {
    const newContent = body.content
    const newTitle = body.title
    // apply filter, update to the argument of this function
    await DocumentSchema.findOneAndUpdate(
        {
            _id: id
        },
        {
            title: newTitle,
            content: newContent,
            time: Date.now()
        },
        {
            new: true
        });
    return id
}

module.exports = {
    addDocument,
    deleteDocument,
    modDocument,
    getAllDocuments,
    getOneDocument
}