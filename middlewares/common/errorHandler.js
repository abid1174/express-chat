import httpErrors from "http-errors";

const { createError } = httpErrors;

// 404 not found handler
export function notFoundHandler(req, res, next) {
  next(createError(404, "Your requested content was not found!"));
}

// default error handler
export function errorHandler(err, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };

  res.status(err.status || 500);

  if (res.locals.html) {
    // html response
    res.render("error", {
      title: "Error page",
    });
  } else {
    // json response
    res.json(res.locals.error);
  }
}
