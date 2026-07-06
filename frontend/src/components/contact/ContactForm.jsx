import { useState } from "react";
import toast from "react-hot-toast";
import {
  Mail,
  User,
  Phone,
  FileText,
  MessageSquare,
  Send,
  Loader2,
} from "lucide-react";

import { sendContactMessage } from "../../services/contactServices";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function ContactForm() {

  const [formData, setFormData] = useState(initialForm);

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });

  };

  const validate = () => {

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid Email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  try {
    setLoading(true);

    await sendContactMessage(formData);

    toast.success(
      "Your message has been sent successfully."
    );

    setFormData(initialForm);

    setErrors({});

  } catch (error) {

    console.error(error);

    toast.error(
      error.response?.data?.message ||
      "Unable to send message."
    );

  } finally {

    setLoading(false);

  }
};


  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Name */}
      <div>
        <label className="block mb-2 font-semibold text-gray-700">
          Full Name
        </label>

        <div className="relative">
          <User
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {errors.name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block mb-2 font-semibold text-gray-700">
          Email Address
        </label>

        <div className="relative">
          <Mail
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />

          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block mb-2 font-semibold text-gray-700">
          Phone Number (Optional)
        </label>

        <div className="relative">
          <Phone
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />

          <input
            type="text"
            name="phone"
            placeholder="+91 XXXXX XXXXX"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block mb-2 font-semibold text-gray-700">
          Subject
        </label>

        <div className="relative">
          <FileText
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />

          <input
            type="text"
            name="subject"
            placeholder="Enter Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block mb-2 font-semibold text-gray-700">
          Message
        </label>

        <div className="relative">
          <MessageSquare
            className="absolute left-4 top-5 text-gray-400"
            size={20}
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Write your query..."
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-600 resize-none"
          />
        </div>

        {errors.message && (
          <p className="text-red-500 text-sm mt-1">
            {errors.message}
          </p>
        )}
      </div>

      {/* Button */}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-700 hover:bg-green-800 transition text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-2 disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Sending...
          </>
        ) : (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </button>

    </form>
  );

}

export default ContactForm;