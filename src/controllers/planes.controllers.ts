import { Request, Response } from "express";
import { Planes } from "../models/planes.models";
import { planesSchema } from "../models/planes.schema";
import mongoose, {ObjectId} from "mongoose";



  //guardar un usuario
  export const guardarPlanes = (req: Request, res: Response) => {
    const p = new planesSchema(req.body);
    p.save().then((saveResponse:any) => {
      res.send(saveResponse);
      res.end();
    }).catch((error:any) => {
      console.log('ERRRORRR: ', error);
      res.send({message: 'Hubo un error al guardar el proyecto', error}); // shorthand
      res.end();
    });
  }

  //obtener todos los planes
  export const obtenerPlanes = (req: Request, res: Response) => {
    planesSchema.find().then((planes) => {
      res.send(planes);
      res.end();
    }).catch((error) => {
      console.log('ERRRORRR: ', error);
      res.send({message: 'Hubo un error al obtener los proyectos', error}); // shorthand
      res.end();
    });
  }


  //obtener un plan
  export const obtenerUnPlan = (req: Request, res: Response) => {
    let id = req.params.id;
    planesSchema.findById(id).then((plan) => {
      res.send(plan);
      res.end();
    }).catch((error) => {
      console.log('ERRRORRR: ', error);
      res.send({message: 'Hubo un error al obtener el proyecto', error}); // shorthand
      res.end();
    });
  }
