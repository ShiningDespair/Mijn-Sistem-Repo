import React, { useState } from 'react'; // Import useState
import styles from './OffcanvasCart.module.css';

// Placeholder for IconifyIcon if you use it for icons
// const IconifyIcon = ({ icon }) => <i className={icon}></i>; // Example basic placeholder

const initialCartItems = [ // Initial data for the cart
  { id: 1, name: 'Kırmızı Abiye', quantity: 1, price: 1200.00, image: 'images/product-item-sm.jpg', size: 'M', color: 'Kırmızı' },
  { id: 2, name: 'Siyah Günlük Elbise', quantity: 1, price: 850.00, image: 'images/product-item-sm-2.jpg', size: 'L', color: 'Siyah' },
  { id: 3, name: 'Beyaz Basic T-shirt', quantity: 2, price: 250.00, image: 'images/product-item-sm-3.jpg', size: 'S', color: 'Beyaz' },
];

const OffcanvasCart = () => {
  const [currentCartItems, setCurrentCartItems] = useState(initialCartItems);

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedQuantity = Math.max(1, newQuantity); // Ensure quantity is at least 1
    setCurrentCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: updatedQuantity } : item
      )
    );
  };

  const incrementQuantity = (itemId) => {
    const item = currentCartItems.find(i => i.id === itemId);
    if (item) {
      handleQuantityChange(itemId, item.quantity + 1);
    }
  };

  const decrementQuantity = (itemId) => {
    const item = currentCartItems.find(i => i.id === itemId);
    if (item) {
      handleQuantityChange(itemId, item.quantity - 1);
    }
  };

  // Recalculate totalItems and subtotal based on currentCartItems state
  const totalItems = currentCartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = currentCartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasCart" aria-labelledby="offcanvasCartLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasCartLabel">Sepetim ({totalItems})</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        {currentCartItems.length === 0 ? (
          <p className="text-center">Sepetinizde ürün bulunmamaktadır.</p>
        ) : (
          <div className="list-group list-group-flush">
            {currentCartItems.map(item => (
              <div key={item.id} className="list-group-item d-flex align-items-start py-3 px-0">
                <img src={item.image} alt={item.name} className={`${styles.cartItemImage} img-fluid`} />
                <div className="me-auto">
                  <h6 className="fw-bold mb-1">{item.name}</h6>
                  {item.size && <span className="text-muted d-block mb-1">Beden: {item.size}</span>}
                  {item.color && <span className="text-muted d-block mb-1">Renk: {item.color}</span>}
                  <span className="text-muted d-block">Adet: {item.quantity}</span>
                </div>
                <div className="text-end ms-3">
                  <span className="fw-bold d-block">₺{(item.price * item.quantity).toFixed(2)}</span> {/* Display item total price */}
                  <div className={`input-group mt-2 ${styles.productQtyInputContainer}`}>
                    <span className="input-group-btn">
                      <button
                        type="button"
                        className={`btn btn-sm btn-outline-secondary ${styles.btnNumber}`}
                        data-type="minus"
                        onClick={() => decrementQuantity(item.id)}
                      >
                        -
                      </button>
                    </span>
                    <input
                      type="text"
                      name={`quantity-${item.id}`}
                      className={`form-control form-control-sm text-center ${styles.quantityInput}`}
                      value={item.quantity} // Use value instead of defaultValue
                      readOnly
                    />
                    <span className="input-group-btn">
                      <button
                        type="button"
                        className={`btn btn-sm btn-outline-secondary ${styles.btnNumber}`}
                        data-type="plus"
                        onClick={() => incrementQuantity(item.id)}
                      >
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
      {currentCartItems.length > 0 && (
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
