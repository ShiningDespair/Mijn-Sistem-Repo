import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">

          <div className="banner-blocks">

            <div className="banner-ad large bg-info block-1">

              <div className="swiper main-swiper">
                <div className="swiper-wrapper">

                  <div className="swiper-slide">
                    <div className="row banner-content p-5">
                      <div className="content-wrapper col-md-7">
                        <div className="categories my-3">Yeni Sezon</div>
                        <h3 className="display-4">Abiye Elbise Modelleri</h3>
                        <p></p>
                        <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 px-4 py-3 mt-3">Satın Al</a>
                      </div>
                      <div className="img-wrapper col-md-5">
                        <img src="images/cagla.png" className="img-fluid" />
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="row banner-content p-5">
                      <div className="content-wrapper col-md-7">
                        <div className="categories mb-3 pb-3">100% doğal</div>
                        <h3 className="banner-title">Kaliteli ve Havadar Kumaş</h3>
                        <p>Bedeninizi rahatlatın.</p>
                        <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">Ürünleri Görüntüle</a>
                      </div>
                      <div className="img-wrapper col-md-5">
                        <img src="images/product-thumb-1.png" className="img-fluid" />
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="row banner-content p-5">
                      <div className="content-wrapper col-md-7">
                        <div className="categories mb-3 pb-3">İndirimi Kaçırma</div>
                        <h3 className="banner-title">Abiyelerde Dev Kampanya</h3>
                        <p>Hemen gardolabını dizmeye başla!</p>
                        <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">Abiyelere Git</a>
                      </div>
                      <div className="img-wrapper col-md-5">
                        <img src="images/product-thumb-2.png" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-pagination"></div>

              </div>
            </div>

            <div className="banner-ad bg-success-subtle block-2" style={{background:"url('images/banner-kare-1-bannerPic-8.jpg') no-repeat", backgroundPosition: "right bottom"}}>
              <div className="row banner-content p-5">

                <div className="content-wrapper col-md-7">
                  <div className="categories sale mb-3 pb-3">20% İndirimle!</div>
                  <h3 className="banner-title">Abiye Modelleri</h3>
                  <a href="#" className="d-flex align-items-center nav-link">Koleksiyona bak! <svg width="24" height="24"><use xlinkHref="#arrow-right"></use></svg></a>
                </div>

              </div>
            </div>

            <div className="banner-ad bg-danger block-3" style={{background:"url('images/kare banner.jpg') no-repeat", backgroundPosition: "right bottom"}}>
              <div className="row banner-content p-5">

                <div className="content-wrapper col-md-7">
                  <div className="categories sale mb-3 pb-3">15% İndirim</div>
                  <h3 className="item-title">Abiye Modelleri</h3>
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
