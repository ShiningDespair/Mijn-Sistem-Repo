import React from 'react';

// Import common/utility components
import SvgIcons from '../Components/SvgIcons/SvgIcons.jsx';
import Preloader from '../Components/Preloader/Preloader.jsx';
import OffcanvasCart from '../Components/OffcanvasCart/OffcanvasCart.jsx';
import OffcanvasSearch from '../Components/OffcanvasSearch/OffcanvasSearch.jsx';

// Import layout components
import Header from '../Components/Header/Header.jsx';
import Footer from '../Components/Footer/Footer.jsx';

// Import page section components
import Hero from '../Components/Hero/Hero.jsx';
import CategoryCarousel from '../Components/CategoryCarousel/CategoryCarousel.jsx';
import TrendingProducts from '../Components/TrendingProducts/TrendingProducts.jsx';
import PromotionalBanners from '../Components/PromotionalBanners/PromotionalBanners.jsx';
import QuotationSection from '../Components/QuotationSection/QuotationSection.jsx';
import BestSellersCarousel from '../Components/BestSellersCarousel/BestSellersCarousel.jsx';
import NewsletterSignup from '../Components/NewsletterSignup/NewsletterSignup.jsx';
import PopularProductsCarousel from '../Components/PopularProductsCarousel/PopularProductsCarousel.jsx';
import NewArrivalsCarousel from '../Components/NewArrivalsCarousel/NewArrivalsCarousel.jsx';
import BlogSection from '../Components/BlogSection/BlogSection.jsx'; // This was "Blog Yazılarımız" with brand-carousel
import LatestBlogPosts from '../Components/LatestBlogPosts/LatestBlogPosts.jsx'; // This was section#latest-blog
import MobileAppPromotion from '../Components/MobileAppPromotion/MobileAppPromotion.jsx';
import PopularTags from '../Components/PopularTags/PopularTags.jsx';
import InstagramGallery from '../Components/InstagramGallery/InstagramGallery.jsx';


const HomePage = () => {
  return (
    <>
      <SvgIcons />
      <Preloader />
      <OffcanvasCart />
      <OffcanvasSearch />

      <Header />

      <main>
        <Hero />
        <CategoryCarousel />
        <TrendingProducts />
        <PromotionalBanners />
        <QuotationSection />
        <BestSellersCarousel />
        <NewsletterSignup />
        {/* Based on index.html, BlogSection ("Blog Yazılarımız") appears before NewArrivals & PopularProducts */}
        <BlogSection />
        <NewArrivalsCarousel />
        <PopularProductsCarousel />
        <LatestBlogPosts /> {/* This was section#latest-blog */}
        <MobileAppPromotion />
        <InstagramGallery />
        <PopularTags />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
