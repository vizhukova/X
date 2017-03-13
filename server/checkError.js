/**
 * Обработка ошибок
 * @param err
 * @param res
 */
module.exports = function (err, res) {

    switch (err.constraint) {
        case 'seller_email_unique':
            res.status(400).send('Пользователь с таким email уже существует');
            break;

        case 'seller_login_unique':
            res.status(400).send('Пользователь с таким логин уже существует');
            break;

        case 'no_user':
            res.status(400).send('Такого пользователя не существует');
            break;

        default:
            if (err.errors) {
                var keys = Object.keys(err.errors) || [];
                res.status(400).send();
            }
            else res.status(400).send();
    }
};