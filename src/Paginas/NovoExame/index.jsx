import { useState } from "react";

import style from "../../styles/components/Exame.module.css";

import InputInformations from "./components/InputInformations/InputInformations";

import Dente from "./components/Dente"
import Grafico from "./components/Grafico";

import Navbar from "../../Components/common/Navbar";
import Footer from "../../Components/common/Footer";
import ListasGrafico from "./components/ListasGrafico";

const NovoExame = () => {
    const [ dentesInfo, setDentesInfo ] = useState(
        Array.from({ length: 16 }, () => (
            { 
                dente_index: -1, 
                dente_implante: false, 
                dente_ativado: true, 
                dente_mobilidade: 0,
                dente_ss: {
                    vestibular: [false, false, false],
                    palatina: [false, false, false], 
                },
                dente_placa: {
                    vestibular: [false, false, false],
                    palatina: [false, false, false],
                },
                dente_nivel_furca: {
                    vestibular: 0,
                    palatina: [0, 0]
                }, 
                dente_grafico_coordenadas: {
                    vestibular: [0, 0, 0],
                    palatina: [0, 0],
                }
            }
        ))
    )

    const [ pontosYGrafico, setPontosYGrafico ] = useState({
        superior: {
            vestibular: {
                MG: Array.from({ length: 16 }, () => ({ point_one: 0, point_two: 0, point_three: 0 })),
                PS: Array.from({ length: 16 }, () => ({ point_one: 0, point_two: 0, point_three: 0 }))
            }, 
            palatina: {
                MG: Array.from({ length: 16 }, () => ({ point_one: 0, point_two: 0, point_three: 0 })),
                PS: Array.from({ length: 16 }, () => ({ point_one: 0, point_two: 0, point_three: 0 }))
            }
        },
        inferior: {
            lingual: {
                MG: Array.from({ length: 16 }, () => ({ point_one: 0, point_two: 0, point_three: 0 })),
                PS: Array.from({ length: 16 }, () => ({ point_one: 0, point_two: 0, point_three: 0 }))
            },
            vestibular: {
                MG: Array.from({ length: 16 }, () => ({ point_one: 0, point_two: 0, point_three: 0 })),
                PS: Array.from({ length: 16 }, () => ({ point_one: 0, point_two: 0, point_three: 0 }))
            }
        }
    });

    // Superiores (Vestibulares - MG)  
    const handleSuperiorVestibularMGy = (denteIndex, pointName, value) => {
        const updatedDentes = pontosYGrafico.superior.vestibular.MG.flat().map((dente, index) => index === denteIndex ? {...dente, [pointName]: Number(value)} : dente);

        setPontosYGrafico((prevObj) => ({
            ...prevObj,
            superior: {
                ...prevObj.superior,
                vestibular: {
                    ...prevObj.superior.vestibular, 
                    MG: updatedDentes
                }
            }
        }));
    };
    // Superiores (Vestibulares - PS)  
    const handleSuperiorVestibularPSy = (denteIndex, pointName, value) => {
        const updatedDentes = pontosYGrafico.superior.vestibular.PS.flat().map((dente, index) => index === denteIndex ? {...dente, [pointName]: Number(value)} : dente);
        
        setPontosYGrafico((prevObj) => ({
            ...prevObj,
            superior: {
                ...prevObj.superior,
                vestibular: {
                    ...prevObj.superior.vestibular,
                    PS: updatedDentes
                }
            }
        }));
    };
     // Superiores (Palatinas - MG)  
     const handleSuperiorPalatinoMGy = (denteIndex, pointName, value) => {
        const updatedDentes = pontosYGrafico.superior.palatina.MG.flat().map((dente, index) => index === denteIndex ? {...dente, [pointName]: Number(value)} : dente);

        setPontosYGrafico((prevObj) => ({
            ...prevObj,
            superior: {
                ...prevObj.superior,
                palatina: {
                    ...prevObj.superior.palatina, 
                    MG: updatedDentes
                }
            }
        }));
    };
     // Superiores (Palatinas - PS)  
     const handleSuperiorPalatinoPSy = (denteIndex, pointName, value) => {
        const updatedDentes = pontosYGrafico.superior.palatina.PS.flat().map((dente, index) => index === denteIndex ? {...dente, [pointName]: Number(value)} : dente);

        setPontosYGrafico((prevObj) => ({
            ...prevObj,
            superior: {
                ...prevObj.superior,
                palatina: {
                    ...prevObj.superior.palatina, 
                    PS: updatedDentes
                }
            }
        }));
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
                            dentesYCoordsMG={pontosYGrafico.superior.vestibular.MG}
                            dentesYCoordsPS={pontosYGrafico.superior.vestibular.PS}
                            handleYInputChangeMG={handleSuperiorVestibularMGy}
                            handleYInputChangePS={handleSuperiorVestibularPSy}
                            setPontosYGrafico={setPontosYGrafico}
                            Palatino={false}
                        />
                        <div className={ style.exame_content_page_dentes_container }>             
                            {
                                dentesInfo.map((_, index) => (
                                    <Dente dentesInfo={dentesInfo} denteIndex={index} Palatino={false}/>
                                ))
                            }
                            <ListasGrafico Palatino={false}/>
                            <Grafico dentesYCoordsMG={pontosYGrafico.superior.vestibular.MG} dentesYCoordsPS={pontosYGrafico.superior.vestibular.PS} Palatino={false}/>
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
                            <Grafico dentesYCoordsMG={pontosYGrafico.superior.palatina.MG} dentesYCoordsPS={pontosYGrafico.superior.palatina.PS} Palatino={true}/>
                        </div>

                        <InputInformations 
                            dentesInfo={dentesInfo}
                            setDentesInfo={setDentesInfo}
                            dentesYCoordsMG={pontosYGrafico.superior.palatina.MG}
                            dentesYCoordsPS={pontosYGrafico.superior.palatina.PS}
                            handleYInputChangeMG={handleSuperiorPalatinoMGy}
                            handleYInputChangePS={handleSuperiorPalatinoPSy}
                            setPontosYGrafico={setPontosYGrafico}
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