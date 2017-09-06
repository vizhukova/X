import React from 'react'
import {Link} from 'react-router'
import Swiper from 'swiper'

import CategoryActions from '../../actions/CategoryActions'
import ProductActions from '../../actions/ProductActions'
import AuthStore from '../../stores/AuthStore'
import SearchPanel from '../../../../../common/js/components/SearchPanel'
import AreYouSureModalActions from '../../../../../common/js/components/AreYouSureModal/AreYouSureModalActions'
import AlertActions from '../../../../../common/js/components/Alert/AlertActions'

class Product extends React.Component {

    constructor() {
        super();
        this.state = {
            slider: null,
            authUser: AuthStore.getState().auth,
            product: {
                brand: {},
                images: [],
                category: {},
                wholesalePrices: [],
                countryDelivery: [],
                districtDelivery: [],
                cityDelivery: []
            }
        };

        this.removeProduct = this.removeProduct.bind(this);
        this.update = this.update.bind(this);

        AuthStore.listen(this.update);
    }

    componentDidMount() {
        ProductActions.getById(this.props.params.product_id).then(product => {
            this.setState({product}, () => {
                var swiper = new Swiper('.swiper-container', {
                    zoom: true,
                    shortSwipes: false,
                    pagination: '.swiper-pagination',
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev'
                });
                $('[data-toggle="tooltip"]').tooltip();

                this.setState({
                    slider: swiper
                });
            });
        });
    }

    removeProduct() {
        var product = this.state.product;
        AreYouSureModalActions.set({
            text: `Вы уверенны, что хотите удалить этот "${product.name}"?`,
            onSuccess: () => {
                ProductActions.delete(product.id).then(data => {
                    this.state.products = this.state.products.filter(item => item.id !== product.id);
                    this.forceUpdate();

                    AlertActions.set({
                        type: 'success',
                        title: 'Ура',
                        text: `"${product.name}" успешно удален`
                    })
                }).catch(err => {
                    AlertActions.set({
                        type: 'error',
                        title: 'Ошибка',
                        text: 'Упс, что-то пошло не так'
                    })
                })
            }
        });
    }

    update(state) {
        if (state.auth) {
            this.setState({
                authUser: state.auth
            });
        }
    }

    componentWillUnmount() {
        if (this.state.slider) {
            this.state.slider.destroy();
        }
        AuthStore.unlisten(this.update);
    }

    render() {
        var product = this.state.product;

        return <div className="row product-page">

            <div className="col-xs-6 col-xs-offset-3">
                <div className="swiper-container" data-toggle="tooltip"
                     title="Увеличить изображение двойным щелчком мыши">
                    <div className="swiper-wrapper">
                        {product.images.map((item, index) => {
                            return <div className="swiper-slide" key={index}>
                                <div className="swiper-zoom-container">
                                    <img src={item} alt=""/>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="swiper-pagination swiper-pagination-white"/>
                    <div className="swiper-button-prev"/>
                    <div className="swiper-button-next"/>
                </div>
            </div>

            <div className="col-xs-6 col-xs-offset-4 price">{product.price} грн</div>

            <div className="col-xs-12 col-md-6 col-md-offset-3">
                <div className="row">

                    <h3 className="title">
                        {product.name}

                        {this.state.authUser.id === product.seller_id
                            ? <Link className="btn btn-default"
                                    to={`/category/${product.category_id}/product/edit/${product.id}`}
                                    data-toggle="tooltip" title="Редактировать товар">
                            <i className="glyphicon glyphicon-pencil"/>
                        </Link>
                            : null
                        }

                        {this.state.authUser.id === product.seller_id
                            ? <div className="btn btn-danger"
                                   data-toggle="tooltip" title="Удалить товар"
                                   onClick={this.removeProduct}>
                            <i className="glyphicon glyphicon-remove"/>
                        </div>
                            : null
                        }
                    </h3>

                    <div className="col-xs-12 block-data">
                        <div className="row">
                            <div className="col-xs-3 label-text">Описание:</div>
                            <div className="col-xs-6">{product.description}</div>
                        </div>
                    </div>
                    <div className="col-xs-12 block-data">
                        <div className="row">
                            <div className="col-xs-3 label-text">Категория:</div>
                            <div className="col-xs-6"><Link
                                data-toggle="tooltip" title={`Поиск по категории "${product.category.name}"`}
                                to={`/category/${product.category.id}`}>{product.category.name}</Link></div>

                        </div>
                    </div>
                    <div className="col-xs-12 block-data">
                        <div className="row">
                            <div className="col-xs-3 label-text">Марка продукта:</div>
                            <div className="col-xs-6">
                                {product.brand.id
                                    ? <Link to={`/category/${product.brand.id}`}
                                            data-toggle="tooltip"
                                            title={`Поиск по марке продукта "${product.brand.name}"`}>
                                            {product.brand.image
                                                ? <img className="brand-logo" src={product.brand.image} alt=""/>
                                                : product.brand.name
                                            }
                                      </Link>
                                    : <span data-toggle="tooltip"
                                            title="Этой марки продукта нет в базе данных">{product.brand.name}</span>
                                }
                            </div>

                        </div>
                    </div>
                    <div className="col-xs-12 block-data">
                        <div className="label-text">Оптовые цены:</div>
                        {product.wholesalePrices.map((item, index) => {
                            return <div className="row" key={index}>
                                <div className="col-xs-3 col-xs-offset-3">от {item.count} шт.</div>
                                <div className="col-xs-6">{item.price}</div>
                            </div>
                        })}
                    </div>


                    <div className="col-xs-12 block-data">
                        <div className="label-text">Доставка по странам:</div>
                        {product.countryDelivery.map((item, index) => {
                            return <div className="row" key={index}>
                                <div className="col-xs-3 col-xs-offset-3">{item.name}</div>
                                <div className="col-xs-3">{item.price}</div>
                            </div>
                        })}
                    </div>

                    <div className="col-xs-12 block-data">
                        <div className="label-text">Доставка по регионам:</div>
                        {product.districtDelivery.map((item, index) => {
                            return <div className="row" key={index}>
                                <div className="col-xs-3 col-xs-offset-3">{item.name}</div>
                                <div className="col-xs-3">{item.price}</div>
                            </div>
                        })}
                    </div>

                    <div className="col-xs-12 block-data">
                        <div className="label-text">Доставка по городам:</div>
                        {product.cityDelivery.map((item, index) => {
                            return <div className="row" key={index}>
                                <div className="col-xs-3 col-xs-offset-3">{item.name}</div>
                                <div className="col-xs-3">{item.price}</div>
                            </div>
                        })}
                    </div>

                </div>
            </div>

        </div>
    }
}

export default Product;