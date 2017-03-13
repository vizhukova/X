import React from 'react';
import $ from 'jquery';
import Promise from 'bluebird';
import checkError from './../../../checkError';

function getDomain(){
    return '/api/';
}

/**
*Отправка запросов на сервер
*/

var returnToken = () => {
    var ls = localStorage.getItem('store.auth');
    var auth = ls ? JSON.parse(ls) : {};
    return auth.token || '';
};

class ApiActions{

    static get(path, data) {

        var BASE_URL = getDomain();
        var token = returnToken();
        //console.log(window.location);
        return new Promise(function (resolve, reject) {
            $.ajax({

                method: 'GET',
                url: BASE_URL + path,
                data: data,
                contentType: "application/json; charset=utf-8",
                success(res){
                    resolve(res);
                },
                 headers: {
                    auth: token
                },
                error(response){
                    checkError.check(response);
                    reject(new Error());
                }
            });
        })
    }

    static post(path, data) {

        var BASE_URL = getDomain();
        var token = returnToken();

        return new Promise(function (resolve, reject) {
            $.ajax({

                method: 'POST',
                url: BASE_URL + path,
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8",
                success(response){
                    resolve(response);
                },
                headers: {
                    auth: token
                },
                error(response){
                    checkError.check(response);
                    SettingsActions.getMessages(); // получение ошибки с сервера
                    reject(new Error());
                }

            });
        })
    }

    static put(path, data) {

        var BASE_URL = getDomain();
        var token = returnToken();

        return new Promise(function (resolve, reject) {
            $.ajax({

                method: 'PUT',
                url: BASE_URL + path,
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8",
                headers: {
                    auth: token
                },
                success(response){
                    resolve(response);
                },
                error(response){
                    checkError.check(response);
                    SettingsActions.getMessages();// получение ошибки с сервера
                    reject(new Error())
                }

            });
        })
    }

    static remove(path, data) {

        var BASE_URL = getDomain();
        var token = returnToken();

        return new Promise(function (resolve, reject) {
            $.ajax({

                method: 'DELETE',
                url: BASE_URL + path,
                data: data,
                headers: {
                    auth: token
                },
                success(response){
                    resolve(response);
                },
                error(response){
                    checkError.check(response);
                    SettingsActions.getMessages();// получение ошибки с сервера
                    reject(new Error())
                }

            });
        })
    }


}

export default ApiActions;