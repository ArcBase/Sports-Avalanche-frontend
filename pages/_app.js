import '../assets/Avalanche.css'
import '../assets/pageSections.css'
import '../assets/generals.css'
import '../assets/team.css'

import '../assets/Backdrop.css'
// import '../assets/DrawerToggleButton.css'
import '../assets/Navbar.css'
import '../assets/responsive.css'
import '../assets/SideDrawer.css'
import '../assets/Toolbar.css'

import '../assets/components/footer.css'
import '../assets/components/navbar.css'

import '../assets/Slide.css'
// import '../assets/cards.css'

// import '../assets/new-navbar.css';
import '../assets/Button.css'

import '../assets/ballHive.css'
import '../assets/playerSignUp.css'
import '../assets/landing-page.css'

import {AnimatePresence} from 'framer-motion'

import stylesheet from 'antd/dist/antd.min.css'


export default function MyApp({ Component, pageProps }) {
  return(
    <>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
       <Component {...pageProps} />;
       
       </>
    )
}
