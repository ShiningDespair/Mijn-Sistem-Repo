import React from 'react';
import styles from './LatestBlogPosts.module.css';

const LatestBlogPosts = () => {
  return (
    <section id="latest-blog" className="py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="section-header d-flex align-items-center justify-content-between my-5">
            <h2 className="section-title">Yeni blog yazılarımız</h2>
            <div className="btn-wrap align-right">
              <a href="#" className="d-flex align-items-center nav-link">Tüm <svg width="24" height="24"><use xlinkHref="#arrow-right"></use></svg></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <article className={styles.postItem}>
              <div className={`${styles.imageHolder} ${styles.zoomEffect}`}>
                <a href="#">
                  <img src="images/taki-ve-aksesuarlar.webp" alt="post" />
                </a>
              </div>
              <div className={styles.postContent}>
                <div className={`${styles.postMeta} d-flex text-uppercase gap-3 my-2 align-items-center`}>
                  <div className={styles.postMetaItem}><svg width="16" height="16"><use xlinkHref="#calendar"></use></svg>22 Aug 2021</div>
                  <div className={styles.postMetaItem}><svg width="16" height="16"><use xlinkHref="#category"></use></svg>tips & tricks</div>
                </div>
                <div className={styles.postHeader}>
                  <h3 className={styles.postTitle}>
                    <a href="#" className="text-decoration-none">Takı ve Aksesuarlar</a>
                  </h3>
                  <p>Doğru aksesuar, en sade kombini bile anında bir stil beyanına dönüştürebilir. Tarzınızı tamamlayacak ve enerjinizi yansıtacak en yeni takı ve aksesuar trendlerini keşfedin...</p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-md-4">
            <article className={styles.postItem}>
              <div className={`${styles.imageHolder} ${styles.zoomEffect}`}>
                <a href="#">
                  <img src="images/yepyeni-abiyeler.webp" alt="post" />
                </a>
              </div>
              <div className={styles.postContent}>
                <div className={`${styles.postMeta} d-flex text-uppercase gap-3 my-2 align-items-center`}>
                  <div className={styles.postMetaItem}><svg width="16" height="16"><use xlinkHref="#calendar"></use></svg>25 Aug 2021</div>
                  <div className={styles.postMetaItem}><svg width="16" height="16"><use xlinkHref="#category"></use></svg>trending</div>
                </div>
                <div className={styles.postHeader}>
                  <h3 className={styles.postTitle}>
                    <a href="#" className="text-decoration-none">Yepyeni Abiyeler</a>
                  </h3>
                  <p>Hayalinizdeki o özel gece için hazırlıklar başladıysa, tüm gözleri üzerinize çevirecek koleksiyonumuzla tanışın. En yeni kumaşlar ve göz alıcı tasarımlarla hazırlanan yepyeni abiyeler şimdi sizi bekliyor...</p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-md-4">
            <article className={styles.postItem}>
              <div className={`${styles.imageHolder} ${styles.zoomEffect}`}>
                <a href="#">
                  <img src="images/kadin-giyim.webp" alt="post" />
                </a>
              </div>
              <div className={styles.postContent}>
                <div className={`${styles.postMeta} d-flex text-uppercase gap-3 my-2 align-items-center`}>
                  <div className={styles.postMetaItem}><svg width="16" height="16"><use xlinkHref="#calendar"></use></svg>28 Aug 2021</div>
                  <div className={styles.postMetaItem}><svg width="16" height="16"><use xlinkHref="#category"></use></svg>inspiration</div>
                </div>
                <div className={styles.postHeader}>
                  <h3 className={styles.postTitle}>
                    <a href="#" className="text-decoration-none">Kadın Giyim</a>
                  </h3>
                  <p>Gardırobunuza taze bir soluk getirme zamanı geldiyse, sezonun en heyecan verici kadın giyim trendleri tam size göre. Konfordan ve şıklıktan ödün vermeyen en yeni parçalarla stilinizi bir üst seviyeye taşıyın...</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;
