const jwt = require('jsonwebtoken');
const SECRET_KEY = "my_super_secret_kali_key";

module.exports = (req, res, next) => {
    // 1. Check if they handed us a wristband (Token) in the Headers
    const authHeader = req.header('Authorization');
    
    if (!authHeader) {
        return res.status(401).json({ error: "Access Denied. Please log in." });
    }

    try {
        // 2. Remove the word "Bearer " to get just the token string
        const token = authHeader.replace("Bearer ", "");
        
        // 3. Verify the token is real and hasn't expired
        const verifiedUser = jwt.verify(token, SECRET_KEY);
        
        // 4. Attach the user's ID to the request so the controller knows who is asking
        req.user = verifiedUser;
        
        // 5. Let them pass to the controller!
        next(); 
    } catch (err) {
        res.status(400).json({ error: "Invalid or expired token." });
    }
};
