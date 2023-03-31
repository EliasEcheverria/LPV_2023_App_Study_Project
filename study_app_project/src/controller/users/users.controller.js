const { sequelize } = require("../../connection");
const { UserModel } = require("../../model/users.model");
const UserService = require("../../service/users.service");
/*Se pone llaves solo para recuperar objetos exportados */
const listar = async function (req, res) {
    console.log("listar usuarios");
    try {
        const users = await UserService.listar(req.query.filtro || '');
        if (users && users[0]) {
            res.json({
                success: true,
                usuarios: users[0]
            });
        } else {
            res.json({
                success: true,
                usuarios: []
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.message
        });
    }
};

const consultarPorCodigo = async function (req, res) {
    console.log("consultar usuario");
    try {
        const userModelResult = await UserService.consultarPorCodigo(req.params.id);
        if (userModelResult) {
            res.json({
                success: true,
                usuario: userModelResult
            });
        } else {
            res.json({
                success: true,
                usuario: null
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.message
        });
    }
};

const actualizar = async function (req, res) {
    console.log("actualizar usuarios");
    let usuarioRetorno = null;
    try {
        usuarioRetorno = await UserService.actualizar(req.body.id,
            req.body.name,
            req.body.last_name,
            req.body.avatar,
            req.body.email,
            req.body.password,
            req.body.deleted);
        res.json({
            success: true,
            user: usuarioRetorno
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.message
        });
    }
};

const eliminar = async function (req, res) {
    console.log("eliminar usuario");
    try {
        await UserService.eliminar(req.params.id);
        res.json({
            success: true
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.message
        });
    }
};

module.exports = {
    listar, consultarPorCodigo, actualizar, eliminar
};