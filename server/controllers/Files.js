var Files = require('../models/Files');

module.exports = {

    add(files){
        return new Promise(function(resolve, reject){

            Promise.all(files.map(filePath => Files.add({path: filePath}))).then(function(model){
                var dataToSend = [];
                model.map((file, i) => {
                    dataToSend.push({
                        id: model[i].attributes.id,
                        path: model[i].attributes.path
                    })
                })
                resolve(dataToSend);
            }).catch(function(err){
                reject(err);
            })
        })
    }
};