import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const socials = [
  { label: "GitHub",    href: "https://github.com/Shaibal2002" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/shaibal-mallick/" },
  { label: "CodePen",   href: "https://codepen.io/Shaibal-Mallick" },
  { label: "Instagram", href: "https://www.instagram.com/shaxcasm" },
];

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h3>Contact</h3>

      <div className="contact-grid">

        {/* — Reach out — */}
        <div className="contact-col">
          <span className="contact-col-label">Reach out</span>

          <a href="https://www.linkedin.com/in/shaibal-mallick/" target="_blank" rel="noreferrer" className="contact-link-item">
            <span className="contact-link-label">LinkedIn</span>
            <span className="contact-link-value">Shaibal Mallick</span>
          </a>
          <a href="mailto:shaibalmallick69@gmail.com" className="contact-link-item">
            <span className="contact-link-label">Email</span>
            <span className="contact-link-value">shaibalmallick69@gmail.com</span>
          </a>
          <a href="tel:+916290746662" className="contact-link-item">
            <span className="contact-link-label">Phone</span>
            <span className="contact-link-value">+91 6290 746 662</span>
          </a>
        </div>

        <div className="contact-divider" />

        {/* — Socials — */}
        <div className="contact-col">
          <span className="contact-col-label">Elsewhere</span>

          {socials.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="contact-social">
              <span className="contact-social-name">{label}</span>
              <MdArrowOutward className="contact-social-arrow" />
            </a>
          ))}
        </div>

        <div className="contact-divider" />

        {/* — Signature — */}
        <div className="contact-col">
          <span className="contact-col-label">Provenance</span>
          <p className="contact-sig-name">
            Designed &amp; developed<br />by <span>Shaibal Mallick</span>
          </p>
          <p className="contact-copyright">
            <MdCopyright /> 2026
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;