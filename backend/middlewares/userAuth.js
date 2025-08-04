import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
    const token = req.cookies?.token
    if (!token) {
        return res.send('please Login First')
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        next()
    } catch (error) {
        console.log(error.message)
    }
}
export default authMiddleware