const { sequelize } = require("../connection");
const { TopicModel } = require("../model/topics.model");

const listarTopico = async function (topicBuscar) {
    console.log("listar topicos");
    try {
        const topics = await sequelize.query(`SELECT * FROM topics WHERE 1=1
                                                AND UPPER(name)
                                                LIKE UPPER ('%${topicBuscar}%')
                                                ORDER BY id`);
        if (topics && topics[0]) {
            return topics;
        } else {
            return [];
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const buscarPorCodigoTopico = async function (id) {
    console.log("consultar topico");
    try {
        const topicModelResult = await TopicModel.findByPk(id);
        if (topicModelResult) {
            return topicModelResult;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const actualizarTopico = async function (id, create_date, name, topic_id, order, priority, color, owner_user_id) {
    let topicoRetorno = null;
    const data = { id, create_date, name, topic_id, order, priority, color, owner_user_id };
    console.log("actualizar topico service");
    try {
        let topicModelResult = null;
        if (id) {
            topicModelResult = await TopicModel.findByPk(id);
        }
        if (topicModelResult) {
            topicoRetorno = await TopicModel.update(data, { where: { id: id } });
            topicoRetorno = data;
        } else {
            topicoRetorno = await TopicModel.create(data);
        }
        return topicoRetorno;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const eliminarTopico = async function (id) {
    console.log("eliminar topico");
    try {
        await sequelize.query(`DELETE FROM topics WHERE topic_id = ${id}`);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = {
    listarTopico, buscarPorCodigoTopico, actualizarTopico, eliminarTopico
};