import { useState } from "react";

import style from "../../styles/components/Exame.module.css";

import InputInformations from "./components/InputInformations/InputInformations";

import Dente from "./components/Dente"
import Grafico from "./components/Grafico";

import Navbar from "../../Components/common/Navbar";
import Footer from "../../Components/common/Footer";
import ListasGrafico from "./components/ListasGrafico";

const NovoExame = () => {
    // DADOS ( DENTES SUPERIORES | VESTIBULAR )
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
                    <div className={style.exame_content_page_vestibular}>
                        <InputInformations 
                            dentesInfo={dentesInfo}
                            setDentesInfo={setDentesInfo}
                            dentesYCoordsMG={dentesYCoordsMG}
                            dentesYCoordsPS={dentesYCoordsPS}
                            handleYInputChangeMG={handleYInputChangeMG}
                            handleYInputChangePS={handleYInputChangePS}
                            setDentesYCoordsMG={setDentesYCoordsMG}
                            setDentesYCoordsPS={setDentesYCoordsPS}
                            Palatino={false}
                        />
                        <div className={ style.exame_content_page_dentes_container }>             
                            {
                                dentesInfo.map((_, index) => (
                                    <Dente dentesInfo={dentesInfo} denteIndex={index} Palatino={false}/>
                                ))
                            }
                            <ListasGrafico Palatino={false}/>
                            <Grafico dentesYCoordsMG={dentesYCoordsMG} dentesYCoordsPS={dentesYCoordsPS} Palatino={false}/>
                        </div>
                    </div>

                    <div className={ style.exame_content_page_palatina }>
                        <div className={ style.exame_content_page_dentes_container }>             
                            {
                                dentesInfo.map((_, index) => (
                                    <Dente dentesInfo={dentesInfo} denteIndex={index} Palatino={true}/>
                                ))
                            }
                            <ListasGrafico Palatino={true}/>
                            <Grafico dentesYCoordsMG={dentesYCoordsMG} dentesYCoordsPS={dentesYCoordsPS} Palatino={true}/>
                        </div>

                        <InputInformations 
                            dentesInfo={dentesInfo}
                            setDentesInfo={setDentesInfo}
                            dentesYCoordsMG={dentesYCoordsMG}
                            dentesYCoordsPS={dentesYCoordsPS}
                            handleYInputChangeMG={handleYInputChangeMG}
                            handleYInputChangePS={handleYInputChangePS}
                            setDentesYCoordsMG={setDentesYCoordsMG}
                            setDentesYCoordsPS={setDentesYCoordsPS}
                            Palatino={true}
                        />
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
};

export default NovoExame;