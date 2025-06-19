import React, { useState, useEffect } from 'react'; // Added useEffect for potential future use with image dimensions
import styles from './ProductItem.module.css';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/zoom.css";


// Assuming IconifyIcon is a global component or will be imported if specifically used for the cart icon
const IconifyIcon = (props) => <span {...props}></span>; // Placeholder

const ProductItem = ({
  id,
  imageUrl,
  productName,
  badgeText, // e.g., "-30%" or "New"
  ratingCountText, // e.g., "27 Değerlendirme"
  ratingValueText, // e.g., "4.5"
  priceText,
  initialQuantity = 1,
  // Add other props as needed, e.g., productUrl = "#"
  productUrl = "index.html" // Default product URL
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [openLightbox, setOpenLightbox] = useState(false);

  // In a real app, add to cart would likely involve context or a Redux action
  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${productName} to cart.`);
    // Here you would typically dispatch an action or call a context method
  };

  const handleImageClick = (e) => {
    e.preventDefault();
    setOpenLightbox(true);
  };

  return (
    <> {/* Changed to fragment to accommodate Lightbox component */}
      <div className={styles.productItem}>
        {badgeText && <span className={`badge bg-success position-absolute m-3 ${styles.badge}`}>{badgeText}</span>}
        <a href="#" className={styles.btnWishlist}>
          <svg width="24" height="24"><use xlinkHref="#heart"></use></svg>
        </a>
        <figure>
          {/* Link now opens lightbox, productUrl could be used for a "details" button if needed */}
          <a href={imageUrl} title={productName} onClick={handleImageClick}>
            <img src={imageUrl} alt={productName} className="img-fluid" /> {/* Bootstrap class for responsiveness */}
          </a>
        </figure>
        <div className={styles.productDetails}>
        <h3>{productName}</h3>
        <span className={styles.qty}>{ratingCountText}</span>
        <span className={styles.rating}>
          <svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> {ratingValueText}
        </span>
        <span className={styles.price}>{priceText}</span>
      </div>
      <div className={styles.productActions}>
        <div className="d-flex align-items-center justify-content-between">
          <div className={`input-group ${styles.productQtyInputContainer}`}>
            <span className="input-group-btn">
              <button
                type="button"
                className={`btn btn-outline-secondary ${styles.btnNumber}`} // Using Bootstrap outline
                data-type="minus"
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
              >
                <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
              </button>
            </span>
            <input
              type="text"
              className={`form-control text-center ${styles.quantityInput}`} // Bootstrap form-control for some base styling
              value={quantity}
              readOnly
            />
            <span className="input-group-btn">
              <button
                type="button"
                className={`btn btn-outline-secondary ${styles.btnNumber}`} // Using Bootstrap outline
                data-type="plus"
                onClick={() => setQuantity(prev => prev + 1)}
              >
                <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
              </button>
            </span>
          </div>
          <a href="#" className="btn btn-primary btn-sm" onClick={handleAddToCart}> {/* Adjusted to btn-sm for potentially smaller size */}
            Sepete Ekle <IconifyIcon icon="uil:shopping-cart" /> {/* Placeholder icon */}
          </a>
        </div>
      </div>
      </div>
      <Lightbox
        open={openLightbox}
        close={() => setOpenLightbox(false)}
        slides={[{ src: imageUrl, alt: productName }]}
        plugins={[Zoom]}
      />
    </>
  );
};

export default ProductItem;
