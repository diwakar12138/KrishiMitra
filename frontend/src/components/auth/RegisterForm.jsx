import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import { registerUser } from "../../services/authServices";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  try {
    const response = await registerUser({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    });

    toast.success("Registration Successful. Please login.");

    navigate("/login");

  } catch (error) {

    toast.error(
      error.response?.data?.message || "Registration Failed"
    );

  }
};

  return (
    <form onSubmit={handleSubmit} className="mt-6">

      <InputField
        label="Full Name"
        name="fullName"
        placeholder="Enter your full name"
        value={formData.fullName}
        onChange={handleChange}
      />

      <InputField
        label="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />

      <InputField
        label="Phone Number"
        name="phone"
        placeholder="Enter your phone number"
        value={formData.phone}
        onChange={handleChange}
      />

      <InputField
        label="Password"
        type="password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
      />

      <InputField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full mt-3 bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold transition"
      >
        Create Account
      </button>

      <p className="text-center mt-6 text-gray-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-green-700 font-semibold hover:underline"
        >
          Login
        </Link>
      </p>

    </form>
  );
}

export default RegisterForm;