const jwt = require("jsonwebtoken")

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    
    if (!token) return res.status(401).json({ MessageChannel: "No Token Provided" });
      
    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid Token" });
        req.user = user;
        next();
    });
}; 

const isAdmin = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    if (req.user.userRole !== "admin") {
        console.log (req.user)
        return res.status(403).json({ message: "Admin access only" });
    }

    next();
};

module.exports = { authenticateToken, isAdmin }
