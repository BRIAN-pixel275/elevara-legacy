import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import "../styles/admin-gallery.css";

function AdminGallery() {

  const [images, setImages] = useState([]);
  const [events, setEvents] = useState([]);

  const [selectedFile, setSelectedFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [eventId, setEventId] = useState("");

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [message, setMessage] = useState("");

  /*
   * Fetch gallery images
   */

  const fetchGallery = async () => {
  setFetching(true);

  const { data, error } = await supabase
    .from("gallery")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching gallery:", error);
    console.error("Message:", error.message);
    console.error("Details:", error.details);
    console.error("Hint:", error.hint);
    console.error("Code:", error.code);

    setMessage("Unable to load gallery images.");
  } else {
    setImages(data || []);
  }

  setFetching(false);
};


  /*
   * Fetch events
   */

  const fetchEvents = async () => {

    const { data, error } = await supabase
      .from("events")
      .select("id, title")
      .order("date", { ascending: true });

    if (error) {
      console.error("Error fetching events:", error);
    } else {
      setEvents(data || []);
    }
  };


  /*
   * Load data when page opens
   */

  useEffect(() => {
    fetchGallery();
    fetchEvents();
  }, []);


  /*
   * Upload image
   */

  const handleUpload = async (e) => {

    e.preventDefault();

    if (!selectedFile) {
      setMessage("Please select an image first.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {

      /*
       * Create unique file name
       */

      const fileExtension =
        selectedFile.name.split(".").pop();

      const fileName =
        `${Date.now()}-${Math.random()
          .toString(36)
          .substring(2)}.${fileExtension}`;


      /*
       * Upload image to Supabase Storage
       */

      const { error: uploadError } = await supabase
        .storage
        .from("gallery")
        .upload(fileName, selectedFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        throw uploadError;
      }


      /*
       * Get public image URL
       */

      const { data: publicUrlData } =
        supabase
          .storage
          .from("gallery")
          .getPublicUrl(fileName);

      const imageUrl =
        publicUrlData.publicUrl;


      /*
       * Save image information
       * to gallery table
       */

      const { error: databaseError } =
        await supabase
          .from("gallery")
          .insert([
            {
              image_url: imageUrl,
              caption: caption,
              event_id: eventId
                ? Number(eventId)
                : null,
            },
          ]);

      if (databaseError) {
        throw databaseError;
      }


      /*
       * Reset form
       */

      setSelectedFile(null);
      setCaption("");
      setEventId("");

      document
        .getElementById("gallery-image")
        .value = "";


      setMessage("Image uploaded successfully! 🎉");

      fetchGallery();

    } catch (error) {

      console.error("Upload error:", error);

      setMessage(
        error.message || "Something went wrong while uploading."
      );

    } finally {

      setLoading(false);

    }
  };


  /*
   * Delete gallery image
   */

  const handleDelete = async (image) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this image?"
      );

    if (!confirmDelete) return;


    try {

      /*
       * Delete database record
       */

      const { error } = await supabase
        .from("gallery")
        .delete()
        .eq("id", image.id);

      if (error) {
        throw error;
      }


      /*
       * Delete image from Storage
       */

      const imagePath =
        image.image_url.split("/gallery/")[1];

      if (imagePath) {

        await supabase
          .storage
          .from("gallery")
          .remove([imagePath]);

      }


      setMessage("Image deleted successfully.");

      fetchGallery();

    } catch (error) {

      console.error("Delete error:", error);

      setMessage(
        error.message || "Unable to delete image."
      );

    }
  };


  return (
    <section className="admin-gallery">

      <div className="admin-gallery-container">


        {/* Header */}

        <div className="admin-gallery-header">

          <div>

            <span className="section-tag">
              Elevara Legacy
            </span>

            <h1>Gallery Management</h1>

            <p>
              Upload and manage photos from Elevara Legacy
              events and activities.
            </p>

          </div>

        </div>


        {/* Upload Form */}

        <div className="gallery-upload-card">

          <h2>Upload New Image</h2>

          <form onSubmit={handleUpload}>

            {/* Image */}

            <div className="form-group">

              <label htmlFor="gallery-image">
                Select Image
              </label>

              <input
                id="gallery-image"
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setSelectedFile(e.target.files[0])
                }
              />

            </div>


            {/* Event */}

            <div className="form-group">

              <label htmlFor="gallery-event">
                Event
              </label>

              <select
                id="gallery-event"
                value={eventId}
                onChange={(e) =>
                  setEventId(e.target.value)
                }
              >

                <option value="">
                  Select an event
                </option>

                {events.map((event) => (

                  <option
                    key={event.id}
                    value={event.id}
                  >
                    {event.title}
                  </option>

                ))}

              </select>

            </div>


            {/* Caption */}

            <div className="form-group">

              <label htmlFor="gallery-caption">
                Caption
              </label>

              <textarea
                id="gallery-caption"
                rows="4"
                placeholder="Write a short caption..."
                value={caption}
                onChange={(e) =>
                  setCaption(e.target.value)
                }
              />

            </div>


            <button
              type="submit"
              className="admin-upload-btn"
              disabled={loading}
            >

              {loading
                ? "Uploading..."
                : "Upload Image"}

            </button>

          </form>


          {/* Message */}

          {message && (
            <p className="admin-gallery-message">
              {message}
            </p>
          )}

        </div>


        {/* Gallery Images */}

        <div className="admin-gallery-list">

          <div className="admin-gallery-list-header">

            <h2>
              Gallery Images
            </h2>

            <span>
              {images.length} images
            </span>

          </div>


          {fetching ? (

            <p className="gallery-status">
              Loading gallery...
            </p>

          ) : images.length === 0 ? (

            <p className="gallery-status">
              No gallery images have been uploaded yet.
            </p>

          ) : (

            <div className="admin-gallery-grid">

              {images.map((image) => (

                <div
                  className="admin-gallery-item"
                  key={image.id}
                >

                  <img
                    src={image.image_url}
                    alt={image.caption || "Elevara Legacy event"}
                  />


                  <div className="admin-gallery-item-content">

                    <h3>
                      {image.caption || "Untitled Image"}
                    </h3>

                    {image.events && (
                      <span>
                        {image.events.title}
                      </span>
                    )}

                    <button
                      className="delete-gallery-btn"
                      onClick={() =>
                        handleDelete(image)
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

export default AdminGallery;