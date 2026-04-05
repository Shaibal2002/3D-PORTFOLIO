import "./styles/Career.css";

const careers = [
  {
    role: "Systems Engineer",
    company: "Aegon UK (via TCS)",
    location: "India",
    period: "Apr 2025 — Present",
    current: true,
    description:
      "Developed and maintained Spring Boot enterprise applications serving mission-critical workloads. Collaborated with cross-functional teams using Agile methodologies and implemented system optimizations to improve overall application performance.",
  },
  {
    role: "Subject Matter Expert",
    company: "Vaidik Eduservices",
    location: "India",
    period: "Jun 2024 — Dec 2024",
    current: false,
    description:
      "Guided students in academic planning and career development. Provided mentorship and counseling to improve student outcomes.",
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot" />
          </div>

          {careers.map((item, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  {item.current && (
                    <span className="career-badge">Current</span>
                  )}
                  <h4>{item.role}</h4>
                  <h5>{item.company} · {item.location}</h5>
                </div>
                <h3>{item.period}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;