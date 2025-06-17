import React from 'react';
import styles from './BlogSection.module.css';

const BlogSection = () => {
  return (
    <section className="py-5 overflow-hidden">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">

            <div className="section-header d-flex flex-wrap flex-wrap justify-content-between mb-5">

              <h2 className="section-title">Blog Yazılarımız</h2>

              <div className="d-flex align-items-center">
                <a href="#" className="btn-link text-decoration-none">Tüm Yazılar →</a>
                <div className="swiper-buttons">
                  <button className="swiper-prev brand-carousel-prev btn btn-yellow">❮</button>
                  <button className="swiper-next brand-carousel-next btn btn-yellow">❯</button>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="row">
          <div className="col-md-12">

            <div className="brand-carousel swiper">
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="card mb-3 p-3 rounded-4 shadow border-0">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src="images/ozel-dikim-abiyeler.webp" className="img-fluid rounded" alt="Card title" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body py-0">
                          <p className="text-muted mb-0">Özel Dikim Abiyeler</p>
                          <h5 className="card-title">Kişiye özel dikim abiyeler</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card mb-3 p-3 rounded-4 shadow border-0">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src="images/kadin-giyim.webp" className="img-fluid rounded" alt="Card title" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body py-0">
                          <p className="text-muted mb-0">Kadın Giyim</p>
                          <h5 className="card-title">Kadın Giyimde Dikkat Et</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card mb-3 p-3 rounded-4 shadow border-0">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src="images/yepyeni-abiyeler.webp" className="img-fluid rounded" alt="Card title" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body py-0">
                          <p className="text-muted mb-0">Yepyeni Abiyeler</p>
                          <h5 className="card-title">Abiyelerde Renk Seçiminin Önemi</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card mb-3 p-3 rounded-4 shadow border-0">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src="images/taki-ve-aksesuarlar.webp" className="img-fluid rounded" alt="Card title" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body py-0">
                          <p className="text-muted mb-0">Takı ve Aksesuar</p>
                          <h5 className="card-title">Takı ve aksesuar uyumu üzerine</h5>
                        </div>
                      </div>
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

export default BlogSection;
