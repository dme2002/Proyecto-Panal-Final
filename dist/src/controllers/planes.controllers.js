"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerUnPlan = exports.obtenerPlanes = exports.guardarPlanes = void 0;
const planes_schema_1 = require("../models/planes.schema");
//guardar un usuario
const guardarPlanes = (req, res) => {
    const p = new planes_schema_1.planesSchema(req.body);
    p.save().then((saveResponse) => {
        res.send(saveResponse);
        res.end();
    }).catch((error) => {
        console.log('ERRRORRR: ', error);
        res.send({ message: 'Hubo un error al guardar el proyecto', error }); // shorthand
        res.end();
    });
};
exports.guardarPlanes = guardarPlanes;
//obtener todos los planes
const obtenerPlanes = (req, res) => {
    planes_schema_1.planesSchema.find().then((planes) => {
        res.send(planes);
        res.end();
    }).catch((error) => {
        console.log('ERRRORRR: ', error);
        res.send({ message: 'Hubo un error al obtener los proyectos', error }); // shorthand
        res.end();
    });
};
exports.obtenerPlanes = obtenerPlanes;
//obtener un plan
const obtenerUnPlan = (req, res) => {
    let id = req.params.id;
    planes_schema_1.planesSchema.findById(id).then((plan) => {
        res.send(plan);
        res.end();
    }).catch((error) => {
        console.log('ERRRORRR: ', error);
        res.send({ message: 'Hubo un error al obtener el proyecto', error }); // shorthand
        res.end();
    });
};
exports.obtenerUnPlan = obtenerUnPlan;
