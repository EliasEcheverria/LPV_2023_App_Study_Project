const { sequelize } = require("../connection");
const { ThemeModel } = require("../model/themes.model");

const listarThemes = async function (themeBuscar) {
    console.log("listar temas");
    try {
        const themes = await sequelize.query(`SELECT * FROM themes WHERE 1=1
                                                AND UPPER(name)
                                                LIKE UPPER ('%${themeBuscar}%')
                                                ORDER BY id`);
        if (themes && themes[0]) {
            return themes;
        } else {
            return [];
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const buscarPorCodigoThemes = async function (id) {
    console.log("consultar tema");
    try {
        const themeModelResult = await ThemeModel.findByPk(id);
        if (themeModelResult) {
            return themeModelResult;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const actualizarThemes = async function (id, create_date, name, description, keywords, owner_user_id) {
    console.log("actualizar tema");
    let temaRetorno = null;
    const data = { id, create_date, name, description, keywords, owner_user_id };
    try {
        let themeModelResult = null;
        if (id) {
            themeModelResult = await ThemeModel.findByPk(id);
        }
        if (themeModelResult) {
            temaRetorno = await ThemeModel.update(data, { where: { id: id } });
            temaRetorno = data;
        } else {
            temaRetorno = await ThemeModel.create(data);
        }
        return temaRetorno;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const eliminarThemes = async function (id) {
    console.log("eliminar tema");
    try {
        await sequelize.query(`DELETE FROM themes WHERE id = ${id}`);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = {
    listarThemes, buscarPorCodigoThemes, actualizarThemes, eliminarThemes
};