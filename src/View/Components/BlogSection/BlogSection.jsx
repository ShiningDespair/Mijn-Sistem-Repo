import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './BlogSection.module.css'; // Keep if there are any section-specific styles

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

            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".brand-carousel-next",
                prevEl: ".brand-carousel-prev",
              }}
              spaceBetween={30}
              speed={500}
              loop={true}
              slidesPerView={2} // Base for mobile
              breakpoints={{
                0: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 30 },
                991: { slidesPerView: 3, spaceBetween: 30 },
                1500: { slidesPerView: 4, spaceBetween: 30 },
              }}
              // className="brand-carousel" // Optional: if .brand-carousel class itself has styles
            >
              <SwiperSlide>
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
              </SwiperSlide>
              <SwiperSlide>
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
              </SwiperSlide>
              <SwiperSlide>
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
              </SwiperSlide>
              <SwiperSlide>
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
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
