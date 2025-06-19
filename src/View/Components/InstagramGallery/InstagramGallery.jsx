import React, { useState } from 'react';
import styles from './InstagramGallery.module.css';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Sample data for the gallery items
const galleryItems = [
  { id: 1, href: 'images/insta-item1.jpg', imgSrc: 'images/insta-item1.jpg', alt: 'Instagram Post 1' },
  { id: 2, href: 'images/insta-item2.jpg', imgSrc: 'images/insta-item2.jpg', alt: 'Instagram Post 2' },
  { id: 3, href: 'images/insta-item3.jpg', imgSrc: 'images/insta-item3.jpg', alt: 'Instagram Post 3' },
  { id: 4, href: 'images/insta-item4.jpg', imgSrc: 'images/insta-item4.jpg', alt: 'Instagram Post 4' },
  { id: 5, href: 'images/insta-item5.jpg', imgSrc: 'images/insta-item5.jpg', alt: 'Instagram Post 5' },
  { id: 6, href: 'images/insta-item6.jpg', imgSrc: 'images/insta-item6.jpg', alt: 'Instagram Post 6' },
];

const InstagramGallery = () => {
  const [openLightbox, setOpenLightbox] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const lightboxSlides = galleryItems.map(item => ({
    src: item.imgSrc,
    alt: item.alt,
    // You can add width/height here if known, for better initial rendering
    // width: 1000, // example
    // height: 600, // example
  }));

  const handleImageClick = (e, index) => {
    e.preventDefault();
    setCurrentImageIndex(index);
    setOpenLightbox(true);
  };

  return (
    <>
    <section id="insta-gallery" className="py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex justify-content-between my-3"> {/* Adjusted margin from my-5 */}
              <h2 className="section-title">Galerimiz</h2>
              <div className="btn-wrap">
                <a href="#" className="d-flex align-items-center nav-link">
                  Online Mağaza
                  <svg width="24" height="24" className="ms-1"><use xlinkHref="#arrow-right"></use></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-0"> {/* g-0 to remove gutters between columns */}
          {galleryItems.map((item, index) => (
            <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={item.id}> {/* Responsive column sizing */}
              <a
                href={item.href}
                className={`image-link ${styles.galleryItem}`}
                onClick={(e) => handleImageClick(e, index)}
              >
                <img src={item.imgSrc} alt={item.alt} className={`${styles.galleryImage} img-fluid`} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Lightbox
      open={openLightbox}
      close={() => setOpenLightbox(false)}
      index={currentImageIndex}
      slides={lightboxSlides}
      plugins={[Thumbnails]}
    />
    </>
  );
};

export default InstagramGallery;
