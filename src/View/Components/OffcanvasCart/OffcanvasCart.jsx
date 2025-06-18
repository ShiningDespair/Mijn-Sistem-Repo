import React from 'react';
import styles from './OffcanvasCart.module.css';

// Placeholder for IconifyIcon if you use it for icons
// const IconifyIcon = ({ icon }) => <i className={icon}></i>; // Example basic placeholder

const OffcanvasCart = () => {
  // Sample cart items - in a real app, this would come from state or props
  const cartItems = [
    { id: 1, name: 'Kırmızı Abiye', quantity: 1, price: 1200.00, image: 'images/product-item-sm.jpg', size: 'M', color: 'Kırmızı' },
    { id: 2, name: 'Siyah Günlük Elbise', quantity: 1, price: 850.00, image: 'images/product-item-sm-2.jpg', size: 'L', color: 'Siyah' },
    { id: 3, name: 'Beyaz Basic T-shirt', quantity: 2, price: 250.00, image: 'images/product-item-sm-3.jpg', size: 'S', color: 'Beyaz' },
  ];

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasCart" aria-labelledby="offcanvasCartLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasCartLabel">Sepetim ({totalItems})</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        {cartItems.length === 0 ? (
          <p className="text-center">Sepetinizde ürün bulunmamaktadır.</p>
        ) : (
          <div className="list-group list-group-flush">
            {cartItems.map(item => (
              <div key={item.id} className="list-group-item d-flex align-items-start py-3 px-0">
                <img src={item.image} alt={item.name} className={`${styles.cartItemImage} img-fluid`} /> {/* Applied styles.cartItemImage */}
                <div className="me-auto">
                  <h6 className="fw-bold mb-1">{item.name}</h6>
                  {item.size && <span className="text-muted d-block mb-1">Beden: {item.size}</span>}
                  {item.color && <span className="text-muted d-block mb-1">Renk: {item.color}</span>}
                  <span className="text-muted d-block">Adet: {item.quantity}</span>
                </div>
                <div className="text-end ms-3">
                  <span className="fw-bold d-block">₺{item.price.toFixed(2)}</span>
                  {/* Simplified: In a real app, quantity changes would update state */}
                  <div className={`input-group mt-2 ${styles.productQtyInputContainer}`}>
                    <span className="input-group-btn">
                      <button type="button" className={`btn btn-sm btn-outline-secondary ${styles.btnNumber}`} data-type="minus">
                        {/* Replace with actual icon if available, e.g., <IconifyIcon icon="mdi:minus" /> */}
                        -
                      </button>
                    </span>
                    <input
                      type="text"
                      name={`quantity-${item.id}`}
                      className={`form-control form-control-sm text-center ${styles.quantityInput}`}
                      defaultValue={item.quantity}
                      readOnly
                    />
                    <span className="input-group-btn">
                      <button type="button" className={`btn btn-sm btn-outline-secondary ${styles.btnNumber}`} data-type="plus">
                        {/* Replace with actual icon if available, e.g., <IconifyIcon icon="mdi:plus" /> */}
                        +
                      </button>
                    </span>
                  </div>
                </div>
                <button type="button" className="btn-close ms-3" aria-label="Remove item" style={{fontSize: '0.75rem'}}></button>
              </div>
            ))}
          </div>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className={`offcanvas-footer mt-auto p-3 border-top ${styles.cartFooter}`}>
          <div className="d-flex justify-content-between fw-bold mb-3">
            <span>Ara Toplam:</span>
            <span>₺{subtotal.toFixed(2)}</span>
          </div>
          <div className="d-grid gap-2">
            <a href="cart.html" className="btn btn-primary">Sepeti Görüntüle</a>
            <a href="checkout.html" className="btn btn-outline-primary">Ödemeye Geç</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default OffcanvasCart;
