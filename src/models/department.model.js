import { Schema, model } from 'mongoose';

const departmentSchema = new Schema(
  {
    department_name: {
      type: String
    },
    team: [{
        doctor_name: {
            type: String
        },
        address: {
            type: String
        },
        image: {
            type: String
        }
    }],
    department_image: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('Department', departmentSchema);
