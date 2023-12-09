"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuariosSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    "nombreCompleto": String,
    "correo": String,
    "contrasena": String,
    "planElegido": Number,
    "proyectos": (Array),
});
exports.usuariosSchema = mongoose_1.default.model('usuarios', schema);
