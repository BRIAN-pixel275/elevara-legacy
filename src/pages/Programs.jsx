import { Helmet } from "react-helmet-async";
import "../styles/programspage.css";

import {
  FaChartLine,
  FaUserTie,
  FaHandshake,
  FaSeedling,
  FaClock,
  FaSignal,
  FaCheckCircle,
} from "react-icons/fa";
import financial from "../assets/images/financial.jpg";
import leadership from "../assets/images/leadership.jpg";
import legacy from "../assets/images/legacy.jpg";

import {
  FaArrowRight,
  FaClipboardList,
  FaChalkboardTeacher,
  FaHandsHelping,
  FaRocket,
  FaAward,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Programs() {
  return (
    <>
    <Helmet>
        <title>Programs | Elevara Legacy</title>
        <meta
            name="description"
            content="Explore our signature programs designed to empower women through leadership, financial literacy, entrepreneurship and personal development."
        />
    </Helmet>
      {/* Hero Section */}
      <section className="programs-hero">
        <div className="programs-container">
          <span className="section-tag">Our Programs</span>

          <h1>Empowering Women Through Practical Learning</h1>

          <p>
            Our programs are designed to help women grow personally,
            professionally and financially through education,
            mentorship and community support.
          </p>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="featured-programs">
        <div className="programs-container">
          <div className="section-header">
            <span className="section-tag">Featured Programs</span>

            <h2>Grow. Learn. Invest. Lead.</h2>

            <p>
              Every program is carefully designed to equip women
              with practical skills, confidence and opportunities
              for lasting success.
            </p>
          </div>

          <div className="programs-page-grid">

            <div className="programs-page-card">
              <FaChartLine className="programs-page-icon" />

              <h3>Financial Literacy</h3>

              <p>
                Learn budgeting, saving, investing and wealth
                creation strategies that build long-term financial
                independence.
              </p>
            </div>

            <div className="programs-page-card">
              <FaUserTie className="programs-page-icon" />

              <h3>Leadership Development</h3>

              <p>
                Develop leadership, communication and decision-making
                skills that empower you to lead with confidence.
              </p>
            </div>

            <div className="programs-page-card">
              <FaHandshake className="programs-page-icon" />

              <h3>Mentorship</h3>

              <p>
                Connect with experienced mentors who provide
                guidance, encouragement and support throughout
                your journey.
              </p>
            </div>

            <div className="programs-page-card">
              <FaSeedling className="programs-page-icon" />

              <h3>Entrepreneurship</h3>

              <p>
                Learn how to start, grow and manage successful
                businesses through practical workshops and coaching.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* Program Details */}

<section className="program-details">

    <div className="programs-container">

        <div className="section-header">

            <span className="section-tag">
                Learning Paths
            </span>

            <h2>
                Explore Our Signature Programs
            </h2>

            <p>
                Every learning experience is practical,
                engaging and designed to create lasting impact.
            </p>

        </div>

        <div className="detail-card">

            <div className="detail-left">

                <FaChartLine className="detail-main-icon"/>

                <h3>Financial Literacy</h3>

                <div className="detail-meta">

                    <span>
                        <FaClock />
                        6 Weeks
                    </span>

                    <span>
                        <FaSignal />
                        Beginner
                    </span>

                </div>

            </div>

            <div className="detail-right">

                <ul>

                    <li><FaCheckCircle /> Budgeting</li>

                    <li><FaCheckCircle /> Saving</li>

                    <li><FaCheckCircle /> Investing</li>

                    <li><FaCheckCircle /> Wealth Creation</li>

                </ul>

                <Link
                     to="/contact"
                          className="programs-page-btn"
                          >
                                   Learn More
                          </Link>

            </div>

        </div>

        <div className="detail-card">

            <div className="detail-left">

                <FaUserTie className="detail-main-icon"/>

                <h3>Leadership Development</h3>

                <div className="detail-meta">

                    <span>
                        <FaClock />
                        8 Weeks
                    </span>

                    <span>
                        <FaSignal />
                        Intermediate
                    </span>

                </div>

            </div>

            <div className="detail-right">

                <ul>

                    <li><FaCheckCircle /> Public Speaking</li>

                    <li><FaCheckCircle /> Leadership Skills</li>

                    <li><FaCheckCircle /> Communication</li>

                    <li><FaCheckCircle /> Confidence Building</li>

                </ul>

                <Link
                     to="/contact"
                          className="programs-page-btn"
                          >
                                   Learn More
                          </Link>

            </div>

        </div>

    </div>

</section>
{/* Premium Program Showcase */}

<section className="program-showcase">

    <div className="program-showcase-container">

        <div className="showcase-item">

            <div className="showcase-image">

                <img
    src={financial}
    alt="Financial Literacy"
/>

            </div>

            <div className="showcase-content">

                <span className="showcase-tag">
                    Financial Literacy
                </span>

                <h2>
                    Master Your Money.
                    Build Generational Wealth.
                </h2>

                <p>
                    Learn practical financial habits including budgeting,
                    saving, investing, debt management and long-term wealth
                    creation to achieve financial independence.
                </p>

                <div className="showcase-features">

                    <div>✔ Budgeting & Saving</div>
                    <div>✔ Smart Investing</div>
                    <div>✔ Wealth Creation</div>
                    <div>✔ Asset Mindset</div>

                </div>

                 <Link
                     to="/contact"
                          className="programs-page-btn"
                          >
                                   Join This program
                          </Link>

            </div>

        </div>

        <div className="showcase-item reverse">

            <div className="showcase-image">

                <img
    src={leadership}
    alt="Leadership Development"
/>

            </div>

            <div className="showcase-content">

                <span className="showcase-tag">
                    Leadership Development
                </span>

                <h2>
                    Become A Confident Leader.
                </h2>

                <p>
                    Build confidence, communication skills,
                    decision-making abilities and leadership
                    excellence through mentorship and coaching.
                </p>

                <div className="showcase-features">

                    <div>✔ Public Speaking</div>
                    <div>✔ Confidence</div>
                    <div>✔ Leadership Skills</div>
                    <div>✔ Communication</div>

                </div>

                 <Link
                     to="/contact"
                          className="programs-page-btn"
                          >
                                   Join This program
                          </Link>

            </div>

        </div>

        <div className="showcase-item">

            <div className="showcase-image">

                <img
    src={legacy}
    alt="Legacy"
/>

            </div>

            <div className="showcase-content">

                <span className="showcase-tag">
                    Legacy
                </span>

                <h2>
                    Create a Lasting Impact.
                </h2>

                <p>
                    Empower yourself to become a changemaker in your community and beyond.
                </p>

                <div className="showcase-features">

                    <div>✔ Community Impact Projects</div>
                    <div>✔ Mentorship Programs</div>
                    <div>✔ Leadership Development</div>

                </div>

                <Link
                     to="/contact"
                          className="programs-page-btn"
                          >
                                   Join This program
                          </Link>

            </div>

        </div>
    </div>

</section>
{/* Learning Journey */}

<section className="learning-journey">

    <div className="programs-container">

        <div className="section-header">

            <span className="section-tag">
                Your Journey
            </span>

            <h2>
                How Our Programs Work
            </h2>

            <p>
                Every participant follows a structured learning path
                designed to create meaningful and lasting transformation.
            </p>

        </div>

        <div className="journey-grid">

            <div className="journey-card">

                <FaClipboardList className="journey-icon"/>

                <h3>Choose a Program</h3>

                <p>
                    Select a learning program that matches your goals and interests.
                </p>

            </div>

            <FaArrowRight className="journey-arrow"/>

            <div className="journey-card">

                <FaChalkboardTeacher className="journey-icon"/>

                <h3>Attend Workshops</h3>

                <p>
                    Participate in engaging practical sessions led by experienced facilitators.
                </p>

            </div>

            <FaArrowRight className="journey-arrow"/>

            <div className="journey-card">

                <FaHandsHelping className="journey-icon"/>

                <h3>Receive Mentorship</h3>

                <p>
                    Learn from mentors who provide guidance and accountability.
                </p>

            </div>

            <FaArrowRight className="journey-arrow"/>

            <div className="journey-card">

                <FaRocket className="journey-icon"/>

                <h3>Apply Your Skills</h3>

                <p>
                    Put your knowledge into practice through real-world opportunities.
                </p>

            </div>

            <FaArrowRight className="journey-arrow"/>

            <div className="journey-card">

                <FaAward className="journey-icon"/>

                <h3>Lead & Inspire</h3>

                <p>
                    Become a confident leader who creates lasting impact in the community.
                </p>

            </div>

        </div>

    </div>

</section>

      {/* CTA */}
      {/* Programs CTA */}

<section className="programs-cta">

  <div className="programs-cta-container">

    <span className="section-tag">
      Start Your Journey
    </span>

    <h2>
      Your Growth Starts with One Decision
    </h2>

    <p>
      Whether you're looking to improve your financial skills,
      grow your leadership abilities, build a business or join a
      supportive community, Elevara Legacy is here to walk the
      journey with you.
    </p>

    <div className="programs-cta-buttons">

      <a href="/contact" className="programs-primary-btn">
        Join Our Programs
      </a>

      <a href="/community" className="programs-secondary-btn">
        Explore Our Community
      </a>

    </div>

  </div>

</section>
    </>
  );
}

export default Programs;