// External Imports
import { Router } from "express";
import { getInbox } from "../controller/inboxController.js";
import { decorateHtmlResponse } from "../middlewares/common/decorateHtmlResponse.js";

const router = Router();

// Login route
router.get("/", decorateHtmlResponse("Inbox"), getInbox);

export default router;
