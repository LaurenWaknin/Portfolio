import React from 'react'
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function (props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


  return (
    <div className='projects-container'>
        <ScreenHeading title={"Projects"} subHeading={"My work"} />
        <div className='demo-container'>
            
        </div>
    </div>
  )
}
