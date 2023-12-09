import mongoose from "mongoose";
import { Carpetas } from "./carpetas.models";

const schema = new mongoose.Schema<Carpetas>({
    "id":Number,
    "nombreCarpeta": String,
    "fecha": String,
    "nombreArchivos":Array<String>,
})



export const carpetasSchema = mongoose.model('carpetas', schema);

export { Carpetas };
