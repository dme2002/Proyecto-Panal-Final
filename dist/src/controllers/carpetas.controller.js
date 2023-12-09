"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guardarCarpetas = exports.obtenerUnaCarpeta = exports.obtenerCarpetas = void 0;
const carpetas_schema_1 = require("../models/carpetas.schema");
//trayendo todas las carpetas
const obtenerCarpetas = (req, res) => {
    carpetas_schema_1.carpetasSchema.find().then((carpetas) => {
        res.send(carpetas);
        res.end();
    }).catch((error) => {
        console.log('ERRRORRR: ', error);
        res.send({ message: 'Hubo un error al obtener las carpetas', error }); // shorthand
        res.end();
    });
};
exports.obtenerCarpetas = obtenerCarpetas;
//trayendo una carpeta
const obtenerUnaCarpeta = (req, res) => {
    let id = req.params.id;
    carpetas_schema_1.carpetasSchema.findById(id).then((carpeta) => {
        res.send(carpeta);
        res.end();
    }).catch((error) => {
        console.log('ERRRORRR: ', error);
        res.send({ message: 'Hubo un error al obtener la carpeta', error }); // shorthand
        res.end();
    });
};
exports.obtenerUnaCarpeta = obtenerUnaCarpeta;
//guardar un usuario
const guardarCarpetas = (req, res) => {
    const p = new carpetas_schema_1.carpetasSchema(req.body);
    p.save().then((saveResponse) => {
        res.send(saveResponse);
        res.end();
    }).catch((error) => {
        console.log('ERRRORRR: ', error);
        res.send({ message: 'Hubo un error al guardar la carpeta', error }); // shorthand
        res.end();
    });
};
exports.guardarCarpetas = guardarCarpetas;
