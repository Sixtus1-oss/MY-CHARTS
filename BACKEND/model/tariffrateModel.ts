import { Document, model, Schema } from "mongoose";

interface iProps {
  tariffrate: [];
}

interface iPropsData extends iProps, Document {}

const tariffrateModel = new Schema<iPropsData>(
  {
    tariffrate: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iPropsData>("tariffrate", tariffrateModel);
