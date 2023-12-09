import mongoose from "mongoose";
import { Planes } from "./planes.models";

const schema = new mongoose.Schema<Planes>({
    "id": Number,
    "nombrePlan": String
});


export const planesSchema = mongoose.model('planes', schema);

export { Planes };
