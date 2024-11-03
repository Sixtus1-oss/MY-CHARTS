import { Document, model, Schema } from "mongoose";

interface iProps {
  healthcarespendingrate: [];
}

interface iPropsData extends iProps, Document {}

const healthcarespendingrateModel = new Schema<iPropsData>(
  {
    healthcarespendingrate: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iPropsData>(
  "healthcarespendingrate",
  healthcarespendingrateModel
);
