import React, { useState, useEffect } from "react";
import { useSpring, useTransition, animated, config } from "react-spring";


import { motion } from "framer-motion";
// import TeamPage from "./sections/team";
import { Fade, Flip, Slide , Reveal  } from "react-reveal";

import FooterSection from "./components/footer";

import NavbarTwo from "./components/navbar-two";

function Header() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <Fade bottom>
      <div className="openingBox2">
        <p className="openingHead2">Sports Avalanche</p>
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
            <p className="displayBoxes-heading">Transperency</p>
            <p className="displayBoxes-text">
              We believe in an open and purely merit based system of talent
              evaluation.
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
            <p className="displayBoxes-heading">Dedication</p>
            <p className="displayBoxes-text">
              Our team is passionate and committed to creating better outcomes
              for sports professionals globally through the use of technology
              and innovation.
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
            <p className="displayBoxes-heading">Democratization</p>
            <p className="displayBoxes-text">
              We believe in creating access and providing equal opportunities
              for everyone, regardless of their backgrounds and identities.
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
            <p className="displayBoxes-heading">Dedication</p>
            <p className="displayBoxes-text">
              We believe in creating access and providing equal opportunities
              for everyone, regardless of their backgrounds and identities.
            </p>
          </div>
        </Flip>
      </li>
    </ul>
  );
};

const ImageTransition = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  useEffect(
    () => void setInterval(() => set((state) => (state + 1) % 4), 2000),
    []
  );
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      class="bg"
      style={{
        ...props,
        backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)`,
      }}
    />
  ));
};

export default function theMain() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <>
      <NavbarTwo />
      <div className="headerBox2">
        <div className="shiftBox">
          <div className="page-grid">
            <div className="left">
              <Header />
            </div>

            <div className="right"></div>
          </div>
        </div>
      </div>

      <div className="fitter">
        <div className="boxHeight">
          <div className="page-grid">
            <Fade left>
              <div className="left">
                <h3 className="h3text">What We Do</h3>
                <p className="pText">
                  Sports Avalanche Ltd is a Nigerian sports technology start up
                  with a diverse team of a Lawyer, a UEFA Accredited sports
                  journalist, Software developers, Interface designers and
                  seasoned Business advisors. We are focused on providing
                  digital solutions to the various problems’ sports enthusiasts
                  face across Africa and the world at large. Our flagship
                  product Ball
                </p>
              </div>
            </Fade>
            <div className="right"></div>
          </div>
        </div>
      </div>

      <div className="fitter">
        <div className="boxHeight">
          <div className="page-grid">
            <div className="left"></div>
            <Fade right>
              <div className="right">
                <h3 className="h3text">Our Vision</h3>
                <p className="pText">
                To be the number one database of both unprofessional and professional football talents 
                globally and become the premier investment platform for footballers
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <div className="fitter">
        <div className="boxHeight">
          <div className="page-grid">
            <Fade left>
              <div className="left">
                <h3 className="h3text">Our Mission</h3>
                <p className="pText">
                To be the number one database of both unprofessional and professional 
                football talents globally and become the premier investment platform for footballers
                </p>
              </div>
            </Fade>
            <div className="right"></div>
          </div>
        </div>
      </div>

      <div className="fitter">
        <div className="boxHeight">
          <>
            <div className="centerText-section">
              <div className="centerText-field">
                <Flip left>
                  <div className="centerText-container">
                    <h3 className="centerText-container-header">Our Values</h3>
                    <p className="centerText-container-text">
                      When you combine human excellence, expertise and
                      technology, this is what you get.
                    </p>
                  </div>
                </Flip>
              </div>
            </div>
          </>

          <animated.div style={props}>
            <BriefingSection />
          </animated.div>
        </div>
      </div>

      <div className="">
        <div className="signUp-section">
          <div className="centerText-section2">
            
            <div className="centerText-field">
              <div className="centerText-container">
              <Reveal effect="fadeInUp">
                <h3 className="centerText-container-header">Our Product</h3>
                <p className="centerText-container-text">
                  Connectiing aspiring football professionals to global
                  opportunitiess
                </p>

                <a
                href="./sections/ballHive"
                className="extra-button">Ball Hive</a>
                </Reveal>
              </div>
            </div>
          
            
          </div>
        </div>
      </div>

      <FooterSection />
    </>
  );
}
