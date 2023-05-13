const { sequelize } = require("../../connection");
const { TopicModel } = require("../../model/topics.model");
const TopicService = require("../../service/topics.service");

const listarTopico = async function (req, res) {
    console.log("listar topicos");
    try {
        const topics = await TopicService.listarTopico(req.query.name || '');
        if (topics && topics[0]) {
            res.json({
                succes: true,
                topicos: topics[0]
            });
        } else {
            res.json({
                succes: true,
                topicos: []
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

const buscarPorCodigoTopico = async function (req, res) {
    console.log("consultar topico");
    try {
        const topicModelResult = await TopicService.buscarPorCodigoTopico(req.params.id);
        if (topicModelResult) {
            res.json({
                succes: true,
                topic: topicModelResult
            });
        } else {
            res.json({
                succes: true,
                topico: null
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

const actualizarTopico = async function (req, res) {
    console.log("actualizar topico controller");
    let topicoRetorno = null;
    try {
        topicoRetorno = await TopicService.actualizarTopico(req.body.id,
            req.body.create_date,
            req.body.name,
            req.body.topic_id,
            req.body.order,
            req.body.priority,
            req.body.color,
            req.body.owner_user_id);
        res.json({
            succes: true,
            topico: topicoRetorno
        });
    } catch (error) {
        console.log(error);
        res.json({
            succes: false,
            error: error.messages
        });
    }
};

const eliminarTopico = async function (req, res) {
    console.log("eliminar topico");
    try {
        await TopicService.eliminarTopico(req.params.id);
        res.json({
            success: true
        });
    } catch (error) {
        console.log(error);
        res.json({
            succes: false,
            error: error.message
        });
    }
};

module.exports = {
    listarTopico, buscarPorCodigoTopico, actualizarTopico, eliminarTopico
};