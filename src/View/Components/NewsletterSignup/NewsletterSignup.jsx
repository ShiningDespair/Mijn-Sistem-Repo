import React from 'react';
import styles from './NewsletterSignup.module.css';

const NewsletterSignup = () => {
  return (
    <section className="py-5">
      <div className="container-fluid">

        <div className="bg-secondary py-5 my-5 rounded-5" style={{background: "url('images/bg-leaves-img-pattern.png') no-repeat"}}>
          <div className="container my-5">
            <div className="row">
              <div className="col-md-6 p-5">
                <div className="section-header">
                  <h2 className="section-title display-4">Hemen ilk siparişinde<span className="text-primary">10% indirimi</span> kap.</h2>
                </div>
                <p>Bugün ve daha mutlu günlerinizde yanınızda olmaya tatlı bir başlangıç yapalım!.</p>
              </div>
              <div className="col-md-6 p-5">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">İsim</label>
                    <input type="text"
                      className="form-control form-control-lg" name="name" id="name" placeholder="İsim" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label> {/* Changed for to htmlFor */}
                    <input type="email" className="form-control form-control-lg" name="email" id="email" placeholder="abc@mail.com" />
                  </div>
                  <div className="form-check form-check-inline mb-3">
                    <label className="form-check-label" htmlFor="subscribe"> {/* Changed for to htmlFor */}
                    <input className="form-check-input" type="checkbox" id="subscribe" defaultValue="subscribe" /> {/* Changed value to defaultValue */}
                    Bültene abone ol</label>
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-dark btn-lg">Kaydol</button>
                  </div>
                </form>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default NewsletterSignup;
