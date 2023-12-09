"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerProyectosUsuario = exports.loginUsuario = exports.registrarUsuario = exports.guardarProyectoUsuario = exports.obtenerUsuario = exports.obtenerUsuarios = exports.guardarUsuario = void 0;
const usuarios_schema_1 = require("../models/usuarios.schema");
const mongoose_1 = __importDefault(require("mongoose"));
//guardar un usuario
const guardarUsuario = (req, res) => {
    const p = new usuarios_schema_1.usuariosSchema(req.body);
    p.save().then((saveResponse) => {
        res.send(saveResponse);
        res.end();
    }).catch((error) => {
        console.log('ERRRORRR: ', error);
        res.send({ message: 'Hubo un error al guardar el usuario', error }); // shorthand
        res.end();
    });
};
exports.guardarUsuario = guardarUsuario;
//obtener todos los usuarios  
const obtenerUsuarios = (req, res) => {
    usuarios_schema_1.usuariosSchema.find().then((usuarios) => {
        res.send(usuarios);
        res.end();
    }).catch((error) => {
        console.log('ERRRORRR: ', error);
        res.send({ message: 'Hubo un error al obtener los usuarios', error }); // shorthand
        res.end();
    });
};
exports.obtenerUsuarios = obtenerUsuarios;
//Obteniendo solo un usuario
const obtenerUsuario = (req, res) => {
    const id = req.params.id;
    usuarios_schema_1.usuariosSchema.findById(id).then((usuario) => {
        res.send(usuario);
        res.end();
    }).catch((error) => {
        console.log('ERRRORRR: ', error);
        res.send({ message: 'Hubo un error al obtener el usuario', error }); // shorthand
        res.end();
    });
};
exports.obtenerUsuario = obtenerUsuario;
//guardar proyecto en un usuario 
const guardarProyectoUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    usuarios_schema_1.usuariosSchema.updateOne({ _id: req.params.id }, {
        $push: {
            proyectos: {
                _id: new mongoose_1.default.Types.ObjectId(req.body.id),
            },
        }
    })
        .then((result) => {
        res.send({ message: "Proyecto Agregado", result });
        res.end();
    })
        .catch((error) => {
        res.send({ message: "Ocurrio un error", error });
        res.end();
    });
});
exports.guardarProyectoUsuario = guardarProyectoUsuario;
//guardar un usuario
const registrarUsuario = (req, res) => {
    const p = new usuarios_schema_1.usuariosSchema(req.body);
    p.save().then((saveResponse) => {
        res.send(saveResponse);
        res.end();
    }).catch((error) => {
        console.log('ERRRORRR: ', error);
        res.send({ message: 'Hubo un error al guardar EL USUARIO', error }); // shorthand
        res.end();
    });
};
exports.registrarUsuario = registrarUsuario;
const loginUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { correo, contrasena } = req.body;
    try {
        // Verificar si existe un usuario con el correo y la contraseña
        const usuario = yield usuarios_schema_1.usuariosSchema.findOne({ correo, contrasena });
        if (usuario) {
            // Redirige a la página "carrucel.html" si el inicio de sesión es exitoso
            res.send({ exito: true, mensaje: 'Inicio de sesión exitoso', usuario, redireccionar: 'carpetas.html' });
        }
        else {
            res.send({ exito: false, mensaje: 'Usuario o contraseña incorrectos' });
        }
    }
    catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).send({ exito: false, mensaje: 'Error al iniciar sesión. Por favor, intenta nuevamente.' });
    }
});
exports.loginUsuario = loginUsuario;
//obteniendo los proyectos de un usuario
const obtenerProyectosUsuario = (req, res) => {
    const id = req.params.id;
    usuarios_schema_1.usuariosSchema.findById(id).then((usuario) => {
        res.send(usuario === null || usuario === void 0 ? void 0 : usuario.proyectos);
        res.end();
    }).catch((error) => {
        console.log('ERRRORRR: ', error);
        res.send({ message: 'Hubo un error al obtener los proyectos del usuario', error }); // shorthand
        res.end();
    });
};
exports.obtenerProyectosUsuario = obtenerProyectosUsuario;
