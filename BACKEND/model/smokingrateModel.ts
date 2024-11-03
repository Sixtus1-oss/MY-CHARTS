import { Document, model, Schema } from "mongoose";

interface iProps {
  smokingrate: [];
}

interface iPropsData extends iProps, Document {}

const smokingrateModel = new Schema<iPropsData>(
  {
    smokingrate: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iPropsData>("smokingrate", smokingrateModel);
