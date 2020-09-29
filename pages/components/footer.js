export default function   FooterSection(){
    return(
        <>

<footer>
  <div className="main-content">
    <div className="left box">
      <h2>About Us</h2>
      <div className="content">
        <p>We are solving problems in sports with innovative tech solutions</p>
        <div className="social">
          <a href="#"><span className="fab fa-facebook-f"></span></a>
          <a href="#"><span className="fab fa-twitter"></span></a>
          <a href="#"><span className="fab fa-instagram"></span></a>
          <a href="#"><span className="fab fa-youtube"></span></a>
        </div>
      </div>
    </div>
    <div className="center box">
      <h2>Address</h2>
      <div className="content">
        <div className="place">
          <span className="fas fa-map-marker-alt"></span>
          <span className="text">NO. 1 Obadiah Street, Akoka, Lagos</span>
        </div>

        <div className="phone">
          <span className="fas fa-phone-alt"></span>
          <span className="text">+234 906 382 4036, +49 152 5721 5907</span>
        </div>

        <div className="email">
          <span className="fas fa-envelope"></span>
          <span className="text">Thesportsavalanche@gmail.com</span>
        </div>
      </div>
    </div>
    <div className="right box">
      <h2>Contact Us</h2>
      <div className="content">
        <form action="#">
          <div className="form-email">
            <div className="text">Email *</div>
            <input type="email" required />
          </div>
          <div className="msg">
            <div className="text">Message *</div>
            <textarea cols="25" rows="2" required></textarea>
          </div>
          <div className="btn">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div className="bottom">
    <center>
      <span className="credit"><a href="#">Sports Avalanche</a> | </span>
      <span className="far fa-copyright"></span
      ><span> 2020 All rights reserved.</span>
    </center>
  </div>
</footer>


        </>
    )
}