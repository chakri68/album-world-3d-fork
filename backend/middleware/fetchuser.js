const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
require("dotenv").config();

const fetchuser = (req,res,next) => {
    const token = req.header('auth-token');
    if(!token) return res.status(401).json({error: "Access Denied"});

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Access Denied" });
    }
};

module.exports = fetchuser;
