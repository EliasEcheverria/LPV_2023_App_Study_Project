const { sequelize } = require("../connection");
const { ThemePropModel } = require("../model/themesProperties.model");

const listarProperty = async function (propertyBuscar) {
    console.log("listar temas");
    try {
        const property = await sequelize.query(`SELECT * FROM themes_properties`);
        if (property && property[0]) {
            return property[0];
        } else {
            return [];
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const buscarPorCodigoProperty = async function (theme_id) {
    console.log("buscarPorCodigoProperty en service");
    try {
        const propertyModelResult = await sequelize.query(`SELECT * FROM themes_properties 
                                                            WHERE theme_id = ${theme_id}`);
        if (propertyModelResult && propertyModelResult[0]) {
            return propertyModelResult[0];
        } else {
            return [];
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const actualizarProperty = async function (id, theme_id, property_name, property_value) {
    console.log("actualizarProperty en service");
    let propertyRetorno = null;
    const data = { id,  theme_id, property_name, property_value };
    try {
        let propertyModelResult = null;
        if (id) {
            propertyModelResult = await ThemePropModel.findByPk(id);
        }
        if (propertyModelResult) {
            propertyRetorno = await ThemePropModel.update(data, { where: { id: id } });
            propertyRetorno = data;
        } else {
            propertyRetorno = await ThemePropModel.create(data);
        }
        return propertyRetorno;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const eliminarProperty = async function (id) {
    console.log("eliminarProperty en service");
    try {
        await sequelize.query(`DELETE FROM themes_properties WHERE id = ${id}`);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = {
    listarProperty, buscarPorCodigoProperty,
    actualizarProperty, eliminarProperty
};