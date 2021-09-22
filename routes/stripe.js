import express from 'express'

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";

// controllers
import { createConnectAccount } from "../controllers/stripe";

// router.get("/:message", showMessage);
router.post("/create-connect-account", requireSignin, createConnectAccount);


module.exports = router;