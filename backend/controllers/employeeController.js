import employeeModel from "../models/employeeModel.js"
const getCount = async (req, res) => {
    try {
        const allemployees = await employeeModel.find();
        res.json({ success: true, count: allemployees.length})
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}
export {
    getCount
}