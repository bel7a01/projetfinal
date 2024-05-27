const router = require("express").Router()
const { GetAllUsers,
    getUserById,
    createUser,
    deleteUserById,
    updateUserByid } = require("../controllers/user");

router.get("/", GetAllUsers)
router.get("/:id", getUserById)
router.post("/", createUser)
router.put("/:id", updateUserByid)
router.delete("/:id", deleteUserById)

module.exports = router