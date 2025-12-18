import React, { useState, useEffect } from "react";
import PageBanner from "../comoncomponents/Pagebanner"; // Added import

const projects = [
  {
    title: "Shree Kashtbhanjan Dev Bhojanshala",
    developer: "Shyam Group",
    area: "3,25,000 sq ft",
    type: "Gujarat's Biggest Bhojanshala",
    location: "Sarangpur, Gujarat",
    images: [
      "https://infinitivegroups.com/image/45.jpg",
      "https://infinitivegroups.com/image/46.jpg",
    ],
  },
  {
    title: "Aarohi Heights",
    developer: "Panam Group",
    area: "3,50,000 sq ft",
    towers: "4 Towers / 1B+G+14",
    type: "Residential Building",
    location: "Bharuch, Gujarat",
    images: [
      "https://infinitivegroups.com/image/IMG_5627%202.JPG",
      "https://infinitivegroups.com/image/IMG_5634.JPG",
      "https://infinitivegroups.com/image/IMG_5638.JPG",
    ],
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(
    Array(projects.length).fill(0)
  );
  const [fade, setFade] = useState(Array(projects.length).fill(true));

  useEffect(() => {
    const interval = setInterval(() => {
      setFade((prev) => prev.map(() => false)); // start fade out
      setTimeout(() => {
        setCurrentIndex((prev) =>
          prev.map((index, i) => (index + 1) % projects[i].images.length)
        );
        setFade(Array(projects.length).fill(true)); // fade in new image
      }, 500); // fade duration
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <PageBanner title="Our Project" />
      <section className="projects py-5 bg-light">
        <div className="container">
          {/* Page Banner */}

          <div className="text-center mb-5">
            <h1 className="fw-bold">Our Completed Projects</h1>
            <p className="text-muted">
              Explore our portfolio of high-quality construction work.
            </p>
          </div>

          {projects.map((project, i) => (
            <div className="row align-items-center mb-5" key={i}>
              {i % 2 === 0 ? (
                <>
                  {/* Image first */}
                  <div
                    className={`col-12 col-lg-9 mb-3 mb-lg-0 text-center ${
                      i % 2 !== 0 ? "order-2 order-lg-1" : ""
                    }`}
                  >
                    <img
                      src={project.images[currentIndex[i]]}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "fill",
                        borderRadius: "15px",
                        boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                        opacity: fade[i] ? 1 : 0,
                        transition: "opacity 0.5s ease-in-out",
                      }}
                    />
                  </div>

                  {/* Details second */}
                  <div
                    className={`col-12 col-lg-3 d-flex justify-content-center mb-3 mb-lg-0 ${
                      i % 2 !== 0 ? "order-1 order-lg-2" : ""
                    }`}
                    style={{ position: "relative", zIndex: 2 }}
                  >
                    <div
                      style={{
                        background: "linear-gradient(135deg, #ffffff, #e9f0f7)",
                        padding: "2.5rem",
                        borderRadius: "200px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                        borderLeft: "5px solid #0d6efd",
                        width: "250px",
                        textAlign: "center",
                      }}
                      className="project-card"
                    >
                      <h3 className="fw-bold mb-4" style={{ color: "#0d47a1" }}>
                        {project.title}
                      </h3>
                      <p>
                        <strong>Developer:</strong> {project.developer}
                      </p>
                      {project.towers && (
                        <p>
                          <strong>Towers & Floors:</strong> {project.towers}
                        </p>
                      )}
                      <p>
                        <strong>Built-up Area:</strong> {project.area}
                      </p>
                      <p>
                        <strong>Type of Project:</strong> {project.type}
                      </p>
                      <p>
                        <strong>Location:</strong> {project.location}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Details first */}
                  <div
                    className="col-lg-3 d-flex justify-content-center mb-3 mb-lg-0"
                    style={{ position: "relative", zIndex: 2 }}
                  >
                    <div
                      style={{
                        background: "linear-gradient(135deg, #ffffff, #e9f0f7)",
                        padding: "2.5rem",
                        borderRadius: "200px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                        borderLeft: "5px solid #fdc50dff",
                        width: "250px",
                        textAlign: "center",
                      }}
                      className="project-card"
                    >
                      <h3
                        className="fw-bold mb-4"
                        style={{ color: "#fdc50dff" }}
                      >
                        {project.title}
                      </h3>
                      <p>
                        <strong>Developer:</strong> {project.developer}
                      </p>
                      {project.towers && (
                        <p>
                          <strong>Towers & Floors:</strong> {project.towers}
                        </p>
                      )}
                      <p>
                        <strong>Built-up Area:</strong> {project.area}
                      </p>
                      <p>
                        <strong>Type of Project:</strong> {project.type}
                      </p>
                      <p>
                        <strong>Location:</strong> {project.location}
                      </p>
                    </div>
                  </div>

                  {/* Image second */}
                  <div className="col-lg-9 mb-3 mb-lg-0 text-center position-relative">
                    <img
                      src={project.images[currentIndex[i]]}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover",
                        borderRadius: "15px",
                        boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                        opacity: fade[i] ? 1 : 0,
                        transition: "opacity 0.5s ease-in-out",
                      }}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
