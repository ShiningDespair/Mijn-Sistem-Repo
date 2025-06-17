import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row py-3 border-bottom">

          <div className="col-sm-4 col-lg-3 text-center text-sm-start">
            <div className={styles.mainLogo}> {/* Updated to styles.mainLogo */}
              <a href="index.html">
                <img src="images/mijnlogo.jpg" alt="logo" className="img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
            <div className={`${styles.searchBar} row bg-light p-2 my-2 rounded-4`}> {/* Updated to styles.searchBar and kept Bootstrap classes */}
              <div className="col-md-4 d-none d-md-block">
                <select className="form-select border-0 bg-transparent">
                  <option>Tüm Kategoriler</option>
                  <option>Abiyeler</option>
                  <option>Sweatshirtler</option>
                  <option>Takılar</option>
                </select>
              </div>
              <div className="col-11 col-md-7">
                <form id="search-form" className="text-center" action="index.html" method="post">
                  <input type="text" className="form-control border-0 bg-transparent" placeholder="Sayısız Çeşit Arasında Arayın" />
                </form>
              </div>
              <div className="col-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"/></svg>
              </div>
            </div>
          </div>

          <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
            <div className={`${styles.supportBox} text-end d-none d-xl-block`}> {/* Updated to styles.supportBox */}
              <span className="fs-6 text-muted">Destek için</span>
              <h5 className="mb-0">+90-555555</h5>
            </div>

            <ul className="d-flex justify-content-end list-unstyled m-0">
              <li>
                <a href="#" className="rounded-circle bg-light p-2 mx-1">
                  <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#user"></use></svg>
                </a>
              </li>
              <li>
                <a href="#" className="rounded-circle bg-light p-2 mx-1">
                  <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#heart"></use></svg>
                </a>
              </li>
              <li className="d-lg-none">
                <a href="#" className="rounded-circle bg-light p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                  <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#cart"></use></svg>
                </a>
              </li>
              <li className="d-lg-none">
                <a href="#" className="rounded-circle bg-light p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch">
                  <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#search"></use></svg>
                </a>
              </li>
            </ul>

            <div className={`${styles.cart} text-end d-none d-lg-block dropdown`}> {/* Updated to styles.cart */}
              <button className="border-0 bg-transparent d-flex flex-column gap-2 lh-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                <span className="fs-6 text-muted dropdown-toggle">Sepet</span>
                <span className="cart-total fs-5 fw-bold">25₺</span>
              </button>
            </div>
          </div>

        </div>
      </div>
      <div className="container-fluid">
        <div className="row py-3">
          <div className="d-flex  justify-content-center justify-content-sm-between align-items-center">
            <nav className={`${styles.mainMenu} d-flex navbar navbar-expand-lg`}> {/* Updated to styles.mainMenu */}

              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className={`${styles.offcanvasNavbar} offcanvas offcanvas-end`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"> {/* Updated to styles.offcanvasNavbar */}

                <div className="offcanvas-header justify-content-center">
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body">

                  <select className={`${styles.filterCategories} filter-categories border-0 mb-0 me-5`}> {/* Updated to styles.filterCategories */}
                    <option>Kategoriler</option>
                    <option>Abiye</option>
                    <option>Eşofman Giyim</option>
                    <option>Üst Giyim</option>
                  </select>

                  <ul className={`${styles.menuList} navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0`}> {/* Updated to styles.menuList */}
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" role="button" id="pages" data-bs-toggle="dropdown" aria-expanded="false">Sayfalar</a>
                      <ul className="dropdown-menu" aria-labelledby="pages">
                        <li><a href="index.html" className="dropdown-item">Hakkımızda </a></li>
                        <li><a href="index.html" className="dropdown-item">Mağaza </a></li>
                        <li><a href="index.html" className="dropdown-item">Ürünler </a></li>
                        <li><a href="index.html" className="dropdown-item">Sepet </a></li>
                        <li><a href="index.html" className="dropdown-item">Satın Al </a></li>
                        <li><a href="index.html" className="dropdown-item">Blog </a></li>
                        <li><a href="index.html" className="dropdown-item">Kategorielr </a></li>
                        <li><a href="index.html" className="dropdown-item">İletişim </a></li>
                        <li><a href="index.html" className="dropdown-item">Hesabım </a></li>
                      </ul>
                    </li>
                    <li className="nav-item active">
                      <a href="#women" className="nav-link">Abiye</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a href="#men" className="nav-link">Eşofman Giyim</a>
                    </li>
                    <li className="nav-item">
                      <a href="#kids" className="nav-link">Üst Giyim</a>
                    </li>
                    <li className="nav-item">
                      <a href="#accessories" className="nav-link">Alt Giyim</a>
                    </li>
                    <li className="nav-item">
                      <a href="#brand" className="nav-link">Aksesuar</a>
                    </li>
                    <li className="nav-item">
                      <a href="#sale" className="nav-link">Takım</a>
                    </li>
                    <li className="nav-item">
                      <a href="#blog" className="nav-link">◆Çok Satanlar</a>
                    </li>
                  </ul>

                </div>

              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
