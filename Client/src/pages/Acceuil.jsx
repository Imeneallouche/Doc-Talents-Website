import React from "react";
import logo from "../assets/Logo.svg";
import acceuilimg from "../assets/acceuil_pic.svg";
import "./Acceuil.css";
import { Link } from "react-router-dom";

export default function Acceuil() {
  return (
    <div className="acceuil">
      <nav className="flex justify-between items-center pr-[100px] pl-[100px] pt-8 pb-8">
        <img className="logo w-[100px]" src={logo} alt="" />
        <ul className="flex">
          <li className="mr-[80px] text-white font-semibold">
            <a href="#">Aide</a>
          </li>
          <li className="text-white font-semibold ">
            <Link to="/a-propos">À propos</Link>
          </li>
        </ul>
      </nav>

      <section className="main flex justify-between items-center pr-[100px] pl-[100px]">
        <div className="sec1">
          <h3 className="text-[2.3em] text-white font-medium">
            Connectez vous et commencez <br /> à gérer vos doctorants!
          </h3>
          <p className="text-white font-light leading-10 mt-4">
          Dédié à la gestion des inscriptions, recherches et statistiques sur les doctorants. 
          On fourni une plateforme complète et efficace pour le suivi de toutes les informations 
          liées aux étudiants en doctorat.{" "}
          </p>
          <button className="bg-light-purple text-white font-semibold border mt-6 pt-2 pb-2 pr-16 pl-16 rounded-[10px]">
            <Link to="./Connexion">Connexion</Link>
          </button>
        </div>
        <div className="sec2">
          <img className="acceuilimg" src={acceuilimg} alt="" />
        </div>
      </section>
    </div>
  );
}
