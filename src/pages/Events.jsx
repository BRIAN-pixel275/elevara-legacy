import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "../styles/events-page.css";
import { supabase } from "../lib/supabase";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("date", { ascending: true });

    if (error) {
      console.error("Events error:", error);
      setError("Unable to load events.");
    } else {
      setEvents(data || []);
    }

    setLoading(false);
  };

  const formatDate = (date) => {
    const eventDate = new Date(date);

    return {
      day: eventDate.getDate(),
      month: eventDate
        .toLocaleString("en-US", { month: "short" })
        .toUpperCase(),
    };
  };

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
            Discover workshops, conferences, networking sessions and
            community initiatives designed to empower women, build
            meaningful connections and create lasting impact.
          </p>

        </div>
      </section>

      {/* Upcoming Events */}

      <section
        className="featured-event"
        id="upcoming-events"
      >

        <div className="events-container">

          <div className="section-header">

            <span className="section-tag">
              Upcoming Events
            </span>

            <h2>
              Be Part of Something Meaningful
            </h2>

            <p>
              Explore our upcoming events and join us for opportunities
              to learn, connect, grow and create lasting impact.
            </p>

          </div>

          {/* Loading */}

          {loading && (
            <div className="events-status">
              <p>Loading upcoming events...</p>
            </div>
          )}

          {/* Error */}

          {!loading && error && (
            <div className="events-status">
              <p>{error}</p>
            </div>
          )}

          {/* No Events */}

          {!loading && !error && events.length === 0 && (
            <div className="events-status">
              <p>
                There are currently no upcoming events.
                Check back soon for new opportunities.
              </p>
            </div>
          )}

          {/* Events */}

          {!loading && !error && events.length > 0 && (

            <div className="events-list">

              {events.map((event) => {

                const formattedDate = formatDate(event.date);

                return (
                  <div
                    className="featured-event-grid"
                    key={event.id}
                  >

                    {/* Event Image */}

                    <div className="featured-event-image">

                      {event.image_url ? (
                        <img
                          src={event.image_url}
                          alt={event.title}
                          loading="lazy"
                        />
                      ) : (
                        <div className="event-image-placeholder">
                          <span>Elevara Legacy</span>
                        </div>
                      )}

                      <div className="event-date">

                        <span>
                          {formattedDate.day}
                        </span>

                        <small>
                          {formattedDate.month}
                        </small>

                      </div>

                    </div>

                    {/* Event Content */}

                    <div className="featured-event-content">

                      <span className="section-tag">
                        Upcoming Event
                      </span>

                      <h2>
                        {event.title}
                      </h2>

                      <p>
                        {event.description}
                      </p>

                      <div className="event-details">

                        {event.location && (
                          <div className="event-detail">
                            📍 {event.location}
                          </div>
                        )}

                        {event.time && (
                          <div className="event-detail">
                            🕘 {event.time}
                          </div>
                        )}

                      </div>

                      <div className="event-buttons">

                        {event.registration_url ? (
                          <a
                            href={event.registration_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="primary-btn"
                          >
                            Register Now
                          </a>
                        ) : (
                          <a
                            href="/contact"
                            className="primary-btn"
                          >
                            Register Now
                          </a>
                        )}

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>
          )}

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
            Every event is an opportunity to learn, connect and grow.
            Join a community of women who are passionate about
            leadership, entrepreneurship and creating lasting impact.
          </p>

          <div className="events-cta-buttons">

            <a
              href="/contact"
              className="primary-btn"
            >
              Register Now
            </a>

            <a
              href="/community"
              className="secondary-btn"
            >
              Join Our Community
            </a>

          </div>

        </div>

      </section>

    </>
  );
}

export default Events;