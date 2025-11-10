const jwt = require("jsonwebtoken");

const authMiddleware = async(req) => {
    const authHeader = req.headers.authorization || "";
    if(!authHeader) return null;

    const token = authHeader.replace("Bearer ", "");
    try {
        return await jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        throw new Error("Invalid or expired token");
    }
}

module.exports = authMiddleware;
