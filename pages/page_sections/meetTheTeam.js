import React from "react";
import Slider from "react-slick";
1

const icon1 = 'https://prismic-io.s3.amazonaws.com/www-static/4083b409-5e65-4403-86a8-7ed8f501a0d8_icon-task-list-multiple.svg'
const icon2 = 'https://prismic-io.s3.amazonaws.com/www-static/1c791b14-833f-4190-a865-a55e11055fc0_icon-certified-certificate.svg'
const icon3 = 'https://prismic-io.s3.amazonaws.com/www-static/1c791b14-833f-4190-a865-a55e11055fc0_icon-certified-certificate.svg'
const icon4 = 'https://prismic-io.s3.amazonaws.com/www-static/1c791b14-833f-4190-a865-a55e11055fc0_icon-certified-certificate.svg'
const brieftText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'


const image1 = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

export default class Team extends React.Component {
  render() {
    
    return (
      <>
        
        <div className="team-container-fit">
        <div className="team-container">
              
         
            

              <div className="team-list-box">
                     <div className="team-box-content">
                       <div className="team-user-avatar">
                         <img src={image1}
                         className="team-user-avatar-image"/>
                         </div>
   
                       <div className="team-text-content">
                         <p className="team-text-heading">
                           Director
                         </p>
                         <p className="team-text">

                         </p>
                       </div>
                     </div>
                 </div>
   
                 <div className="team-list-box">
                     <div className="team-box-content">
                       <div className="team-user-avatar">
                         <img src={image1}
                         className="team-user-avatar-image"/>
                         </div>
   
                       <div className="team-text-content">
                         <p className="team-text-heading">
                           McTheebz
                         </p>
                       </div>
                     </div>
                 </div>
   
   
                 <div className="team-list-box">
                     <div className="team-box-content">
                       <div className="team-user-avatar">
                         <img src={image1}
                         className="team-user-avatar-image"/>
                         </div>
   
                       <div className="team-text-content">
                         <p className="team-text-heading">
                           McTheebz
                         </p>
                       </div>
                     </div>
                 </div>

                 <div className="team-list-box">
                     <div className="team-box-content">
                       <div className="team-user-avatar">
                         <img src={image1}
                         className="team-user-avatar-image"/>
                         </div>
   
                       <div className="team-text-content">
                         <p className="team-text-heading">
                           McTheebz
                         </p>
                       </div>
                     </div>
                 </div>
           </div>
        </div>
        

      </>
    );
  }
}