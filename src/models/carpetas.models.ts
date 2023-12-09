import mongoose from "mongoose";

export interface Carpetas     {
    "_id"?: mongoose.Types.ObjectId;
    "id":number,
    "nombreCarpeta": string,
    "fecha": string,
    "nombreArchivos":Array<String>,
}