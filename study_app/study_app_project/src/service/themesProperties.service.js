const { sequelize } = require("../connection");
const { ThemePropModel } = require("../model/themesProperties.model");

const listarProperty = async function (propertyBuscar) {
    console.log("listar temas");
    try {
        const property = await sequelize.query(`SELECT * FROM themes_properties 
                                                WHERE 1=1
                                                AND UPPER(property_name)
                                                LIKE UPPER ('%${propertyBuscar}%')
                                                ORDER BY id`);
        if (property && property[0]) {
            return property;
        } else {
            return [];
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const buscarPorCodigoProperty = async function (id) {
    console.log("buscarPorCodigoProperty en service");
    try {
        const propertyModelResult = await ThemePropModel.findByPk(id);
        if (propertyModelResult) {
            return propertyModelResult;
        } else {
            return null;
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