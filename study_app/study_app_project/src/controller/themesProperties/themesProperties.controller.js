const { sequelize } = require("../../connection");
const { ThemeModel } = require("../../model/themesProperties.model");
const ThemePropService = require("../../service/themesProperties.service");

const listarProperties = async function (req, res) {
    console.log("listarPorperties en controller");
    try {
        const property = await ThemePropService.listarProperty(req.query.property || '');
        if (property && property[0]) {
            res.json({
                success: true,
                property: property[0]
            });
        } else {
            res.json({
                success: true,
                property: []
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

const buscarPorCodigoProperties = async function (req, res) {
    console.log("buscarPorCodigoProperties en controller");
    try {
        const propertyModelResult = await ThemePropService.buscarPorCodigoProperty(req.params.id);
        if (propertyModelResult) {
            res.json({
                success: true,
                property: propertyModelResult
            });
        } else {
            res.json({
                success: true,
                property: null
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

const actualizarProperties = async function (req, res) {
    console.log("actualizarProperties en controller");
    let propertyRetorno = null;
    try {
        propertyRetorno = await ThemePropService.actualizarProperty(req.body.id,
            req.body.theme_id,
            req.body.property_name,
            req.body.property_value);
        res.json({
            success: true,
            property: propertyRetorno
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.messages
        });
    }
};

const eliminarProperties = async function (req, res) {
    console.log("eliminarProperties en controller");
    try {
        await ThemePropService.eliminarProperty(req.params.id);
        res.json({
            success: true,
            property: null
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
    listarProperties, buscarPorCodigoProperties, 
    actualizarProperties, eliminarProperties
};