import React from 'react'
import AddressActions from '../../actions/AddressActions';
import ProductActions from '../../actions/ProductActions';
import DragnDropPictureLoader from '../../../../../common/js/components/DragnDropPictureLoader';
import AreYouSureModalActions from '../../../../../common/js/components/AreYouSureModal/AreYouSureModalActions';
import AlertActions from '../../../../../common/js/components/Alert/AlertActions';

class NewProduct extends React.Component {

    constructor() {
        super();
        this.state = {
            countries: [],
            districts: [],
            cities: [],
            images: [],
            formData: {},
            wholesalePrices: [],
            countryDelivery: [],
            districtDelivery: [],
            cityDelivery: []
        };
        this.addWholesalePrices = this.addWholesalePrices.bind(this);
        this.addCountryDelivery = this.addCountryDelivery.bind(this);
        this.addDistrictDelivery = this.addDistrictDelivery.bind(this);
        this.addCityDelivery = this.addCityDelivery.bind(this);

        this.removeWholesalePricesNewRaw = this.removeWholesalePricesNewRaw.bind(this);
        this.removeCountryDeliveryNewRaw = this.removeCountryDeliveryNewRaw.bind(this);
        this.removeDistrictDeliveryNewRaw = this.removeDistrictDeliveryNewRaw.bind(this);
        this.removeCityDeliveryNewRaw = this.removeCityDeliveryNewRaw.bind(this);

        this.wholesalePricesChange = this.wholesalePricesChange.bind(this);
        this.onCountryDeliveryChange = this.onCountryDeliveryChange.bind(this);
        this.onDistrictDeliveryChange = this.onDistrictDeliveryChange.bind(this);
        this.onCityDeliveryChange = this.onCityDeliveryChange.bind(this);

        this.addWholesalePricesNewRaw = this.addWholesalePricesNewRaw.bind(this);
        this.addCountryDeliveryNewRaw = this.addCountryDeliveryNewRaw.bind(this);
        this.addDistrictDeliveryNewRaw = this.addDistrictDeliveryNewRaw.bind(this);
        this.addCityDeliveryNewRaw = this.addCityDeliveryNewRaw.bind(this);

        this.onFilesChange = this.onFilesChange.bind(this);
        this.submit = this.submit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            categoryId: this.props.params.id
        });
        AddressActions.getCountry().then(countries => {
            this.state.countries = countries;
            this.forceUpdate();
        });
        AddressActions.getDistricts().then(districts => {
            this.state.districts = districts;
            this.forceUpdate(this.updateCities);
        });
        AddressActions.getCities().then(cities => {
            this.state.cities = cities;
            this.forceUpdate();
        });
    }

    onFilesChange(fieldName) {
        return (newFiles) => {
            this.state[fieldName] = newFiles;
            this.forceUpdate();
        };
    }

    /////////////////////////// работа с оптовыми ценами////////////////////////////////////

    /**
     * Показать форму добавления оптовых цен
     */
    addWholesalePrices(e) {
        e.preventDefault();
        this.state.wholesalePrices = [{price: 0, count: 0}];
        this.forceUpdate();
    }

    addWholesalePricesNewRaw(e) {
        e.preventDefault();
        this.state.wholesalePrices.push({price: 0, count: 0});
        this.forceUpdate();
    }

    removeWholesalePricesNewRaw(e, del_index) {
        e.preventDefault();
        this.state.wholesalePrices = this.state.wholesalePrices.filter((item, index) => index != del_index);
        this.forceUpdate();
    }

    wholesalePricesChange(e, index) {
        var target = e.target;
        this.state.wholesalePrices[index][target.name] = target.value;
        this.forceUpdate();
    }

    /////////////////////////// работа с доставкой по странам////////////////////////////////////

    addCountryDelivery(e) {
        e.preventDefault();
        this.state.countryDelivery = [{price: 0, data: (this.state.countries[0] || {}).id}];
        this.forceUpdate();
    }

    addCountryDeliveryNewRaw(e) {
        e.preventDefault();
        this.state.countryDelivery.push({price: 0, data: (this.state.countries[0] || {}).id});
        this.forceUpdate();
    }

    removeCountryDeliveryNewRaw(e, del_index) {
        e.preventDefault();
        this.state.countryDelivery = this.state.countryDelivery.filter((item, index) => index != del_index);
        this.forceUpdate();
    }

    onCountryDeliveryChange(e, index) {
        var target = e.target;
        this.state.countryDelivery[index][target.name] = target.value;
        this.forceUpdate();
    }

    /////////////////////////// работа с доставкой по странам////////////////////////////////////

    addDistrictDelivery(e) {
        e.preventDefault();
        this.state.districtDelivery = [{price: 0, data: (this.state.districts[0] || {}).id}];
        this.forceUpdate();
    }

    addDistrictDeliveryNewRaw(e) {
        e.preventDefault();
        this.state.districtDelivery.push({price: 0, data: (this.state.districts[0] || {}).id});
        this.forceUpdate();
    }

    removeDistrictDeliveryNewRaw(e, del_index) {
        e.preventDefault();
        this.state.districtDelivery = this.state.districtDelivery.filter((item, index) => index != del_index);
        this.forceUpdate();
    }

    onDistrictDeliveryChange(e, index) {
        var target = e.target;
        this.state.districtDelivery[index][target.name] = target.value;
        this.forceUpdate();
    }

    /////////////////////////// работа с доставкой по городам////////////////////////////////////

    addCityDelivery(e) {
        e.preventDefault();
        this.state.cityDelivery = [{price: 0, data: (this.state.cities[0] || {}).id}];
        this.forceUpdate();
    }

    addCityDeliveryNewRaw(e) {
        e.preventDefault();
        this.state.cityDelivery.push({price: 0, data: (this.state.cities[0] || {}).id});
        this.forceUpdate();
    }

    removeCityDeliveryNewRaw(e, del_index) {
        e.preventDefault();
        this.state.cityDelivery = this.state.cityDelivery.filter((item, index) => index != del_index);
        this.forceUpdate();
    }

    onCityDeliveryChange(e, index) {
        var target = e.target;
        this.state.cityDelivery[index][target.name] = target.value;
        this.forceUpdate();
    }

    ////////////////////////////////////////////////////////////////////////////////////////

    submit(e) {
        e.preventDefault();
        var dataToSend = Object.assign(
            {},
            this.state.formData,
            {
                wholesalePrices: this.state.wholesalePrices,
                countryDelivery: this.state.countryDelivery,
                districtDelivery: this.state.districtDelivery,
                cityDelivery: this.state.cityDelivery,
                images: this.state.images,
                category_id: this.state.categoryId
            }
        );

        ProductActions.create(dataToSend).then(data => {
            AlertActions.set({
                type: 'success',
                title: 'Ура',
                text: `"${this.state.formData.name}" был успешно создан`
            });

            this.context.router.push(`/category/${this.state.categoryId}`);

        }).catch(err => {
            AlertActions.set({
                type: 'error',
                title: 'Ошибка',
                text: 'Упс, что-то пошло не так'
            })
        });
    }

    onChange(e) {
        var target = e.target;
        this.state.formData[target.name] = target.value;
        this.forceUpdate();
    }

    componentWillUnmount() {
    }

    render() {

        var showWholesalePrices = () => {
            return <div className="wholesale-prices-container">
                <h3>Оптовые цены</h3>
                { this.state.wholesalePrices.map((item, index) => {
                    return <div className="row wholesale-price">
                        <div className="col-xs-5">
                            <span className="title">Цена:</span>
                            <div className="input-group">
                                <input className="form-control" type="text" aria-describedby="basic-addon2"
                                       name="price"
                                       value={item.price}
                                       onChange={(e) => this.wholesalePricesChange(e, index)}/>
                                <span className="input-group-addon" id="basic-addon2">грн</span>
                            </div>
                        </div>
                        <div className="col-xs-5">
                            <span className="title">Количество:</span>
                            <div className="input-group">
                                <input className="form-control" type="number" aria-describedby="basic-addon2"
                                       name="count"
                                       value={item.count}
                                       onChange={(e) => this.wholesalePricesChange(e, index)}/>
                                <span className="input-group-addon" id="basic-addon2">шт</span>
                            </div>
                        </div>
                        <button type="button" className="btn btn-danger btn-remove"
                                onClick={(e) => this.removeWholesalePricesNewRaw(e, index)}>
                            <i className="glyphicon glyphicon-minus"/>
                        </button>
                    </div>
                })}
                <button className="btn btn-primary btn-add-wholesale-prices" onClick={this.addWholesalePricesNewRaw}>
                    Добавить еще
                    <i className="glyphicon glyphicon-plus"/>
                </button>
            </div>
        };

        /**
         * @param data
         * @param {string} data.mainTitle - название подтаблицы
         * @param {string} data.selectTitle - название для выпадающего списка
         * @param {function} data.onChange - callback на изменения в подтаблице
         * @param {function} data.onRemove - callback на удаление в подтаблице
         * @param {function} data.addNewRaw - callback на добавление нового пункта в подтаблице
         * @param {Array} data.selectDataArray - массив данных для заполнения выпадающего списка
         * @param {Array} data.mainDataArray - массив данных подтаблицы
         * @returns {XML}
         */
        var showDataWithSelectTemplate = (data) => {
            return <div className="wholesale-prices-container">
                <h3>{data.mainTitle}:</h3>
                { data.mainDataArray.map((item, index) => {
                    return <div className="row wholesale-price">
                        <div className="col-xs-5">
                            <span className="title">Цена:</span>
                            <div className="input-group">
                                <input className="form-control" type="text" aria-describedby="basic-addon2"
                                       name="price"
                                       value={item.price}
                                       onChange={(e) => data.onChange(e, index)}/>
                                <span className="input-group-addon" id="basic-addon2">грн</span>
                            </div>
                        </div>
                        <div className="col-xs-5">
                            <span className="title">{data.selectTitle}:</span>
                            <select required
                                    name="data"
                                    value={item.data}
                                    onChange={(e) => data.onChange(e, index)}>
                                {data.selectDataArray.map((country, index) => {
                                    return <option key={index} value={country.id}>{country.name}</option>
                                })}
                            </select>
                        </div>
                        <button type="button" className="btn btn-danger btn-remove"
                                onClick={(e) => data.onRemove(e, index)}>
                            <i className="glyphicon glyphicon-minus"/>
                        </button>
                    </div>
                })}
                <button className="btn btn-primary btn-add-wholesale-prices" onClick={data.addNewRaw}>
                    Добавить еще
                    <i className="glyphicon glyphicon-plus"/>
                </button>
            </div>
        };

        var showCountryDelivery = () => showDataWithSelectTemplate({
            mainTitle: 'Доставка по странам',
            selectTitle: 'Страна',
            selectDataArray: this.state.countries,
            mainDataArray: this.state.countryDelivery,
            onChange: this.onCountryDeliveryChange,
            onRemove: this.removeCountryDeliveryNewRaw,
            addNewRaw: this.addCountryDeliveryNewRaw
        });

        var showDistrictDelivery = () => showDataWithSelectTemplate({
            mainTitle: 'Доставка по областям',
            selectTitle: 'Область',
            selectDataArray: this.state.districts,
            mainDataArray: this.state.districtDelivery,
            onChange: this.onDistrictDeliveryChange,
            onRemove: this.removeDistrictDeliveryNewRaw,
            addNewRaw: this.addDistrictDeliveryNewRaw
        });

        var showCityDelivery = () => showDataWithSelectTemplate({
            mainTitle: 'Доставка по городам',
            selectTitle: 'Город',
            selectDataArray: this.state.cities,
            mainDataArray: this.state.cityDelivery,
            onChange: this.onCityDeliveryChange,
            onRemove: this.removeCityDeliveryNewRaw,
            addNewRaw: this.addCityDeliveryNewRaw
        });

        return <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 new-address-page">
            <form onSubmit={this.submit}>
                <label>
                    Название продукта:
                    <input required name="name" type="text"
                           value={this.state.formData.name}
                           onChange={this.onChange}/>
                </label>
                <label>
                    Описание:
                    <textarea required name="description" type="text" rows="5"
                              value={this.state.formData.description}
                              onChange={this.onChange}/>
                </label>
                <label>
                    Цена:
                    <div className="input-group">
                        <input className="form-control" type="text" aria-describedby="basic-addon2"
                               name="price"
                               value={this.state.formData.price}
                               onChange={this.onChange}/>
                        <span className="input-group-addon" id="basic-addon2">грн</span>
                    </div>
                </label>
                <label>
                    Перетащите сюда фото продукта:
                    <DragnDropPictureLoader onChange={this.onFilesChange('images')}
                                            files={this.state.images}/>
                </label>
                <label>
                    { this.state.wholesalePrices.length
                        ? showWholesalePrices()
                        :
                        <button className="btn btn-primary btn-add-wholesale-prices"
                                onClick={this.addWholesalePrices}>
                            Добавить оптовые цены
                        </button>
                    }
                </label>
                <label>
                    { this.state.countryDelivery.length
                        ? showCountryDelivery()
                        :
                        <button className="btn btn-primary btn-add-wholesale-prices"
                                onClick={this.addCountryDelivery}>
                            Добавить доставку по странам
                        </button>
                    }
                </label>
                <label>
                    { this.state.districtDelivery.length
                        ? showDistrictDelivery()
                        :
                        <button className="btn btn-primary btn-add-wholesale-prices"
                                onClick={this.addDistrictDelivery}>
                            Добавить доставку по областям
                        </button>
                    }
                </label>
                <label>
                    { this.state.cityDelivery.length
                        ? showCityDelivery()
                        :
                        <button className="btn btn-primary btn-add-wholesale-prices"
                                onClick={this.addCityDelivery}>
                            Добавить доставку по городам
                        </button>
                    }
                </label>
                <div className="button-wrapper">
                    <button className="btn btn-primary" onClick={this.submit}>Сохранить</button>
                    <button className="btn btn-primary" onClick={this.cancel}>Отмена</button>
                </div>
            </form>
        </div>
    }
}

NewProduct.contextTypes = {
    router: React.PropTypes.object
};

export default NewProduct;