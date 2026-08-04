import ContactForm from "../components/contact/ContactForm";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  MessageSquare,
  HelpCircle,
  Headset,
} from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Office Location",
    detail: "Chitkara University, Rajpura, Punjab, India",
    subtitle: "Main Campus & Innovation Lab",
    action: "Get Directions",
    href: "https://maps.google.com/?q=Chitkara+University+Punjab",
  },
  {
    icon: Mail,
    title: "Email Support",
    detail: "support@krishimitra.com",
    subtitle: "Response within 24 hours",
    action: "Send Email",
    href: "mailto:support@krishimitra.com",
  },
  {
    icon: Phone,
    title: "Helpline",
    detail: "+91 98765 43210",
    subtitle: "Toll-free farmer assistance",
    action: "Call Now",
    href: "tel:+919876543210",
  },
  {
    icon: Clock,
    title: "Operating Hours",
    detail: "Monday - Saturday",
    subtitle: "9:00 AM - 6:00 PM IST",
    action: null,
    href: null,
  },
];

function Contact() {
  return (
    <div className="min-h-screen bg-slate-50/70">
      
      {/* SaaS Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-900 text-white py-20 sm:py-28 overflow-hidden">
        {/* Ambient background glow orbs */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-950/80 border border-emerald-700/50 rounded-full text-xs font-bold text-emerald-300 uppercase tracking-wider mb-6">
            <Headset size={14} className="text-emerald-400" />
            <span>We're Here to Help</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Get in Touch with <span className="text-emerald-400">KrishiMitra</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Have questions about crop health, advisory schemes, market prices, or app features? Our agricultural support team is ready to assist you.
          </p>

        </div>
      </section>

      {/* Main Form & Information Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Interactive Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                Reach Out
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Contact Information
              </h2>
              <p className="text-sm text-slate-600 font-normal">
                Choose your preferred channel to connect with our agricultural specialists.
              </p>
            </div>

            <div className="grid gap-4 pt-2">
              {contactCards.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-500/40 transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="p-3.5 bg-emerald-50 rounded-xl text-emerald-700 border border-emerald-100 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300 shrink-0">
                      <Icon size={22} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                          {item.title}
                        </h3>
                        {item.action && (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : "_self"}
                            rel="noreferrer"
                            className="text-[11px] font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
                          >
                            {item.action} &rarr;
                          </a>
                        )}
                      </div>

                      <p className="text-slate-800 font-semibold text-sm mt-0.5 truncate">
                        {item.detail}
                      </p>

                      <p className="text-slate-500 text-xs mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick FAQ Callout Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-900 to-emerald-950 text-white flex items-center gap-4 shadow-md mt-6">
              <div className="p-3 bg-emerald-800/80 rounded-xl shrink-0 text-emerald-300">
                <HelpCircle size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Need immediate answers?</h4>
                <p className="text-xs text-emerald-200/80 mt-0.5">
                  Check our Knowledge Base for quick crop troubleshooting guides.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Contact Form Box */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200/80 p-6 sm:p-10 relative overflow-hidden">
              
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                <div className="p-3 bg-emerald-100 text-emerald-800 rounded-2xl">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Send Us a Message
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal">
                    Fill in your details below and our team will reach out within 24 hours.
                  </p>
                </div>
              </div>

              {/* Form Component */}
              <ContactForm />

            </div>
          </div>

        </div>
      </section>

      {/* Embedded Location Map Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          
          <div className="flex items-center justify-between px-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Find Us on the Map</h3>
              <p className="text-xs text-slate-500">Visit our primary regional technology center</p>
            </div>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
              Chitkara University Campus
            </span>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-white relative">
            <iframe
              title="KrishiMitra Location Map"
              src="https://www.google.com/maps?q=Chitkara+University+Punjab&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              className="w-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

        </div>
      </section>

    </div>
  );
}

export default Contact;