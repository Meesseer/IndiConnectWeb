import { useState } from "react";
import locationIcon from "../assets/location.png";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const handleSubmit = async (e) => {
      e.preventDefault();

      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setErrors({});
      setStatus("loading");

      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        if (!res.ok) throw new Error("Failed");

        setStatus("success");
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } catch (err) {
        setStatus("error");
      }
    };
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };



  return (
    <section className="w-full py-28 bg-[#01295C]">
      <div className="max-w-[1154px] mx-auto px-6">

        {/* Form Container */}
        <div className="rounded-[32px]
        p-[42px]
        bg-white/10
        backdrop-blur-xl
        border border-white/30
        shadow-[0_20px_60px_rgba(0,0,0,0.25)]">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* LEFT SIDE */}
            <div className="text-white">

              {/* Heading */}
              <h2 className="text-[48px] font-bold bg-gradient-to-r from-[#E04A00] to-[#FF915C] bg-clip-text text-transparent">
                Lets Talk
              </h2>

              {/* Description */}
              <p className="mt-6 text-[20px] leading-[100%] max-w-[470px]">
                Reach out to us with your queries, suggestions and applications.
                We’d be happy to explore the next growth opportunity!
              </p>

              {/* Address */}
              <div className="mt-8 flex items-start gap-3">
                <img src={locationIcon} alt="Location" className="w-[22px] h-[21px]" />
                <div>
                  <p>4074 Ebert Summit Suite 375</p>
                  <p>Lake Leonardchester</p>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE FORM */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              {[
                { label: "Name", name: "name" },
                { label: "Email", name: "email" },
                { label: "Phone Number", name: "phone" },
                { label: "Company Name", name: "company" },
              ].map((field) => (
                <input
                  key={field.name}
                  type="text"
                  name={field.name}
                  placeholder={field.label}
                  value={form[field.name]}
                  onChange={handleChange}
                  className="w-full h-[64px] rounded-[8px] bg-[#1B3A62] px-4 text-white placeholder:text-white/60 focus:outline-none"
                />
              ))}

              {/* Message */}
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                className="w-full h-[120px] rounded-[8px] bg-[#1B3A62] px-4 py-4 text-white placeholder:text-white/60 focus:outline-none resize-none"
              />

              {/* Submit */}
              <button
                type="submit"
                className="w-full h-[64px] rounded-[16px] text-white font-semibold bg-gradient-to-r from-[#E04A00] to-[#FF915C] transition hover:opacity-90"
              >
                Submit
              </button>

              {submitted && (
                <p className="text-green-400 mt-2">
                  Message submitted successfully!
                </p>
              )}

              {status === "loading" && (
                <p className="text-blue-300 mt-4">Submitting...</p>
              )}

              {status === "success" && (
                <p className="text-green-400 mt-4">
                  Form submitted successfully 🎉
                </p>
              )}

              {status === "error" && (
                <p className="text-red-400 mt-4">
                  Something went wrong. Please try again.
                </p>
              )}

            </form>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;