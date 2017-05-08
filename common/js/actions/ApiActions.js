import React from 'react';
import $ from 'jquery';
import Promise from 'bluebird';
import checkError from './../checkError';

var getDomain = () => {
    return '/api/';
};

var returnToken = () => {
    var ls = localStorage.getItem('store.auth');
    var auth = ls ? JSON.parse(ls) : {};
    return auth.token || '';
};


/**
 *Отправка запросов на сервер
 */

class ApiActions {

    static get(path, data) {

        var BASE_URL = getDomain();

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
                    auth: returnToken()
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
                    auth: returnToken()
                },
                error(response){
                    checkError.check(response);
                    reject(new Error());
                }

            });
        })
    }

    static put(path, data) {

        var BASE_URL = getDomain();

        return new Promise(function (resolve, reject) {
            $.ajax({

                method: 'PUT',
                url: BASE_URL + path,
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8",
                headers: {
                    auth: returnToken()
                },
                success(response){
                    resolve(response);
                },
                error(response){
                    checkError.check(response);
                    reject(new Error())
                }

            });
        })
    }

    static delete(path, data) {

        var BASE_URL = getDomain();

        return new Promise(function (resolve, reject) {
            $.ajax({

                method: 'DELETE',
                url: BASE_URL + path,
                data: data,
                headers: {
                    auth: returnToken()
                },
                success(response){
                    resolve(response);
                },
                error(response){
                    checkError.check(response);
                    reject(new Error())
                }

            });
        })
    }


}

export default ApiActions;