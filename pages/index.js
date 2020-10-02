import React, { useState, useEffect } from "react";
import { useSpring, useTransition, animated, config } from "react-spring";
// import { Frame, Scroll } from "framer"
import { motion } from "framer-motion";
// import TeamPage from "./sections/team";

import FooterSection from "./components/footer";
import NavigationBar from "./components/nav";

import NavbarTwo from './components/navbar-two'


function Header() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <div className="openingBox2">
        <p className="openingHead2">Welcome to Sports Avalanche</p>
        <p className="openingText2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </p>
        <div className="openingButton-box">
          <a className="openingButton2">Get Started</a>
          </div>
      </div>
    </animated.div>
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
        <div className="displayBoxes-text-content">
          <div className="displayBoxes-icon">
            <motion.div
              className="img"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
            >
              <motion.img
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 200, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                src={Icon1}
                className="displayBoxes-icon-image"
              />
            </motion.div>
          </div>
          <p className="displayBoxes-heading">Lorem</p>
          <p className="displayBoxes-text">{brieftText}</p>
        </div>
      </li>

      <li className="displayBoxes-list">
        <div className="displayBoxes-text-content">
          <div className="displayBoxes-icon">
            <motion.div
              className="img"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
            >
              <motion.img
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 200, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                src={Icon2}
                className="displayBoxes-icon-image"
              />
            </motion.div>
          </div>
          <p className="displayBoxes-heading">Lorem</p>
          <p className="displayBoxes-text">{brieftText}</p>
        </div>
      </li>

      <li className="displayBoxes-list">
        <div className="displayBoxes-text-content">
          <div className="displayBoxes-icon">
            <motion.div
              className="img"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
            >
              <motion.img
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 200, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                src={Icon3}
                className="displayBoxes-icon-image"
              />
            </motion.div>
          </div>
          <p className="displayBoxes-heading">Lorem</p>
          <p className="displayBoxes-text">{brieftText}</p>
        </div>
      </li>

      <li className="displayBoxes-list">
        <div className="displayBoxes-text-content">
          <div className="displayBoxes-icon">
          <motion.div
              className="img"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
            >
              <motion.img
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 200, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                src={Icon3}
                src={Icon4} className="displayBoxes-icon-image"
              />
            </motion.div>
          
          </div>
          <p className="displayBoxes-heading">Lorem</p>
          <p className="displayBoxes-text">{brieftText}</p>
        </div>
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
            <div className="left">
              <h3 className="h3text">What We Do</h3>
              <p className="pText">
                Sports Avalanche Ltd is a Nigerian sports technology start up
                with a diverse team of a Lawyer, a UEFA Accredited sports
                journalist, Software developers, Interface designers and
                seasoned Business advisors. We are focused on providing digital
                solutions to the various problems’ sports enthusiasts face
                across Africa and the world at large. Our flagship product Ball
              
              </p>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>




      <div className="fitter">
        <div className="boxHeight">
          <div className="page-grid">
            <div className="left">
              
            </div>
            <div className="right">
            <h3 className="h3text">Our Mission</h3>
              <p className="pText">
                Sports Avalanche Ltd is a Nigerian sports technology start up
                with a diverse team of a Lawyer, a UEFA Accredited sports
                journalist, Software developers, Interface designers and
                seasoned Business advisors. We are focused on providing digital
                solutions to the various problems’ sports enthusiasts face
                across Africa and the world at large. Our flagship product Ball
              
              </p>
            </div>
          </div>
        </div>
      </div>

    
      <div className="fitter">
        <div className="boxHeight">
          <div className="page-grid">
            <div className="left">
            <h3 className="h3text">Our Vision</h3>
              <p className="pText">
                Thousands of aspiring football professionals do not go pro and
                are never able to harness their full potential. This is due to a
                plethora of reasons. First, there is an over reliance on
                intermediaries because players have no tailor made platform to
                directly put their talents on display, track their performances
                and network with people within the footballing industry. The
                second problem is the lack of funding, which makes players miss
                out on trial opportunities globally. This is as a result of the
                high financial risks involved in aimless travel to chase

              </p>
            </div>
            <div className="right">
              
            </div>
          </div>
        </div>
      </div>


      <div className="fitter">
        <div className="boxHeight">
          <>
            <div className="centerText-section">
              <div className="centerText-field">
                <div className="centerText-container">
                  <h3 className="centerText-container-header">Our Values</h3>
                  <p className="centerText-container-text">
                    When you combine human excellence, expertise and technology,
                    this is what you get.
                  </p>
                </div>
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
                  <h3 className="centerText-container-header">Our Products</h3>
                  <p className="centerText-container-text">
                    When you combine human excellence, expertise and technology,
                    this is what you get.
                  </p>

                  <a className="extra-button">
                  Our Product
                  </a>
                  
                </div>
              </div>
            </div>
        </div>
      </div>

     

      <div className="fitter">
        <div className="page-grid">
          <div className="left">
            <h3 className="h3text">Lorem Ipsum</h3>
            <p className="pText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
            </p>
          </div>
          <div className="right"></div>
        </div>
      </div>

      <FooterSection />
    </>
  );
}
