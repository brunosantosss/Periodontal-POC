// Dentes superiores (Vestibular | Esquerdo)
import vestibularDente18 from "../../assets/dentes/superior/vestibular/png/Dente18.svg";
import vestibularDente17 from "../../assets/dentes/superior/vestibular/png/Dente17.svg";
import vestibularDente16 from "../../assets/dentes/superior/vestibular/png/Dente16.svg";
import vestibularDente15 from "../../assets/dentes/superior/vestibular/png/Dente15.svg";
import vestibularDente14 from "../../assets/dentes/superior/vestibular/png/Dente14.svg";
import vestibularDente13 from "../../assets/dentes/superior/vestibular/png/Dente13.svg";
import vestibularDente12 from "../../assets/dentes/superior/vestibular/png/Dente12.svg";
import vestibularDente11 from "../../assets/dentes/superior/vestibular/png/Dente11.svg";

// Dentes superiores (Vestibular | Direita)
import vestibularDente21 from "../../assets/dentes/superior/vestibular/png/Dente21.svg";
import vestibularDente22 from "../../assets/dentes/superior/vestibular/png/Dente22.svg";
import vestibularDente23 from "../../assets/dentes/superior/vestibular/png/Dente23.svg";
import vestibularDente24 from "../../assets/dentes/superior/vestibular/png/Dente24.svg";
import vestibularDente25 from "../../assets/dentes/superior/vestibular/png/Dente25.svg";
import vestibularDente26 from "../../assets/dentes/superior/vestibular/png/Dente26.svg";
import vestibularDente27 from "../../assets/dentes/superior/vestibular/png/Dente27.svg";
import vestibularDente28 from "../../assets/dentes/superior/vestibular/png/Dente28.svg";

import DenteComponent from "../DenteComponent";

import style from "./index.module.css";

const Exame = () => {
    return (
        <section className="vw-100 vh-100 overflow-x-hidden d-flex p-5">
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                <div className= { style.graphic_exam_container + " w-100 d-flex justify-content-center"} >
                    <div className="w-50 d-flex">
                        <DenteComponent denteIcon={vestibularDente18} height={50} graphicLineHeight={47}/>
                        <DenteComponent denteIcon={vestibularDente17} height={47} graphicLineHeight={47}/>
                        <DenteComponent denteIcon={vestibularDente16} height={51} graphicLineHeight={47}/>
                        <DenteComponent denteIcon={vestibularDente15} height={37} graphicLineHeight={47}/>
                        <DenteComponent denteIcon={vestibularDente14} height={28} graphicLineHeight={47}/>
                        <DenteComponent denteIcon={vestibularDente13} height={0} graphicLineHeight={47}/>
                        <DenteComponent denteIcon={vestibularDente12} height={30} graphicLineHeight={47}/>
                        <DenteComponent denteIcon={vestibularDente11} height={57} graphicLineHeight={47}/>
                    </div>
                    {/* <div className="w-100 d-flex">
                        <DenteComponent denteIcon={vestibularDente21}/>
                        <DenteComponent denteIcon={vestibularDente22}/>
                        <DenteComponent denteIcon={vestibularDente23}/>
                        <DenteComponent denteIcon={vestibularDente24}/>
                        <DenteComponent denteIcon={vestibularDente25}/>
                        <DenteComponent denteIcon={vestibularDente26}/>
                        <DenteComponent denteIcon={vestibularDente27}/>
                        <DenteComponent denteIcon={vestibularDente28}/>
                    </div> */}
                </div>
            </div>

        </section>
    )
}

export default Exame;