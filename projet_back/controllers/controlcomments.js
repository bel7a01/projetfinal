const commentSchema = require("../models/Comments");
const commentValidation = require("../validation/validcomment")




const createComment = async (req, res) => {
    let { error, value } = commentValidation.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message })
    }
    console.log(req.body)
    try {
        let newComment = await commentSchema.create(req.body)
        res.status(201).json(newComment)

    } catch (e) {
        console.log(e)
        res.status(500).json({ message: "error while creating comment" })
    }
}

const getAllComments = async (req, res) => {
    try {
        let comments = await commentSchema.find()
        res.status(200).json(comments);
    } catch (e) {
        res.status(500).json({ message: "error retrieving blogs" })
    }

}
const deleteCommentById = async (req, res) => {
    let commentId = req.params.id;
    try {
        let comment = await commentSchema.findByIdAndDelete(commentId)
        res.json({ message: "deleted element with id " + commentId })
    } catch (e) {
        res.status(404).json({ message: "no  blog with id " + commentId })
    }

}
module.exports = {
    createComment,
    getAllComments,
    deleteCommentById,

}