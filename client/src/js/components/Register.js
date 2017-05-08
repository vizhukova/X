import React from 'react'
import AuthActions from './../actions/AuthActions'
import PasswordInput from '../../../../common/js/components/PasswordInput';
import LoginInput from '../../../../common/js/components/LoginInput';
import Alert from '../../../../common/js/components/Alert/Alert';
import AlertActions from '../../../../common/js/components/Alert/AlertActions';

import ImageLoader from '../../../../common/js/components/ImageLoader';
import FileLoader from '../../../../common/js/components/FileLoader';

/**
 * компонент формы регистрации клиента
 */
class Register extends React.Component {

    constructor() {
        super();

        this.state = {
            errors: {},
            files: [],
            avatars: [],
            formData: {
                id_files: [],
                id_avatars: [],
                legal_entity: 'private_person'
            }
        };

        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
        this.onFilesChange = this.onFilesChange.bind(this);
        this.onChangeBirthDay = this.onChangeBirthDay.bind(this);
    }

    onChange(e) {
        this.state.formData[e.target.name] = e.target.value;
        this.forceUpdate();
    }

    componentDidMount() {
        $(this.birthdayRef).datepicker({
            startView: "years",
            viewMode: "days"
        }).on('changeDate', (e) => {
            this.onChange({
                target: {
                    name: 'birthday',
                    value: e.date
                }
            })
        });
    }

    submit(e) {
        e.preventDefault();
        var self = this;

        // ApiActions.post('seller/register', this.state.formData)
        //     .then(function (data) {
        //         location.assign(window.location.origin)
        //     })

        AuthActions.register(this.state.formData);
    }

    /**
     * Валидация
     * @returns {boolean}
     */
    isCorrectField() {
        var empty = false;
        if (!this.state.login || this.state.login.length == 0) {
            this.state.errors.login = ["Поле 'логин' должно быть заполнено"];
            empty = true;
        }
        if (!this.state.name || this.state.name.length == 0) {
            this.state.errors.name = ["Поле 'ФИО' должно быть заполнено"];
            empty = true;
        }
        if (!this.state.email || this.state.email.length == 0) {
            this.state.errors.email = ["Поле 'электронная почта' должно быть заполнено"];
            empty = true;
        }
        if (!this.state.password || this.state.password.length == 0) {
            this.state.errors.password = ["Поле 'пароль' должно быть заполнено"];
            empty = true;
        }

        if (empty) {
            AlertActions.set({
                type: 'error',
                title: 'Ошибка',
                text: 'Все поля должны быть заполнены'
            })
            return false;
        }

        if (this.state.password !== this.state.confirm_pass) {
            AlertActions.set({
                type: 'error',
                title: 'Ошибка',
                text: 'Пароли не совпадают'
            })
            return false;
        }

        return true;
    }

    onFilesChange(fieldName) {
        return (newFiles) => {
            this.state[fieldName] = newFiles;
            var ids = newFiles.map(file => file.id);
            this.onChange({
                target: {
                    name: `id_${fieldName}`,
                    value: ids
                }
            })
        };
    }

    onChangeBirthDay(event) {
        var target = event.target;
        this.state.formData.birthday[target.name] = target.value;
        this.forceUpdate();
    }

    render() {
        var baseClass = "form-control input-lg";

        return <form onSubmit={this.submit} className="register-form col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <div className="form-group">
                <LoginInput
                    class={this.state.errors.login ? `${baseClass} invalid` : baseClass}
                    onChange={this.onChange}
                />
            </div>
            <div className="form-group">
                <input type="text" name="name" id="full_name" required
                       className={this.state.errors.name ? `${baseClass} invalid` : baseClass}
                       onChange={this.onChange}
                       placeholder="ФИО"/>
            </div>
            <div className="form-group">
                <input type="email" name="email" id="email" required
                       className={this.state.errors.email ? `${baseClass} invalid` : baseClass}
                       onChange={this.onChange}
                       placeholder="Электронная почта"/>
            </div>
            <div className="row">
                <label className="col-xs-12">
                    <span className="label">Юридическое лицо</span>
                    <select name="legal_entity"
                            className="input-lg col-md-6"
                            required
                            onChange={this.onChange}
                            value={this.state.formData.legal_entity}>
                        <option value='private_person'>частное лицо</option>
                        <option value='individual_entrepreneur'>ФОП</option>
                        <option value='limited_liability'>ТОВ</option>
                    </select>
                </label>
            </div>
            <div className="row">
                <label className="col-xs-12">
                    <span className="label">День рождения</span>
                    <input className="input-lg col-md-6"
                           ref={ref => this.birthdayRef = ref}
                           name="birthday"
                           onChange={this.onChange}
                           data-provide="datepicker"/>
                </label>
            </div>
            <div className="row">
                <label>
                    Добавить фото
                    <ImageLoader isMultiple={false} onChange={this.onFilesChange('avatars')}
                                 files={this.state.avatars}/>
                </label>
            </div>
            <div className="row">
                <label>
                    Добавить документы
                    <FileLoader isMultiple={true} onChange={this.onFilesChange('files')} files={this.state.files}/>
                </label>
            </div>
            <div className="row">
                <PasswordInput
                    name="password"
                    id="password"
                    class={this.state.errors.password ? `${baseClass} invalid` : baseClass}
                    onChange={this.onChange} placeholder="Пароль"/>
                <PasswordInput
                    name="confirm_pass"
                    id="confirm_pass"
                    class={this.state.errors.password ? `${baseClass} invalid` : baseClass}
                    onChange={this.onChange} placeholder="Подтвердите"/>
            </div>
            <button className="btn btn-primary btn-block">
                Отправить
            </button>
        </form>
    }
}

export default Register;