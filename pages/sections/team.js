import React,{useState} from 'react'
import { motion } from "framer-motion";
import NavigationBar from '../components/nav'

import { useSpring, useTransition, animated, config } from "react-spring";

import FooterSection from "../components/footer";


let easing = [0.6, -0.05, 0.01, 0.99];  
const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.05
      }
    }
  }; 
  
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing }
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing
      }
    }
  };

 function TeamHeader() {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });
    return (
      <animated.div style={props}>
        <div className="openingBox">
          <p className="openingHead">Meet the Team</p>
          <p className="openingText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
          <div className="openingButton-box">
          <a className="openingButton">Get Started</a>
          </div>
          
        </div>
      </animated.div>
    );
  }
  
function TeamSections(){
    const potraitPic = 'https://www.duckerfrontier.com/wp-content/uploads/2019/01/Chris-Fisher225x225.png'
    return(
      <>
          <div className="">
            <ul className="team-container">
                <li className="team-list-box">
                    <div className="team-box-content">
                        <div className="team-user-avatar">
                          <img 
                          src={potraitPic}
                          className="team-user-avatar-image" />
                        </div>
                        <div className="team-text-content">
                          <p className="team-text-heading">
                            Software Engineer
                          </p>
                          <p className="team-text">
                            Jane Doe
                          </p>
                        </div>
                    </div>
                </li>

                <li className="team-list-box">
                    <div className="team-box-content">
                        <div className="team-user-avatar">
                          <img 
                          src={potraitPic}
                          className="team-user-avatar-image" />
                        </div>
                        <div className="team-text-content">
                          <p className="team-text-heading">
                            Software Engineer
                          </p>
                          <p className="team-text">
                            Jane Doe
                          </p>
                        </div>
                    </div>
                </li>


    

                <li className="team-list-box">
                    <div className="team-box-content">
                        <div className="team-user-avatar">
                          <img 
                          src={potraitPic}
                          className="team-user-avatar-image" />
                        </div>
                        <div className="team-text-content">
                          <p className="team-text-heading">
                            Software Engineer
                          </p>
                          <p className="team-text">
                            Jane Doe
                          </p>
                        </div>
                    </div>
                </li>

            </ul>
          </div>
      </>
    )
}

const instagramIcon = 'https://cdn.iconscout.com/icon/premium/png-64-thumb/instagram-1805197-1532288.png'
const linkedInicon = 'https://cdn.iconscout.com/icon/free/png-64/linkedin-1464529-1239440.png'
const twitterIcon = 'https://cdn.iconscout.com/icon/free/png-64/twitter-1464537-1239448.png'

export default function TeamPage(){
    const potrait = 'https://www.duckerfrontier.com/wp-content/uploads/2019/01/Chris-Fisher225x225.png'
    return(
        <>
         <NavigationBar />
 

        <div className="teamBox">
        <div className="shiftBox">
          <div className="page-grid">
            <div className="left">
            <TeamHeader/>
            </div>

            <div className="right"></div>
          </div>
        </div>
      </div>


        <div className='fitter'>
                

         <div className="centerText-section">
              <div className="centerText-field">
                <div className="centerText-container">
                  <h3 className="centerText-container-header ">Our Team</h3>
                  <p className="centerText-container-text">
                    
                  
                  </p>
                </div>
              </div>
            </div>
        <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
        <div className="startUpTeam-section">
              <ul className="startUpTeam-container">

              <motion.div variants={fadeInUp}>
                    <li className="startUpTeam-list">
                        <div className="startUpTeam-box">
                            <div className="startUpTeam-image-box">
                            <img src={potrait}
                             className="startUpTeam-image" />
                            </div>

                            <div className="startUpTeam-box-text-content">
                                <p className="startUpTeam-box-heading">
                                     Dummy
                                </p>
                                <p className="startUpTeam-box-text">
                                Sports Avalanche Ltd is a Nigerian sports technology start up
                with a diverse team of a Lawyer, a UEFA Accredited sports
                journalist, Software developers, Interface designers and
                seasoned Business advisors. We are focused on providing digital
                                </p>
                                <div className="startUpTeam-box-socials">
                                <div className="startUpTeam-box-socials-image-content">
                                  <img src={instagramIcon} className="startUpTeam-box-socials-image" />
                                </div>

                                <div className="startUpTeam-box-socials-image-content">
                                  <img src={linkedInicon} className="startUpTeam-box-socials-image" />
                                </div>
                                
                                <div className="startUpTeam-box-socials-image-content">
                                  <img src={twitterIcon} className="startUpTeam-box-socials-image" />
                                </div>

                                
                            </div>
                            </div>
                        </div>
                    </li>


                    </motion.div>
                    <motion.div variants={fadeInUp}>
                
                    <li className="startUpTeam-list">
                        <div className="startUpTeam-box">
                            <div className="startUpTeam-image-box">
                            <img  src={potrait} className="startUpTeam-image" />
                            </div>

                            <div className="startUpTeam-box-text-content">
                                <p className="startUpTeam-box-heading">
                                    Dummy
                                </p>
                                <p className="startUpTeam-box-text">
                                Sports Avalanche Ltd is a Nigerian sports technology start up
                with a diverse team of a Lawyer, a UEFA Accredited sports
                journalist, Software developers, Interface designers and
                seasoned Business advisors. We are focused on providing digital
                                </p>
                                <div className="startUpTeam-box-socials">
                              
                                <div className="startUpTeam-box-socials-image-content">
                                  <img src={instagramIcon} className="startUpTeam-box-socials-image" />
                                </div>

                                <div className="startUpTeam-box-socials-image-content">
                                  <img src={linkedInicon} className="startUpTeam-box-socials-image" />
                                </div>
                                
                                <div className="startUpTeam-box-socials-image-content">
                                  <img src={twitterIcon} className="startUpTeam-box-socials-image" />
                                </div>

                                
                            </div>

                            </div>
                        </div>
                    </li>
                    </motion.div>
                    
                   

                <motion.div variants={fadeInUp}>
                
                <li className="startUpTeam-list">
                    <div className="startUpTeam-box">
                        <div className="startUpTeam-image-box">
                        <img  src={potrait} className="startUpTeam-image" />
                        </div>

                        <div className="startUpTeam-box-text-content">
                            <p className="startUpTeam-box-heading">
                                Dummy
                            </p>
                            <p className="startUpTeam-box-text">
                            Sports Avalanche Ltd is a Nigerian sports technology start up
            with a diverse team of a Lawyer, a UEFA Accredited sports
            journalist, Software developers, Interface designers and
            seasoned Business advisors. We are focused on providing digital
                            </p>
                            <div className="startUpTeam-box-socials">
                                <div className="startUpTeam-box-socials-image-content">
                                  <img src={instagramIcon} className="startUpTeam-box-socials-image" />
                                </div>

                                <div className="startUpTeam-box-socials-image-content">
                                  <img src={linkedInicon} className="startUpTeam-box-socials-image" />
                                </div>
                                
                                <div className="startUpTeam-box-socials-image-content">
                                  <img src={twitterIcon} className="startUpTeam-box-socials-image" />
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </li>
                </motion.div>

              </ul>
        </div>
        </motion.div>
        </div>

        <div className="team-container-fit">
          <TeamSections/>
        </div>

        <FooterSection/>
        </>
    )
}