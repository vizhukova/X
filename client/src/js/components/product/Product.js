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
            product: {
                images: [],
                category: {}
            }
        };
    }

    componentDidMount() {
        ProductActions.getById(this.props.params.product_id).then(product => {
            this.setState({product}, () => {
                var swiper = new Swiper('.swiper-container', {
                    zoom: true,
                    pagination: '.swiper-pagination',
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev'
                });

                this.setState({
                    slider: swiper
                });
            });
        });
    }

    componentWillUnmount() {
        if (this.state.slider) {
            this.state.slider.destroy();
        }
    }

    render() {
        var product = this.state.product;

        return <div className="row product-page">

            <div className="col-xs-6 col-xs-offset-3">
                <div className="swiper-container">
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

            <div className="col-xs-12">
                <h3>{product.name}</h3>
                <div className="col-xs-12 description">{product.description}</div>
                <div className="col-xs-6">Категория:</div>
                <div className="col-xs-6">{product.category.name}</div>
            </div>

        </div>
    }
}

export default Product;