import './Footer.css';

const Footer = () => {
  return (
    <div className="tooter__head" style={{marginTop: '20px'}}>
      <div className="footer__wrapper">
        <div className="footer__top" style={{ paddingTop: '20px' }}>
          <h2 style={{color: 'orange'}}>Nalwanga Bags</h2>
          <p>Quality We Serve</p>
          <div>
            <h2 style={{color: 'orange'}}>About Us</h2>
            <p>We are the leading online bag shop in Uganda, East-Africa</p>
          </div>
          <div>
            <h2 style={{color: 'orange'}}>Contact Us</h2>
            <p><i class="fas fa-phone-volume"></i> +256704647746</p> 
            <p><i class="fas fa-envelope-open-text"></i> nalwangabags@gmail.com</p>
          </div>
        </div>
        <div style={{ paddingTop: '20px' }}>
          <h2 style={{color: 'orange'}}>Informatiom</h2>
          <p>About Us</p>
          <p>Services</p>
          <p></p>
          <p></p>
        </div>
        <div style={{ paddingTop: '20px' }}>
          <h2 style={{color: 'orange'}}>Important Links</h2>
          <p>Services</p>
          <p>Support</p>
          <p>Term and Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="footer__sub">
          <h2 style={{color: 'orange'}}>Subscribe more Info</h2>
          <input type="email" placeholder="Enter your Email" /> <br />
          <button>Subscribe</button>
        </div>
      </div>
      <hr />
      <div className="footer__icon">
        <div>
        <i class="fab fa-facebook"></i> {" "}
        <i class="fab fa-twitter-square"></i>
        </div>
        <div>@Nalwanga 2022</div>
        <div className="footer__momo">
        <p>Mobile Money</p>
          <i class="fab fa-cc-visa"></i>
          <i class="fab fa-cc-mastercard"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
