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

const dentesList = [
    { denteNumber: 18, denteIcon: vestibularDente18, denteHeight: 56, graphicLineHeight: 0.6, denteWidth: 93 },
    { denteNumber: 17, denteIcon: vestibularDente17, denteHeight: 51, graphicLineHeight: 0.9, denteWidth: 98 },
    { denteNumber: 16, denteIcon: vestibularDente16, denteHeight: 53, graphicLineHeight: 1.2, denteWidth: 105 },
    { denteNumber: 15, denteIcon: vestibularDente15, denteHeight: 45, graphicLineHeight: 3.4, denteWidth: 90 },
    { denteNumber: 14, denteIcon: vestibularDente14, denteHeight: 35, graphicLineHeight: 3.850, denteWidth: 93 },
    { denteNumber: 13, denteIcon: vestibularDente13, denteHeight: 7, graphicLineHeight: 6, denteWidth: 95 },
    { denteNumber: 12, denteIcon: vestibularDente12, denteHeight: 39, graphicLineHeight: 5, denteWidth: 90 },
    { denteNumber: 11, denteIcon: vestibularDente11, denteHeight: 51, graphicLineHeight: 5.3, denteWidth: 127 },
];

const Exame = () => {
    return (
        <section className="vw-100 vh-100 overflow-x-hidden d-flex p-5">
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                <div className= { style.graphic_exam_container + " w-100 d-flex justify-content-center"} >
                    <div className="d-flex flex-column mx-5">
                        <p className="fw-bold">Profundidade de sondagem</p>
                        <p className="fw-bold">Margem gengival</p>
                        <p className="fs-2 mt-7">Vestibular</p>
                    </div>
                    
                    <div className="w-50 d-flex justify-content-center align-items-center">

                        <GraphicExameLines />
                        {
                            dentesList.map((dente) => (
                                <DenteComponent denteNumber={dente.denteNumber} denteIcon={dente.denteIcon} height={dente.denteHeight} graphicLineHeight={dente.graphicLineHeight} denteWidth={dente.denteWidth}/>
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Exame;