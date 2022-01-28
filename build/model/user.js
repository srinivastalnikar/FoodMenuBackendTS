"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfExist = exports.addUser = exports.checkUser = void 0;
const checkIfExist = (name) => {
    return `
        select * from user
        where name = "${name}"
        `;
};
exports.checkIfExist = checkIfExist;
const checkUser = (name, password) => {
    return `
        select * from user
        where name = "${name}" and password = "${password}"
        `;
};
exports.checkUser = checkUser;
const addUser = (name, password) => {
    return `
        insert into user(name, password)
        values ("${name}", "${password}")
        `;
};
exports.addUser = addUser;
