const jwt = require('jsonwebtoken');

const JWT_SECRET =
    process.env.JWT_SECRET || 'travlr-development-secret';

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: 'Authentication required'
        });
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(401).json({
            message: 'Invalid authorization format'
        });
    }

    const token = parts[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(403).json({
            message: 'Invalid or expired token'
        });
    }
};

const requireAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        return res.status(403).json({
            message: 'Admin access required'
        });
    }

    next();
};

module.exports = {
    authenticateJWT,
    requireAdmin
};