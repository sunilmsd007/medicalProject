import { Schema, model } from 'mongoose';

const doctorSchema = new Schema(
  {
    name: {
      type: String
    },
    department: {
      type: String
    },
    address: {
      type: String
    },
    image:[{
      type: String
    }]
  },
  {
    timestamps: true
  }
);

export default model('Doctors', doctorSchema);
