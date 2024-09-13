import { useState } from "react";

import style from "../../styles/components/Exame.module.css";

import InputInformations from "./components/InputInformations/InputInformations";

import Dente from "./components/Dente"
import Grafico from "./components/Grafico";

import Navbar from "../../Components/common/Navbar";
import Footer from "../../Components/common/Footer";
import ListasGrafico from "./components/ListasGrafico";

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

    const handleYInputChangeMG = (denteIndex, pointName, value) => {
        const updatedDentes = dentesYCoordsMG.map((dente, index) =>
            index === denteIndex ? { ...dente, [pointName]: Number(value) } : dente
        );
        setDentesYCoordsMG(updatedDentes);
    };
    
    const handleYInputChangePS = (denteIndex, pointName, value) => {
        const updatedDentes = dentesYCoordsPS.map((dente, index) =>
            index === denteIndex ? { ...dente, [pointName]: Number(value) } : dente
        );
        setDentesYCoordsPS(updatedDentes);
    };
    
    return (
        <>
            <Navbar />
            <div className="overflow-x-auto">    
                <section id="exame-content-page" className={ style.exame_content_page }>
                    <InputInformations 
                        dentesInfo={dentesInfo}
                        setDentesInfo={setDentesInfo}
                        dentesYCoordsMG={dentesYCoordsMG}
                        dentesYCoordsPS={dentesYCoordsPS}
                        handleYInputChangeMG={handleYInputChangeMG}
                        handleYInputChangePS={handleYInputChangePS}
                        setDentesYCoordsMG={setDentesYCoordsMG}
                        setDentesYCoordsPS={setDentesYCoordsPS}
                    />
                    <div className={ style.exame_content_page_dentes_container }>        
                        {
                            dentesInfo.map((_, index) => (
                                <Dente dentesInfo={dentesInfo} denteIndex={index} />
                            ))
                        }
                        <Grafico 
                            dentesYCoordsMG={dentesYCoordsMG}
                            dentesYCoordsPS={dentesYCoordsPS}
                        />
                        <ListasGrafico />
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
};

export default NovoExame;