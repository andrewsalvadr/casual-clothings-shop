import React, { useEffect, useState } from "react";
import { useCycle } from "framer-motion";
import IconHolder from "./iconHolder"
import ImageHolder from "./imageHolder";
import { femaleScene } from "./scene";
import { maleScene } from "./scene";
import { kidsScene } from "./scene";



const BannerHero = () => {

    const SLIDE_CHANGE_TIME_MS = 5000;
    const [currentScene, setCurrentScene] = useCycle(
      femaleScene,
      maleScene,
      kidsScene
    );
  
    useEffect(() => {
      const timeOut = setTimeout(setCurrentScene, SLIDE_CHANGE_TIME_MS);
      return () => clearTimeout(timeOut);
    }, [currentScene, setCurrentScene]);
  
  
    return (

        <div className="App">

    <div className="hero" id="home">
      <IconHolder icon={currentScene.icon} text={currentScene.text} />
      <ImageHolder
        img={currentScene.image1}
        className="gender-image female-image__one"
      />
      <ImageHolder
        img={currentScene.image2}
        className="gender-image male-image__two"
      />
      <ImageHolder
        img={currentScene.image3}
        className="gender-image kids-image__three"
      />
    </div>

        </div>

    )
}

export default BannerHero;