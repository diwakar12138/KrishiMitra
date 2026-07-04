import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "./InputField";
import { loginUser } from "../../services/authServices";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(formData);

      toast.success(response.message);

      login(response.token, response.data);

      navigate("/");

      
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">

      <InputField
        label="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />

      <InputField
        label="Password"
        type="password"
        name="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full mt-3 bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold transition"
      >
        Login
      </button>

      <p className="text-center mt-6 text-gray-600">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-green-700 font-semibold hover:underline"
        >
          Register
        </Link>
      </p>

    </form>
  );
}

export default LoginForm;