import AlertActions from '../common/js/components/Alert/AlertActions';
import AuthActions from './src/js/actions/AuthActions';

/**
 * Обработка серверных ошибок
 */
export default {
    check(error) {
        switch(error.status) {
            case 402: {//ограничения по тарифу
                AlertActions.set({
                    type: 'error',
                    title: 'Ошибка',
                    text: 'Данные действия вам не доступны.'
                }, true);
                break;
            }

            case 400: {//общие ошибки
                AlertActions.set({
                    type: 'error',
                    title: 'Ошибка',
                    text: error.responseText
                }, true);
                break;
            }

            case 401: {//клиент не залогинен
                // window.location.replace(`http://${(window.location.origin)}/#/auth`);
            }

        }
    }
}