"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//const usuarios = require('./src/models/usuarios.models');
const usuarios_routers_1 = __importDefault(require("./src/routers/usuarios.routers"));
const planes_routers_1 = __importDefault(require("./src/routers/planes.routers"));
const proyectos_routers_1 = __importDefault(require("./src/routers/proyectos.routers"));
const carpetas_routers_1 = __importDefault(require("./src/routers/carpetas.routers"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./util/database");
dotenv_1.default.config();
const db = new database_1.Database(); // SE conecta
const app = (0, express_1.default)();
const port = process.env.PORT || 4000; // Si no se proporciona un puerto en el archivo .env, usa el puerto 3000 por defecto
app.use((0, cors_1.default)()); // Permitir solicitudes de dominios diferentes
app.use(express_1.default.json()); // Poblar el objeto body
app.use("/usuarios", usuarios_routers_1.default);
app.use("/planes", planes_routers_1.default);
app.use("/proyectos", proyectos_routers_1.default);
app.use("/carpetas", carpetas_routers_1.default);
// Ruta de bienvenida
app.get("/", (req, res) => {
    res.send("Backend Proyecto Panal");
});
// Iniciar el servidor
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
