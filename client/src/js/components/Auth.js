import React from 'react'
import PasswordInput from '../../../../common/js/components/PasswordInput';
import AuthActions from '../actions/AuthActions';

/**
 * Компонент формы логина клиента
 */
class Auth extends React.Component {

    constructor() {
        super();

        this.state = {
            formData: {}
        };

        this.submit = this.submit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    submit(e) {
        e.preventDefault();
        var self = this;

        AuthActions.login(this.state.formData).then(function (data) {
                location.assign(window.location.origin)
            });
    }

    onChange(e) {
        this.state.formData[e.target.name] = e.target.value;
        this.forceUpdate();
    }

    render() {

        var baseClass = 'tab';

        return <div>
            <div className="container">
                <div className="tab-container col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3 auth-form">
                    <ul className="tabs clearfix">
                        <li className={`tab active`}>
                            Логин
                        </li>
                        <li className={baseClass}>
                            <a href="#/register">Регистрация</a>
                        </li>
                    </ul>

                    <div className="tab-body boxed">

                        <form role="form" onSubmit={this.submit}>
                            <div className="form-group">
                                <input type="email" name="email" id="email"
                                       required
                                       className={baseClass}
                                       onChange={this.onChange}
                                       placeholder="Электронная почта" tabIndex="3"/>
                            </div>
                            <div className="form-group">
                                <PasswordInput
                                    name="password"
                                    id="password"
                                    class={baseClass}
                                    onChange={this.onChange}
                                    placeholder="Пароль" tabIndex="4"/>
                            </div>

                            <button className="btn btn-primary btn-block" tabIndex="5">Отправить</button>
                        </form>
                    </div>

                    <div className="text-center"><a href={`${location.origin}/password/recover`}>Забыли пароль?</a>
                    </div>

                </div>
            </div>

        </div>
    }
}

export default Auth;