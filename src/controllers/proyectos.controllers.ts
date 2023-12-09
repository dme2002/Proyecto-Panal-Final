import { Request, Response } from "express";
import { Proyectos } from "../models/proyectos.models";
import { proyectosSchema } from "../models/proyectos.schema";
import mongoose, {ObjectId} from "mongoose";




  //guardar un usuario
  export const guardarProyecto = (req: Request, res: Response) => {
    const p = new proyectosSchema(req.body);
    p.save().then((saveResponse:any) => {
      res.send(saveResponse);
      res.end();
    }).catch((error:any) => {
      console.log('ERRRORRR: ', error);
      res.send({message: 'Hubo un error al guardar el proyecto', error}); // shorthand
      res.end();
    });
  }

  //obtener todos los proyectos
  export const obtenerProyectos = (req: Request, res: Response) => {
    proyectosSchema.find().then((proyectos) => {
      res.send(proyectos);
      res.end();
    }).catch((error) => {
      console.log('ERRRORRR: ', error);
      res.send({message: 'Hubo un error al obtener los proyectos', error}); // shorthand
      res.end();
    });
  }

  //obtener un proyecto
  export const obtenerUnProyecto = (req: Request, res: Response) => {
    let id = req.params.id;
    proyectosSchema.findById(id).then((proyecto) => {
      res.send(proyecto);
      res.end();
    }).catch((error) => {
      console.log('ERRRORRR: ', error);
      res.send({message: 'Hubo un error al obtener el proyecto', error}); // shorthand
      res.end();
    });
  }


  //Obtener Carpetas de un Proyecto 
  export const obtenerCarpetasProyecto = (req: Request, res: Response) => {
    let id = req.params.id;
    proyectosSchema.findById(id).then((proyecto) => {
      res.send(proyecto?.carpetas);
      res.end();
    }).catch((error) => {
      console.log('ERRRORRR: ', error);
      res.send({message: 'Hubo un error al obtener las carpetas del proyecto', error}); // shorthand
      res.end();
    });
  }
  
  
 
  

  
