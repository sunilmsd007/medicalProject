import Doctors from '../models/doctors.model';

//get all doctors
export const getAllDoctors = async () => {
  const data = await Doctors.find().lean();
  return data;
};

//create new doctor
export const newDoctor = async (body, file) => {
  console.log("file----",file)
  // const [im1, im2] = file;
  const arr= file.map((im)=>{
    return `https://practice-purpose.s3.ap-south-1.amazonaws.com/${im.key}`
  })
  // console.log("array---",arr);
  // console.log("image1---",im1);
  // console.log("image2---",im2);
  let doctorData = {
    name: body.name,
    department: body.department,
    address: body.address,
   // image: `http://localhost:3033/uploads/images/${file.filename}`,  //to save in local machine
    //image:`https://practice-purpose.s3.ap-south-1.amazonaws.com/${file.key}`, //to save single file in s3
    image: arr
  }
  const data = await Doctors.create(doctorData);
  return data;
};

//get a doctor
export const getDoctor = async (body) => {
  const data = await Doctors.findOne({ name: body.name });
  return data;
}

//get all doctors count from department
export const getDoctorsCountFromDepartment = async (body) => {
  const data = await Doctors.aggregate([
    { $match: { department: body.department } },
    { $count: `total doctors in ${body.department}`  }
  ])
  return data;
}

//get all doctors from department
export const getDoctorsFromDepartment = async (body) => {
  const data = await Doctors.aggregate([
    { $match: { department: body.department } },
    { $project: {name:1} }
  ])
  return data;
}

//
//count doctor by department
export const pagination = async (query) => {
  const { page = 6, limit = 2 } = query;
  const data = await Doctors.find()
    .limit(limit * 1)
    .skip((page - 1) * limit)
    
  const count = await Doctors.countDocuments();
  if (data != null) {
    return {
      data,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    };
  }
  else {
    throw new Error("Doctor not available.");
  }
};