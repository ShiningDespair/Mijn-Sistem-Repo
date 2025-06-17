import React from 'react';
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

            <div className="category-carousel swiper">
              <div className="swiper-wrapper">
                <a href="index.html" className="nav-link category-item swiper-slide">
                  <img src="images/female-clothes_4060744 (1).png" alt="Category Thumbnail" />
                  <h3 className="category-title">Yeniler</h3>
                </a>
                <a href="index.html" className="nav-link category-item swiper-slide">
                  <img src="images/female-clothes_4060744 (1).png" alt="Category Thumbnail" />
                  <h3 className="category-title">Çok Satanlar</h3>
                </a>
                <a href="index.html" className="nav-link category-item swiper-slide">
                  <img src="images/woman-clothes_4060444 (1).png" alt="Category Thumbnail" />
                  <h3 className="category-title">Abiye</h3>
                </a>
                <a href="index.html" className="nav-link category-item swiper-slide">
                  <img src="images/female-clothes_4060744 (1).png" alt="Category Thumbnail" />
                  <h3 className="category-title">Eşofman Takımı</h3>
                </a>
                <a href="index.html" className="nav-link category-item swiper-slide">
                  <img src="images/woman-clothes_4060480 (1).png" alt="Category Thumbnail" />
                  <h3 className="category-title">Üst Giyim</h3>
                </a>
                <a href="index.html" className="nav-link category-item swiper-slide">
                  <img src="images/female-clothes_4060744 (1).png" alt="Category Thumbnail" />
                  <h3 className="category-title">Alt Giyim</h3>
                </a>
                <a href="index.html" className="nav-link category-item swiper-slide">
                  <img src="images/icon-animal-products-drumsticks.png" alt="Category Thumbnail" />
                  <h3 className="category-title">Dış Giyim</h3>
                </a>
                <a href="index.html" className="nav-link category-item swiper-slide">
                  <img src="images/icon-bread-herb-flour.png" alt="Category Thumbnail" />
                  <h3 className="category-title">Aksesuar</h3>
                </a>
                <a href="index.html" className="nav-link category-item swiper-slide">
                  <img src="images/icon-vegetables-broccoli.png" alt="Category Thumbnail" />
                  <h3 className="category-title">Takım</h3>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;
