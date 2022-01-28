const checkIfExist = (name: string) => {
    return `
        select * from user
        where name = "${name}"
        `;
};

const checkUser = (name: string, password: string) => {
    return `
        select * from user
        where name = "${name}" and password = "${password}"
        `;
};

const addUser = (name: string, password: string) => {
    return `
        insert into user(name, password)
        values ("${name}", "${password}")
        `;
};

export { checkUser, addUser, checkIfExist };
