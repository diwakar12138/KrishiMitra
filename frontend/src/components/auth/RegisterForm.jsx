import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { User, Mail, Phone, Lock, ArrowRight, Loader2 } from "lucide-react";
import InputField from "./InputField";
import { registerUser } from "../../services/authServices";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[1-9]\d{1,14}$/;

function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const fullName = formData.fullName.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();

    if (!fullName) {
      newErrors.fullName = "Full name is required.";
    } else if (fullName.length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters.";
    }

    if (!email) {
      newErrors.email = "Email address is required.";
    } else if (!EMAIL_REGEX.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (phone && !PHONE_REGEX.test(phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!validateForm()) {
      toast.error("Please resolve the highlighted errors.");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone.trim(),
      password: formData.password,
    };

    try {
      await registerUser(payload);
      toast.success("Account created successfully! Please log in.");
      navigate("/login", { replace: true });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Registration failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <InputField
        label="Full Name"
        name="fullName"
        placeholder="e.g. Ramesh Kumar"
        value={formData.fullName}
        onChange={handleChange}
        error={errors.fullName}
        disabled={isSubmitting}
        icon={User}
        required
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="Email"
          type="email"
          name="email"
          placeholder="ramesh@example.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          disabled={isSubmitting}
          icon={Mail}
          required
        />

        <InputField
          label="Phone Number"
          type="tel"
          name="phone"
          placeholder="+91 9876543210"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          disabled={isSubmitting}
          icon={Phone}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="Password"
          type="password"
          name="password"
          placeholder="Min 8 characters"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          disabled={isSubmitting}
          icon={Lock}
          required
        />

        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="Re-enter password"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          disabled={isSubmitting}
          icon={Lock}
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className="w-full mt-3 bg-emerald-700 hover:bg-emerald-800 disabled:bg-emerald-400 text-white py-3.5 px-6 rounded-xl font-semibold shadow-md shadow-emerald-700/20 transition-all duration-200 flex items-center justify-center gap-2 focus:ring-4 focus:ring-emerald-700/20 active:scale-[0.99]"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Creating Account...</span>
          </>
        ) : (
          <>
            <span>Register Now</span>
            <ArrowRight size={18} />
          </>
        )}
      </button>

      <p className="text-center text-sm text-slate-600 pt-2">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-emerald-700 hover:text-emerald-800 hover:underline transition-colors"
        >
          Log in
        </Link>
      </p>
    </form>
  );
}

// Fixed Vite default export error
export default RegisterForm;