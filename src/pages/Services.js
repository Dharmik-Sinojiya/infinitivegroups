import React from "react";
import PageBanner from "../comoncomponents/Pagebanner";

const services = [
  {
    title: "Project Management Consultancy",
    image: "./img/PMC.png",
    description:
      "We handle project planning, monitoring, scheduling, budgeting, risk management, and quality assurance to ensure smooth execution.",
    footer: "Updated 2 days ago",
    gradient: "linear-gradient(135deg, #e3f2fd, #ffffff)",
    borderColor: "#0d6efd",
    textColor: "#0d47a1",
  },
  {
    title: "Civil & Structural Consultancy",
    image: "./img/construction.png",
    description:
      "Expert advice and solutions in civil, structural, and architectural domains for all developments.",
    footer: "Updated 3 days ago",
    gradient: "linear-gradient(135deg, #f1f8e9, #ffffff)",
    borderColor: "#2e7d32",
    textColor: "#1b5e20",
  },
  {
    title: "Interior & Exterior Design",
    image: "/img/interior.png",
    description:
      "Creative and functional designs to enhance beauty and usability of your spaces.",
    footer: "Updated 1 week ago",
    gradient: "linear-gradient(135deg, #fff3e0, #ffffff)",
    borderColor: "#ff6f00",
    textColor: "#e65100",
  },
  {
    title: "Residential & Commercial Construction",
    image: "/img/s3.png",
    description:
      "Durable, modern, and functional structures delivered on time and within budget.",
    footer: "Updated 5 days ago",
    gradient: "linear-gradient(135deg, #fce4ec, #ffffff)",
    borderColor: "#c2185b",
    textColor: "#880e4f",
  },
  {
    title: "Industrial & Institutional Construction",
    image: "/img/industrial-park.png",
    description:
      "Large-scale infrastructure with optimized workflows and sustainable practices.",
    footer: "Updated 2 weeks ago",
    gradient: "linear-gradient(135deg, #e0f7fa, #ffffff)",
    borderColor: "#0097a7",
    textColor: "#006064",
  },
];

const Services = () => {
  // Split services into rows of 3
  const rows = [];
  for (let i = 0; i < services.length; i += 3) {
    rows.push(services.slice(i, i + 3));
  }

  return (
    <>
      {/* PageBanner at the top */}
      <PageBanner title="Our Services" />

      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="fw-bold">Our Services</h1>
            <p className="text-muted">
              Innovative solutions in construction, design, and project
              management.
            </p>
          </div>

          {rows.map((rowServices, rowIndex) => (
            <div
              className={`row g-4 mb-5 ${
                rowServices.length < 3 ? "justify-content-center" : ""
              }`}
              key={rowIndex}
            >
              {rowServices.map((service, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div
                    className="card h-100 shadow-sm"
                    style={{
                      background: service.gradient,
                      borderTop: `5px solid ${service.borderColor}`,
                    }}
                  >
                    <img
                      src={service.image}
                      className="card-img-top mt-3 mx-auto"
                      alt={service.title}
                      style={{
                        height: "100px",
                        objectFit: "contain",
                        width: "auto",
                      }}
                    />
                    <div
                      className="card-body"
                      style={{
                        color: service.textColor,
                        fontWeight: 500,
                        textAlign: "center",
                      }}
                    >
                      <h5 className="card-title">{service.title}</h5>
                      <p className="card-text">{service.description}</p>
                    </div>
                    {/* <div className="card-footer text-muted text-center">
                      {service.footer}
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
