import ContactForm from "../components/contact/ContactForm";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen bg-[#F7FAF5]">

      {/* Hero */}

      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Contact KrishiMitra 🌾
          </h1>

          <p className="mt-6 text-lg text-green-100 max-w-2xl mx-auto">
            Have a question regarding crops, diseases,
            weather, or our platform?
            We'd love to hear from you.
          </p>

        </div>

      </section>

      {/* Main Section */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-14">

          {/* LEFT */}

          <div>

            <h2 className="text-3xl font-bold text-green-800 mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div className="flex items-start gap-5 bg-white rounded-2xl shadow p-6">

                <div className="bg-green-100 p-4 rounded-xl">

                  <MapPin className="text-green-700"/>

                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    Office Address
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Chitkara University,
                    Rajpura,
                    Punjab,
                    India
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-5 bg-white rounded-2xl shadow p-6">

                <div className="bg-green-100 p-4 rounded-xl">

                  <Mail className="text-green-700"/>

                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    Email
                  </h3>

                  <p className="text-gray-600 mt-2">
                    support@krishimitra.com
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-5 bg-white rounded-2xl shadow p-6">

                <div className="bg-green-100 p-4 rounded-xl">

                  <Phone className="text-green-700"/>

                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    Phone
                  </h3>

                  <p className="text-gray-600 mt-2">
                    +91 9876543210
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-5 bg-white rounded-2xl shadow p-6">

                <div className="bg-green-100 p-4 rounded-xl">

                  <Clock className="text-green-700"/>

                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    Working Hours
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Monday - Saturday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold text-green-800 mb-3">

              Send us a Message

            </h2>

            <p className="text-gray-500 mb-8">

              Fill out the form and we'll get back to you
              within 24 hours.

            </p>

            <ContactForm />

          </div>

        </div>

      </section>

      {/* Google Map */}

      <section className="pb-20 px-6">

        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-xl">

          <iframe
            title="KrishiMitra Location"
            src="https://www.google.com/maps?q=Chitkara+University+Punjab&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          />

        </div>

      </section>

    </div>
  );
}

export default Contact;