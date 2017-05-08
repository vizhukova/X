import alt from './../../alt';
import AreYouSureModalActions from './AreYouSureModalActions';


class AreYouSureModalStore {

    constructor() {
        this.data = {
            text: ''
        };

        this.bindListeners({
            onSet: AreYouSureModalActions.SET,
        });
    }


    onSet(data) {
        this.data = data;
    }

}

export default alt.createStore(AreYouSureModalStore, 'AreYouSureModalStore');