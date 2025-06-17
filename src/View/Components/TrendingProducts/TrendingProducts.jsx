import React from 'react';
import styles from './TrendingProducts.module.css';

// Assuming IconifyIcon is a custom component you'll define or import
// For now, we'll render it as a span or div if it's not available.
// If you have a specific IconifyIcon component, you should import it here.
// import IconifyIcon from 'iconify-icon';

const TrendingProducts = () => {
  // Placeholder for IconifyIcon if not available
  const IconifyIcon = (props) => <span {...props}></span>;

  return (
    <section className="py-5">
      <div className="container-fluid">

        <div className="row">
          <div className="col-md-12">

            <div className="bootstrap-tabs product-tabs">
              <div className="tabs-header d-flex justify-content-between border-bottom my-5">
                <h3>Trend Ürünler</h3>
                <nav>
                  <div className={`nav nav-tabs ${styles.navTabs}`} id="nav-tab" role="tablist">
                    <a href="#" className={`nav-link text-uppercase fs-6 active ${styles.navLinkActive}`} id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all">Tümü</a>
                    <a href="#" className="nav-link text-uppercase fs-6" id="nav-fruits-tab" data-bs-toggle="tab" data-bs-target="#nav-fruits">Abiye</a>
                    <a href="#" className="nav-link text-uppercase fs-6" id="nav-juices-tab" data-bs-toggle="tab" data-bs-target="#nav-juices">Takım</a>
                  </div>
                </nav>
              </div>
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">

                  <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

                    <div className="col">
                      <div className={styles.productItem}>
                        <span className="badge bg-success position-absolute m-3">-30%</span>
                        <a href="#" className={styles.btnWishlist}><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
                        <figure>
                          <a href="index.html" title="Product Title">
                            <img src="images/crop-to-fit.jpeg"  className="tab-image" />
                          </a>
                        </figure>
                        <h3>Krem Oversize Takım</h3>
                        <span className={styles.qty}>27 Değerlendirme</span><span className={styles.rating}><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                        <span className={styles.price}>TL2000</span>
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
                      </div>
                    </div>

                    <div className="col">
                      <div className={styles.productItem}>
                        <span className="badge bg-success position-absolute m-3">-30%</span>
                        <a href="#" className={styles.btnWishlist}><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
                        <figure>
                          <a href="index.html" title="Product Title">
                            <img src="images/crop-to-fit (1).jpeg"  className="tab-image" />
                          </a>
                        </figure>
                        <h3>Kırmızı Meri Elbise</h3>
                        <span className={styles.qty}>34 Değerlendirme</span><span className={styles.rating}><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                        <span className={styles.price}>TL1500</span>
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
                      </div>
                    </div>

                    {/* Add the rest of the product items here, ensuring to replace class with className and handle iconify-icon elements, applying styles.productItem, styles.btnWishlist, styles.qty, styles.rating, styles.price, styles.productQtyInputContainer, styles.btnNumber, and styles.quantityInput as shown above. */}

                  </div>
                  {/* / product-grid */}

                </div>

                <div className="tab-pane fade" id="nav-fruits" role="tabpanel" aria-labelledby="nav-fruits-tab">

                  <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

                   {/* Product items for Abiye category */}

                  </div>
                  {/* / product-grid */}

                </div>
                <div className="tab-pane fade" id="nav-juices" role="tabpanel" aria-labelledby="nav-juices-tab">

                  <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

                    {/* Product items for Takım category */}

                  </div>
                  {/* / product-grid */}

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
