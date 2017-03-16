import React from 'react'
import {Link} from 'react-router'
import AddressActions from './../../actions/AddressActions'

class Addresses extends React.Component {

    constructor() {
        super();
        this.state = {
            addresses: []
        }
    }

    componentDidMount() {
        AddressActions.get().then(addresses => {
            this.setState({addresses});
        })
    }

    remove(e) {
        e.preventDefault();
    }

    render() {

        return <div className="addresses-page">
            <div className="col-md-12">
                <Link to={`/address/new`} className="add_new_address btn btn-primary">Добавить новый адрес</Link>
            </div>
            <div>
                { this.state.addresses.map((address, index) => {
                    return <div className="col-md-4 address" key={index}>
                    <span className="name">
                        <i className="glyphicon glyphicon-user"/>
                        {address.name}
                    </span>
                        <div>
                            <i className="glyphicon glyphicon-map-marker"/>
                            <div className="address-data">
                                <span>{address.build}, {address.additional_build}</span>
                                <span>{address.city_name}, {address.district_name}, {address.zip_code}</span>
                                <span>{address.country_name}</span>
                            </div>
                        </div>

                        <div className="link-block">
                            <Link to={`/address/edit/:${address.id}`} activeClassName="active">Редактировать</Link>
                            <a onClick={this.remove}>Удалить</a>
                        </div>
                    </div>
                }) }
            </div>
        </div>
    }
}

export default Addresses;