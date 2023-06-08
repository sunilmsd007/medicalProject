import Doctor from "../models/doctors.model";
import Department from "../models/department.model";

//get all departments
export const getAllDepartments = async () => {
    const data = await Department.find();
    return data;
}

//create department
export const createDepartment = async (body, file) => {
    const doctorExist = await Doctor.findOne({name: body.team});
    console.log("=================>",doctorExist)
    if(doctorExist!= null){
        const deptExist = await Department.findOne({department_name: body.department_name});
        let doctorData = {
            doctor_name: doctorExist.name,
            address: doctorExist.address,
            image: doctorExist.image
        }
        if(deptExist == null){
            const dept = await Department.create({
                department_name: body.department_name,
                team:[doctorData],
                department_image: `http://localhost:3033/uploads/images/${file.filename}`
            })
            return dept;
        }else{
            if(doctorExist.department == body.department_name){
                const updateDept = await Department.findOneAndUpdate(
                    { department_name: body.department_name },
                    { $addToSet: { team: [doctorData] } },
                    { new: true }
                );
                return updateDept;
            }else{
                throw new Error("Doctor department is not matching")
            }
        }
    }else{
        throw new Error("Doctor is not available")
    }
    
}