const { sequelize } = require("../../connection");
const { ThemeModel } = require("../../model/themes.model");
const ThemeService = require("../../service/themes.service");

const listarThemes = async function (req, res) {
    console.log("listar temas");
    try {
        const themes = await ThemeService.listarThemes(req.query.tema || '');
        if (themes && themes[0]) {
            res.json({
                success: true,
                temas: themes[0]
            });
        } else {
            res.json({
                success: true,
                temas: []
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

const buscarPorCodigoThemes = async function (req, res) {
    console.log("consultar tema");
    try {
        const themeModelResult = await ThemeService.buscarPorCodigoThemes(req.params.id);
        if (themeModelResult) {
            res.json({
                success: true,
                tema: themeModelResult
            });
        } else {
            res.json({
                success: true,
                tema: null
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            succes: false,
            error: error.message
        });
    }
};

const actualizarThemes = async function (req, res) {
    console.log("actualizar tema");
    let temaRetorno = null;
    try {
        temaRetorno = await ThemeService.actualizarThemes(req.body.id,
            req.body.create_date,
            req.body.name,
            req.body.description,
            req.body.keywords,
            req.body.owner_user_id);
        res.json({
            success: true,
            tema: temaRetorno
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.messages
        });
    }
};

const eliminarThemes = async function (req, res) {
    console.log("eliminar tema");
    try {
        await ThemeService.eliminarThemes(req.params.id);
        res.json({
            success: true,
            theme: null
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
    listarThemes, buscarPorCodigoThemes, actualizarThemes, eliminarThemes
};