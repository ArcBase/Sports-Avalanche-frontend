
import NavbarTwo from "../../components/navbar-two";
import FooterSection from "../../components/footer";
import { Fade, Flip, Slide, Reveal } from "react-reveal";

import Link from "next/link";


const potrait =
"https://www.duckerfrontier.com/wp-content/uploads/2019/01/Chris-Fisher225x225.png";
const AttorneyF_Image =
"https://newsletter-images-precise.s3.eu-west-2.amazonaws.com/Avalanche/attorf.jfif";


const instagramIcon =
  "https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-512.png";
const linkedInicon =
  "https://cdn.iconscout.com/icon/free/png-64/linkedin-1464529-1239440.png";
const twitterIcon =
  "https://cdn.iconscout.com/icon/free/png-64/twitter-1464537-1239448.png";


function AttorneyF(){
  
    return(
        <>
        <NavbarTwo/>
        <div className="startUpTeam-section">
                 <ul className="startUpTeam-container">
                   <Slide bottom>
                     <li className="startUpTeam-list">
                       <div className="startUpTeam-box">
                         <div className="startUpTeam-image-box">
                           <img src={AttorneyF_Image} className="startUpTeam-image" />
                         </div>
       
                         <div className="startUpTeam-box-text-content">
                           <p className="startUpTeam-box-heading">CO-FOUNDER & CEO</p>
                           <p className="startUpTeam-box-text">
                            Okom Faithfulness is an alumnus of the University of Calabar.
                              He is Lawyer (with interests in Sports and Intellectual Property Law) and an Entrepreneur.
                               He did his National Youth Service in the Faculty of Law, University of Lagos, where he served as an assistant lecturer.
                                While doing his LLB, he was an active member of the UNICAL Debating club, where he honed his critical thinking and leadership skills.
                                 In 5 years of competitive debating, he participated in over 35 tournaments across the globe. Prominent amongst them are the Harvard Invitational held in Boston,
                                  the HWS IV in New York and several tournaments across Africa including the Pan African Championships held in Ghana.
                              He has won 12 debating trophies, the most by any African speaker in history. He is passionate about sports and began football punditry in high school making a few appearances on Cross River Broadcasting Corporation (CRBC) TV along the line.
                                Ball Hive is a project dear to his heart, it is a project through which he expects to have a concrete platform to help sports enthusiasts benefit from innovation, and generally democratize access to opportunities in the industry.
                           </p>
                           <div className="startUpTeam-box-socials">
                             <div className="startUpTeam-box-socials-image-content">
                               <img
                                 src={instagramIcon}
                                 className="startUpTeam-box-socials-image"
                               />
                             </div>
       
                             <div className="startUpTeam-box-socials-image-content">
                               <img
                                 src={linkedInicon}
                                 className="startUpTeam-box-socials-image"
                               />
                             </div>
       
                             <div className="startUpTeam-box-socials-image-content">
                               <img
                                 src={twitterIcon}
                                 className="startUpTeam-box-socials-image"
                               />
                             </div>
                           </div>
                         </div>
                       </div>
                     </li>
                   </Slide>
              
       
                  
                 </ul>
               </div>
           </>
    )
}

export default function Memberbio(){
    return(
        <>  
        <AttorneyF/>

        </>
    )   
}