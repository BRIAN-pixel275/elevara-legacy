import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import "../styles/admin-events.css";

function AdminEvents() {
  const [events, setEvents] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [registrationUrl, setRegistrationUrl] = useState("");

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [message, setMessage] = useState("");

  // =========================
  // FETCH EVENTS
  // =========================

  const fetchEvents = async () => {
    setFetching(true);

    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("date", { ascending: true });

    if (error) {
      console.error("Error fetching events:", error);
      setMessage("Unable to load events.");
    } else {
      setEvents(data || []);
    }

    setFetching(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // =========================
  // CREATE EVENT
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !date) {
      setMessage("Please provide an event title and date.");
      return;
    }

    setLoading(true);
    setMessage("");

    const { error } = await supabase
      .from("events")
      .insert([
        {
          title,
          description,
          date,
          time,
          location,
          image_url: imageUrl || null,
          registration_url: registrationUrl || null,
        },
      ]);

    if (error) {
      console.error("Error creating event:", error);
      setMessage(error.message);
    } else {
      setMessage("Event created successfully! 🎉");

      // Reset form
      setTitle("");
      setDescription("");
      setDate("");
      setTime("");
      setLocation("");
      setImageUrl("");
      setRegistrationUrl("");

      fetchEvents();
    }

    setLoading(false);
  };

  // =========================
  // DELETE EVENT
  // =========================

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from("events")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Delete error:", error);
      setMessage(error.message);
    } else {
      setMessage("Event deleted successfully.");
      fetchEvents();
    }
  };

  return (
    <section className="admin-events">

      <div className="admin-events-container">

        {/* =========================
            HEADER
        ========================= */}

        <div className="admin-events-header">

          <span className="section-tag">
            Elevara Legacy
          </span>

          <h1>Events Management</h1>

          <p>
            Create and manage upcoming Elevara Legacy events.
          </p>

        </div>

        {/* =========================
            CREATE EVENT
        ========================= */}

        <div className="events-form-card">

          <h2>Create New Event</h2>

          <form onSubmit={handleSubmit}>

            {/* TITLE */}

            <div className="form-group">

              <label htmlFor="event-title">
                Event Title
              </label>

              <input
                id="event-title"
                type="text"
                placeholder="Enter event title"
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
              />

            </div>

            {/* DESCRIPTION */}

            <div className="form-group">

              <label htmlFor="event-description">
                Description
              </label>

              <textarea
                id="event-description"
                rows="5"
                placeholder="Describe the event..."
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
              />

            </div>

            {/* DATE + TIME */}

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="event-date">
                  Date
                </label>

                <input
                  id="event-date"
                  type="date"
                  value={date}
                  onChange={(e) =>
                    setDate(e.target.value)
                  }
                />

              </div>

              <div className="form-group">

                <label htmlFor="event-time">
                  Time
                </label>

                <input
                  id="event-time"
                  type="text"
                  placeholder="e.g. 09:00 AM - 04:00 PM"
                  value={time}
                  onChange={(e) =>
                    setTime(e.target.value)
                  }
                />

              </div>

            </div>

            {/* LOCATION */}

            <div className="form-group">

              <label htmlFor="event-location">
                Location
              </label>

              <input
                id="event-location"
                type="text"
                placeholder="e.g. Nairobi, Kenya"
                value={location}
                onChange={(e) =>
                  setLocation(e.target.value)
                }
              />

            </div>

            {/* IMAGE URL */}

            <div className="form-group">

              <label htmlFor="event-image">
                Event Image URL
              </label>

              <input
                id="event-image"
                type="url"
                placeholder="Paste event image URL"
                value={imageUrl}
                onChange={(e) =>
                  setImageUrl(e.target.value)
                }
              />

            </div>

            {/* REGISTRATION URL */}

            <div className="form-group">

              <label htmlFor="registration-url">
                Registration Link
              </label>

              <input
                id="registration-url"
                type="url"
                placeholder="https://..."
                value={registrationUrl}
                onChange={(e) =>
                  setRegistrationUrl(e.target.value)
                }
              />

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="admin-event-btn"
              disabled={loading}
            >
              {loading
                ? "Creating Event..."
                : "Create Event"}
            </button>

          </form>

          {message && (
            <p className="admin-events-message">
              {message}
            </p>
          )}

        </div>

        {/* =========================
            EXISTING EVENTS
        ========================= */}

        <div className="admin-events-list">

          <div className="admin-events-list-header">

            <h2>Existing Events</h2>

            <span>
              {events.length} events
            </span>

          </div>

          {fetching ? (

            <p className="events-status">
              Loading events...
            </p>

          ) : events.length === 0 ? (

            <p className="events-status">
              No events have been created yet.
            </p>

          ) : (

            <div className="admin-events-grid">

              {events.map((event) => (

                <div
                  className="admin-event-card"
                  key={event.id}
                >

                  {/* IMAGE */}

                  {event.image_url && (
                    <img
                      src={event.image_url}
                      alt={event.title}
                    />
                  )}

                  <div className="admin-event-card-content">

                    <h3>
                      {event.title}
                    </h3>

                    {event.description && (
                      <p>
                        {event.description}
                      </p>
                    )}

                    <span>
                      📅 {event.date}
                    </span>

                    {event.time && (
                      <span>
                        🕘 {event.time}
                      </span>
                    )}

                    {event.location && (
                      <span>
                        📍 {event.location}
                      </span>
                    )}

                    {event.registration_url && (
                      <a
                        href={event.registration_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Registration Link
                      </a>
                    )}

                    <button
                      className="delete-event-btn"
                      onClick={() =>
                        handleDelete(event.id)
                      }
                    >
                      Delete
                    </button>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </section>
  );
}

export default AdminEvents;