import React from 'react';
import AreYouSureModalStore from './AreYouSureModalStore';
import AreYouSureModalActions from './AreYouSureModalActions';

/**
 * Список уведомлений
 */
class AreYouSureModal extends React.Component {

    constructor() {
        super();
        this.state = AreYouSureModalStore.getState();
        this.onSuccess = this.onSuccess.bind(this);
        this.update = this.update.bind(this);

        AreYouSureModalStore.listen(this.update);
    }

    onSuccess() {
        if(this.state.data.onSuccess) {
            $(this.modalRef).modal('toggle');
            this.state.data.onSuccess();
        }
    }

    update(state) {
        this.setState(state);
        $(this.modalRef).modal();
    }

    componentWillUnmount() {
        AreYouSureModalStore.unlisten(this.update)
    }

    render() {
        return <div ref={ref => this.modalRef = ref} className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title" id="myModalLabel">Вы уверенны?</h4>
                    </div>
                    <div className="modal-body">
                        {this.state.data.text}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Нет</button>
                        <button type="button" className="btn btn-primary" onClick={this.onSuccess}>Да</button>
                    </div>
                </div>
            </div>
        </div>


    }


}


export default AreYouSureModal;