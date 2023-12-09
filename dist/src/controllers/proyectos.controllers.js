"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerCarpetasProyecto = exports.obtenerUnProyecto = exports.obtenerProyectos = exports.guardarProyecto = void 0;
const proyectos_schema_1 = require("../models/proyectos.schema");
//guardar un usuario
const guardarProyecto = (req, res) => {
    const p = new proyectos_schema_1.proyectosSchema(req.body);
    p.save().then((saveResponse) => {
        res.send(saveResponse);
        res.end();
    }).catch((error) => {
        console.log('ERRRORRR: ', error);
        res.send({ message: 'Hubo un error al guardar el proyecto', error }); // shorthand
        res.end();
    });
};
exports.guardarProyecto = guardarProyecto;
//obtener todos los proyectos
const obtenerProyectos = (req, res) => {
    proyectos_schema_1.proyectosSchema.find().then((proyectos) => {
        res.send(proyectos);
        res.end();
    }).catch((error) => {
        console.log('ERRRORRR: ', error);
        res.send({ message: 'Hubo un error al obtener los proyectos', error }); // shorthand
        res.end();
    });
};
exports.obtenerProyectos = obtenerProyectos;
//obtener un proyecto
const obtenerUnProyecto = (req, res) => {
    let id = req.params.id;
    proyectos_schema_1.proyectosSchema.findById(id).then((proyecto) => {
        res.send(proyecto);
        res.end();
    }).catch((error) => {
        console.log('ERRRORRR: ', error);
        res.send({ message: 'Hubo un error al obtener el proyecto', error }); // shorthand
        res.end();
    });
};
exports.obtenerUnProyecto = obtenerUnProyecto;
//Obtener Carpetas de un Proyecto 
const obtenerCarpetasProyecto = (req, res) => {
    let id = req.params.id;
    proyectos_schema_1.proyectosSchema.findById(id).then((proyecto) => {
        res.send(proyecto === null || proyecto === void 0 ? void 0 : proyecto.carpetas);
        res.end();
    }).catch((error) => {
        console.log('ERRRORRR: ', error);
        res.send({ message: 'Hubo un error al obtener las carpetas del proyecto', error }); // shorthand
        res.end();
    });
};
exports.obtenerCarpetasProyecto = obtenerCarpetasProyecto;
