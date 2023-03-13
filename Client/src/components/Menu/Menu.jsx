import './Menu.css'

import WhiteLogo from "../../assets/WhiteLogo.png"
import Logo from "../../assets/Logo.svg"

import Accueil from "../../assets/Accueil.svg"
import Doctorant from "../../assets/Doctorant.svg"
import MiseaJour from "../../assets/MiseaJour.svg"
import Statistics from "../../assets/statistics.svg"
import Inscription from "../../assets/Inscription.svg"
import PV from "../../assets/PV.svg"

import logout from "../../assets/logout.svg"

const Menu = () => {
    return (
        <div className='Menu'>

            <img src={Logo} alt="logo-png" className='Menu-logo'/>

            <div className='Menu-functionalities'>

                <button className='Menu-functionality Menu-functionalities-Accueil'>
                    <img src={Accueil} alt="Acueil-icon"/>
                    <span>Acueil</span>
                </button>

                <button className='Menu-functionality Menu-functionalities-Doctorant'>
                    <img src={Doctorant} alt="Doctorant-icon" />
                    <span>Doctorant</span>
                </button>

                <button className='Menu-functionality Menu-functionalities-MiseaJour'>
                    <img src={MiseaJour} alt="MiseaJour-icon" />
                    <span>Mise à jour</span>
                </button>

                <button className='Menu-functionality Menu-functionalities-Statistiques'>
                    <img src={Statistics} alt="statistics-icon" />
                    <span>Statistiques</span>
                </button>

                <button className='Menu-functionality Menu-functionalities-Inscription'>
                    <img src={Inscription} alt="inscription-icon" />
                    <span>Inscription</span>
                </button>

                <button className='Menu-functionality Menu-functionalities-PVs'>
                    <img src={PV} alt="PV-icon" />
                    <span>PVs</span>
                </button>
                
            </div>



            <button className='Menu-logout'>
                <img src={logout} alt="logout-icon" />
                <span>Déconnecter</span>

            </button>
        </div>
    )
}

export default Menu;