import mongoose from "mongoose";

export interface Planes {
    "_id"?: mongoose.Types.ObjectId;
    "id": number;
    "nombrePlan": string;
}


