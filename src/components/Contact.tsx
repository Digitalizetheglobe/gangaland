'use client';

import { useState, type ChangeEvent, type FormEvent } from "react";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [selectedUnit, setSelectedUnit] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
  }>({});

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleUnitChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedUnit(value);

    if (value === "3 BHK") {
      setPriceRange("₹1.77 Cr – ₹1.87 Cr");
    } else if (value === "3.5 BHK") {
      setPriceRange("₹1.96 Cr – ₹2.16 Cr");
    } else {
      setPriceRange("");
    }
  };

  const validate = () => {
    const newErrors: { name?: string; email?: string; phone?: string } = {};

    if (!formValues.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(formValues.name.trim())) {
      newErrors.name = "Full name should contain only letters and spaces.";
    }

    if (!formValues.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formValues.phone.trim())) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    if (!formValues.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formValues.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    // You can replace this with actual submit logic (API, etc.)
    console.log("Form submitted", {
      ...formValues,
      selectedUnit,
      priceRange,
    });
  };

  return (
    <section
      id="contact"
      className="relative py-20 text-white md:py-28 overflow-hidden" 
      style={{
        backgroundImage: "url('/images/gallery (2).png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm"></div>

      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 lg:flex-row lg:items-start relative z-10">
        {/* Left: Text + contact details */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full space-y-8 lg:w-[45%]"
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FFD44F]">
              Contact Us
            </p>
            <h2 className="font-raleway text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
              Let&apos;s Talk About <br />
              <span className="text-[#FFD44F]">Your New Home</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-relaxed text-neutral-300">
            Share your details and our team will connect with you to walk you
            through floor plans, pricing, and exclusive offers tailored to your
            needs.
          </p>

          <div className="space-y-6 rounded-3xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-md shadow-xl">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Call Us
              </p>
              <a
                href={`tel:+91 7026967026`}
                className="inline-flex items-center gap-2 text-lg font-bold text-white hover:text-[#FFD44F]"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white">
                  <Phone className="h-4 w-4" />
                </span>
                <span>+91 7026967026</span>
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Email
              </p>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="inline-flex items-center gap-2 text-lg font-bold text-white hover:text-[#FFD44F]"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white">
                  <Mail className="h-4 w-4" />
                </span>
                <span>{SITE_CONFIG.contact.email}</span>
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Visit Us
              </p>
              <a
                href={`https://maps.app.goo.gl/Qf22nwGyAKUiTNLV8`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-start gap-3 mt-1 text-lg font-medium"
              >
                <span className="mt-1 shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="max-w-xs text-base font-bold text-white group-hover:text-[#FFD44F]">
                  Ganga Legends County, 18m. D.P. Road, Ram Nagar, Bavdhan, Off. Pashan, Pune.
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Enquiry form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[55%]"
        >
          <div className="rounded-3xl bg-white/10 p-6 shadow-2xl ring-1 ring-white/20 backdrop-blur-md md:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#FFD44F]">
                  Enquiry Form
                </p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold text-white"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    value={formValues.name}
                    onChange={handleInputChange}
                    className={`h-12 w-full rounded-xl border bg-black/40 px-4 text-sm text-white outline-none placeholder:text-neutral-400 focus:ring-2 focus:bg-black/60 ${errors.name
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-white/20 focus:border-[#FFD44F] focus:ring-[#FFD44F]/20"
                      }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 font-medium">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-white"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={formValues.email}
                    onChange={handleInputChange}
                    className={`h-12 w-full rounded-xl border bg-black/40 px-4 text-sm text-white outline-none placeholder:text-neutral-400 focus:ring-2 focus:bg-black/60 ${errors.email
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-white/20 focus:border-[#FFD44F] focus:ring-[#FFD44F]/20"
                      }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 font-medium">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="phone"
                    className="text-sm font-bold text-white"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                    maxLength={10}
                    value={formValues.phone}
                    onChange={(e) => {
                      const digitsOnly = e.target.value.replace(/\D/g, "");
                      handleInputChange({
                        ...e,
                        target: {
                          ...e.target,
                          name: "phone",
                          value: digitsOnly,
                        },
                      } as ChangeEvent<HTMLInputElement>);
                    }}
                    className={`h-12 w-full rounded-xl border bg-black/40 px-4 text-sm text-white outline-none placeholder:text-neutral-400 focus:ring-2 focus:bg-black/60 ${errors.phone
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-white/20 focus:border-[#FFD44F] focus:ring-[#FFD44F]/20"
                      }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 font-medium">{errors.phone}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="text-sm font-bold text-white"
                  >
                    Unit Interested In
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={selectedUnit}
                    onChange={handleUnitChange}
                    className="h-12 w-full rounded-xl border border-white/20 bg-black/40 px-4 text-sm text-white outline-none focus:border-[#FFD44F] focus:ring-2 focus:ring-[#FFD44F]/20 focus:bg-black/60"
                  >
                    <option value="" className="text-neutral-400 bg-black">
                      Select an option
                    </option>
                    <option value="3 BHK" className="bg-black">
                      3 BHK Apartment
                    </option>
                    <option value="3.5 BHK" className="bg-black">
                      3.5 BHK Apartment
                    </option>
                  </select>

                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-sm font-bold text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us more about what you’re looking for..."
                  value={formValues.message}
                  onChange={handleInputChange}
                  className="min-h-[120px] w-full resize-none rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-400 focus:border-[#FFD44F] focus:ring-2 focus:ring-[#FFD44F]/20 focus:bg-black/60"
                />
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-xs text-neutral-300 md:text-[0.75rem]">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 cursor-pointer rounded border-white/30 text-[#FFD44F] focus:ring-2 focus:ring-[#FFD44F] focus:ring-offset-0 bg-transparent"
                />
                <label htmlFor="consent" className="cursor-pointer leading-relaxed">
                  I agree to the privacy policy of{" "}
                  <span className="font-bold text-white">
                    {SITE_CONFIG.name}
                  </span>{" "}
                </label>
              </div>

              <div className="flex flex-col gap-4 pt-1 md:flex-row md:items-center md:justify-between">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#FFD44F] px-10 text-md font-bold cursor-pointer text-[#12394C] transition hover:bg-[#FFD44F]/80 active:translate-y-[1px] shadow-md shadow-[#FFD44F]/20"
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

