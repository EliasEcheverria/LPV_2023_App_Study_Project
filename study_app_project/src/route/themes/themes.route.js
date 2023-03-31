const themeController = require("../../controller/themes/themes.controller");

module.exports = function (app) {
    app.get("/themes/list", themeController.listarThemes);
    app.get("/themes/:id", themeController.buscarPorCodigoThemes);
    app.post("/themes/update", themeController.actualizarThemes);
    app.delete("/themes/delete/:id", themeController.eliminarThemes);
};