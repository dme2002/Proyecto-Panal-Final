import mongoose, { mongo } from "mongoose";
import { Usuarios } from "./usuarios.models";

const schema = new mongoose.Schema<Usuarios>({

    "nombreCompleto": String,
    "correo": String,
    "contrasena": String,
    "planElegido": Number, 
    "proyectos":Array<String>,
});

export const usuariosSchema = mongoose.model('usuarios', schema);
