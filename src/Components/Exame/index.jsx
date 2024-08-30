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

import vestibularDente21 from "../../assets/dentes/superior/vestibular/png/Dente21.svg";
import vestibularDente22 from "../../assets/dentes/superior/vestibular/png/Dente22.svg";
import vestibularDente23 from "../../assets/dentes/superior/vestibular/png/Dente23.svg";
import vestibularDente24 from "../../assets/dentes/superior/vestibular/png/Dente24.svg";
import vestibularDente25 from "../../assets/dentes/superior/vestibular/png/Dente25.svg";
import vestibularDente26 from "../../assets/dentes/superior/vestibular/png/Dente26.svg";
import vestibularDente27 from "../../assets/dentes/superior/vestibular/png/Dente27.svg";
import vestibularDente28 from "../../assets/dentes/superior/vestibular/png/Dente28.svg";

import DenteComponent from "../DenteComponent";

import DrawGraphics from "../DrawGraphics";
import GraphicExameLines from "../GraphicExameLines";


import style from "./index.module.css";

const listaDentesVestibularesSup = [
    { denteIcon: vestibularDente18, denteHeight: 82, implanteHeight: 100, denteWidth: 100 },
    { denteIcon: vestibularDente17, denteHeight: 78, implanteHeight: 100, denteWidth: 100 },
    { denteIcon: vestibularDente16, denteHeight: 78, implanteHeight: 105, denteWidth: 100 },
    { denteIcon: vestibularDente15, denteHeight: 80, implanteHeight: 105, denteWidth: 100 },
    { denteIcon: vestibularDente14, denteHeight: 72, implanteHeight: 105, denteWidth: 100 },
    { denteIcon: vestibularDente13, denteHeight: 48, implanteHeight: 105, denteWidth: 100 },
    { denteIcon: vestibularDente12, denteHeight: 78, implanteHeight: 105, denteWidth: 100 },
    { denteIcon: vestibularDente11, denteHeight: 86, implanteHeight: 115, denteWidth: 100 },
    
    { denteIcon: vestibularDente21, denteHeight: 86, implanteHeight: 115, denteWidth: 100 },
    { denteIcon: vestibularDente22, denteHeight: 75, implanteHeight: 105, denteWidth: 100 },
    { denteIcon: vestibularDente23, denteHeight: 48, implanteHeight: 105, denteWidth: 100 },
    { denteIcon: vestibularDente24, denteHeight: 72, implanteHeight: 105, denteWidth: 100 },
    { denteIcon: vestibularDente25, denteHeight: 80, implanteHeight: 105, denteWidth: 100 },
    { denteIcon: vestibularDente26, denteHeight: 78, implanteHeight: 105, denteWidth: 100 },
    { denteIcon: vestibularDente27, denteHeight: 78, implanteHeight: 100, denteWidth: 100 },
    { denteIcon: vestibularDente28, denteHeight: 82, implanteHeight: 100, denteWidth: 100 },
];

const Exame = () => {

    const [ dentesInfo, setDentesInfo ] = useState(
        Array.from({ length: 16 }, () => (
            { 
                dente_index: -1, 
                dente_implante: false, 
                dente_ativado: true, 
                dente_mobilidade: 0, // Input de mínimo e padrão 0 e máximo 3
                dente_ss: [false, false, false], // Níveis de Sangramento de sondagem  ( 3 Inputs com valores false ou true )
                dente_placa: [false, false, false], // Níveis de placa ( 3 Inputs com valores false ou true )
                dente_nivel_furca: [0, 0], // Nível 0 a Nível 3
            }
        ))
    )
    
    console.log("Dentes info: ", dentesInfo);

    return (
        <section className="vw-100 vh-100 d-flex pe-5 justify-content-end">
            <div className="w-75 h-100 d-flex align-items-center">
                <div className= { style.graphic_exam_container + " w-100 d-flex justify-content-center"} >
                    <div className="w-100 d-flex justify-content-center align-items-center">

                        <GraphicExameLines  />
                        <DrawGraphics 
                            setDentesInfo={setDentesInfo}
                            dentesInfo={dentesInfo}
                        />
                        {
                            // Carregando componentes dos dentes Vestibulares Superiores
                            listaDentesVestibularesSup.map((dente, index) => (
                                <DenteComponent 
                                    denteIndex={index} 
                                    denteIcon={dente.denteIcon} 
                                    height={dente.denteHeight} 
                                    denteWidth={dente.denteWidth}
                                    implanteHeight={dente.implanteHeight}
                                    dentesInfo={dentesInfo}
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