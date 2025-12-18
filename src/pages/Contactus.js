import React from "react";
import PageBanner from "../comoncomponents/Pagebanner";

const ContactUs = () => {
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
                style={{
                  background: "linear-gradient(135deg, #b0aee8ff, #e9f0f7)",
                  padding: "2.5rem",
                  borderRadius: "270px",
                  boxShadow: "0 10px 25px rgba(255, 0, 0, 0.33)",
                  borderLeft: "5px solid #fd9d0dff",
                  width: "100%",
                  maxWidth: "400px",
                  height:"600px",
                  textAlign: "center",
                }}
              >
                <br/>
                <br/>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      borderRadius: "8px",
                      border: "1px solid #ced4da",
                      outline: "none",
                      fontSize: "16px",
                      marginBottom: "10px",
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    required
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      borderRadius: "8px",
                      border: "1px solid #ced4da",
                      outline: "none",
                      fontSize: "16px",
                      marginBottom: "10px",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Mobile No"
                    required
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      borderRadius: "8px",
                      border: "1px solid #ced4da",
                      outline: "none",
                      fontSize: "16px",
                      marginBottom: "10px",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Your Subject"
                    required
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      borderRadius: "8px",
                      border: "1px solid #ced4da",
                      outline: "none",
                      fontSize: "16px",
                      marginBottom: "10px",
                    }}
                  />
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    required
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      borderRadius: "8px",
                      border: "1px solid #ced4da",
                      outline: "none",
                      fontSize: "16px",
                      marginBottom: "15px",
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
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
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = "#0b5ed7")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = "#0d6efd")
                  }
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
