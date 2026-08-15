const User = require("../models/User");
const generateToken = require("../utils/generateToken");

const registerUser = async (req, res) => {
    try {
        const { fullName, email, password, phone } = req.body;

        // Check if email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Email already registered."
            });
        }

        // Check if phone already exists
        const existingPhone = await User.findOne({ phone });

        if (existingPhone) {
            return res.status(409).json({
                success: false,
                message: "Phone number already registered."
            });
        }

        // Create new user
        const user = await User.create({
            fullName,
            email,
            password,
            phone
        });

        // Generate JWT Token
        const token = generateToken(user._id);

        // Send Response
        return res.status(201).json({
            success: true,
            message: "User registered successfully.",
            token,
            data: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                phone: user.phone,
                role: user.role
            }
        });

    } catch (error) {
        console.error("Register Error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};






const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check required fields
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and Password are required."
            });
        }

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password."
            });
        }

        // Compare password
        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password."
            });
        }

        // Generate token
        const token = generateToken(user._id);

        return res.status(200).json({
            success: true,
            message: "Login successful.",
            token,
            data: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                phone: user.phone,
                role: user.role
            }
        });

    } catch (error) {
        console.error("Login Error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


const getCurrentUser = async (req, res) => {
    return res.status(200).json({
        success: true,
        data: req.user
    });
};



const changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword, confirmPassword } = req.body;

        // Check required fields
        if (!currentPassword || !newPassword || !confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "All password fields are required."
            });
        }

        // Check new password and confirm password
        if (newPassword !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "New password and confirm password do not match."
            });
        }

        // Check minimum password length
        if (newPassword.length < 6) {
            return res.status(400).json({
                success: false,
                message: "New password must be at least 6 characters long."
            });
        }

        // Get logged-in user
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        // Verify current password
        const isMatch = await user.comparePassword(currentPassword);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Current password is incorrect."
            });
        }

        // Prevent using the same password
        const isSamePassword = await user.comparePassword(newPassword);

        if (isSamePassword) {
            return res.status(400).json({
                success: false,
                message: "New password must be different from current password."
            });
        }

        // Set new password
        // User model pre-save hook will automatically hash it
        user.password = newPassword;

        await user.save();

        return res.status(200).json({
            success: true,
            message: "Password updated successfully."
        });

    } catch (error) {
        console.error("Change Password Error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = {
    registerUser,
    loginUser,
    getCurrentUser,
    changePassword
};