"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.proyectosSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    "id": Number,
    "nombreProyecto": String,
    "descripcion": String,
    "fecha": String,
    "carpetas": (Array),
});
exports.proyectosSchema = mongoose_1.default.model('proyectos', schema);
