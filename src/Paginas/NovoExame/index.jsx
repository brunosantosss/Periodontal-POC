import { useState } from "react";

import style from "../../styles/components/Exame.module.css";

import InputInformations from "./components/InputInformations/InputInformations";

import Dente from "./components/Dente"
import Grafico from "./components/Grafico";

import Navbar from "../../Components/common/Navbar";
import Footer from "../../Components/common/Footer";
import ListasGrafico from "./components/ListasGrafico";
import NavSections from "../../Components/exame/NavSections";

const NovoExame = () => {
    const [ superioresDentesInfo, setSuperioresDentesInfo ] = useState(
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

    const [ inferioresDentesInfo, setInferioresDentesInfo ] = useState(
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
        },
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

    // Inferiores (Linguais - MG)  
    const handleInferiorLingualMGy = (denteIndex, pointName, value) => {
        const updatedDentes = pontosYGrafico.inferior.lingual.MG.flat().map((dente, index) => index === denteIndex ? {...dente, [pointName]: Number(value)} : dente);

        setPontosYGrafico((prevObj) => ({
            ...prevObj,
            inferior: {
                ...prevObj.inferior,
                lingual: {
                    ...prevObj.inferior.lingual, 
                    MG: updatedDentes
                }
            }
        }));
    };
    // Inferiores (Linguais - PS)  
    const handleInferiorLingualPSy = (denteIndex, pointName, value) => {
        const updatedDentes = pontosYGrafico.inferior.lingual.PS.flat().map((dente, index) => index === denteIndex ? {...dente, [pointName]: Number(value)} : dente);

        setPontosYGrafico((prevObj) => ({
            ...prevObj,
            inferior: {
                ...prevObj.inferior,
                lingual: {
                    ...prevObj.inferior.lingual, 
                    PS: updatedDentes
                }
            }
        }));
    };

    // Inferiores (Vestibulares - MG)  
    const handleInferiorVestibularMGy = (denteIndex, pointName, value) => {
        const updatedDentes = pontosYGrafico.inferior.vestibular.MG.flat().map((dente, index) => index === denteIndex ? {...dente, [pointName]: Number(value)} : dente);

        setPontosYGrafico((prevObj) => ({
            ...prevObj,
            inferior: {
                ...prevObj.inferior,
                vestibular: {
                    ...prevObj.inferior.vestibular, 
                    MG: updatedDentes
                }
            }
        }));
    };
    // Inferiores (Vestibulares - PS)  
    const handleInferiorVestibularPSy = (denteIndex, pointName, value) => {
        const updatedDentes = pontosYGrafico.inferior.vestibular.PS.flat().map((dente, index) => index === denteIndex ? {...dente, [pointName]: Number(value)} : dente);

        setPontosYGrafico((prevObj) => ({
            ...prevObj,
            inferior: {
                ...prevObj.inferior,
                vestibular: {
                    ...prevObj.inferior.vestibular, 
                    PS: updatedDentes
                }
            }
        }));
    };

    return (
        <>
            <Navbar />
            <NavSections />
            <div className="overflow-x-auto">    
                <section id="exame-content-page" className={ style.exame_content_page }>
                    {/* Dentes superiores */}
                    <div id="superior" className={style.exame_content_page_superior_vestibular}>
                        {/* Vestibular */}
                        <InputInformations 
                            dentesInfo={superioresDentesInfo}
                            setDentesInfo={setSuperioresDentesInfo}
                            dentesYCoordsMG={pontosYGrafico.superior.vestibular.MG}
                            dentesYCoordsPS={pontosYGrafico.superior.vestibular.PS}
                            handleYInputChangeMG={handleSuperiorVestibularMGy}
                            handleYInputChangePS={handleSuperiorVestibularPSy}
                            setPontosYGrafico={setPontosYGrafico}
                            Superior={true}
                            Frente={true}
                        />
                        <div className={ style.exame_content_page_dentes_container }>             
                            {
                                superioresDentesInfo.map((_, index) => (
                                    <Dente dentesInfo={superioresDentesInfo} denteIndex={index} Superior={true} Frente={true}/>
                                ))
                            }
                            <ListasGrafico Superior={true} Frente={true}/>
                            <Grafico dentesYCoordsMG={pontosYGrafico.superior.vestibular.MG} dentesYCoordsPS={pontosYGrafico.superior.vestibular.PS} Superior={true} Frente={true}/>
                        </div>
                    </div>
                    <div className={ style.exame_content_page_superior_palatina }>
                        {/* Palatina */}
                        <div className={ style.exame_content_page_dentes_container }>             
                            {
                                superioresDentesInfo.map((_, index) => (
                                    <Dente dentesInfo={superioresDentesInfo} denteIndex={index} Superior={true} Frente={false}/>
                                ))
                            }
                            <ListasGrafico Superior={true} Frente={false}/>
                            <Grafico dentesYCoordsMG={pontosYGrafico.superior.palatina.MG} dentesYCoordsPS={pontosYGrafico.superior.palatina.PS} Superior={true} Frente={false}/>
                        </div>

                        <InputInformations 
                            dentesInfo={superioresDentesInfo}
                            setDentesInfo={setSuperioresDentesInfo}
                            dentesYCoordsMG={pontosYGrafico.superior.palatina.MG}
                            dentesYCoordsPS={pontosYGrafico.superior.palatina.PS}
                            handleYInputChangeMG={handleSuperiorPalatinoMGy}
                            handleYInputChangePS={handleSuperiorPalatinoPSy}
                            setPontosYGrafico={setPontosYGrafico}
                            Superior={true}
                            Frente={false}
                        />
                    </div>
                    
                    <div className={ style.exame_content_page_separador }>
                        <div>
                            <p>Média da profund. de sondagem = <span>3.1 </span>mm</p>
                            <p>Média do nível de inserção = <span>3.3 </span>mm</p>
                            <p><span>72%</span> Placa</p>
                            <p><span>45%</span> Sangramento à sondagem</p>
                        </div>
                    </div>

                    {/* Dentes inferiores */}
                    <div id="inferior" className={style.exame_content_page_inferior_lingual}>
                        {/* Lingual */}
                        <InputInformations 
                            dentesInfo={inferioresDentesInfo}
                            setDentesInfo={setInferioresDentesInfo}
                            dentesYCoordsMG={pontosYGrafico.inferior.lingual.MG}
                            dentesYCoordsPS={pontosYGrafico.inferior.lingual.PS}
                            handleYInputChangeMG={handleInferiorLingualMGy}
                            handleYInputChangePS={handleInferiorLingualPSy}
                            setPontosYGrafico={setPontosYGrafico}
                            Superior={false}
                            Frente={true}
                        />
                        <div className={ style.exame_content_page_dentes_container }>             
                            {
                                inferioresDentesInfo.map((_, index) => (
                                    <Dente dentesInfo={inferioresDentesInfo} denteIndex={index} Superior={false} Frente={true}/>
                                )) 
                            }
                            <ListasGrafico Superior={false} Frente={true}/>
                            <Grafico dentesYCoordsMG={pontosYGrafico.inferior.lingual.MG} dentesYCoordsPS={pontosYGrafico.inferior.lingual.PS} Superior={false} Frente={true}/>
                        </div>
                    </div>
                    <div className={style.exame_content_page_inferior_vestibular}>
                        {/* Vestibular */}
                        <div className={ style.exame_content_page_dentes_container }>             
                            {
                                inferioresDentesInfo.map((_, index) => (
                                    <Dente dentesInfo={inferioresDentesInfo} denteIndex={index} Superior={false} Frente={false}/>
                                )) 
                            }
                            <ListasGrafico Superior={false} Frente={false}/>
                            <Grafico dentesYCoordsMG={pontosYGrafico.inferior.vestibular.MG} dentesYCoordsPS={pontosYGrafico.inferior.vestibular.PS} Superior={false} Frente={false}/>
                        </div>
                        <InputInformations 
                            dentesInfo={inferioresDentesInfo}
                            setDentesInfo={setInferioresDentesInfo}
                            dentesYCoordsMG={pontosYGrafico.inferior.vestibular.MG}
                            dentesYCoordsPS={pontosYGrafico.inferior.vestibular.PS}
                            handleYInputChangeMG={handleInferiorVestibularMGy}
                            handleYInputChangePS={handleInferiorVestibularPSy}
                            setPontosYGrafico={setPontosYGrafico}
                            Superior={false}
                            Frente={false}
                        />
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
};

export default NovoExame;