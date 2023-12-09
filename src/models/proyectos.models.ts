import mongoose from "mongoose";

export interface Proyectos {
    "_id"?: mongoose.Types.ObjectId;
    "id": number;
    "nombreProyecto": string;
    "descripcion": string;
    "fecha": string;
    "carpetas": Array<string>;
}