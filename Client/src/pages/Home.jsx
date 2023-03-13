import logo from "../assets/logo.svg"
import headimg from "../assets/head_image.svg"
import vect1 from "../assets/Homevector1.svg"
import vect2 from "../assets/Homevector2.svg"



export default function HomePage(){
    return(
        <div className="Home mx-20 my-10">
            <img src={vect1} className="absolute left-0 top-0 z-[-1]"></img>
            <nav className="navBar">
            <img src={logo} className="logo w-24"></img>
            </nav>
            <main className="mainSec flex justify-between items-center">
                <section className="sec1">
                    <h1 className="slogan font-medium font-['Raleway'] text-[40px] text-blue pb-5" id="h1">Slogan here</h1>
                    <p className="font-['Poppins'] text-[20px] pb-5">Lorem ipsum dolor sit amet dolor ipsum, <br/> consectetur adipiscing elit. Urna adipiscing <br/> aenean consequat pretium, tempus aenean <br/> ullamcorper placerat vitae. Proin urna vitae<br/> ac nunc, vulputate cras velit lacus nunc.</p>
                    <button className="cnxbtn p-2 rounded-[10px]"><a className="font-['Poppins'] bg-purple text-white">Connexion</a></button>
                </section>
                <section className="sec2">
                    <img src={headimg} className="headimg pr-10"></img>
                </section>
            </main>
            <img src={vect2} className="absolute left-0 bottom-0"></img>
        </div>
    )
}