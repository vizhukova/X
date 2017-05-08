import React from 'react'
import AddressActions from '../../actions/AddressActions';
import AreYouSureModalActions from '../../../../../common/js/components/AreYouSureModal/AreYouSureModalActions';

class NewAddress extends React.Component {

    constructor() {
        super();
        this.state = {};
        this.submit = this.submit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    submit(e) {
        e.preventDefault();
    }

    onChange(e) {

    }

    render() {
        return <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 new-address-page">
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