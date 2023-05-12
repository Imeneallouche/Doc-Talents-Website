import React from "react";
import logo from "../assets/Logo.svg";
import "./Acceuil.css";
import { Link } from "react-router-dom";

export default function Apropos() {
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

      <section className="main flex justify-between items-center pr-[100px] pl-[100px] mt-16">
        <div className="sec1">
          <h3 className="text-[2.3em] text-white font-medium">
            À propos de nous
          </h3>
          <p className="text-white font-light leading-10 mt-4">
            Bienvenue sur DocTalents, le site web développé par une équipe de 6
            étudiants de l'École Nationale Supérieure d'Informatique dans le
            cadre du module "Projet 2CP". Notre objectif était de créer une
            plateforme pour le suivi des doctorants et la génération de
            statistiques pour la Direction de la Post-Graduation et de la
            Recherche (DPGR) de l'école.
            <br />
            <br />
            DocTalents est une solution conviviale et efficace qui permet à la
            DPGR de suivre l'évolution des doctorants tout au long de leur
            parcours. Grâce à notre plateforme, les membres de la DPGR peuvent
            facilement enregistrer les informations importantes sur les
            doctorants et suivre leur progression au fil du temps.
            <br />
            <br />
            En outre, DocTalents permet également de générer des statistiques
            pertinentes pour aider la DPGR à mieux comprendre les tendances et
            les dynamiques dans le domaine de la recherche. Les données
            collectées sont présentées de manière claire et concise.
            <br />
            <br />
            Nous espérons que vous trouverez DocTalents utile et facile à
            utiliser. Si vous avez des commentaires ou des suggestions,
            n'hésitez pas à nous contacter.
          </p>
        </div>
        <div className="sec2">
          {/* image */}
        </div>
      </section>
    </div>
  );
}
