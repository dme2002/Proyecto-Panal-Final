import { Request, Response } from "express";
import { Usuarios } from "../models/usuarios.models";
import { usuariosSchema } from "../models/usuarios.schema";
import mongoose, {ObjectId} from "mongoose";



  //guardar un usuario
  export const guardarUsuario = (req: Request, res: Response) => {
    const p = new usuariosSchema(req.body);
    p.save().then((saveResponse:any) => {
      res.send(saveResponse);
      res.end();
    }).catch((error:any) => {
      console.log('ERRRORRR: ', error);
      res.send({message: 'Hubo un error al guardar el usuario', error}); // shorthand
      res.end();
    });
  }

  //obtener todos los usuarios  
  export const obtenerUsuarios = (req: Request, res: Response) => {
    usuariosSchema.find().then((usuarios) => {
      res.send(usuarios);
      res.end();
    }).catch((error) => {
      console.log('ERRRORRR: ', error);
      res.send({message: 'Hubo un error al obtener los usuarios', error}); // shorthand
      res.end();
    });
  }

  //Obteniendo solo un usuario
  export const obtenerUsuario = (req: Request, res: Response) => {
    const id = req.params.id;
    usuariosSchema.findById(id).then((usuario) => {
      res.send(usuario);
      res.end();
    }).catch((error) => {
      console.log('ERRRORRR: ', error);
      res.send({message: 'Hubo un error al obtener el usuario', error}); // shorthand
      res.end();
    });
  }


  //guardar proyecto en un usuario 
  export const guardarProyectoUsuario = async (req: Request, res: Response) => {
    usuariosSchema.updateOne(
      {_id: req.params.id},
      {
        $push: {
          proyectos:{
          _id: new mongoose.Types.ObjectId(req.body.id),
        },
      }
    }
      )
      .then((result) => {
        res.send({ message: "Proyecto Agregado", result });
        res.end();
      })
      .catch((error) => {
        res.send({ message: "Ocurrio un error", error });
        res.end();
      });
    }


    //guardar un usuario
  export const registrarUsuario = (req: Request, res: Response) => {

    const p = new usuariosSchema(req.body);
    p.save().then((saveResponse:any) => {
      res.send(saveResponse);
      res.end();
    }).catch((error:any) => {
      console.log('ERRRORRR: ', error);
      res.send({message: 'Hubo un error al guardar EL USUARIO', error}); // shorthand
      res.end();
    });
  }
  
  export const loginUsuario = async (req: Request, res: Response) => {
    const { correo, contrasena } = req.body;
  
    try {
      // Verificar si existe un usuario con el correo y la contraseña
      const usuario = await usuariosSchema.findOne({ correo, contrasena });
  
      if (usuario) {
        // Redirige a la página "carrucel.html" si el inicio de sesión es exitoso
        res.send({ exito: true, mensaje: 'Inicio de sesión exitoso', usuario, redireccionar: 'carpetas.html' });
      } else {
        res.send({ exito: false, mensaje: 'Usuario o contraseña incorrectos' });
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      res.status(500).send({ exito: false, mensaje: 'Error al iniciar sesión. Por favor, intenta nuevamente.' });
    }
  };


  //obteniendo los proyectos de un usuario
  export const obtenerProyectosUsuario = (req: Request, res: Response) => {
    const id = req.params.id;
    usuariosSchema.findById(id).then((usuario) => {
      res.send(usuario?.proyectos);
      res.end();
    }).catch((error) => {
      console.log('ERRRORRR: ', error);
      res.send({message: 'Hubo un error al obtener los proyectos del usuario', error}); // shorthand
      res.end();
    });
  }
  


    
    
  



  