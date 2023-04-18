import logoP from "../assets/logo_purple.svg";
import headimg from "../assets/head_image.svg";
import vect1 from "../assets/Homevector1.svg";
import vect2 from "../assets/Homevector2.svg";

import React from "react";
import { useHistory } from "react-router-dom";

export default function HomePage() {
  const history = useHistory();

  function handleOnClick() {
    history.push("/Connexion");
  }

  return (
    <div className="Home mx-20 my-10">
      <img
        src={vect1}
        alt="vector1"
        className="absolute left-0 top-0 z-[-1]"
      ></img>
      <nav className="navBar">
        <img src={logoP} alt="Logo" className="logo w-24"></img>
      </nav>
      <main className="mainSec flex justify-between items-center">
        <section className="sec1">
          <h1
            className="slogan font-medium font-['Raleway'] text-[40px] text-blue pb-5"
            id="h1"
          >
            Slogan here
          </h1>
          <p className="font-['Poppins'] text-[20px] pb-5 text-blue">
            Lorem ipsum dolor sit amet dolor ipsum, <br /> consectetur
            adipiscing elit. Urna adipiscing <br /> aenean consequat pretium,
            tempus aenean <br /> ullamcorper placerat vitae. Proin urna vitae
            <br /> ac nunc, vulputate cras velit lacus nunc.
          </p>
          <button
            className="cnxbtn p-2 rounded-[10px] font-['Poppins'] bg-purple text-white"
            onClick={handleOnClick}
          >
            Connexion
          </button>
        </section>
        <section className="sec2">
          <img src={headimg} alt="heading-img" className="headimg pr-10"></img>
        </section>
      </main>
      <img src={vect2} alt="vector2" className="absolute left-0 bottom-0"></img>
    </div>
  );
}
