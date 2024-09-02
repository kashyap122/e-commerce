import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div class="footer-row">
        <div class="footer-col">
          <h4>Info</h4>
          <ul class="links">
            <li><a href="">About Us</a></li>
            <li><a href="">Compressions</a></li>
            <li><a href="">Customers</a></li>
            <li><a href="">Service</a></li>
            <li><a href="">Collection</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Explore</h4>
          <ul class="links">
            <li><a href="">Free Designs</a></li>
            <li><a href="">Latest Designs</a></li>
            <li><a href="">Themes</a></li>
            <li><a href="">Popular Designs</a></li>
            <li><a href="">Art Skills</a></li>
            <li><a href="">New Uploads</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Legal</h4>
          <ul class="links">
            <li><a href="">Customer Agreement</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">GDPR</a></li>
            <li><a href="">Security</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Media Kit</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Connect with Us</h4>
          <ul className='links'>
            <li><a href="">ok</a></li>
            <li><a href="">ok</a></li>
            <li><a href="">ok</a></li>
            <li><a href="">ok</a></li>
            <li><a href="">ok</a></li>
            <li><a href="">ok</a></li>
          </ul>          
        </div>
      </div>
    </div>
  )
}

export default Footer