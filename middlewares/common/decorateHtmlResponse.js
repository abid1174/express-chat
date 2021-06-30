/**
 * @param {*} pageTitle
 * set page title and response type -> json / html
 * @returns middleware
 */

export function decorateHtmlResponse(pageTitle) {
  return function (req, res, next) {
    res.locals.html = true;
    res.locals.title = `${pageTitle} - ${process.env.APP_NAME}`;

    next();
  };
}
