import { Document, model, Schema } from "mongoose";

interface iProps {
  birthrate: [];
}

interface iPropsData extends iProps, Document {}

const birthrateModel = new Schema<iPropsData>(
  {
    birthrate: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iPropsData>("birthrate", birthrateModel);
