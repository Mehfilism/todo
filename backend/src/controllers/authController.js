const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let mockUsers = []; 
const SECRET_KEY = "my_super_secret_kali_key";

exports.signup = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = {
            id: Date.now(),
            email: email,
            password: hashedPassword
        };
        mockUsers.push(newUser);

        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error during signup" });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = mockUsers.find(u => u.email === email);
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });

        res.status(200).json({ message: "Login successful", token: token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error during login" });
    }
};
