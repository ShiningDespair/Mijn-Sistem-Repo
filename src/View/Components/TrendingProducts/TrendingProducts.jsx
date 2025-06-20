import React from 'react'; // Removed useState as it's now in ProductItem
import styles from './TrendingProducts.module.css';
import ProductItem from '../ProductItem/ProductItem.jsx';

// Assuming IconifyIcon is a custom component you'll define or import
// For now, we'll render it as a span or div if it's not available.
// If you have a specific IconifyIcon component, you should import it here.
// import IconifyIcon from 'iconify-icon';

const TrendingProducts = () => {
  // Placeholder for IconifyIcon if not available
  const IconifyIcon = (props) => <span {...props}></span>; // Kept for the "Sepete Ekle" link, ProductItem handles its own.

  const trendingProductsData = [
    {
      id: 'tp1',
      imageUrl: 'images/crop-to-fit.jpeg',
      productName: 'Krem Oversize Takım',
      ratingCountText: '27 Değerlendirme',
      ratingValueText: '4.5',
      priceText: 'TL2000',
      badgeText: '-30%',
      productUrl: 'index.html' // Example URL
    },
    {
      id: 'tp2',
      imageUrl: 'images/crop-to-fit (1).jpeg',
      productName: 'Kırmızı Meri Elbise',
      ratingCountText: '34 Değerlendirme',
      ratingValueText: '4.5',
      priceText: 'TL1500',
      badgeText: '-30%',
      productUrl: 'index.html' // Example URL
    },
    // Add more product data objects here if there were more static items
  ];

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
                    {trendingProductsData.map(product => (
                      <div className="col" key={product.id}>
                        <ProductItem
                          imageUrl={product.imageUrl}
                          productName={product.productName}
                          badgeText={product.badgeText}
                          ratingCountText={product.ratingCountText}
                          ratingValueText={product.ratingValueText}
                          priceText={product.priceText}
                          productUrl={product.productUrl}
                          // initialQuantity={1} // ProductItem defaults to 1
                        />
                      </div>
                    ))}
                  </div>
                  {/* / product-grid */}

                </div>

                <div className="tab-pane fade" id="nav-fruits" role="tabpanel" aria-labelledby="nav-fruits-tab">
                  <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                   {/* Product items for Abiye category - map a filtered list or different data source here */}
                   <p className="text-center p-5">Abiye ürünleri bu sekmede gösterilecektir.</p>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-juices" role="tabpanel" aria-labelledby="nav-juices-tab">
                  <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    {/* Product items for Takım category - map a filtered list or different data source here */}
                    <p className="text-center p-5">Takım ürünleri bu sekmede gösterilecektir.</p>
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

export default TrendingProducts;
