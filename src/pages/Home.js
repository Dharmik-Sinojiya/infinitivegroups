import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Card, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";
import "./Banner.css";
import "./Ourproject.css";
// import "./Home.css";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Banner />
      <Content />
      <Details />
      <Information />
      <OurProjects />
    </>
  );
}

// Banner Section
function Banner() {
  const slides = [
    {
      image: "./img/img1.jpg",
      slogan1: "Your Vision,",
      slogan2: "Built with Precision",
    },
    {
      image: "./img/img3.jpg",
      slogan1: "From Foundation",
      slogan2: "to Finishing Excellence",
    },
    {
      image: "./img/img5.jpg",
      slogan1: "We Build Projects,",
      slogan2: "You Build the Future",
    },
  ];

  return (
    <Carousel
      controls={false}
      indicators={false}
      fade
      interval={7000}
      pause={false}
      ride="carousel"
    >
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx}>
          <div
            className="banner-slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="banner-overlay">
              <h1 className="banner-title">
                {slide.slogan1}{" "}
                <span className="highlight1">{slide.slogan2}</span>
              </h1>

              <Link to="/about">
                <button className="btn btn-outline-light mt-4 banner-btn">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

// Content Section
function Content() {
  return (
    <Container className="my-5">
      <Row>
        {/* Description */}
        <Col xs={12} md={7}>
          <h1
            className="fw-bold"
            data-aos="fade-left"
            style={{ fontSize: "2.6rem" }}
          >
            WHY INFINITIVE GROUPS
          </h1>

          <br />

          <h3
            className="mb-4"
            data-aos="fade-left"
            style={{ fontSize: "2rem" }}
          >
            Real Estate
            <p></p>
            Development Redefined
          </h3>

          <p
            data-aos="fade-left"
            style={{
              fontSize: "1.15rem",
              lineHeight: "1.8",
              color: "#333",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <span style={{ fontWeight: "600", color: "#007BFF" }}>
              Infinitive Groups
            </span>{" "}
            is a multi-disciplinary group providing{" "}
            <span style={{ fontWeight: "600", color: "#007BFF" }}>
              Civil Engineering
            </span>{" "}
            and{" "}
            <span style={{ fontWeight: "600", color: "#007BFF" }}>
              Construction Project Management (PMC)
            </span>{" "}
            solutions to clients, builders, developers, institutions,
            industrialists, and the{" "}
            <span style={{ fontWeight: "600", color: "#007BFF" }}>
              government sector
            </span>
            .
          </p>

          <p
            data-aos="fade-left"
            style={{
              fontSize: "1.15rem",
              lineHeight: "1.8",
              color: "#333",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Our approach combines{" "}
            <span style={{ fontWeight: "600", color: "#007BFF" }}>
              technical expertise
            </span>
            ,{" "}
            <span style={{ fontWeight: "600", color: "#007BFF" }}>
              strategic planning
            </span>{" "}
            and{" "}
            <span style={{ fontWeight: "600", color: "#007BFF" }}>
              on-ground execution
            </span>
            , delivering efficient, transparent, and long-lasting real estate
            and infrastructure projects.
          </p>

          
            <a className="btn btn-primary px-4 py-2" href="/about">
              Learn More
            </a>
        </Col>

        {/* Image */}
        <Col
          xs={12}
          md={5}
          className="d-flex justify-content-center align-items-center mt-4 mt-md-0"
          data-aos="fade-right"
        >
          <Card className="w-100 border-0">
            <CardImg
              src="https://truenorthprojects.co.in/wp-content/uploads/2022/08/home-1.png"
              alt="Management Desk"
              style={{
                width: "100%",
                maxHeight: "520px",
                objectFit: "fill",
                borderRadius: "8px",
              }}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

// Details Section
function Details() {
  return (
    <div>
      <h5 className="vqs-heading" data-aos="fade-left">
        Delivering{" "}
        <span style={{ fontWeight: "600", color: "#007BFF" }}>
          Excellence in Development
        </span>
        <br />
        <span style={{ fontWeight: "500" }}>
          Welcome to{" "}
          <span style={{ color: "#007BFF", fontWeight: "600" }}>
            Infinitive Groups
          </span>
        </span>
      </h5>

      <Container className="my-5 position-relative">
        <Row className="align-items-center gy-5">
          {/* Image Section */}
          <Col xs={12} md={6} data-aos="fade-right">
            <div style={{ position: "relative", padding: "20px" }}>
              {/* Accent Background */}
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "85%",
                  height: "100%",
                  backgroundColor: "#0d20ecff",
                  borderRadius: "16px",
                  zIndex: 0,
                  opacity: 0.1,
                }}
              />

              {/* Image */}
              <Card
                className="border-0"
                style={{
                  position: "relative",
                  zIndex: 1,
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(13, 0, 255, 0.12)",
                }}
              >
                <CardImg
                  src="https://blog.ipleaders.in/wp-content/uploads/2021/05/jda-1068x623.jpg"
                  alt="Infinitive Groups Projects"
                  style={{
                    height: "440px",
                    width: "100%",
                    objectFit: "fill",
                  }}
                />
              </Card>
            </div>
          </Col>

          {/* Content Section */}
          <Col xs={12} md={6} data-aos="fade-left">
            {/* Badge */}
            <span
              style={{
                display: "inline-block",
                padding: "6px 14px",
                backgroundColor: "#eaf2ff",
                color: "#007BFF",
                fontWeight: "600",
                borderRadius: "20px",
                fontSize: "0.85rem",
                marginBottom: "12px",
              }}
            >
              About Infinitive Groups
            </span>

            <h2
              style={{
                fontWeight: "700",
                marginBottom: "20px",
                lineHeight: "1.3",
              }}
            >
              Building Trust Through{" "}
              <span style={{ color: "#007BFF" }}>Engineering Excellence</span>
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: "#555",
                marginBottom: "24px",
              }}
            >
              <strong>Infinitive Groups</strong> delivers end-to-end Civil
              Engineering and Construction Project Management solutions,
              transforming concepts into reliable, high-value assets.
            </p>

            {/* Highlights */}
            <ul
              style={{
                listStyle: "none",
                paddingLeft: 0,
                marginBottom: "30px",
              }}
            >
              {[
                "Residential, Commercial & Infrastructure Projects",
                "Strong On-Ground Execution & PMC Expertise",
                "Trusted by Developers, Institutions & Government Bodies",
              ].map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "14px",
                    fontSize: "1rem",
                  }}
                >
                  <span
                    style={{
                      height: "10px",
                      width: "10px",
                      backgroundColor: "#007BFF",
                      borderRadius: "50%",
                      marginRight: "12px",
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <a className="btn btn-primary px-4 py-2" href="/about">
              Learn More
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

// Information Section
function Information() {
  const services = [
    {
      title: "Project Management Consultancy (PMC)",
      image:
        "https://static.vecteezy.com/system/resources/previews/020/376/348/original/building-superintendent-repair-worker-line-icon-illustration-vector.jpg",
      description:
        "End-to-end project planning, coordination, cost control, and execution management.",
    },
    {
      title: "Civil, Structural & Architectural Consultants",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.SFz8lEmtFMRK7J6szckz6QAAAA?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "Expert design, analysis, and consultancy ensuring safety, efficiency, and compliance.",
    },
    {
      title: "Interior & Exterior Design",
      image:
        "https://static.vecteezy.com/system/resources/previews/007/313/018/non_2x/blueprint-line-icon-vector.jpg",
      description:
        "Functional, aesthetic, and sustainable design solutions for modern spaces.",
    },
    {
      title: "Residential & Commercial Construction",
      image:
        "https://static.vecteezy.com/system/resources/previews/036/883/395/original/building-icon-logo-design-template-vector.jpg",
      description:
        "High-quality construction services tailored to residential and commercial developments.",
    },
    {
      title: "Industrial Construction",
      image:
        "https://static.vecteezy.com/system/resources/previews/040/358/093/non_2x/road-construction-icon-in-logotype-vector.jpg",
      description:
        "Robust industrial infrastructure built to meet operational and safety standards.",
    },
    {
      title: "2D & 3D Drafting",
      image:
        "https://static.vecteezy.com/system/resources/previews/028/086/386/non_2x/3d-modeling-architectural-drafter-line-icon-illustration-vector.jpg",
      description:
        "Accurate 2D drawings and realistic 3D models for better visualization and planning.",
    },
  ];

  return (
    <section
      style={{
        background: "#0b1120",
        padding: "5rem 1rem",
      }}
    >
      <Container>
        {/* Heading */}
        <div className="text-center mb-5">
          <h2
            data-aos="fade-up"
            style={{
              color: "#fff",
              fontSize: "clamp(2rem, 5vw, 2.6rem)",
              fontWeight: "700",
            }}
          >
            Range of Services
          </h2>
          <p
            data-aos="fade-up"
            style={{
              color: "#94a3b8",
              maxWidth: "650px",
              margin: "14px auto 0",
            }}
          >
            Hover over each service to explore how Infinitive Groups delivers
            excellence across every phase of development.
          </p>
        </div>

        {/* Services Grid */}
        <Row className="g-4">
          {services.map((service, index) => (
            <Col xs={12} sm={6} lg={4} key={index} data-aos="zoom-in">
              <div className="service-hover-card">
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />

                {/* Overlay Content */}
                <div className="service-overlay">
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                  <Link to="/services">
                    <button className="btn btn-primary btn-sm">View</button>
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CSS */}
      <style>
        {`
          .service-hover-card {
            position: relative;
            height: 300px;
            border-radius: 20px;
            overflow: hidden;
            cursor: pointer;
            box-shadow: 0 25px 50px rgba(0,0,0,0.5);
            perspective: 1000px;
            transition: transform 0.3s ease;
          }

          .service-hover-card:hover {
            transform: translateY(-10px) rotateX(3deg) rotateY(3deg);
          }

          .service-image {
            width: 100%;
            height: 100%;
            object-fit: fill;
            object-position: center;
            transition: transform 0.7s ease, opacity 0.7s ease;
            display: block;
          }

          .service-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.95));
            color: #fff;
            padding: 24px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
            border-radius: 20px;
          }

          .service-overlay h5 {
            font-size: 1.2rem;
            font-weight: 700;
            margin-bottom: 12px;
          }

          .service-overlay p {
            font-size: 1rem;
            color: #cbd5f5;
            margin-bottom: 16px;
          }

          .service-hover-card:hover .service-image {
            transform: scale(1.15);
            opacity: 0.15;
          }

          .service-hover-card:hover .service-overlay {
            opacity: 1;
            transform: translateY(0);
          }

          @media (max-width: 768px) {
            .service-hover-card {
              height: 300px;
            }
          }
        `}
      </style>
    </section>
  );
}

// Our Projects Section
function OurProjects() {
  const projects = [
    {
      img: "https://infinitivegroups.com/image/K.jpg",
      title: "Sarangpur Bhojnalay",
      delay: 100,
    },
    {
      img: "https://infinitivegroups.com/image/IMG_5627%202.JPG",
      title: "Aarohi Hights",
      delay: 200,
    },
    {
      img: "https://infinitivegroups.com/image/IMG_5639.JPG",
      title: "Commercial Building",
      delay: 300,
    },
    {
      img: "https://infinitivegroups.com/image/IMG_5632.JPG",
      title: "Luxury Villa",
      delay: 400,
    },
    {
      img: "https://infinitivegroups.com/image/IMG_5637.JPG",
      title: "Residential Apartments",
      delay: 500,
    },
  ];

  return (
    <section className="projects-premium-section">
      <h2
        className="projects-premium-title"
        data-aos="fade-left"
        style={{
          fontSize: "clamp(1.8rem, 5vw, 2.6rem)",
          marginTop: "3rem",
          textAlign: "center",
        }}
      >
        Our Projects
      </h2>

      <div className="projects-premium-grid">
        {projects.map(({ img, title, delay }, i) => (
          <div
            key={i}
            className="project-premium-card"
            data-aos="zoom-in"
            data-aos-delay={delay}
          >
            <img src={img} alt={title} className="project-premium-img" />
            <div className="project-premium-overlay">
              <h3 className="project-premium-title-text">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
