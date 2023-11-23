import React from "react";
import "./footer.css";

function Footer() {
  return (
    <section>
      <footer className="wrapper">
        <div className="footer-container flex flex-wrap justify-between">
          <div className="list">
            <h2>Shop Online Map</h2>
            <ul>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
              <li>
                <a>Sale in OnlineShop</a>
              </li>
              <li>
                <a>Career Opportunities</a>
              </li>
            </ul>
          </div>
          <div className="list">
            <h2>Customer Services</h2>
            <ul>
              <li>
                <a>Common Questions</a>
              </li>
              <li>
                <a>Return Procedures</a>
              </li>
              <li>
                <a>Return Policies</a>
              </li>
            </ul>
          </div>
          <div className="list">
            <h2>Shopping Guide</h2>
            <ul>
              <li>
                <a>How To Place Order</a>
              </li>
              <li>
                <a>Order Submission Procedure</a>
              </li>
              <li>
                <a>Payment Methods</a>
              </li>
            </ul>
          </div>
        </div>

        <p className="copy-write">
          © 2023 OnlineShop. All rights reserved - Designed and Developed By
          <b> Oghomena</b>
        </p>
      </footer>
    </section>
  );
}

export default Footer;
