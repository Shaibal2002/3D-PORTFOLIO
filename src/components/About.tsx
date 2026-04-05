import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I enjoy building things that <em>make sense</em> — whether it's
          software, systems, or <span>data-driven solutions</span>. Most days
          involve writing code, solving problems, and occasionally wondering
          why the bug disappears when <em>someone else looks at it.</em>
        </p>
      </div>
    </div>
  );
};

export default About;