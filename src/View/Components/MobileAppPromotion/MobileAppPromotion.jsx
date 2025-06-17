import React from 'react';
import styles from './MobileAppPromotion.module.css';

const MobileAppPromotion = () => {
  return (
    <section className="py-5 my-5">
      <div className="container-fluid">

        <div className="bg-warning py-5 rounded-5" style={{backgroundImage: "url('images/bg-pattern-2.png')", backgroundRepeat: 'no-repeat'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img src="images/phone.png" alt="phone" className="image-float img-fluid" />
              </div>
              <div className="col-md-8">
                <h2 className="my-5">Mobil uygulamamız ile daha hızlı alışveriş edin.</h2>
                <p>Mijn Butik mobil uygulaması ile en yeni trendler artık parmaklarınızın ucunda! Aradığınız en şık kadın giyim ürünleri ve göz alıcı abiye modelleri şimdi bir tık uzağınızda. Sezonun favori parçalarını keşfedin, size özel indirimlerden ve kampanyalardan ilk siz haberdar olun. Daha hızlı alışveriş için mobil uygulamamızı kullanın, hayalinizdeki kombinlere kolayca sahip olun. Mijn Butik ile stilinizi her an, her yerde yansıtın.</p>
                <div className="d-flex gap-2 flex-wrap">
                  <img src="images/app-store.jpg" alt="app-store" />
                  <img src="images/google-play.jpg" alt="google-play" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MobileAppPromotion;
