import React from 'react'
import AddressActions from '../../actions/AddressActions';
import ProductActions from '../../actions/ProductActions';
import BrandActions from '../../actions/BrandActions';
import DragnDropPictureLoader from '../../../../../common/js/components/DragnDropPictureLoader';
import AreYouSureModalActions from '../../../../../common/js/components/AreYouSureModal/AreYouSureModalActions';
import AlertActions from '../../../../../common/js/components/Alert/AlertActions';

class NewProduct extends React.Component {

    constructor() {
        super();
        this.state = {
            districts: [],
            cities: [],
            formData: {},

            brand_name: "",
            brand: {},

            images: [],
            brands: [],
            wholesalePrices: [],
            districtDelivery: [],
            cityDelivery: [],
            districtShipmentDelay: [],
            cityShipmentDelay: [],

            removedImages: [],
            removedWholesalePrices: [],
            removedDistrictDelivery: [],
            removedCityDelivery: [],
            removedDistrictShipmentDelay: [],
            removedCityShipmentDelay: []
        };
        this.addWholesalePrices = this.addWholesalePrices.bind(this);
        this.addDistrictDelivery = this.addDistrictDelivery.bind(this);
        this.addCityDelivery = this.addCityDelivery.bind(this);
        this.addDistrictShipmentDelay = this.addDistrictShipmentDelay.bind(this);
        this.addCityShipmentDelay = this.addCityShipmentDelay.bind(this);

        this.removeWholesalePricesNewRaw = this.removeWholesalePricesNewRaw.bind(this);
        this.removeDistrictDeliveryNewRaw = this.removeDistrictDeliveryNewRaw.bind(this);
        this.removeCityDeliveryNewRaw = this.removeCityDeliveryNewRaw.bind(this);
        this.removeDistrictShipmentDelayNewRaw = this.removeDistrictShipmentDelayNewRaw.bind(this);
        this.removeCityShipmentDelayNewRaw = this.removeCityShipmentDelayNewRaw.bind(this);

        this.wholesalePricesChange = this.wholesalePricesChange.bind(this);
        this.onDistrictDeliveryChange = this.onDistrictDeliveryChange.bind(this);
        this.onCityDeliveryChange = this.onCityDeliveryChange.bind(this);
        this.onDistrictShipmentDelayChange = this.onDistrictShipmentDelayChange.bind(this);
        this.onCityShipmentDelayChange = this.onCityShipmentDelayChange.bind(this);

        this.addWholesalePricesNewRaw = this.addWholesalePricesNewRaw.bind(this);
        this.addDistrictDeliveryNewRaw = this.addDistrictDeliveryNewRaw.bind(this);
        this.addCityDeliveryNewRaw = this.addCityDeliveryNewRaw.bind(this);
        this.addDistrictShipmentDelayNewRaw = this.addDistrictShipmentDelayNewRaw.bind(this);
        this.addCityShipmentDelayNewRaw = this.addCityShipmentDelayNewRaw.bind(this);

        this.onFilesChange = this.onFilesChange.bind(this);
        this.onDeleteImage = this.onDeleteImage.bind(this);
        this.chooseBrand = this.chooseBrand.bind(this);
        this.submit = this.submit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            categoryId: this.props.params.id,
            productId: this.props.params.product_id
        });
        BrandActions.getAll().then(brands => {
            this.state.brands = brands;
            this.forceUpdate();
        });
        AddressActions.getDistricts().then(districts => {
            this.state.districts = districts;
            this.forceUpdate();
        });
        AddressActions.getCities().then(cities => {
            this.state.cities = cities;
            this.forceUpdate();
        });

        if (this.props.params.product_id) {
            ProductActions.getById(this.props.params.product_id).then(product => {
                this.state.formData = {
                    name: product.name,
                    description: product.description,
                    price: product.price
                };

                this.state.brand_name = product.brand.name;
                if (product.brand.id) {
                    this.state.brand = product.brand;
                }

                this.state.images = product.images.map(src => {
                    return {path: src, origin: true}
                });
                this.state.wholesalePrices = product.wholesalePrices.map(data => {
                    return {product_id: data.product_id, price: data.price, count: data.count, origin: true}
                });
                this.state.districtDelivery = product.districtDelivery.map(district => {
                    return {data: district.district_id, price: district.price, origin: true}
                });
                this.state.cityDelivery = product.cityDelivery.map(city => {
                    return {data: city.city_id, price: city.price, origin: true}
                });
                this.forceUpdate();
            });
        }

    }

    onFilesChange(fieldName) {
        return (newFiles) => {
            this.state[fieldName] = newFiles;
            this.forceUpdate();
        };
    }

    onDeleteImage(removedImage) {
        if (removedImage && removedImage.origin) {
            this.state.removedImages.push(removedImage);
        }
    }

    chooseBrand(e, brand) {
        e.preventDefault();
        this.setState({
            brand: brand,
            brand_name: brand.name
        });
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
        var removedItem = this.state.wholesalePrices[del_index];
        if (removedItem && removedItem.origin) {
            this.state.removedWholesalePrices.push(removedItem);
        }
        this.state.wholesalePrices = this.state.wholesalePrices.filter((item, index) => index != del_index);
        this.forceUpdate();
    }

    wholesalePricesChange(e, index) {
        var target = e.target;
        this.state.wholesalePrices[index][target.name] = target.value;
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
        var removedItem = this.state.districtDelivery[del_index];
        if (removedItem && removedItem.origin) {
            this.state.removedDistrictDelivery.push(removedItem);
        }
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
        var removedItem = this.state.cityDelivery[del_index];
        if (removedItem && removedItem.origin) {
            this.state.removedCityDelivery.push(removedItem);
        }
        this.state.cityDelivery = this.state.cityDelivery.filter((item, index) => index != del_index);
        this.forceUpdate();
    }

    onCityDeliveryChange(e, index) {
        var target = e.target;
        this.state.cityDelivery[index][target.name] = target.value;
        this.forceUpdate();
    }

    /////////////////////////// работа с отложенной доставкой по регионам////////////////////////////////////

    addDistrictShipmentDelay(e) {
        e.preventDefault();
        this.state.districtShipmentDelay = [{days: 1, data: (this.state.districts[0] || {}).id}];
        this.forceUpdate();
    }

    addDistrictShipmentDelayNewRaw(e) {
        e.preventDefault();
        this.state.districtShipmentDelay.push({days: 1, data: (this.state.districts[0] || {}).id});
        this.forceUpdate();
    }

    removeDistrictShipmentDelayNewRaw(e, del_index) {
        e.preventDefault();
        var removedItem = this.state.districtShipmentDelay[del_index];
        if (removedItem && removedItem.origin) {
            this.state.removedDistrictShipmentDelay.push(removedItem);
        }
        this.state.districtShipmentDelay = this.state.districtShipmentDelay.filter((item, index) => index != del_index);
        this.forceUpdate();
    }

    onDistrictShipmentDelayChange(e, index) {
        var target = e.target;
        this.state.districtShipmentDelay[index][target.name] = target.value;
        this.forceUpdate();
    }

    /////////////////////////// работа с отложенной доставкой по городам////////////////////////////////////

    addCityShipmentDelay(e) {
        e.preventDefault();
        this.state.cityShipmentDelay = [{days: 1, data: (this.state.cities[0] || {}).id}];
        this.forceUpdate();
    }

    addCityShipmentDelayNewRaw(e) {
        e.preventDefault();
        this.state.cityShipmentDelay.push({days: 1, data: (this.state.cities[0] || {}).id});
        this.forceUpdate();
    }

    removeCityShipmentDelayNewRaw(e, del_index) {
        e.preventDefault();
        var removedItem = this.state.cityShipmentDelay[del_index];
        if (removedItem && removedItem.origin) {
            this.state.removedCityShipmentDelay.push(removedItem);
        }
        this.state.cityShipmentDelay = this.state.cityShipmentDelay.filter((item, index) => index != del_index);
        this.forceUpdate();
    }

    onCityShipmentDelayChange(e, index) {
        var target = e.target;
        this.state.cityShipmentDelay[index][target.name] = target.value;
        this.forceUpdate();
    }

    ////////////////////////////////////////////////////////////////////////////////////////

    submit(e) {
        e.preventDefault();
        var brand;
        if (this.state.brand.name === this.state.brand_name) {
            brand = this.state.brand;
        } else {
            brand = {name: this.state.brand_name};
        }

        //Если это редактирование
        if (this.state.productId) {

            var dataToSend = Object.assign(
                {},
                this.state.formData,
                {
                    id: this.state.productId,
                    main_image: (this.state.images[0] || {}).path,
                    brand: brand,

                    newWholesalePrices: this.state.wholesalePrices.filter(data => !data.origin),
                    removedWholesalePrices: this.state.removedWholesalePrices,

                    newDistrictDelivery: this.state.districtDelivery.filter(data => !data.origin),
                    removedDistrictDelivery: this.state.removedDistrictDelivery,

                    newCityDelivery: this.state.cityDelivery.filter(data => !data.origin),
                    removedCityDelivery: this.state.removedCityDelivery,

                    newImages: this.state.images.filter(data => !data.origin),
                    removedImages: this.state.removedImages,

                    category_id: this.state.categoryId
                }
            );

            ProductActions.update(dataToSend).then(data => {
                AlertActions.set({
                    type: 'success',
                    title: 'Ура',
                    text: `"${this.state.formData.name}" был успешно отредактирован`
                });

                this.context.router.push(`/category/${this.state.categoryId}`);

            }).catch(err => {
                AlertActions.set({
                    type: 'error',
                    title: 'Ошибка',
                    text: 'Упс, что-то пошло не так'
                })
            });
        } else {//Если это создание нового

            var dataToSend = Object.assign(
                {},
                this.state.formData,
                {
                    brand: brand,
                    main_image: (this.state.images[0] || {}).path,
                    wholesalePrices: this.state.wholesalePrices,
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

    }

    onChange(e) {
        var target = e.target;

        if (target.name === 'brand_name') {
            this.state[target.name] = target.value;
            this.forceUpdate();
            BrandActions.getByQ(target.value).then(brands => {
                this.setState({brands});
            })
        } else {
            this.state.formData[target.name] = target.value;
            this.forceUpdate();
        }
    }

    componentWillUnmount() {
    }

    render() {

        console.log(this.state);

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
                            <span className="title">{data.prop.label}:</span>
                            <div className="input-group">
                                <input className="form-control" type="text" aria-describedby="basic-addon2"
                                       name={data.prop.name}
                                       value={item[data.prop.name]}
                                       onChange={(e) => data.onChange(e, index)}/>
                                <span className="input-group-addon" id="basic-addon2">{data.prop.addon}</span>
                            </div>
                        </div>
                        <div className="col-xs-5">
                            <span className="title">{data.selectTitle}:</span>
                            <select required
                                    name="data"
                                    value={item.data}
                                    onChange={(e) => data.onChange(e, index)}>
                                {data.selectDataArray.map((data, index) => {
                                    return <option key={index} value={data.id}>{data.name}</option>
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

        var showDistrictDelivery = () => showDataWithSelectTemplate({
            mainTitle: 'Доставка по областям',
            selectTitle: 'Область',
            selectDataArray: this.state.districts,
            mainDataArray: this.state.districtDelivery,
            onChange: this.onDistrictDeliveryChange,
            onRemove: this.removeDistrictDeliveryNewRaw,
            addNewRaw: this.addDistrictDeliveryNewRaw,
            prop: {
                name: "price",
                label: "Цена",
                addon: "грн"
            }
        });

        var showCityDelivery = () => showDataWithSelectTemplate({
            mainTitle: 'Доставка по городам',
            selectTitle: 'Город',
            selectDataArray: this.state.cities,
            mainDataArray: this.state.cityDelivery,
            onChange: this.onCityDeliveryChange,
            onRemove: this.removeCityDeliveryNewRaw,
            addNewRaw: this.addCityDeliveryNewRaw,
            prop: {
                name: "price",
                label: "Цена",
                addon: "грн"
            }
        });

        var showDistrictShipmentDelay = () => showDataWithSelectTemplate({
            mainTitle: 'Время доставки по областям',
            selectTitle: 'Область',
            selectDataArray: this.state.districts,
            mainDataArray: this.state.districtShipmentDelay,
            onChange: this.onDistrictShipmentDelayChange,
            onRemove: this.removeDistrictShipmentDelayNewRaw,
            addNewRaw: this.addDistrictShipmentDelayNewRaw,
            prop: {
                name: "days",
                label: "Дней",
                addon: "дней"
            }
        });

        var showCityShipmentDelay = () => showDataWithSelectTemplate({
            mainTitle: 'Время доставки по городам',
            selectTitle: 'Город',
            selectDataArray: this.state.cities,
            mainDataArray: this.state.cityShipmentDelay,
            onChange: this.onCityShipmentDelayChange,
            onRemove: this.removeCityShipmentDelayNewRaw,
            addNewRaw: this.addCityShipmentDelayNewRaw,
            prop: {
                name: "days",
                label: "Дней",
                addon: "дней"
            }
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
                                            onDeleteImage={this.onDeleteImage}
                                            files={this.state.images}/>
                </label>
                <label className="brand-container">
                    Торговая марка:

                    <div class="dropdown">
                        <input className="form-control" type="text"
                               name="brand_name"
                               value={this.state.brand_name}
                               onChange={this.onChange}/>
                        <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                            {this.state.brands.map((item, index) => {
                                return <li className="brand"
                                           role="presentation"
                                           data-placement="bottom"
                                           data-toggle="tooltip" title={item.description}
                                           onClick={(e) => this.chooseBrand(e, item)}>
                                    <img className="brand-logo" src={item.image} alt=""/>
                                    <span className="name">{item.name}</span>
                                </li>
                            })}
                        </ul>
                    </div>

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
                <label>
                    { this.state.districtShipmentDelay.length
                        ? showDistrictShipmentDelay()
                        :
                        <button className="btn btn-primary btn-add-wholesale-prices"
                                onClick={this.addDistrictShipmentDelay}>
                            Добавить время доставки по областям
                        </button>
                    }
                </label>
                <label>
                    { this.state.cityShipmentDelay.length
                        ? showCityShipmentDelay()
                        :
                        <button className="btn btn-primary btn-add-wholesale-prices"
                                onClick={this.addCityShipmentDelay}>
                            Добавить время доставки по городам
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