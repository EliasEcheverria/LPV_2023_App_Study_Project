const themeController = require("../../controller/themesProperties/themesProperties.controller");

module.exports = function (app) {
    app.get("/themesProperties/list", themeController.listarProperties);
    app.get("/themesProperties/:id", themeController.buscarPorCodigoProperties);
    app.post("/themesProperties/update", themeController.actualizarProperties);
    app.delete("/themesProperties/delete/:id", themeController.eliminarProperties);
};