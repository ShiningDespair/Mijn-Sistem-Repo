import React from 'react';
import styles from './PromotionalBanners.module.css';

const PromotionalBanners = () => {
  return (
    <section className="py-5">
      <div className="container-fluid">
        <div className="row">

          <div className="col-md-6">
            <div className="banner-ad bg-danger mb-3" style={{background: "url('images/ad-image-3.png')", backgroundRepeat: "no-repeat", backgroundPosition: "right bottom"}}>
              <div className="banner-content p-5">

                <div className="categories text-primary fs-3 fw-bold"></div>
                <h3 className="banner-title">Yeni Sezon </h3>
                <p>Elbise modelleri ile tarzınızı konuşturun.</p>
                <a href="#" className="btn btn-dark text-uppercase">Şimdi Al</a>

              </div>

            </div>
          </div>
          <div className="col-md-6">
            <div className="banner-ad bg-info" style={{background: "url('images/ad-image-4.png')", backgroundRepeat: "no-repeat", backgroundPosition: "right bottom"}}>
              <div className="banner-content p-5">

                <div className="categories text-primary fs-3 fw-bold"></div>
                <h3 className="banner-title">Yeni Sezon</h3>
                <p>Sweatshirt kombinleri ile rahatlayın</p>
                <a href="#" className="btn btn-dark text-uppercase">Şimdi Al</a>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PromotionalBanners;
