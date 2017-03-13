import alt from '../alt';
import Promise from 'bluebird';
import ApiActions from './ApiActions';

function getDomain(){
    return '/api/';
}

class FilesAction {

    add(formDataFiles) {

        var BASE_URL = getDomain();

        return new Promise(function (resolve, reject) {
            $.ajax({
                method: 'POST',
                url: `${BASE_URL}upload`,
                data: formDataFiles,
                contentType: false,
                processData: false,
                success(res){
                    resolve(res);
                },
                headers: {
                    auth: '#{token}'
                },
                error(err){
                    reject(err);
                }
            });
        });
    }

}

export default alt.createActions(FilesAction);