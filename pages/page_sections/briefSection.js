
const icon1 = 'https://prismic-io.s3.amazonaws.com/www-static/4083b409-5e65-4403-86a8-7ed8f501a0d8_icon-task-list-multiple.svg'
const icon2 = 'https://prismic-io.s3.amazonaws.com/www-static/1c791b14-833f-4190-a865-a55e11055fc0_icon-certified-certificate.svg'
const icon3 = 'https://prismic-io.s3.amazonaws.com/www-static/1c791b14-833f-4190-a865-a55e11055fc0_icon-certified-certificate.svg'
const icon4 = 'https://prismic-io.s3.amazonaws.com/www-static/1c791b14-833f-4190-a865-a55e11055fc0_icon-certified-certificate.svg'

const BriefingSection =()=>{
    const brieftText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt quis'
    return(
         <ul className="displayBoxes-box">
            <li className="displayBoxes-list">
              <div className="displayBoxes-text-content">
                <div className="displayBoxes-icon">
                  <img src={icon1} className="" />
                </div>
                <p className="displayBoxes-heading">Lorem</p>
                <p className="displayBoxes-text">
                    {brieftText}
                </p>
              </div>
            </li>

            <li className="displayBoxes-list">
              <div className="displayBoxes-text-content">
                <div className="displayBoxes-icon">
                  <img src={icon2} className="" />
                </div>
                <p className="displayBoxes-heading">Lorem</p>
                <p className="displayBoxes-text">
                    {brieftText}
                </p>
              </div>
            </li>

            <li className="displayBoxes-list">
              <div className="displayBoxes-text-content">
                <div className="displayBoxes-icon">
                  <img src={icon3} className="" />
                </div>
                <p className="displayBoxes-heading">Lorem</p>
                <p className="displayBoxes-text">
                    {brieftText}
                </p>
              </div>
            </li>

            <li className="displayBoxes-list">
              <div className="displayBoxes-text-content">
                <div className="displayBoxes-icon">
                  <img src={icon4} className="" />
                </div>
                <p className="displayBoxes-heading">Lorem</p>
                <p className="displayBoxes-text">
                    {brieftText}
                </p>
              </div>
            </li>

         
          </ul>
    )
}


export default BriefingSection
