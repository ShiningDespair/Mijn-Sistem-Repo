import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">

          <div className={styles.bannerBlocks}> {/* Updated */}

            <div className={`${styles.bannerAd} ${styles.large} bg-info ${styles.block1}`}> {/* Updated & combined */}

              <div className={`${styles.mainSwiper} swiper`}> {/* Updated & combined */}
                <div className="swiper-wrapper">

                  <div className={`${styles.swiperSlide} swiper-slide`}> {/* Updated & combined */}
                    <div className="row banner-content p-5">
                      <div className="content-wrapper col-md-7">
                        <div className={`${styles.categories} my-3`}>Yeni Sezon</div> {/* Updated */}
                        <h3 className="display-4">Abiye Elbise Modelleri</h3>
                        <p></p>
                        <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 px-4 py-3 mt-3">Satın Al</a>
                      </div>
                      <div className="img-wrapper col-md-5">
                        <img src="images/cagla.png" className="img-fluid" />
                      </div>
                    </div>
                  </div>

                  <div className={`${styles.swiperSlide} swiper-slide`}> {/* Updated & combined */}
                    <div className="row banner-content p-5">
                      <div className="content-wrapper col-md-7">
                        <div className={`${styles.categories} mb-3 pb-3`}>100% doğal</div> {/* Updated */}
                        <h3 className={styles.bannerTitle}>Kaliteli ve Havadar Kumaş</h3> {/* Updated */}
                        <p>Bedeninizi rahatlatın.</p>
                        <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">Ürünleri Görüntüle</a>
                      </div>
                      <div className="img-wrapper col-md-5">
                        <img src="images/product-thumb-1.png" className="img-fluid" />
                      </div>
                    </div>
                  </div>

                  <div className={`${styles.swiperSlide} swiper-slide`}> {/* Updated & combined */}
                    <div className="row banner-content p-5">
                      <div className="content-wrapper col-md-7">
                        <div className={`${styles.categories} mb-3 pb-3`}>İndirimi Kaçırma</div> {/* Updated */}
                        <h3 className={styles.bannerTitle}>Abiyelerde Dev Kampanya</h3> {/* Updated */}
                        <p>Hemen gardolabını dizmeye başla!</p>
                        <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">Abiyelere Git</a>
                      </div>
                      <div className="img-wrapper col-md-5">
                        <img src="images/product-thumb-2.png" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${styles.swiperPagination} swiper-pagination`}></div> {/* Updated & combined */}

              </div>
            </div>

            <div className={`${styles.bannerAd} bg-success-subtle ${styles.block2}`} style={{background:"url('images/banner-kare-1-bannerPic-8.jpg') no-repeat", backgroundPosition: "right bottom"}}> {/* Updated & combined */}
              <div className="row banner-content p-5">

                <div className="content-wrapper col-md-7">
                  <div className={`${styles.categories} ${styles.sale} mb-3 pb-3`}>20% İndirimle!</div> {/* Updated & combined */}
                  <h3 className={styles.bannerTitle}>Abiye Modelleri</h3> {/* Updated */}
                  <a href="#" className="d-flex align-items-center nav-link">Koleksiyona bak! <svg width="24" height="24"><use xlinkHref="#arrow-right"></use></svg></a>
                </div>

              </div>
            </div>

            <div className={`${styles.bannerAd} bg-danger ${styles.block3}`} style={{background:"url('images/kare banner.jpg') no-repeat", backgroundPosition: "right bottom"}}> {/* Updated & combined */}
              <div className="row banner-content p-5">

                <div className="content-wrapper col-md-7">
                  <div className={`${styles.categories} ${styles.sale} mb-3 pb-3`}>15% İndirim</div> {/* Updated & combined */}
                  <h3 className={styles.itemTitle}>Abiye Modelleri</h3> {/* Updated */}
                  <a href="#" className="d-flex align-items-center nav-link">Koleksiyona bak! <svg width="24" height="24"><use xlinkHref="#arrow-right"></use></svg></a>
                </div>

              </div>
            </div>

          </div>
          {/* / Banner Blocks */}

        </div>
      </div>
    </div>
  );
};

export default Hero;
