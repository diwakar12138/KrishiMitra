import { useState } from "react";
import {
  FaLock,
  FaEye,
  FaEyeSlash,
  FaShieldAlt,
} from "react-icons/fa";

function PasswordInput({
  name,
  placeholder,
  value,
  showPassword,
  setShowPassword,
  onChange,
}) {
  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition"
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-700"
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
}

function Profile() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setMessage("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (
      !formData.currentPassword ||
      !formData.newPassword ||
      !formData.confirmPassword
    ) {
      setError("Please fill all password fields.");
      return;
    }

    if (formData.newPassword.length < 6) {
      setError("New password must be at least 6 characters long.");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/v1/auth/change-password",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update password."
        );
      }

      setMessage(data.message);

      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF7] py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1B4332]">
            My Profile
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your account and security settings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Security Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto">
              <FaShieldAlt className="text-3xl text-green-700" />
            </div>

            <h2 className="text-xl font-bold text-center text-gray-800 mt-4">
              Account Security
            </h2>

            <p className="text-sm text-gray-500 text-center mt-2">
              Keep your account secure by using a strong password.
            </p>

          </div>

          {/* Change Password */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-11 h-11 rounded-lg bg-green-100 flex items-center justify-center">
                <FaLock className="text-green-700" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Change Password
                </h2>

                <p className="text-sm text-gray-500">
                  Update your password to keep your account secure.
                </p>
              </div>

            </div>

            {/* Success Message */}
            {message && (
              <div className="mb-5 p-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm">
                {message}
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-5 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                {error}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Current Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Password
                </label>

                <PasswordInput
                  name="currentPassword"
                  placeholder="Enter your current password"
                  value={formData.currentPassword}
                  showPassword={showCurrentPassword}
                  setShowPassword={setShowCurrentPassword}
                  onChange={handleChange}
                />
              </div>

              {/* New Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  New Password
                </label>

                <PasswordInput
                  name="newPassword"
                  placeholder="Enter your new password"
                  value={formData.newPassword}
                  showPassword={showNewPassword}
                  setShowPassword={setShowNewPassword}
                  onChange={handleChange}
                />

                <p className="text-xs text-gray-500 mt-2">
                  Password must contain at least 6 characters.
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm New Password
                </label>

                <PasswordInput
                  name="confirmPassword"
                  placeholder="Confirm your new password"
                  value={formData.confirmPassword}
                  showPassword={showConfirmPassword}
                  setShowPassword={setShowConfirmPassword}
                  onChange={handleChange}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-7 py-3 rounded-lg bg-green-700 text-white font-semibold hover:bg-green-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading
                  ? "Updating..."
                  : "Update Password"}
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;