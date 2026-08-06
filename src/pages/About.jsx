import { Helmet } from "react-helmet-async";
import "./About.css";
import { FaBullseye, FaEye } from "react-icons/fa";
import {
  FaShieldAlt,
  FaSeedling,
  FaUsers,
  FaCrown,
  FaLightbulb,
  FaGlobeAfrica,
  FaFlag,
} from "react-icons/fa";
import founder from "../assets/images/founder.jpg";
import FAQ from "../components/sections/FAQ";
import CTA from "../components/sections/CTA";

function About() {
  return (
    <>

    <Helmet>

<title>About Us | Elevara Legacy</title>

<meta
name="description"
content="Learn about Elevara Legacy, our mission, vision and commitment to empowering women."
/>

</Helmet>
      <section className="about-page-hero">

        <div className="about-page-container">

          <span className="section-tag">
            About Us
          </span>

          <h1>
            Empowering Women to
            Build Legacies That Last
          </h1>

          <p>
            Elevara Legacy is committed to equipping women with
            the knowledge, confidence and opportunities they
            need to create meaningful impact in their families,
            careers and communities.
          </p>

        </div>

      </section>
      <section className="story">

    <div className="story-container">

        <div className="story-image">

            <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900"
                alt=""
            />

        </div>

        <div className="story-content">

            <span className="section-tag">
                Our Story
            </span>

            <h2>
                Born From A Simple Belief
            </h2>

            <p>

                Born in 2026 from one powerful belief:

                Every woman deserves the opportunity
                to grow, lead and leave a legacy that
                impacts generations to come.

            </p>

            <p>

                Elevara Legacy was created to provide
                women with access to mentorship,
                financial education, leadership
                development and entrepreneurship
                opportunities.

            </p>

        </div>

    </div>

</section>
<section className="mission-vision">

    <div className="mission-vision-container">

        <div className="section-header">

            <span className="section-tag">
                Our Purpose
            </span>

            <h2>
                Guided by Purpose,
                Driven by Impact
            </h2>

            <p>
                Our mission and vision shape everything we do,
                from empowering women through education to
                inspiring future generations of leaders.
            </p>

        </div>

        <div className="mission-grid">

            <div className="purpose-card">

                <div className="purpose-icon">

                    <FaBullseye />

                </div>

                <h3>Our Mission</h3>

                <p>
                    Elevara Legacy exists to empower women with
                    the knowledge, skills, confidence and
                    opportunities they need to transform their
                    lives and achieve lasting success.
                </p>

            </div>

            <div className="purpose-card">

                <div className="purpose-icon">

                    <FaEye />

                </div>

                <h3>Our Vision</h3>

                <p>
                    To build a world where every woman recognizes
                    her worth, unlocks her full potential,
                    achieves financial independence and leads
                    with confidence.
                </p>

            </div>

        </div>

    </div>

</section>
<section className="values">

  <div className="values-container">

    <div className="section-header">

      <span className="section-tag">
        Our Values
      </span>

      <h2>
        The Principles That Guide Us
      </h2>

      <p>
        Everything we do is rooted in values that inspire growth,
        empower women, and create meaningful impact for generations.
      </p>

    </div>

    <div className="values-grid">

      <div className="value-card">

        <div className="value-icon">
          <FaShieldAlt />
        </div>

        <h3>Integrity</h3>

        <p>
          We act with honesty, transparency and accountability in
          every relationship and decision.
        </p>

      </div>

      <div className="value-card">

        <div className="value-icon">
          <FaSeedling />
        </div>

        <h3>Growth</h3>

        <p>
          We encourage lifelong learning, personal development
          and continuous improvement.
        </p>

      </div>

      <div className="value-card">

        <div className="value-icon">
          <FaUsers />
        </div>

        <h3>Community</h3>

        <p>
          We believe meaningful change happens when women learn,
          support and succeed together.
        </p>

      </div>

      <div className="value-card">

        <div className="value-icon">
          <FaCrown />
        </div>

        <h3>Leadership</h3>

        <p>
          We inspire women to lead with confidence, purpose and
          compassion in every area of life.
        </p>

      </div>

      <div className="value-card">

        <div className="value-icon">
          <FaLightbulb />
        </div>

        <h3>Innovation</h3>

        <p>
          We embrace creativity and practical solutions that
          empower women to thrive in a changing world.
        </p>

      </div>

      <div className="value-card">

        <div className="value-icon">
          <FaGlobeAfrica />
        </div>

        <h3>Lasting Legacy</h3>

        <p>
          We strive to create lasting impact that benefits
          families, communities and future generations.
        </p>

      </div>

    </div>

  </div>

</section>
<section className="timeline">

  <div className="timeline-container">

    <div className="section-header">

      <span className="section-tag">
        Our Journey
      </span>

      <h2>
        Building a Legacy, One Step at a Time
      </h2>

      <p>
        Every milestone reflects our commitment to empowering
        women through education, leadership, financial literacy,
        and community.
      </p>

    </div>

    <div className="timeline-wrapper">

      <div className="timeline-item">

        <div className="timeline-icon">
          <FaFlag />
        </div>

        <div className="timeline-content">
          <span>2026</span>
          <h3>Elevara Legacy Founded</h3>
          <p>
            The organization was established with a vision of
            helping women grow, learn, invest and leave a lasting
            legacy.
          </p>
        </div>

      </div>

      <div className="timeline-item">

        <div className="timeline-icon">
          <FaFlag />
        </div>

        <div className="timeline-content">
          <span>2026</span>
          <h3>First Women's Empowerment Workshop</h3>
          <p>
            Launching workshops focused on financial literacy,
            leadership development and entrepreneurship.
          </p>
        </div>

      </div>

      <div className="timeline-item">

        <div className="timeline-icon">
          <FaFlag />
        </div>

        <div className="timeline-content">
          <span>2027</span>
          <h3>Mentorship Program</h3>
          <p>
            Connecting experienced women leaders with young women
            seeking guidance in business, careers and personal
            growth.
          </p>
        </div>

      </div>

      <div className="timeline-item">

        <div className="timeline-icon">
          <FaFlag />
        </div>

        <div className="timeline-content">
          <span>Future</span>
          <h3>Africa-Wide Impact</h3>
          <p>
            Expand programs across Africa and empower thousands of
            women through education, mentorship and leadership.
          </p>
        </div>

      </div>

    </div>

  </div>

</section>
<section className="founder">

  <div className="founder-container">

    <div className="founder-image">
      <img src={founder} alt="Founder of Elevara Legacy" />
    </div>

    <div className="founder-content">

      <span className="section-tag">
        Meet Our Founder
      </span>

      <h2>
        A Vision Rooted in Purpose
      </h2>

      <p>
        Elevara Legacy was founded with a simple but powerful
        belief that every woman deserves the opportunity to
        grow, lead, and create a lasting legacy.
      </p>

      <p>
        Through mentorship, financial education, leadership
        development, and community, our goal is to empower
        women to unlock their full potential and inspire
        future generations.
      </p>

      <blockquote>
        “When one woman rises, she inspires many others to
        rise with her.”
      </blockquote>

      <div className="founder-buttons">

        <a href="#" className="primary-btn">
          LinkedIn
        </a>

        <a href="/contact" className="secondary-btn">
          Contact
        </a>

      </div>

    </div>

  </div>

</section>
  <FAQ />
  <CTA />

    </>
  );
}

export default About;