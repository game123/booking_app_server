import express from 'express'

const router = express.Router();

// controllers
// import { showMessage, register } from "../controllers/auth";
import { register, login } from "../controllers/auth";

// router.get("/:message", showMessage);
router.post("/register", register);
router.post('/login', login);

module.exports = router;