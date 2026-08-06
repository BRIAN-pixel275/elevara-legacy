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
  FaUserPlus,
  FaBookOpen,
  FaHandsHelping,
  FaTrophy,
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
{/* Member Journey */}

<section className="member-journey">

    <div className="community-container">

        <div className="section-header">

            <span className="section-tag">
                Your Journey
            </span>

            <h2>
                From Joining to Leading
            </h2>

            <p>
                Every member begins with curiosity and grows into a confident
                leader through mentorship, learning and community support.
            </p>

        </div>

        <div className="timeline">

            <div className="timeline-item">

                <div className="timeline-icon">
                    <FaUserPlus />
                </div>

                <div className="timeline-content">

                    <h3>Join the Community</h3>

                    <p>
                        Register as a member and become part of a supportive
                        network of ambitious women.
                    </p>

                </div>

            </div>

            <div className="timeline-item">

                <div className="timeline-icon">
                    <FaUsers />
                </div>

                <div className="timeline-content">

                    <h3>Build Connections</h3>

                    <p>
                        Meet like-minded women through networking sessions,
                        discussions and community events.
                    </p>

                </div>

            </div>

            <div className="timeline-item">

                <div className="timeline-icon">
                    <FaBookOpen />
                </div>

                <div className="timeline-content">

                    <h3>Learn & Grow</h3>

                    <p>
                        Participate in workshops, mentorship and practical
                        learning experiences.
                    </p>

                </div>

            </div>

            <div className="timeline-item">

                <div className="timeline-icon">
                    <FaHandsHelping />
                </div>

                <div className="timeline-content">

                    <h3>Give Back</h3>

                    <p>
                        Volunteer, mentor others and contribute to meaningful
                        community initiatives.
                    </p>

                </div>

            </div>

            <div className="timeline-item">

                <div className="timeline-icon">
                    <FaTrophy />
                </div>

                <div className="timeline-content">

                    <h3>Become a Leader</h3>

                    <p>
                        Inspire others and leave a lasting legacy in your
                        community and beyond.
                    </p>

                </div>

            </div>

        </div>

    </div>

</section>
{/* Success Stories */}

<section className="success-stories">

  <div className="community-container">

    <div className="section-header">

      <span className="section-tag">
        Success Stories
      </span>

      <h2>
        Women Inspiring Women
      </h2>

      <p>
        Every journey is unique, but each story reflects courage,
        growth and the power of community.
      </p>

    </div>

    <div className="stories-grid">

      <div className="story-card">

        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
          alt="Member"
        />

        <p className="story-text">
          "Joining Elevara Legacy gave me the confidence to pursue my
          business idea and connect with incredible mentors."
        </p>

        <h3>Sarah W.</h3>

        <span>Aspiring Entrepreneur</span>

      </div>

      <div className="story-card">

        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500"
          alt="Member"
        />

        <p className="story-text">
          "The leadership workshops transformed how I communicate,
          lead teams and believe in myself."
        </p>

        <h3>Grace N.</h3>

        <span>Community Leader</span>

      </div>

      <div className="story-card">

        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500"
          alt="Member"
        />

        <p className="story-text">
          "I found lifelong friends, mentors and opportunities that
          continue to shape my future."
        </p>

        <h3>Faith M.</h3>

        <span>University Student</span>

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

<section className="community-gallery">

    <div className="community-container">

        <div className="section-header">

            <span className="section-tag">
                Gallery
            </span>

            <h2>
                Moments That Inspire
            </h2>

            <p>
                Explore highlights from our workshops, mentorship sessions,
                networking events and community outreach initiatives.
            </p>

        </div>

        <div className="gallery-grid">

            <div className="gallery-item">

                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                    alt="Leadership Workshop"
                />

                <div className="gallery-overlay">
                    <h3>Leadership Workshop</h3>
                </div>

            </div>

            <div className="gallery-item">

                <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
                    alt="Networking Event"
                />

                <div className="gallery-overlay">
                    <h3>Networking Event</h3>
                </div>

            </div>

            <div className="gallery-item">

                <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
                    alt="Digital Skills Training"
                />

                <div className="gallery-overlay">
                    <h3>Digital Skills Training</h3>
                </div>

            </div>

            <div className="gallery-item">

                <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
                    alt="Mentorship Session"
                />

                <div className="gallery-overlay">
                    <h3>Mentorship Session</h3>
                </div>

            </div>

            <div className="gallery-item">

                <img
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80"
                    alt="Community Outreach"
                />

                <div className="gallery-overlay">
                    <h3>Community Outreach</h3>
                </div>

            </div>

            <div className="gallery-item">

                <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80"
                    alt="Women in Business"
                />

                <div className="gallery-overlay">
                    <h3>Women in Business</h3>
                </div>

            </div>

        </div>

    </div>

</section>
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