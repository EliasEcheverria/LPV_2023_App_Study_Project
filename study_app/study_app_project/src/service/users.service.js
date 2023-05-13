const { sequelize } = require("../connection");
const { UserModel } = require("../model/users.model");

const listar = async function (textoBuscar) {
    console.log("listar usuarios");
    try {
        const users = await sequelize.query(`SELECT * 
                                            FROM users 
                                            WHERE 1=1
                                                AND UPPER(name)
                                                LIKE UPPER ('%${textoBuscar}%')
                                                AND deleted IS false
                                            ORDER BY id`);
        if (users && users[0]) {
            return users;
        } else {
            return [];
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const consultarPorCodigo = async function (id) {
    console.log("consultar usuario");
    try {
        const userModelResult = await UserModel.findByPk(id);
        if (userModelResult) {
            return userModelResult;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const actualizar = async function (id, name, last_name, avatar, email, password, deleted) {
    console.log("actualizar usuarios");
    let usuarioRetorno = null;
    const data = { id, name, last_name, avatar, email, password, deleted };
    try {
        let userModelResult = null;
        if (id) {
            userModelResult = await UserModel.findByPk(id);
        }
        if (userModelResult) {
            usuarioRetorno = await UserModel.update(data, { where: { id: id } });
            usuarioRetorno = data;
        } else {
            data.deleted = 0;
            usuarioRetorno = await UserModel.create(data);
        }
        return usuarioRetorno;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const eliminar = async function (id) {
    console.log("eliminar usuario");
    try {
        await sequelize.query(`UPDATE users SET deleted = true WHERE id = ${id}`);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = {
    listar, consultarPorCodigo, actualizar, eliminar
};