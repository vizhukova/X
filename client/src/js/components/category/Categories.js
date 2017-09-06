import React from 'react'
import {Link} from 'react-router'

import CategoryActions from '../../actions/CategoryActions'
import ProductActions from '../../actions/ProductActions'
import AuthStore from '../../stores/AuthStore'
import SearchPanel from '../../../../../common/js/components/SearchPanel'
import AreYouSureModalActions from '../../../../../common/js/components/AreYouSureModal/AreYouSureModalActions'
import AlertActions from '../../../../../common/js/components/Alert/AlertActions'

class Catalog extends React.Component {

    constructor() {
        super();
        this.state = {
            categoryId: '',
            categories: [],
            products: [],
            authUser: AuthStore.getState().auth
        };

        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        this.goToEdit = this.goToEdit.bind(this);
        this.update = this.update.bind(this);

        AuthStore.listen(this.update);
    }

    componentDidMount() {
        this.setState({
            categoryId: this.props.params.id
        });
    }

    componentWillReceiveProps(props) {
        this.setState({
            categoryId: props.params.id
        });
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.categoryId !== this.state.categoryId) {
            if (nextState.categoryId) {
                CategoryActions.getLevelByParent(nextState.categoryId).then(categories => {
                    this.setState({categories});
                });
                ProductActions.getByCategory(nextState.categoryId).then(products => {
                    this.setState({products});
                });
            } else {
                CategoryActions.getFirstLevel().then(categories => {
                    this.setState({categories});
                });
            }
        }
    }

    update(state) {
        if (state.auth) {
            this.setState({
                authUser: state.auth
            });
        }
    }

    onChangeSearch(valueToSearch) {
        if (valueToSearch) {
            CategoryActions.getByQ(valueToSearch).then(categories => {
                this.setState({categories});
            });
            ProductActions.getByQ(valueToSearch).then(products => {
                this.setState({products});
            });
        } else {
            if (this.state.categoryId) {
                CategoryActions.getLevelByParent(this.state.categoryId).then(categories => {
                    this.setState({categories});
                });
                ProductActions.getByCategory(this.state.categoryId).then(products => {
                    this.setState({products});
                });
            } else {
                CategoryActions.getFirstLevel().then(categories => {
                    this.setState({categories});
                });
                this.setState({products: []});
            }
        }
    }

    removeProduct(e, product) {
        e.preventDefault();

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

    goToEdit(e, item) {
        e.preventDefault();
        this.context.router.push(`/category/${item.category_id}/product/edit/${item.id}`);
    }

    componentWillUnmount() {
        AuthStore.unlisten(this.update);
    }

    render() {
        return <div className="catalog-page">
            {this.state.categoryId
                ? <Link to={`/category/${this.state.categoryId}/product/new`}>
                <button type="button" className="btn btn-default">Добавить товар +</button>
            </Link>
                : null
            }
            <Link to="/category/new">
                <button type="button" className="btn btn-default">Добавить категорию +</button>
            </Link>

            <SearchPanel onChange={this.onChangeSearch}/>

            {this.state.categories.map((item, index) => {
                return <Link to={`/category/${item.id}`}
                             className="category"
                             key={index}>{item.name}</Link>
            })}
            {this.state.products.map((item, index) => {
                return <Link className="row product" to={`/category/${item.id}/product/${item.id}`} key={index}>
                    <div className="col-xs-2"><img src={item.main_image} alt=""/></div>
                    <div className="col-xs-5">{item.name}</div>
                    <div className="col-xs-3">{item.price} грн.</div>
                    <div className="col-xs-1">
                        {this.state.authUser.id === item.seller_id
                            ? <div className="btn btn-default btn-action"
                                   onClick={(e) => this.goToEdit(e, item)}>
                            <i className="glyphicon glyphicon-pencil"/>
                        </div>
                            : null
                        }
                    </div>
                    <div className="col-xs-1">
                        {this.state.authUser.id === item.seller_id
                            ? <div className="btn btn-danger btn-action"
                                   onClick={(e) => this.removeProduct(e, item) }>
                            <i className="glyphicon glyphicon glyphicon-remove"/>
                        </div>
                            : null
                        }
                    </div>
                </Link>
            })}
        </div>
    }
}

Catalog.contextTypes = {
    router: React.PropTypes.object
};

export default Catalog;