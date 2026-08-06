function AboutSection() {
  return (
    <section className="about">
      <div className="about-container">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900"
            alt="Women collaborating"
          />
        </div>

        <div className="about-content">

          <span className="section-tag">
            About Elevara Legacy
          </span>

          <h2>
            Building Strong Women.
            <br />
            Building Stronger Generations.
          </h2>

          <p>
            Born in 2026 from one simple but powerful belief:
            every woman deserves the opportunity to grow, lead,
            and leave a legacy that impacts generations to come.
          </p>

          <div className="mission-box">

            <h3>Our Mission</h3>

            <p>
              Elevara Legacy exists to empower women with the
              knowledge, skills, confidence and opportunities
              they need to transform their lives.
            </p>

          </div>

          <div className="vision-box">

            <h3>Our Vision</h3>

            <p>
              To build a world where every woman recognizes her
              worth, unlocks her full potential, achieves
              financial independence and leads with confidence.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;