import GallerySection from "../components/sections/GallerySection";
import { Helmet } from "react-helmet-async";
import "../styles/community.css";
import {
  FaUsers,
  FaSeedling,
  FaBriefcase,
  FaHeart,
} from "react-icons/fa";
import empowerment from "../assets/images/empowerment.jpg";
import collaboration from "../assets/images/collaboration.jpg";
import growth from "../assets/images/growth.jpg";
import legacy from "../assets/images/legacy.jpg";
import {
  FaHandsHelping,
} from "react-icons/fa";
import {
  FaChalkboardTeacher,
    FaCamera,
    FaBullhorn,
} from "react-icons/fa";

function Community() {
  return (
    <>
    <Helmet>
        <title>Community | Elevara Legacy</title>
        <meta
            name="description"
            content="Join our community of empowered women and connect with like-minded individuals who share your passion for growth and success."
        />
    </Helmet>

      {/* Hero */}

      <section className="community-hero">

        <div className="community-container">

          <span className="section-tag">
            Our Community
          </span>

          <h1>
            Together We Rise.
            Together We Thrive.
          </h1>

          <p>
            Elevara Legacy is more than an organization—it is a growing
            community of women who inspire, support and empower one another
            through shared experiences, mentorship and meaningful connections.
          </p>

        </div>

      </section>
      {/* Why Join */}

<section className="community-benefits">

  <div className="community-container">

    <div className="section-header">

      <span className="section-tag">
        Why Join Us
      </span>

      <h2>
        A Community Built for Growth
      </h2>

      <p>
        At Elevara Legacy, you'll find encouragement, opportunities,
        mentorship and meaningful relationships that help you become
        the best version of yourself.
      </p>

    </div>

    <div className="benefits-grid">

      <div className="benefit-card">

        <FaUsers className="benefit-icon" />

        <h3>Meaningful Connections</h3>

        <p>
          Meet ambitious women, build lasting friendships and grow your
          professional network.
        </p>

      </div>

      <div className="benefit-card">

        <FaSeedling className="benefit-icon" />

        <h3>Personal Growth</h3>

        <p>
          Develop confidence, resilience and leadership through
          continuous learning.
        </p>

      </div>

      <div className="benefit-card">

        <FaBriefcase className="benefit-icon" />

        <h3>Career Opportunities</h3>

        <p>
          Access mentorship, entrepreneurship support and career
          development opportunities.
        </p>

      </div>

      <div className="benefit-card">

        <FaHeart className="benefit-icon" />

        <h3>Lifelong Sisterhood</h3>

        <p>
          Join a supportive community that celebrates your journey,
          achievements and dreams.
        </p>

      </div>

    </div>

  </div>

</section>

{/* Community Pillars */}

<section className="community-pillars">

  <div className="community-container">

    <div className="section-header">

      <span className="section-tag">
        Our Pillars
      </span>

      <h2>
        The Values That Unite Our Community
      </h2>

      <p>
        Every initiative at Elevara Legacy is guided by values that
        inspire women to grow, lead and create lasting impact.
      </p>

    </div>

    {/* Empowerment */}

    <div className="pillar-row">

      <div className="pillar-image">
        <img src={empowerment} alt="Empowerment" />
      </div>

      <div className="pillar-content">

        <span>01</span>

        <h3>Empowerment</h3>

        <p>
          We believe every woman already has the potential to succeed.
          Our role is to provide the knowledge, confidence and
          opportunities to unlock it.
        </p>

        <ul>

          <li>✓ Leadership Development</li>

          <li>✓ Financial Literacy</li>

          <li>✓ Personal Growth</li>

        </ul>

      </div>

    </div>

    {/* Collaboration */}

    <div className="pillar-row reverse">

      <div className="pillar-image">
        <img src={collaboration} alt="Collaboration" />
      </div>

      <div className="pillar-content">

        <span>02</span>

        <h3>Collaboration</h3>

        <p>
          Together we achieve more. We encourage networking,
          partnerships and shared learning that creates opportunities
          for every member.
        </p>

        <ul>

          <li>✓ Networking Events</li>

          <li>✓ Peer Mentorship</li>

          <li>✓ Community Projects</li>

        </ul>

      </div>

    </div>

    {/* Growth */}

    <div className="pillar-row">

      <div className="pillar-image">
        <img src={growth} alt="Growth" />
      </div>

      <div className="pillar-content">

        <span>03</span>

        <h3>Growth</h3>

        <p>
          We are committed to fostering continuous learning and development
          opportunities that help members reach their full potential.
        </p>

        <ul>

          <li>✓ Leadership Development</li>

          <li>✓ Skill-Building Workshops</li>

          <li>✓ Career Advancement Support</li>

        </ul>

      </div>

    </div>

    {/* Legacy */}

    <div className="pillar-row reverse">

      <div className="pillar-image">
        <img src={legacy} alt="Legacy" />
      </div>

      <div className="pillar-content">

        <span>04</span>

        <h3>Legacy</h3>

        <p>
          We are dedicated to creating a lasting impact by empowering women
          to become changemakers in their communities and beyond.
        </p>

        <ul>

          <li>✓ Community Impact Projects</li>

          <li>✓ Mentorship Programs</li>

          <li>✓ Leadership Development</li>

        </ul>

      </div>

    </div>

  </div>

</section>


{/* Volunteer Opportunities */}

<section className="volunteer-section">

    <div className="community-container">

        <div className="section-header">

            <span className="section-tag">
                Volunteer With Us
            </span>

            <h2>
                Share Your Skills. Create Impact.
            </h2>

            <p>
                Whether you are a mentor, creative, entrepreneur or
                community leader, there is a place for you to contribute
                and inspire others.
            </p>

        </div>

        <div className="volunteer-grid">

            <div className="volunteer-card">

                <FaChalkboardTeacher className="volunteer-icon"/>

                <h3>Mentorship</h3>

                <p>
                    Guide women and girls by sharing your knowledge,
                    experience and encouragement.
                </p>

            </div>

            <div className="volunteer-card">

                <FaCamera className="volunteer-icon"/>

                <h3>Creative Support</h3>

                <p>
                    Help with photography, videography, design and
                    storytelling.
                </p>

            </div>

            <div className="volunteer-card">

                <FaBullhorn className="volunteer-icon"/>

                <h3>Community Outreach</h3>

                <p>
                    Assist in organizing events, campaigns and awareness
                    programs.
                </p>

            </div>

            <div className="volunteer-card">

                <FaHandsHelping className="volunteer-icon"/>

                <h3>Event Support</h3>

                <p>
                    Join our team during workshops, conferences and
                    community activities.
                </p>

            </div>

        </div>

    </div>

</section>
{/* Community Gallery */}

<GallerySection />
{/* Join Community CTA */}

<section className="join-community">

    <div className="community-container">

        <span className="section-tag">
            Join Elevara Legacy
        </span>

        <h2>
            Your Journey Begins Here
        </h2>

        <p>
            Whether you're seeking personal growth, professional development,
            meaningful connections or opportunities to give back, there's a
            place for you in our community.
        </p>

        <div className="join-buttons">

            <a href="/contact" className="primary-btn">
                Become a Member
            </a>

            <a href="/events" className="secondary-btn">
                Explore Events
            </a>

        </div>

    </div>

</section>

    </>
  );
}

export default Community;