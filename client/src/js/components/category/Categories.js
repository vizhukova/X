import React from 'react'
import {Link} from 'react-router'

import CategoryActions from '../../actions/CategoryActions'

class Catalog extends React.Component {

    constructor() {
        super();
        this.state = {
            categoryId: '',
            categories: []
        }
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
            } else {
                CategoryActions.getFirstLevel().then(categories => {
                    this.setState({categories});
                });
            }
        }
    }

    render() {
        return <div className="catalog-page">
            <Link to="/product/new">
                <button type="button" className="btn btn-default">Добавить товар +</button>
            </Link>
            <Link to="/category/new">
                <button type="button" className="btn btn-default">Добавить категорию +</button>
            </Link>
            {this.state.categories.map((item, index) => {
                return <Link to={`/category/${item.id}`}
                             className="category"
                             key={index}>{item.name}</Link>
            })}
        </div>
    }
}

export default Catalog;