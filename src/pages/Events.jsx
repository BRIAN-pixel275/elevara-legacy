import { Helmet } from "react-helmet-async";
import "../styles/events-page.css";

function Events() {
  return (
    <>
    <Helmet>
        <title>Events | Elevara Legacy</title>
        <meta
            name="description"
            content="Discover workshops, conferences, networking sessions and community initiatives designed to empower women, build meaningful connections and create lasting impact."
        />
    </Helmet>
      {/* Hero */}

      <section className="events-hero">

        <div className="events-container">

          <span className="section-tag">
            Our Events
          </span>

          <h1>
            Inspiring Change Through Every Event
          </h1>

          <p>
            Discover workshops, conferences, networking sessions and community
            initiatives designed to empower women, build meaningful connections
            and create lasting impact.
          </p>

        </div>

      </section>
      {/* Featured Event */}

<section className="featured-event">

    <div className="events-container">

        <div className="featured-event-grid">

            <div className="featured-event-image">

                <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
                    alt="Women Leadership Summit"
                />

                <div className="event-date">

                    <span>15</span>

                    <small>SEP</small>

                </div>

            </div>

            <div className="featured-event-content">

                <span className="section-tag">
                    Featured Event
                </span>

                <h2>
                    Women Leadership & Business Summit 2026
                </h2>

                <p>
                    Join inspiring women leaders, entrepreneurs and professionals
                    for a day of learning, networking and collaboration. Gain
                    practical insights, connect with mentors and leave inspired
                    to make a greater impact.
                </p>

                <div className="event-details">

                    <div className="event-detail">
                        📍 Nairobi, Kenya
                    </div>

                    <div className="event-detail">
                        🕘 9:00 AM – 4:00 PM
                    </div>

                    <div className="event-detail">
                        👥 300 Participants
                    </div>

                </div>

                <div className="event-buttons">

                    <a href="/contact" className="primary-btn">
                        Register Now
                    </a>

                    <a href="#upcoming-events" className="secondary-btn">
                        View All Events
                    </a>

                </div>

            </div>

        </div>

    </div>

</section>
{/* Events CTA */}

<section className="events-cta">

    <div className="events-container">

        <span className="section-tag">
            Join Us
        </span>

        <h2>
            Be Part of Our Next Inspiring Event
        </h2>

        <p>
            Every event is an opportunity to learn, connect and grow. Join a community of women who are passionate about leadership, entrepreneurship and creating lasting impact.
        </p>

        <div className="events-cta-buttons">

            <a href="/contact" className="primary-btn">
                Register Now
            </a>

            <a href="/community" className="secondary-btn">
                Join Our Community
            </a>

        </div>

    </div>

</section>

    </>
  );
}

export default Events;