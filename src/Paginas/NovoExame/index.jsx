import { useState } from "react";

import style from "../../styles/components/Exame.module.css";

import InputInformations from "./components/InputInformations/InputInformations";

import Dente from "./components/Dente"

const NovoExame = () => {
    // Objeto vai armazenar as informações dos dentes.
    const [ dentesInfo, setDentesInfo ] = useState(
        Array.from({ length: 16 }, () => (
            { 
                dente_index: -1, 
                dente_implante: false, 
                dente_ativado: true, 
                dente_mobilidade: 0,
                dente_ss: [false, false, false], 
                dente_placa: [false, false, false],
                dente_nivel_furca: 0, 
            }
        ))
    )

    const [dentesYCoordsMG, setDentesYCoordsMG] = useState(
        Array.from({ length: 16 }, () => ({ point_one: 0, point_two: 0, point_three: 0 }))
    );
    
    const [dentesYCoordsPS, setDentesYCoordsPS] = useState(
        Array.from({ length: 16 }, () => ({ point_one: 0, point_two: 0, point_three: 0 }))
    );

    return (
        <section id="exame-content-page" className={ style.exame_content_page }>
            <InputInformations 
                dentesInfo={dentesInfo}
                setDentesInfo={setDentesInfo}
                dentesYCoordsMG={dentesYCoordsMG}
                setDentesYCoordsMG={setDentesYCoordsMG}
                dentesYCoordsPS={dentesYCoordsPS}
                setDentesYCoordsPS={setDentesYCoordsPS}
            />
            <div className={ style.exame_content_page_dentes_container }>        
                {
                    dentesInfo.map((_, index) => (
                        <Dente dentesInfo={dentesInfo} denteIndex={index} />
                    ))
                }
            </div>
        </section>
    )
};

export default NovoExame;