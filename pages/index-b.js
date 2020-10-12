import React, { useState, useEffect } from "react";
import { useSpring, useTransition, animated, config } from "react-spring";

import { motion } from "framer-motion";
// import TeamPage from "./sections/team";
import { Fade, Flip, Slide, Reveal } from "react-reveal";

import FooterSection from "./components/footer";
import { FcCheckmark } from "react-icons/fc";

import NavbarTwo from "./components/navbar-two";
import PageBoxes from "./components/page-boxes";



function Header() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <Fade bottom>
      <div
        className="openingBox2"
        // style={{}}
      >
        <p className="openingHead2">Sports Avalanche</p>
        <p className="openingText2">
          Connecting aspiring football professionals to global opportunities
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

      <div className="headerBox">
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

      <div className="page-container">
        <div className="boxHeight">
          <div className="page-grid-b">
            <Fade left>
              <div className="left">
                <h3 className="h3text">PLAYERS</h3>
                <p className="pText">
                  As an aspiring football professional, we help you build and
                  optimize your profile, upload highlight reels, track your
                  progress and performances and we help you showcase your talent
                  to a large network of scouts. Do you believe in your talent?
                  Kick start your career here:
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
                      Update and optimize your profile with our expert tips.
                    </li>
                    <li className="page-content-order-list">
                      <span>
                        <FcCheckmark />
                      </span>{" "}
                      Connect directly with scouts.
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
                    <li className="page-content-order-list">
                      <span>
                        <FcCheckmark />
                      </span>{" "}
                      Follow/track players progress and land a talent.
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
        <div className="boxHeight">
          <div className="page-grid-b">
            <Fade left>
              <div className="left">
                <h3 className="h3text">COACHES/MANAGERS</h3>
                <p className="pText">
                  For so long, tournament data and player records have been
                  poorly organized and managed. We are using advanced
                  technologies to help you track and manage tournament data,
                  player records and capture players brilliance to champion
                  their professional status. We are also enabling coaches and
                  aspiring soccer technicians build their profiles to track
                  growth and progress. For so long, tournament data and player
                  records have been poorly organized and managed. We are using
                  advanced technologies to help you track and manage tournament
                  data, player records and capture players brilliance to
                  champion their professional status. We are also enabling
                  coaches and aspiring soccer technicians build their profiles
                  to track growth and progress.
                </p>
                <div className="page-content-box">
                  <ul className="page-content-order">
                    <li className="page-content-order-list">
                      <span>
                        <FcCheckmark />
                      </span>{" "}
                      Create and update personal career profiles.
                    </li>
                    <li className="page-content-order-list">
                      <span>
                        <FcCheckmark />
                      </span>{" "}
                      Update tournament data.
                    </li>
                    <li className="page-content-order-list">
                      <span>
                        <FcCheckmark />
                      </span>{" "}
                      Track and manage important sporting events.
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
                <h3 className="h3text">SOCCER ACADEMIES/CLUBS</h3>
                <p className="pText">
                  We’re simplifying data storage for academies, our platform
                  will allow for academies and clubs to open pages, provide
                  frequent updates about their activities, upload mini player
                  profiles and data, and scout talents.
                </p>
                <div className="page-content-box">
                  <ul className="page-content-order">
                    <li className="page-content-order-list">
                      <span>
                        <FcCheckmark />
                      </span>{" "}
                      Showcase your players and various activities.
                    </li>
                    <li className="page-content-order-list">
                      <span>
                        <FcCheckmark />
                      </span>{" "}
                      Track performances of players, and coaches.
                    </li>
                    <li className="page-content-order-list">
                      <span>
                        <FcCheckmark />
                      </span>{" "}
                      Scout and attract young talents.
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

      <PageBoxes />

      {/* <div className="">
        <div className="signUp-section">
          <div className="centerText-section2">
            <div className="centerText-field">
              <div className="centerText-container">
                <Reveal effect="fadeInUp">
                  <h3 className="centerText-container-header">Product</h3>
                  <p className="centerText-container-text">
                    The Ball Hive app lets aspiring fooball players build their
                    professionl profile and gives scouts analysed reports on
                    these players and lets players and scouts connect with each
                    other
                  </p>

                  <a href="./sections/ballHive" className="extra-button">
                    Ball Hive
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div> */}


      <div className="">
        <div className="fitter">
          <div className="boxHeight">
            <>
              <div className="centerText-section">
                <div className="centerText-field">
                  <Flip left>
                    <div className="centerText-container">
                      <h3 className="centerText-container-header">
                        Our Values
                      </h3>
                      <p className="centerText-container-text">
                        We believe in the core values of:
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
      </div>




      <FooterSection />
    </>
  );
}
