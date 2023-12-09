import mongoose from "mongoose";

export interface Usuarios {
    "_id"?: mongoose.Types.ObjectId;
    "nombreCompleto": string;
    "correo": string;
    "contrasena": string;
    "planElegido": number;  
    "proyectos":Array<string>;
}
