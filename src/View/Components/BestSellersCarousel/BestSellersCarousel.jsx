import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './BestSellersCarousel.module.css'; // Retain for any carousel specific styles if added later
import ProductItem from '../ProductItem/ProductItem.jsx';

// Assuming IconifyIcon is a custom component you'll define or import
// For now, we'll render it as a span or div if it's not available.
// import IconifyIcon from 'iconify-icon';

const BestSellersCarousel = () => {
  // Placeholder for IconifyIcon if not available
  // const IconifyIcon = (props) => <span {...props}></span>; // ProductItem will handle its own IconifyIcon

  const bestSellersData = [
    {
      id: 'bs1',
      imageUrl: 'images/kirmizi-meri-elbise.png',
      productName: 'Kırmızı Meri Elbise',
      ratingCountText: '1 değerlendirme',
      ratingValueText: '4.5',
      priceText: '₺18.00',
      badgeText: '-15%',
      productUrl: 'index.html'
    },
    {
      id: 'bs2',
      imageUrl: 'images/firfirli-elbise.png',
      productName: 'Fıfırlı Siyah Elbise',
      ratingCountText: '1 değerlendirme',
      ratingValueText: '4.5',
      priceText: '₺18.00',
      badgeText: '-15%',
      productUrl: 'index.html'
    },
    // Add more product data objects here if there were more static items
  ];

  return (
    <section className="py-5 overflow-hidden">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">

            <div className="section-header d-flex flex-wrap justify-content-between my-5">

              <h2 className="section-title">En Çok satanlar</h2>

              <div className="d-flex align-items-center">
                <a href="#" className="btn-link text-decoration-none">Tüm kategorileri görüntüle →</a>
                <div className="swiper-buttons">
                  <button className="swiper-prev products-carousel-prev btn btn-primary">❮</button>
                  <button className="swiper-next products-carousel-next btn btn-primary">❯</button>
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
                nextEl: ".products-carousel-next", // Ensure these class names match the buttons
                prevEl: ".products-carousel-prev", // Ensure these class names match the buttons
              }}
              spaceBetween={30}
              speed={500}
              loop={true}
              slidesPerView={1} // Base for mobile (smallest breakpoint)
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 3 },
                991: { slidesPerView: 4 },
                1500: { slidesPerView: 6 },
              }}
              // className="products-carousel" // Optional: if products-carousel class itself has styles
            >
              {bestSellersData.map(product => (
                <SwiperSlide key={product.id}>
                  {/* ProductItem will apply its own styles.productItem class from its module */}
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellersCarousel;
