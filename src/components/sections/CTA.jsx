import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta">

      <div className="cta-container">

        <span className="section-tag">
          Join Our Community
        </span>

        <h2>
          Ready to Begin Your Legacy?
        </h2>

        <p>
          Become part of a growing movement of women who are
          committed to learning, leading, investing and
          creating lasting impact for future generations.
        </p>

        <div className="cta-buttons">

          <Link to="/contact" className="cta-primary">
            Join Our Community
          </Link>

          <Link to="/about" className="cta-secondary">
            Learn More
          </Link>

        </div>

      </div>

    </section>
  );
}

export default CTA;