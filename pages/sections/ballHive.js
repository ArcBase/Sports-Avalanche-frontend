import NavbarTwo from "../components/navbar-two";

export default function BallHivePage() {
  return (
    <>
      <NavbarTwo />
      <div className="fitter">
        <div 
        style={{'paddingTop':20}}
        className="page-grid">
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
              tournament highlight reels. The platform extends to Football
              Academies, allowed to open official pages with room to upload data
              about their players and their collective activities, to attempt to
              simplify performance tracking. Scouts have exclusive pages, where
              they are provided exclusive access to periodic reports about
              special talents in various locations of interests and have the
              ability to reach out directly to players after studying their
              profiles to interact with them and possibly invite them to trials.
            </p>
          </div>

          <div className="right">
            <div className="page-grid-image-container">
              <img src='https://cdn.dribbble.com/users/1640722/screenshots/10198315/media/94791d8e3b4ade2e083d0935aefa02fc.png'
               className="page-grid-image" />
            </div>
          </div>
          
        </div>
      </div>

      <div className="fitter">
          <div className="page-grid">
              <div className="left">
              
              <div className="page-grid-image-container">
              <img src="https://cdn.dribbble.com/users/1640722/screenshots/10215836/media/2f845f46354e5174d6a1f9bdb47c71f9.png"
               className="page-grid-image" />
            </div>
              </div>

              <div className="right">
                    <p className="h3text">Ball Hive</p>
                    <p className="pText">
                    Our Flagship product “BALL HIVE” is an app that lets aspiring
                    football players create profiles, upload content like highlight
                    reels and workout routines, track performances by uploading
                    individual statistics vetted by teammates and coaches, and gives
                    exclusive information about various football trials near them. The
                    app also gives them the capacity to directly connect with other
                    </p>
            </div>
          </div>
      </div>
    </>
  );
}
