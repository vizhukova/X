/**
 * Если пользователь не залогинился - редирект на форму регистрации
 * @param req
 * @param res
 * @param next
 */
module.exports = function (req, res, next) {
    if (req.authUser.id) {
        next();
    } else {
        res.status(401).send('Для доступа на эту страницу необходимо зарегестрироваться');
    }
};