import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './BestSellersCarousel.module.css';

// Assuming IconifyIcon is a custom component you'll define or import
// For now, we'll render it as a span or div if it's not available.
// import IconifyIcon from 'iconify-icon';

const BestSellersCarousel = () => {
  // Placeholder for IconifyIcon if not available
  const IconifyIcon = (props) => <span {...props}></span>;

  return (
    <section className="py-5 overflow-hidden">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">

            <div className="section-header d-flex flex-wrap justify-content-between my-5">

              <h2 className="section-title">En Çok satanlar</h2>

              <div className="d-flex align-items-center">
                <a href="#" className="btn-link text-decoration-none">Tüm kategorileri görüntüle →</a>
                <div className="swiper-buttons">
                  <button className="swiper-prev products-carousel-prev btn btn-primary">❮</button>
                  <button className="swiper-next products-carousel-next btn btn-primary">❯</button>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="row">
          <div className="col-md-12">

            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".products-carousel-next", // Ensure these class names match the buttons
                prevEl: ".products-carousel-prev", // Ensure these class names match the buttons
              }}
              spaceBetween={30}
              speed={500}
              loop={true}
              slidesPerView={1} // Base for mobile (smallest breakpoint)
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 3 },
                991: { slidesPerView: 4 },
                1500: { slidesPerView: 6 },
              }}
              // className="products-carousel" // Optional: if products-carousel class itself has styles
            >
              <SwiperSlide className={styles.productItem}>
                <span className="badge bg-success position-absolute m-3">-15%</span>
                <a href="#" className={styles.btnWishlist}><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
                <figure>
                  <a href="index.html" title="Product Title">
                    <img src="images/kirmizi-meri-elbise.png"  className="tab-image" />
                  </a>
                </figure>
                <h3>Kırmızı Meri Elbise</h3>
                <span className={styles.qty}>1 değerlendirme</span><span className={styles.rating}><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                <span className={styles.price}>₺18.00</span>
                <div className="d-flex align-items-center justify-content-between">
                  <div className={`input-group ${styles.productQtyInputContainer}`}>
                      <span className="input-group-btn">
                          <button type="button" className={`quantity-left-minus btn btn-danger ${styles.btnNumber}`} data-type="minus">
                            <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                          </button>
                      </span>
                      <input type="text" name="quantity" className={`form-control input-number ${styles.quantityInput}`} defaultValue="1" />
                      <span className="input-group-btn">
                          <button type="button" className={`quantity-right-plus btn btn-success ${styles.btnNumber}`} data-type="plus">
                              <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                          </button>
                      </span>
                  </div>
                  <a href="#" className="nav-link">Sepete Ekle <IconifyIcon icon="uil:shopping-cart" /></a>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.productItem}>
                <span className="badge bg-success position-absolute m-3">-15%</span>
                <a href="#" className={styles.btnWishlist}><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
                <figure>
                  <a href="index.html" title="Product Title">
                    <img src="images/firfirli-elbise.png"  className="tab-image" />
                  </a>
                </figure>
                <h3>Fıfırlı Siyah Elbise</h3>
                <span className={styles.qty}>1 değerlendirme</span><span className={styles.rating}><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                <span className={styles.price}>₺18.00</span>
                <div className="d-flex align-items-center justify-content-between">
                  <div className={`input-group ${styles.productQtyInputContainer}`}>
                      <span className="input-group-btn">
                          <button type="button" className={`quantity-left-minus btn btn-danger ${styles.btnNumber}`} data-type="minus">
                            <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                          </button>
                      </span>
                      <input type="text" name="quantity" className={`form-control input-number ${styles.quantityInput}`} defaultValue="1" />
                      <span className="input-group-btn">
                          <button type="button" className={`quantity-right-plus btn btn-success ${styles.btnNumber}`} data-type="plus">
                              <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                          </button>
                      </span>
                  </div>
                  <a href="#" className="nav-link">Sepete Ekle <IconifyIcon icon="uil:shopping-cart" /></a>
                </div>
              </SwiperSlide>

              {/* Add the rest of the product items here, applying the same className patterns from styles module */}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellersCarousel;
