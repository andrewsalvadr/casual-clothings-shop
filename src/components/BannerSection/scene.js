/* Icons */
import femaleIcon from "./asset/icons/iconLogo.svg";
import maleIcon from "./asset/icons/iconLogo.svg";
import kidsIcon from "./asset/icons/iconLogo.svg";

/* png images */
import female1 from "./asset/female/femalebanner.png"
import female2 from "./asset/female/dressfemale.png"
import female3 from "./asset/female/femaleacc.png"
import male1 from "./asset/male/malebanner.png"
import male2 from "./asset/male/maleacc.png"
import male3 from "./asset/male/polomale.png"
import kids1 from "./asset/kids/kidsbanner.png"
import kids2 from "./asset/kids/kidsacc.png"
import kids3 from "./asset/kids/longkids.png"


export const femaleScene = {
icon: { src: femaleIcon, alt: "Female icon" },
  text: "Style for every story.",
  image1: { src: female1, alt: "Picture of female" },
  image2: { src: female2, alt: "Picture of female" },
  image3: { src: female3, alt: "Picture of female" },
};

export const maleScene = {
    icon: { src: maleIcon, alt: "Male icon" },
    text: "Smart clothing. Everyday living.",
    image1: { src: male1, alt: "Picture of male" },
    image2: { src: male2, alt: "Picture of male" },
    image3: { src: male3, alt: "Picture of male" },
  };

  export const kidsScene = {
    icon: { src: kidsIcon, alt: "kids icon" },
    text: " Inspire with your style.",
    image1: { src: kids1, alt: "Picture of kids" },
    image2: { src: kids2, alt: "Picture of kids" },
    image3: { src: kids3, alt: "Picture of kids" },
  };