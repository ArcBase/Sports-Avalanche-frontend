
import NavbarTwo from "../../components/navbar-two";
import FooterSection from "../../components/footer";
import { Fade, Flip, Slide, Reveal } from "react-reveal";

import Link from "next/link";

const potrait =
"https://www.duckerfrontier.com/wp-content/uploads/2019/01/Chris-Fisher225x225.png";
const AttorneyF_Image =
"https://newsletter-images-precise.s3.eu-west-2.amazonaws.com/Avalanche/AttroneyF.jpeg";


const instagramIcon =
  "https://cdn.iconscout.com/icon/premium/png-64-thumb/instagram-1805197-1532288.png";
const linkedInicon =
  "https://cdn.iconscout.com/icon/free/png-64/linkedin-1464529-1239440.png";
const twitterIcon =
  "https://cdn.iconscout.com/icon/free/png-64/twitter-1464537-1239448.png";


export default function omahBio(){
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
                           <p className="startUpTeam-box-heading">CEO , Founder</p>
                           <p className="startUpTeam-box-text">
                             Faithfulness is an alumnus of the University of Calabar.
                             He is Lawyer (with interests in Sports and Intellectual
                             Property Law) and an Entrepreneur. He did his National
                             Youth Service in the Faculty of Law, University of Lagos,
                             where he served as an assistant lecturer. While doing his
                             LLB, he was an active member of the UNICAL Debating club,
                             where he honed his critical thinking and leadership
                             skills.
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