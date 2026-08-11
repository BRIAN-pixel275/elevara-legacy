import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import "../styles/admin-dashboard.css";

function AdminDashboard() {

  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin-login");
  };

  return (
    <section className="admin-dashboard">

      <div className="admin-dashboard-container">

        {/* Header */}

        <div className="admin-dashboard-header">

          <div>
            <span className="section-tag">
              Elevara Legacy
            </span>

            <h1>Admin Dashboard</h1>

            <p>
              Manage your events and community gallery.
            </p>
          </div>

          <button
            className="admin-logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>


        {/* Dashboard Cards */}

        <div className="admin-dashboard-grid">

          {/* Events */}

          <div className="admin-card">

            <div className="admin-card-icon">
              📅
            </div>

            <h2>Events</h2>

            <p>
              Create, update and manage upcoming Elevara Legacy events.
            </p>

            <button
              className="admin-card-btn"
              onClick={() => navigate("/admin/events")}
            >
              Manage Events
            </button>

          </div>


          {/* Gallery */}

          <div className="admin-card">

            <div className="admin-card-icon">
              🖼️
            </div>

            <h2>Gallery</h2>

            <p>
              Upload and manage photos from Elevara Legacy activities
              and events.
            </p>

            <button
              className="admin-card-btn"
              onClick={() => navigate("/admin/gallery")}
            >
              Manage Gallery
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AdminDashboard;