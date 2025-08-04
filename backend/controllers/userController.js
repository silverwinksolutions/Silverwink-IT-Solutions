import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const userlogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email: email.toLowerCase() });
        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid email or password" })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid username or password" })
        }
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
        res.cookie('token', token);
        res.status(200).json({ success: true, token, message: "You have logged in successfully" })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ success: false, message: error.message })
    }
}

const userSignUp = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const userexist = await userModel.findOne({ email })
        if (userexist) {
            return res.send('user already exist')
        }
        const salt = await bcrypt.genSalt(10);
        const hashedpass = await bcrypt.hash(password, salt);
        const createdUser = await userModel.create({
            email: email.toLowerCase(),
            name,
            password: hashedpass
        })
        res.send(createdUser)
    } catch (error) {
        console.log(error.message);
    }
}

export {
    userlogin,
    userSignUp
}