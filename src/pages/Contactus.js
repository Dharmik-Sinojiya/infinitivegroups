import React from "react";
import PageBanner from "../comoncomponents/Pagebanner";
import { useForm, ValidationError } from "@formspree/react";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("mlgrvbzb");

  if (state.succeeded) {
    return (
      <>
        <PageBanner title="Contact Us" />
        <div className="text-center py-5">
          <h2>✅ Thanks for contacting us!</h2>
          <p>We will get back to you soon.</p>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Page Banner */}
      <PageBanner title="Contact Us" />

      {/* Contact Section */}
      <section className="contact py-5" style={{ background: "#f8f9fa" }}>
        <div className="container">

          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="fw-bold">Get in Touch</h1>
            <p className="text-muted">
              Please fill out the quick form and we will be in touch.
            </p>
          </div>

          {/* Form */}
          <div className="row justify-content-center">
            <div className="col-lg-6 d-flex justify-content-center">

              <form
                onSubmit={handleSubmit}
                style={{
                  background: "linear-gradient(135deg, #b0aee8ff, #e9f0f7)",
                  padding: "2.5rem",
                  borderRadius: "270px",
                  boxShadow: "0 10px 25px rgba(255, 0, 0, 0.33)",
                  borderLeft: "5px solid #fd9d0dff",
                  width: "100%",
                  maxWidth: "400px",
                  height: "600px",
                  textAlign: "center",
                }}
              >
                <br /><br />

                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    style={inputStyle}
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    required
                    style={inputStyle}
                  />

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />

                  <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile No"
                    required
                    style={inputStyle}
                  />

                  <input
                    type="text"
                    name="subject"
                    placeholder="Your Subject"
                    required
                    style={inputStyle}
                  />

                  <textarea
                    rows="4"
                    name="message"
                    placeholder="Your Message"
                    required
                    style={textareaStyle}
                  />

                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  style={{
                    background: "#0d6efd",
                    color: "#fff",
                    padding: "12px 30px",
                    fontSize: "16px",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {state.submitting ? "Sending..." : "SEND MESSAGE"}
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// 🔹 Reusable styles
const inputStyle = {
  width: "100%",
  padding: "12px 15px",
  borderRadius: "8px",
  border: "1px solid #ced4da",
  outline: "none",
  fontSize: "16px",
  marginBottom: "10px",
};

const textareaStyle = {
  ...inputStyle,
  marginBottom: "15px",
};

export default ContactUs;
