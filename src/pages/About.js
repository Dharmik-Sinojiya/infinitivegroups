import React from "react";
import PageBanner from "../comoncomponents/Pagebanner";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../index.css";
import "./About.css";

export default function About() {
  return (
    <>
      <PageBanner title="About Us" />

      <Container className="my-5 about-section">
        {/* ABOUT COMPANY */}
        <Row className="align-items-center mb-5">
          <h5 className="vqs-heading" data-aos="fade-left">
            <span style={{ fontWeight: "600", color: "#007BFF" }}>
              Infinitive Group{" "}
            </span>
            Projects & Engineers
            <br />
          </h5>

          <Col xs={12} md={5} className="mb-4 d-flex justify-content-center" data-aos="fade-right">
            <img
              src="https://media.istockphoto.com/id/526670035/photo/businesswoman-drawing-about-us-on-the-wall.jpg?s=612x612&w=0&k=20&c=mMI4gptq98V5T8zXoA4uUJ2SRdYfnzspK0Sv3jTfBZI="
              alt="Construction Project Management"
              loading="lazy"
              className="img-fluid rounded shadow-sm w-100"
              style={{ height: "360px", objectFit: "fill" }}
            />
          </Col>

          <Col xs={12} md={7} data-aos="fade-left">
            <p className="about-text">
              <strong>Infinitive Group Projects & Engineers</strong> is a
              multi-disciplinary organization providing{" "}
              <span className="highlight">
                Civil Engineering and Construction Project Management (PMC)
                solutions
              </span>{" "}
              to clients across the private and government sectors.
            </p>

            <p className="about-text">
              We deliver complete{" "}
              <span className="highlight">
                Construction Management solutions
              </span>{" "}
              for Residential, Commercial, Industrial, and Infrastructure
              projects.
            </p>

            <p className="about-text">
              Backed by experienced professionals and{" "}
              <span className="highlight">modern planning methodologies</span>,
              we ensure quality, efficiency, and cost-effective project
              execution.
            </p>
          </Col>
        </Row>

        {/* VISION & MISSION */}
        <VisionMission />
      </Container>
    </>
  );
}

function VisionMission() {
  return (
    <Container className="py-5">
      <Row className="g-4">
        {/* VISION */}
        <Col xs={12} md={6} data-aos="zoom-in">
          <Card className="vision-card h-100">
            <br />
            <Card.Img
              variant="top"
              src="./img/vision1.png"
              alt="Company Vision"
              style={{ height: "240px", objectFit: "contain" }}
            />
            <Card.Body>
              <Card.Title className="fw-bold text-center mb-3">
                Our Vision
              </Card.Title>
              <br />
              <p className="text-center vision-text">
                To deliver <strong>“On Schedule, On Time, On Budget”</strong>{" "}
                solutions with assured{" "}
                <span className="highlight">Quality Control</span>, ensuring
                consistent value and reliability for every construction project.
              </p>
            </Card.Body>
          </Card>
        </Col>

        {/* MISSION */}
        <Col xs={12} md={6} data-aos="zoom-in">
          <Card className="mission-card h-100">
            <br/>
            <Card.Img
              variant="top"
              src="./img/mission.png"
              alt="Company Mission"
              style={{ height: "240px", objectFit: "contain" }}
            />
            <Card.Body>
              <Card.Title className="fw-bold text-center mb-3">
                Our Mission
              </Card.Title>
              <br/>
              <p className="text-center mission-text">
                To deliver{" "}
                <span className="highlight">
                  economical, innovative, and eco-friendly
                </span>{" "}
                solutions in Construction and Infrastructure development with
                high professional standards.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
