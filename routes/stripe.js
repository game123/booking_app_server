import express from 'express'

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";

// controllers
import { createConnectAccount, getAccountStatus } from "../controllers/stripe";
// import { getAccountStatus } from '../../client/src/actions/stripe';

// router.get("/:message", showMessage);
router.post("/create-connect-account", requireSignin, createConnectAccount);
router.post('/get-account-status', requireSignin, getAccountStatus);

module.exports = router;