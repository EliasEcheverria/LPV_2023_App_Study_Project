const topicController = require("../../controller/topics/topics.controller");

module.exports = function (app) {
    app.get("/topics/list", topicController.listarTopico);
    app.get("/topics/:id", topicController.buscarPorCodigoTopico);
    app.post("/topics/update", topicController.actualizarTopico);
    app.delete("/topics/delete/:id", topicController.eliminarTopico);
};