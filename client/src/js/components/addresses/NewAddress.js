import React from 'react'
import AddressActions from '../../actions/AddressActions';
import AreYouSureModalActions from '../../../../../common/js/components/AreYouSureModal/AreYouSureModalActions';

class NewAddress extends React.Component {

    constructor() {
        super();
        this.state = {
            formData: {},
            countries: [],
            districts: [],
            cities: [],
            isEdit: false
        };

        this.onChange = this.onChange.bind(this);
        this.updateDistricts = this.updateDistricts.bind(this);
        this.updateCities = this.updateCities.bind(this);
        this.cancel = this.cancel.bind(this);
        this.onSuccessCancel = this.onSuccessCancel.bind(this);
        this.afterReceiveProps = this.afterReceiveProps.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        AddressActions.getCountry().then(countries => {
            this.state.countries = countries;
            this.state.formData.country_id = countries[0].id;
            this.forceUpdate(this.updateDistricts);

        });
        this.afterReceiveProps(this.props);
    }

    componentWillReceiveProps(props) {
        this.afterReceiveProps(props);
    }

    afterReceiveProps(props) {
        if (props.params.id >= 0) {
            this.state.isEdit = true;
            AddressActions.getById(props.params.id).then(formData => {
                this.setState({formData});
            })
        }
    }

    onChange(e) {
        this.state.formData[e.target.name] = e.target.value;
        this.forceUpdate();
    }

    updateDistricts(e) {
        if (e) {
            this.onChange(e);
        }
        AddressActions.getDistricts(this.state.formData.country_id).then(districts => {
            this.state.districts = districts;
            this.state.formData.district_id = districts[0].id;
            this.forceUpdate(this.updateCities);
        })
    }

    updateCities(e) {
        if (e) {
            this.onChange(e);
        }
        AddressActions.getCities(this.state.formData.country_id, this.state.formData.district_id).then(cities => {
            this.state.cities = cities;
            this.state.formData.city_id = cities[0].id;
            this.forceUpdate();
        })
    }

    submit(e) {
        e.preventDefault();
        if (this.state.isEdit) {
            AddressActions.update(this.state.formData).then(res => {
                this.context.router.push('/addresses');
            });
        } else {
            AddressActions.create(this.state.formData).then(res => {
                this.context.router.push('/addresses');
            });
        }

    }

    onSuccessCancel() {
        this.context.router.push('/addresses');
    }

    cancel(e) {
        e.preventDefault();
        AreYouSureModalActions.set({
            text: 'Вы уверенны, что хотите прекратить редактирование?',
            onSuccess: this.onSuccessCancel
        });
    }

    render() {
        return <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <form onSubmit={this.submit}>
                <label>
                    Название адреса:
                    <input required name="name" type="text"
                           value={this.state.formData.name}
                           onChange={this.onChange}/>
                </label>
                <label>
                    Страна:
                    <select required name="country_id"
                            value={this.state.formData.country_id}
                            onChange={this.updateDistricts}>
                        {this.state.countries.map((country, index) => {
                            return <option key={index} value={country.id}>{country.name}</option>
                        })}
                    </select>
                </label>
                <label>
                    Область/Регион:
                    <select required name="district_id"
                            value={this.state.formData.district_id}
                            onChange={this.updateCities}>
                        {this.state.districts.map((district, index) => {
                            return <option key={index} value={district.id}>{district.name}</option>
                        })}
                    </select>
                </label>
                <label>
                    Город:
                    <select required name="city_id"
                            value={this.state.formData.city_id}
                            onChange={this.onChange}>
                        {this.state.cities.map((city, index) => {
                            return <option key={index} value={city.id}>{city.name}</option>
                        })}
                    </select>
                </label>
                <label>
                    Улица, дом, квартира:
                    <input required name="build" type="text"
                           value={this.state.formData.build}
                           onChange={this.onChange}/>
                    <input name="additional_build" type="text"
                           value={this.state.formData.additional_build}
                           onChange={this.onChange}/>
                </label>
                <label>
                    Почтовый индекс:
                    <input required name="zip_code" type="text"
                           value={this.state.formData.zip_code}
                           onChange={this.onChange}/>
                </label>
                <button className="btn btn-primary">Сохранить</button>
                <button className="btn btn-primary" onClick={this.cancel}>Отмена</button>
            </form>
        </div>
    }
}

NewAddress.contextTypes = {
    router: React.PropTypes.object
};

export default NewAddress;