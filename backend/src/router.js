const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const usersControllers = require("./controllers/usersControllers ");
const usersConnected = require("./controllers/connectedController");
const verifyUser = require("./middlewares/verifiedPassword");

const hashingPassword = require("./middlewares/hashPassword");

// Connexion users
router.post("/login", verifyUser, usersConnected.userLogin);

// items
router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);
// users
router.get("/users", usersControllers.browse);
router.get("users/:id", usersControllers.read);
router.put("/users/:id", usersControllers.edit);
router.post("/addusers/", hashingPassword, usersControllers.add);
router.delete("/delusers/:id", usersControllers.destroy);

module.exports = router;
