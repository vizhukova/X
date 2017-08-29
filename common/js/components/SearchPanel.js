import React from 'react';

/**
 * Поле для живого поиска
 */
class SearchPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            value: ''
        };

        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(e) {
        var target = e.target;
        this.setState({
            value: target.value
        });

        if (this.props.onChange) {
            this.props.onChange(target.value);
        }
    }

    render() {
        return <div className="input-group search-panel">
            <input type="text" className="form-control"
                   placeholder="Введите слово для поиска ..."
                   aria-describedby="basic-addon2"
                   value={this.state.value}
                   onChange={this.onChangeValue}/>
            <span className="input-group-addon">
                <i className="glyphicon glyphicon-search"/>
                <span>Поиск</span>
            </span>
        </div>
    }


}


export default SearchPanel;