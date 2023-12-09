import mongoose, { mongo } from "mongoose";
import { Proyectos } from "./proyectos.models";

const schema = new mongoose.Schema<Proyectos>({
    "id":Number,
    "nombreProyecto": String,
    "descripcion": String,
    "fecha": String,
    "carpetas": Array<String>,
});

export const proyectosSchema = mongoose.model('proyectos', schema);





