import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//register admin
export const registerAdmin = async (body) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(body.password, salt);
    body.password = hash;
    let userdata = {
        firstname: body.firstname,
        lastname: body.lastname,
        role: "admin",
        email: body.email,
        password: body.password
    }
    const data = await User.create(userdata);
    return data;
};

//register user
export const registerUser = async (body) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(body.password, salt);
    body.password = hash;
    let userdata = {
        firstname: body.firstname,
        lastname: body.lastname,
        role: "user",
        email: body.email,
        password: body.password
    }
    const data = await User.create(userdata);
    return data;
};

// user login
export const login = async (body) => {
    const data = await User.findOne({ email: body.email });
    if (data != null) {
        const result = await bcrypt.compare(body.password, data.password);
        if (result) {
            var token = jwt.sign({ firstname: data.firstname, email: data.email, role: data.role }, process.env.SECRET_KEY);
            return token;
        }
        else {
            throw new Error("Invalid Password");
        }
    }
    else {
        throw new Error("Invalid Email");
    }
};