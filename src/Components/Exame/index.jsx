import { useState } from "react";

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

import DrawGraphics from "../DrawGraphics";
import GraphicExameLines from "../GraphicExameLines";


import style from "./index.module.css";

const dentesList = [
    { denteIcon: vestibularDente18, denteHeight: 64, implanteHeight: 80, denteWidth: 100 },
    { denteIcon: vestibularDente17, denteHeight: 58, implanteHeight: 80, denteWidth: 100 },
    { denteIcon: vestibularDente16, denteHeight: 58, implanteHeight: 85, denteWidth: 100 },
    { denteIcon: vestibularDente15, denteHeight: 60, implanteHeight: 90, denteWidth: 100 },
    { denteIcon: vestibularDente14, denteHeight: 50, implanteHeight: 85, denteWidth: 100 },
    { denteIcon: vestibularDente13, denteHeight: 23, implanteHeight: 85, denteWidth: 100 },
    { denteIcon: vestibularDente12, denteHeight: 60, implanteHeight: 85, denteWidth: 100 },
    { denteIcon: vestibularDente11, denteHeight: 68, implanteHeight: 100, denteWidth: 100 },
];

const Exame = () => {

    const [dentesImplantes, setDentesImplantes] = useState(
        Array.from({ length: 8 }, () => ({ dente_index: -1, dente_implante: false }))
    );

    const [dentesAtivados, setDentesAtivados] = useState(
        Array.from({ length: 8 }, () => ({ dente_index: -1, dente_ativado: true }))
    );

    return (
        <section className="vw-100 vh-100 overflow-x-hidden d-flex p-5">
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                <div className= { style.graphic_exam_container + " w-100 d-flex justify-content-center"} >
                    <div className="d-flex flex-column mx-5">
                        <p className="fs-2 mt-7">Vestibular</p>
                    </div>
                    
                    <div className="w-50 d-flex justify-content-center align-items-center">

                        <GraphicExameLines  />
                        <DrawGraphics 
                            dentesImplantes={dentesImplantes}
                            setDentesImplantes={setDentesImplantes}
                            dentesAtivados={dentesAtivados}
                            setDentesAtivados={setDentesAtivados}
                        />
                        {
                            dentesList.map((dente, index) => (
                                <DenteComponent 
                                    denteIndex={index} 
                                    denteIcon={dente.denteIcon} 
                                    height={dente.denteHeight} 
                                    denteImplante={dentesImplantes[index].dente_implante}
                                    denteWidth={dente.denteWidth}
                                    implanteHeight={dente.implanteHeight}
                                    denteDesativado={dentesAtivados[index].dente_ativado}
                                />
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Exame;