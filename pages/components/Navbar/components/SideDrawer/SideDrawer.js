import React from 'react';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        
        <li className="side-nav-item"><a href="/">Home</a></li>
            <li className="side-nav-item"><a href="/">Team</a></li>
        <li><a className="side-nav-item">Our Product</a></li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
