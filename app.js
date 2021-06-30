// ****** External Imports ******
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import express, { json, urlencoded } from "express";
import mongoose from "mongoose";
import * as path from "path";
import { fileURLToPath } from "url";
// ****** Internal Imports ******
import {
  errorHandler,
  notFoundHandler,
} from "./middlewares/common/errorHandler.js";
import inboxRouter from "./router/inboxRouter.js";
import loginRouter from "./router/loginRouter.js";
import usersRouter from "./router/usersRouter.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ****** Initialize express app setup ******
const app = express();
config();

// database connection
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successful."))
  .catch((err) => console.log(err));

// request parser
app.use(json());
app.use(urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// ****** routing setup ******
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

// ****** error handling ******

// 404 not found handler
app.use(notFoundHandler);

// common error handler
app.use(errorHandler);

// ****** app listener ******
app.listen(process.env.PORT, () => {
  console.log(`app is listening to port ${process.env.PORT}`);
});
