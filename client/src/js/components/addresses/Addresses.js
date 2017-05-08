import React from 'react'
import {Link} from 'react-router'
import AddressActions from '../../actions/AddressActions'
import AreYouSureModalActions from '../../../../../common/js/components/AreYouSureModal/AreYouSureModalActions';

class Addresses extends React.Component {

    constructor() {
        super();
        this.state = {
            addresses: []
        }

        this.remove = this.remove.bind(this);
        this.onSuccessRemove = this.onSuccessRemove.bind(this);
    }

    componentDidMount() {
        AddressActions.get().then(addresses => {
            this.setState({addresses});
        })
    }

    remove(e, address_id) {
        e.preventDefault();
        AreYouSureModalActions.set({
            text: 'Вы уверенны, что хотите удалить адрес?',
            onSuccess: () => this.onSuccessRemove(address_id)
        });
    }

    onSuccessRemove(address_id) {
        AddressActions.remove(address_id).then(data => {
            this.state.addresses = this.state.addresses.filter(item => item.id != address_id);
            this.forceUpdate();
        })
    }

    render() {

        return <div className="addresses-page">
            <div className="col-md-12">
                <Link to={`/address/new`} className="add_new_address btn btn-primary">Добавить новый адрес</Link>
            </div>
            <div>
                { this.state.addresses.map((address, index) => {
                    return <div className="col-md-4 col-sm-6 address" key={index}>
                        <div className="address-container">
                            <span className="name">
                                 <i className="glyphicon glyphicon-user"/>
                                {` ${address.name}`}
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
                                <Link to={`/address/edit/${address.id}`} activeClassName="active">Редактировать</Link>
                                <a onClick={(e) => this.remove(e, address.id)}>Удалить</a>
                            </div>
                        </div>
                    </div>
                }) }
            </div>
        </div>
    }
}

export default Addresses;