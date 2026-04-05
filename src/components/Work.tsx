import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Real-Time Doctor Finder",
    subtitle: "Geofencing-Based Healthcare Platform",
    year: "2024",
    description:
      "A full-stack healthcare platform with live map-based doctor discovery using geofencing. Patients browse nearby doctors on an interactive map, select and book appointments in real time. Built four complete apps — Admin, Doctor, Patient, and Receptionist — each with dedicated workflows.",
    apps: ["Admin App", "Doctor App", "Patient App", "Receptionist App"],
    tags: ["Angular", "Geofencing", "Maps API", "Node.js", "Real-time", "Spring Boot"],
  },
  {
    title: "Face Recognition Tool",
    subtitle: "AI-Powered Identity Verification",
    year: "2024",
    description:
      "Built a face recognition application leveraging Azure Cognitive Services Face API. Implements face detection, identification, and verification with a clean web interface.",
    apps: [],
    tags: ["Azure", "Cognitive Services", "Python", "Face API"],
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">

                    <div className="carousel-meta">
                      <span className="carousel-index">0{index + 1}</span>
                      <span className="carousel-year">{project.year}</span>
                    </div>

                    <div className="carousel-divider" />

                    <div className="carousel-details">
                      <p className="carousel-subtitle">{project.subtitle}</p>
                      <h4>{project.title}</h4>
                      <p className="carousel-description">{project.description}</p>

                      {project.apps.length > 0 && (
                        <div className="carousel-apps">
                          {project.apps.map((app, i) => (
                            <span key={i} className="carousel-app-tag">
                              {app}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="carousel-tags">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="carousel-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-footer">
            <div className="carousel-dots">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to project ${index + 1}`}
                  data-cursor="disable"
                />
              ))}
            </div>

            <div className="carousel-controls">
              <button
                className="carousel-arrow"
                onClick={goToPrev}
                aria-label="Previous project"
                data-cursor="disable"
              >
                <MdArrowBack />
              </button>
              <button
                className="carousel-arrow"
                onClick={goToNext}
                aria-label="Next project"
                data-cursor="disable"
              >
                <MdArrowForward />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;