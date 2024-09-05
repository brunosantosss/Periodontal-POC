import { useState } from "react";

import style from "../../styles/components/Exame.module.css";

import InputInformations from "./components/InputInformations/InputInformations";

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

    return (
        <section id="exame-content-page" className={ style.exame_content_page }>
            <InputInformations 
                dentesInfo={dentesInfo}
                setDentesInfo={setDentesInfo}
            />
        </section>
    )
};

export default NovoExame;