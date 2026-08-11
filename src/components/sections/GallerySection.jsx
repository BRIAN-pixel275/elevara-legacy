import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

function GallerySection() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    const { data, error } = await supabase
      .from("gallery")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Gallery error:", error);
      setError("Unable to load gallery images.");
    } else {
      setGallery(data || []);
    }

    setLoading(false);
  };

  return (
    <section className="community-gallery">

      <div className="community-container">

        <div className="section-header">

          <span className="section-tag">
            Our Gallery
          </span>

          <h2>
            Moments That Inspire
          </h2>

          <p>
            Take a look at some of the moments, activities and
            experiences that make the Elevara Legacy community special.
          </p>

        </div>

        {/* Loading */}

        {loading && (
          <div className="gallery-status">
            <p>Loading our gallery...</p>
          </div>
        )}

        {/* Error */}

        {!loading && error && (
          <div className="gallery-status">
            <p>{error}</p>
          </div>
        )}

        {/* Empty Gallery */}

        {!loading && !error && gallery.length === 0 && (
          <div className="gallery-status">
            <p>
              Our gallery is being updated. Check back soon for
              photos from our latest activities.
            </p>
          </div>
        )}

        {/* Gallery Images */}

        {!loading && !error && gallery.length > 0 && (
          <div className="gallery-grid">

            {gallery.map((item) => (
              <div
                className="gallery-item"
                key={item.id}
              >

                <img
                  src={item.image_url}
                  alt={
                    item.caption ||
                    "Elevara Legacy community activity"
                  }
                  loading="lazy"
                />

                {item.caption && (
                  <div className="gallery-overlay">
                    <h3>{item.caption}</h3>
                  </div>
                )}

              </div>
            ))}

          </div>
        )}

      </div>

    </section>
  );
}

export default GallerySection;