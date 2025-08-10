require('dotenv').config();

module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'fallback_secret_key',
    mongoURI: process.env.MONGODB_URI,
    port: process.env.PORT || 5000
};
