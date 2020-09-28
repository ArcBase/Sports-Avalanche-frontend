import React, { useState, useEffect } from "react";
import { useSpring, useTransition, animated, config } from "react-spring";

import BriefingSection from "./page_sections/briefSection";
import Team from "./page_sections/meetTheTeam";

function Header() {
  const props = useSpring({ opacity: 2, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <p className="openingHead">Welcome to sports Avalanche</p>
      <p className="openingText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et
      </p>
      <button className="custom-button">Get Started</button>
    </animated.div>
  );
}

const slides = [
  {
    id: 0,
    url:
      "photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i",
  },
  {
    id: 1,
    url:
      "photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80",
  },
  {
    id: 2,
    url: "reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80",
  },
  { id: 3, url: "photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80" },
];

// const ImageTransition = () => {
//   const [index, set] = useState(0);
//   const transitions = useTransition(slides[index], (item) => item.id, {
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 },
//     config: config.molasses,
//   });
//   useEffect(
//     () => void setInterval(() => set((state) => (state + 1) % 4), 2000),
//     []
//   );
//   return transitions.map(({ item, props, key }) => (
//     <animated.div
//       key={key}
//       class="bg"
//       style={{
//         ...props,
//         backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)`,
//       }}
//     />
//   ));
// };

export default function theMain() {
  const props = useSpring({ opacity: 2, from: { opacity: 0 } });
  return (
    <>
      <div className="headerBox">
        <div className="shiftBox">
          <div className="page-grid">
            <div className="left">
              <Header />
            </div>

            <div className="right"></div>
          </div>
        </div>
      </div>

      <div className="">
        <>
          <div className="centerText-section">
            <div className="centerText-field">
              <div className="centerText-container">
                <h3 className="centerText-container-header">Who are we</h3>
              </div>
            </div>
          </div>
        </>
        <Team />
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

      s<div className="fitter">
        <>
          <div className="centerText-section">
            <div className="centerText-field">
              <div className="centerText-container">
                <h3 className="centerText-container-header">Who are we</h3>
              </div>
            </div>
          </div>
        </>

        <animated.div style={props}>
          <BriefingSection />
        </animated.div>
      </div>

      <div className="fitter">
        <div className="page-grid">
          <div className="left"></div>
          <div className="right">
            <h3 className="h3text">Lorem Ipsum</h3>
            <p className="pText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="signUp-section">
          <div className="signUp-field">
            <div className="signUp-container">
              <h3 className="signUp-container-header">
                Start Selling Online for Free
              </h3>
              <a href="/vendor-signup">
                <button className="signUp-button">Get started for free</button>
              </a>
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
    </>
  );
}
