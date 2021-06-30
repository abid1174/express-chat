// External Imports
import { Router } from "express";
import { getUsers } from "../controller/usersController.js";
import { decorateHtmlResponse } from "../middlewares/common/decorateHtmlResponse.js";

const router = Router();

// Login route
router.get("/", decorateHtmlResponse("User"), getUsers);

export default router;
