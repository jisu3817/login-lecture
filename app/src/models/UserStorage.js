"use strict";

class UserStorage {
static #users = {
    id: ["jisu", "개발자", "지수" ],
    pasword: ["123", "123", "12345"],
    name: ["wltn", "지수", "개발자"],
    };

static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
        if (users.hasOwnProperty(field)) {
            newUsers[field] = users[field];
        }
        return newUsers;
    }, {});
    return newUsers;
    }
}

module.exports = UserStorage;