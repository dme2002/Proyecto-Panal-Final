import { Request, Response } from "express";
import { Carpetas } from "../models/carpetas.models";
import { carpetasSchema } from "../models/carpetas.schema";
import mongoose, {ObjectId} from "mongoose";

//trayendo todas las carpetas
export const obtenerCarpetas = (req: Request, res: Response) => {
  carpetasSchema.find().then((carpetas) => {
    res.send(carpetas);
    res.end();
  }).catch((error) => {
    console.log('ERRRORRR: ', error);
    res.send({message: 'Hubo un error al obtener las carpetas', error}); // shorthand
    res.end();
  });
}

//trayendo una carpeta
export const obtenerUnaCarpeta = (req: Request, res: Response) => {
  let id = req.params.id;
  carpetasSchema.findById(id).then((carpeta) => {
    res.send(carpeta);
    res.end();
  }).catch((error) => {
    console.log('ERRRORRR: ', error);
    res.send({message: 'Hubo un error al obtener la carpeta', error}); // shorthand
    res.end();
  });
}


 //guardar un usuario
 export const guardarCarpetas = (req: Request, res: Response) => {
  const p = new carpetasSchema(req.body);
  p.save().then((saveResponse:any) => {
    res.send(saveResponse);
    res.end();
  }).catch((error:any) => {
    console.log('ERRRORRR: ', error);
    res.send({message: 'Hubo un error al guardar la carpeta', error}); // shorthand
    res.end();
  });
}




