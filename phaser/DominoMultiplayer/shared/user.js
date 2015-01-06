/*global module*/

/* This object holds information about a connected user */

var User = function (id, login) {
    'use strict';
    this.id = id;
    this.login = login;
    this.roomNumber = null;
};

try {
    module.exports = User;
} catch (ignore) {}