import { Link } from "react-router-dom";
import elevaraImage from "../../assets/images/elevara.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-tag">
            Empowering Women Since 2026
          </span>

          <h1>
            Empowering Women to
            <span> Grow, Lead, Invest </span>
            and Build Lasting Legacies.
          </h1>

          <p>
            Elevara Legacy equips women with the knowledge,
            confidence, skills and opportunities they need to
            transform their lives, achieve financial independence
            and create generational impact.
          </p>

          <div className="hero-buttons">

            <Link
              to="/community"
              className="primary-btn"
            >
              Join the Community
            </Link>

            <Link
              to="/about"
              className="secondary-btn"
            >
              Learn More
            </Link>

          </div>

        </div>

        <div className="hero-image">
          <img
            src={elevaraImage}
            alt="Empowered women leaders"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;