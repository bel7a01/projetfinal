const router = require("express").Router()
const { createComment, getAllComments, deleteCommentById } = require("../controllers/controlcomments")

router.get("/", getAllComments)
// router.get("/:id",getCommentById)
router.post("/", createComment)
// router.put("/:id",updateBlogById)
router.delete("/:id", deleteCommentById)

module.exports = router