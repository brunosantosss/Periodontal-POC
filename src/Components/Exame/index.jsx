// Dentes superiores (Vestibular | Esquerdo)
import vestibularDente18 from "../../assets/dentes/superior/vestibular/png/Dente18.svg";
import vestibularDente17 from "../../assets/dentes/superior/vestibular/png/Dente17.svg";
import vestibularDente16 from "../../assets/dentes/superior/vestibular/png/Dente16.svg";
import vestibularDente15 from "../../assets/dentes/superior/vestibular/png/Dente15.svg";
import vestibularDente14 from "../../assets/dentes/superior/vestibular/png/Dente14.svg";
import vestibularDente13 from "../../assets/dentes/superior/vestibular/png/Dente13.svg";
import vestibularDente12 from "../../assets/dentes/superior/vestibular/png/Dente12.svg";
import vestibularDente11 from "../../assets/dentes/superior/vestibular/png/Dente11.svg";

import DenteComponent from "../DenteComponent";
import GraphicExameLines from "../GraphicExameLines";

import style from "./index.module.css";

const Exame = () => {
    return (
        <section className="vw-100 vh-100 overflow-x-hidden d-flex p-5">
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                <div className= { style.graphic_exam_container + " w-100 d-flex justify-content-center"} >
                    <div className="d-flex flex-column mx-5">
                        <p className="fw-bold">Profundidade de sondagem</p>
                        <p className="fw-bold">Margem gengival</p>
                    </div>

                    <div className="w-50 d-flex justify-content-center align-items-center">
                        <GraphicExameLines />
                        <DenteComponent denteIcon={vestibularDente18} height={56} graphicLineHeight={0.6} denteWidth={93}/>
                        <DenteComponent denteIcon={vestibularDente17} height={51} graphicLineHeight={0.9} denteWidth={98}/>
                        <DenteComponent denteIcon={vestibularDente16} height={53} graphicLineHeight={1.2} denteWidth={105}/>
                        <DenteComponent denteIcon={vestibularDente15} height={45} graphicLineHeight={3.4} denteWidth={90}/>
                        <DenteComponent denteIcon={vestibularDente14} height={35} graphicLineHeight={3.850} denteWidth={93}/>
                        <DenteComponent denteIcon={vestibularDente13} height={7} graphicLineHeight={6} denteWidth={95}/>
                        <DenteComponent denteIcon={vestibularDente12} height={39} graphicLineHeight={5} denteWidth={90}/>
                        <DenteComponent denteIcon={vestibularDente11} height={51} graphicLineHeight={5.3} denteWidth={127}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Exame;