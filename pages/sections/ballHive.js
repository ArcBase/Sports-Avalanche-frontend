import NavbarTwo from "../components/navbar-two";
import { Fade, Flip, Slide, Reveal } from "react-reveal";
import FooterSection from '../components/footer'
import { FcCheckmark  } from "react-icons/fc";
import {} from '@fortawesome/fontawesome-svg-core'


function Header() {
  // const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <Fade bottom>
      <div
        className="openingBox2"
        // style={{}}
      >
        <p className="openingHead2">Ball Hive</p>
        <p className="openingText2">
          Solving Problems in Sports with Innovative tech solution
        </p>
        <div className="openingButton-box">
          <a className="openingButton2">Get Started</a>
        </div>
      </div>
    </Fade>
  );
}

function BallHIveValues() {
  return (
    <div className="">
      <ul className="ballHive-cards-container">
        <li className="ballHive-cards-list">
          <div className="ballHive-cards-image-icon">
            <img
              src="https://tonsser.com/assets/web/home/player-9d188de20b6268ae2c96c26bb29923ab7a9024db0cabdae78ac5890d2d4d7e64.png"
              className="ballHive-cards-image"
            />
          </div>
          <div className="ballHive-cards-content">
            <p className="ballHive-cards-content-text">Lorem Ipsum</p>
            <div className="ballHive-cards-content-button-container">
              <a className="ballHive-cards-content-button">Demo</a>
            </div>
          </div>
        </li>

        <li className="ballHive-cards-list">
          <div className="ballHive-cards-image-icon">
            <img
              src="https://tonsser.com/assets/web/home/player-9d188de20b6268ae2c96c26bb29923ab7a9024db0cabdae78ac5890d2d4d7e64.png"
              className="ballHive-cards-image"
            />
          </div>
          <div className="ballHive-cards-content">
            <p className="ballHive-cards-content-text">Lorem Ipsum</p>
            <div className="ballHive-cards-content-button-container">
              <a className="ballHive-cards-content-button">Demo</a>
            </div>
          </div>
        </li>

        <li className="ballHive-cards-list">
          <div className="ballHive-cards-image-icon">
            <img
              src="https://tonsser.com/assets/web/home/player-9d188de20b6268ae2c96c26bb29923ab7a9024db0cabdae78ac5890d2d4d7e64.png"
              className="ballHive-cards-image"
            />
          </div>
          <div className="ballHive-cards-content">
            <p className="ballHive-cards-content-text">Lorem Ipsum</p>
            <div className="ballHive-cards-content-button-container">
              <a className="ballHive-cards-content-button">Demo</a>
            </div>
          </div>
        </li>
        <li className="ballHive-cards-list">
          <div className="ballHive-cards-image-icon">
            <img
              src="https://tonsser.com/assets/web/home/player-9d188de20b6268ae2c96c26bb29923ab7a9024db0cabdae78ac5890d2d4d7e64.png"
              className="ballHive-cards-image"
            />
          </div>
          <div className="ballHive-cards-content">
            <p className="ballHive-cards-content-text">Lorem Ipsum</p>
            <div className="ballHive-cards-content-button-container">
              <a className="ballHive-cards-content-button">Demo</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
 
const BriefingSection = () => {
  const brieftText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod aliqua. Ut enim ad minim veniam, quis";
  const Icon1 =
    "https://operapay.com/static/entrepreneurship-d58f1f92c1e1610bf94c0c4f52df42ac.png";
  const Icon2 =
    "https://operapay.com/static/diversity-adf7cb76247cac698f4b9728d9093558.png";
  const Icon3 =
    "https://operapay.com/static/innovation-2d24351f8b17ca734e10ce320b8dca6d.png";
  const Icon4 =
    "https://operapay.com/static/community-04b9cf599f180bb56b2fef2dc4e6ce20.png";
  return (
    <ul className="displayBoxes-box">
      <li className="displayBoxes-list">
        <Flip bottom>
          <div className="displayBoxes-text-content">
            <div className="displayBoxes-icon">
              <img src={Icon1} className="displayBoxes-icon-image" />
            </div>
            <p className="displayBoxes-heading">PLAYER</p>
            <p className="displayBoxes-text">
              
            </p>
          </div>
        </Flip>
      </li>
      <li className="displayBoxes-list">
        <Flip bottom>
          <div className="displayBoxes-text-content">
            <div className="displayBoxes-icon">
              <img src={Icon2} className="displayBoxes-icon-image" />
            </div>
            <p className="displayBoxes-heading">Scout</p>
            <p className="displayBoxes-text">
            
            </p>
        
          </div>
        </Flip>
      </li>

      <li className="displayBoxes-list">
        <Flip bottom>
          <div className="displayBoxes-text-content">
            <div className="displayBoxes-icon">
              <img src={Icon2} className="displayBoxes-icon-image" />
            </div>
            <p className="displayBoxes-heading">
              Coach/Manager
            </p>
            <p className="displayBoxes-text">
           
            </p>
          </div>
        </Flip>
      </li>

      <li className="displayBoxes-list">
        <Flip bottom>
          <div className="displayBoxes-text-content">
            <div className="displayBoxes-icon">
              <img src={Icon2} className="displayBoxes-icon-image" />
            </div>
            <p className="displayBoxes-heading">
              Academia
            </p>
            <p className="displayBoxes-text">
              
            </p>
          </div>
        </Flip>
      </li>
    </ul>
  );
};




function BallHiveIntro() {
  return (
    <>
      <div className="ballHive-intro-container">
        <div className="ballHive-intro-image">
          <img
            src="https://newsletter-images-precise.s3.eu-west-2.amazonaws.com/Avalanche/Asset+2%403x.png"
            className="ballHive-intro-logo"
          />
        </div>
        <div className="ballHive-intro-text-content">
          <p className="ballHive-intro-heading">Ball Hive</p>
          <p className="ballHive-intro-text">
            rem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco l
          </p>
        </div>
      </div>
    </>
  );
}

export default function BallHivePage() {
  return (
    <>
      <NavbarTwo />
      <div className="headerBox2">
        <div className="shiftBox">
          <div className="page-container">
            <div className="page-grid">
              <div className="left">
                <Header />
              </div>

              <div className="right"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="fitter">
        <BallHiveIntro />
      </div>



      <div className="fitter">
        <div style={{ paddingTop: 20 }} className="page-grid">
          <div className="left">
            <p className="h3text">Ball Hive</p>
            <p className="pText">
              Our Flagship product “BALL HIVE” is an app that lets aspiring
              football players create profiles, upload content like highlight
              reels and workout routines, track performances by uploading
              individual statistics vetted by teammates and coaches, and gives
              exclusive information about various football trials near them. The
              app also gives them the capacity to directly connect with other
              players, coaches and scouts. The app also allows users document
              tournament data by allowing participants of tournaments create
              
              competitions and upload data about best performances and
            </p>
          </div>

          <div className="right">
            <div className="page-grid-image-container">
              {/* <img
                src="https://www.mockupworld.co/wp-content/uploads/dynamic/2020/07/free-isometric-iphone-mockup-psd-690x455-c-default.jpg"
                className="page-grid-image"
              /> */}
            </div>
          </div>
        </div>
      </div>


      <div className="page-container">
        <div className="boxHeight">
          <div className="page-grid-b">
            <Fade left>
              <div className="left">
                <h3 className="h3text">Programs</h3>
                <p className="pText">
                  As an aspiring football professional, we help you build and
                  optimize your profile, upload highlight reels, track your
                  progress and performances .
                </p>
                <div className="page-content-box">
                  <ul className="page-content-order">
                    <li className="page-content-order-list">
                      <span>
                        <FcCheckmark />
                      </span>{" "}
                      Create your profile.
                    </li>
                  
                    <li className="page-content-order-list">
                      <span>
                        <FcCheckmark />
                      </span>{" "}
                      Benefit from our unending pool of opportunities.{" "}
                    </li>
                  </ul>
                </div>
                <div className="page-content-button-box">
                  <a className="page-content-button">Get Started</a>
                </div>
              </div>
            </Fade>
            <div className="right"></div>
          </div>
        </div>
      </div>


      <div className="fitter">
        <div className="boxHeight">
          <div className="page-grid-b">
            <div className="left"></div>
            <Fade right>
              <div className="right">
                <h3 className="h3text">SCOUTS</h3>
                <p className="pText">
                  We are leveraging on technology to improve scouting by giving
                  scouts access to a broad and diverse database of talents. We
                  are creating a platform for millions of talents to prove
                  themselves to scouts.
                </p>
                <div className="page-content-box">
                  <ul className="page-content-order">
                    <li className="page-content-order-list">
                      <span>
                        <FcCheckmark />
                      </span>{" "}
                      Get access to our pool of talents and study expert reports
                      and analytics.{" "}
                    </li>
                    <li className="page-content-order-list">
                      <span>
                        <FcCheckmark />
                      </span>{" "}
                      Use our advance search filter to find talents that fit
                      your requirements.
                    </li>
                   
                  </ul>
                </div>
                <div className="page-content-button-box">
                  <a className="page-content-button">Get Started</a>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>



              <div className="fitter">
                <BriefingSection/>
              </div>

        <FooterSection/>

    </>
  );
}
 