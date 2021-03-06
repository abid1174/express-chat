// External Imports
import { Router } from "express";
import { renderLoginPage } from "../controller/loginController.js";
import { decorateHtmlResponse } from "../middlewares/common/decorateHtmlResponse.js";

const router = Router();

// Login route
router.get("/", decorateHtmlResponse("Login"), renderLoginPage);

export default router;
