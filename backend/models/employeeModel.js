import mongoose, { mongo } from 'mongoose'

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    position: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    }
})

const employeeModel = mongoose.model('employee', employeeSchema);

export default employeeModel