import { Document, model, Schema } from "mongoose";

interface iProps {
  deathrate: [];
}

interface iPropsData extends iProps, Document {}

const deathrateModel = new Schema<iPropsData>(
  {
    deathrate: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iPropsData>("deathrate", deathrateModel);
