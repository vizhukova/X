import React from 'react'
import AddressActions from './../../actions/AddressActions';

class NewAddress extends React.Component {

    constructor() {
        super();
        this.state = {
            formData: {},
            countries: [],
            districts: [],
            cities: []
        };

        this.onChange = this.onChange.bind(this);
        this.updateDistricts = this.updateDistricts.bind(this);
        this.updateCities = this.updateCities.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        AddressActions.getCountry().then(countries => {
            this.state.countries = countries;
            this.state.formData.country_id = countries[0].id;
            this.forceUpdate(this.updateDistricts);

        })
    }

    onChange(e) {
        debugger
        this.state.formData[e.target.name] = e.target.value;
        this.forceUpdate();
    }

    updateDistricts(e) {
        if(e) { this.onChange(e); }
        AddressActions.getDistricts(this.state.formData.country_id).then(districts => {
            this.state.districts = districts;
            this.state.formData.district_id = districts[0].id;
            this.forceUpdate(this.updateCities);
        })
    }

    updateCities(e) {
        if(e) { this.onChange(e); }
        AddressActions.getCities(this.state.formData.country_id, this.state.formData.district_id).then(cities => {
            this.state.cities = cities;
            this.state.formData.city_id = cities[0].id;
            this.forceUpdate();
        })
    }

    submit(e) {
        e.preventDefault();
        AddressActions.create(this.state.formData).then(res => {

        }).catch(err => {

        })
    }

    render() {
        return <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 new-address-page">
            <form onSubmit={this.submit}>
                <label>
                    Название адреса:
                    <input required name="name" type="text" onChange={this.onChange}/>
                </label>
                <label>
                    Страна:
                    <select required name="country_id" onChange={this.updateDistricts}>
                        {this.state.countries.map((country, index) => {
                            return <option key={index} value={country.id}>{country.name}</option>
                        })}
                    </select>
                </label>
                 <label>
                    Область/Регион:
                    <select required name="district_id" onChange={this.updateCities}>
                        {this.state.districts.map((district, index) => {
                            return <option key={index} value={district.id}>{district.name}</option>
                        })}
                    </select>
                </label>
                 <label>
                    Город:
                    <select required name="city_id" onChange={this.onChange}>
                        {this.state.cities.map((city, index) => {
                            return <option key={index} value={city.id}>{city.name}</option>
                        })}
                    </select>
                </label>
                <label>
                    Улица, дом, квартира:
                    <input required name="build" type="text" onChange={this.onChange}/>
                    <input required name="additional_build" type="text" onChange={this.onChange}/>
                </label>
                 <label>
                    Почтовый индекс:
                    <input required name="zip_code" type="text" onChange={this.onChange}/>
                </label>
                <button className="btn btn-primary">Сохранить</button>
                <button className="btn btn-primary">Отмена</button>
            </form>
        </div>
    }
}

export default NewAddress;