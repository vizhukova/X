import React from 'react'
import CategoryActions from '../../actions/CategoryActions';
import AreYouSureModalActions from '../../../../../common/js/components/AreYouSureModal/AreYouSureModalActions';

class NewCategory extends React.Component {

    constructor() {
        super();
        this.state = {
            formData: {},
            categories: []
        };
        this.submit = this.submit.bind(this);
        this.cancel = this.cancel.bind(this);
        this.onSuccessCancel = this.onSuccessCancel.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        CategoryActions.get().then(categories => {
            this.setState({categories});
        });
    }

    submit(e) {
        e.preventDefault();
        CategoryActions.create(this.state.formData).then(res => {
            if (res.parent_id) {
                this.context.router.push(`/category/${res.parent_id}`);
            } else {
                this.context.router.goBack();
            }
        });
    }

    cancel(e) {
        e.preventDefault();
        AreYouSureModalActions.set({
            text: 'Вы уверенны, что хотите прекратить редактирование?',
            onSuccess: this.onSuccessCancel
        });
    }

    onSuccessCancel() {
        this.context.router.goBack();
    }

    onChange(e) {
        var target = e.target;
        this.state.formData[target.name] = target.value;
        this.forceUpdate();
    }

    render() {
        return <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 new-form-page">
            <form onSubmit={this.submit}>
                <label>
                    Название категории:
                    <input required name="name" type="text"
                           value={this.state.formData.name}
                           onChange={this.onChange}/>
                </label>
                <label>
                    Вложенная категория:
                    <select name="parent_id"
                            value={this.state.formData.parent_id}
                            onChange={this.onChange}>
                        <option disabled>Выберите вложенную категорию</option>
                        {this.state.categories.map((country, index) => {
                            return <option key={index} value={country.id}>{country.name}</option>
                        })}
                    </select>
                </label>
                <button className="btn btn-primary">Сохранить</button>
                <button className="btn btn-primary" onClick={this.cancel}>Отмена</button>
            </form>
        </div>
    }
}

NewCategory.contextTypes = {
    router: React.PropTypes.object
};

export default NewCategory;