const express = require("express");
const { createUser,
     getUser, 
     updateUser,
     loginUser, 
     getUserById,
     deleteUserById, 
     deleteUser
     } = require("../Controller/userController");
const { authenticateToken, isAdmin } = require("../middlewares/authenticate")
const router = express.Router();

router.post("/create", createUser);
router.get("/all-user", authenticateToken, isAdmin, getUser);
router.get("/:id", authenticateToken, getUserById);
router.put("/update/:id", authenticateToken,updateUser);
router.delete("/delete-user", authenticateToken, isAdmin, deleteUser)
router.delete("/:id", authenticateToken, deleteUserById);
router.post("/login", loginUser);

module.exports = router;
