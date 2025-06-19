import React from 'react';
import styles from './QuotationSection.module.css';

const QuotationSection = () => {
  // The parallax effect from Jarallax JS would require a React equivalent library
  // (e.g., react-scroll-parallax) or custom implementation.
  // For now, this component will set the background image statically.
  // The 'jarallax' and 'jarallax-keep-img' classes are mostly for JS hooks.
  // We'll use styles.parallaxContainer for CSS.

  const sectionStyle = {
    // Original inline style was: "background: url('images/ad-bg-pattern.png') no-repeat;"
    // CSS modules handle URL paths relative to the CSS file, or use absolute paths from public.
    // For simplicity, if 'images' is in public folder:
    backgroundImage: "url('/images/ad-bg-pattern.png')", // Assuming images are in public/images
    backgroundRepeat: 'no-repeat',
    // background-position: center; // Often good for parallax/cover
    // background-size: cover; // Often good for parallax
  };

  return (
    <section id="quotation" className={`py-5 ${styles.quotationSection}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            {/* The styles.parallaxContainer will get the background image and basic parallax-like setup */}
            <div className={styles.parallaxContainer} style={sectionStyle}>
              {/* The banner-content div is for structuring content on top of the background */}
              <div className={`py-5 ${styles.bannerContent}`}> {/* Bootstrap py-5 for padding */}
                <div className="container"> {/* Inner container for content centering and padding */}
                  <div className="row">
                    <div className="col-md-12 text-center"> {/* Centering content */}
                      <h2 className={`display-2 text-white text-uppercase ${styles.quoteTitle}`}>
                        MİJN BUTİK İLE TARZINI KONUŞTUR!
                      </h2>
                      <p className={`text-white fs-4 ${styles.quoteText}`}>
                        Her sezonun en trend parçaları, göz alıcı abiyeler ve stilinizi tamamlayacak aksesuarlar burada. Kendinizi özel hissetmeniz için her detayı düşündük.
                      </p>
                      <div className={styles.itemPrice}>
                        <del className={`text-white fs-2 fw-bold ${styles.originalPrice}`}>₺2000.00</del>
                        <span className={`text-white fs-1 fw-bold ${styles.discountedPrice}`}>₺1000.00</span>
                      </div>
                      <a href="#trending-products" className="btn btn-outline-light btn-lg text-uppercase fs-6 rounded-1 px-4 py-3 mt-4">
                        Koleksiyona Göz At
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotationSection;
