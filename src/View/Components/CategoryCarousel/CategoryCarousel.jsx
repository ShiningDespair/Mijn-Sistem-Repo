import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './CategoryCarousel.module.css';

const CategoryCarousel = () => {
  return (
    <section className="py-5 overflow-hidden">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">

            <div className="section-header d-flex flex-wrap justify-content-between mb-5">
              <h2 className="section-title">Kategori</h2>

              <div className="d-flex align-items-center">
                <a href="#" className="btn-link text-decoration-none">Tüm Kategoriler →</a>
                {/* Navigation buttons are outside the Swiper component but referenced by class name */}
                <div className="swiper-buttons">
                  <button className="swiper-prev category-carousel-prev btn btn-yellow">❮</button>
                  <button className="swiper-next category-carousel-next btn btn-yellow">❯</button>
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
                nextEl: ".category-carousel-next",
                prevEl: ".category-carousel-prev",
              }}
              spaceBetween={30}
              speed={500}
              loop={true}
              slidesPerView={2} // Base slidesPerView for mobile
              breakpoints={{
                0: { slidesPerView: 2, spaceBetween: 20 }, // Explicitly define for smallest
                768: { slidesPerView: 3, spaceBetween: 30 },
                991: { slidesPerView: 4, spaceBetween: 30 },
                1500: { slidesPerView: 6, spaceBetween: 30 },
              }}
              // className="category-carousel" // Optional: if .category-carousel class itself has styles
            >
              <SwiperSlide>
                <a href="index.html" className={`nav-link ${styles.categoryCarouselItem}`}>
                  <img src="images/female-clothes_4060744 (1).png" alt="Category Thumbnail" />
                  <h3 className={styles.categoryTitle}>Yeniler</h3>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="index.html" className={`nav-link ${styles.categoryCarouselItem}`}>
                  <img src="images/female-clothes_4060744 (1).png" alt="Category Thumbnail" />
                  <h3 className={styles.categoryTitle}>Çok Satanlar</h3>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="index.html" className={`nav-link ${styles.categoryCarouselItem}`}>
                  <img src="images/woman-clothes_4060444 (1).png" alt="Category Thumbnail" />
                  <h3 className={styles.categoryTitle}>Abiye</h3>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="index.html" className={`nav-link ${styles.categoryCarouselItem}`}>
                  <img src="images/female-clothes_4060744 (1).png" alt="Category Thumbnail" />
                  <h3 className={styles.categoryTitle}>Eşofman Takımı</h3>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="index.html" className={`nav-link ${styles.categoryCarouselItem}`}>
                  <img src="images/woman-clothes_4060480 (1).png" alt="Category Thumbnail" />
                  <h3 className={styles.categoryTitle}>Üst Giyim</h3>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="index.html" className={`nav-link ${styles.categoryCarouselItem}`}>
                  <img src="images/female-clothes_4060744 (1).png" alt="Category Thumbnail" />
                  <h3 className={styles.categoryTitle}>Alt Giyim</h3>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="index.html" className={`nav-link ${styles.categoryCarouselItem}`}>
                  <img src="images/icon-animal-products-drumsticks.png" alt="Category Thumbnail" />
                  <h3 className={styles.categoryTitle}>Dış Giyim</h3>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="index.html" className={`nav-link ${styles.categoryCarouselItem}`}>
                  <img src="images/icon-bread-herb-flour.png" alt="Category Thumbnail" />
                  <h3 className={styles.categoryTitle}>Aksesuar</h3>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="index.html" className={`nav-link ${styles.categoryCarouselItem}`}>
                  <img src="images/icon-vegetables-broccoli.png" alt="Category Thumbnail" />
                  <h3 className={styles.categoryTitle}>Takım</h3>
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;
