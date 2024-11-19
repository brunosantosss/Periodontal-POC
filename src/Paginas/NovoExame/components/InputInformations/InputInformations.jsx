import style from "../../styles/InputInformations.module.css";

import Furca from "./Inputs/Furca";
import Implante from "./Inputs/Implante";
import MargemGengival from "./Inputs/MargemGengival";
import Mobilidade from "./Inputs/Mobilidade";
import Placa from "./Inputs/Placa";
import ProfundidadeSondagem from "./Inputs/ProfundidadeSondagem";
import SangramentoSondagem from "./Inputs/SangramentoSondagem";

const InputInformations = ( {dentesInfo, setDentesInfo, dentesYCoordsMG, dentesYCoordsPS, handleYInputChangeMG, handleYInputChangePS, setPontosYGrafico, Superior, Frente} ) => {
    return (
        <section className={ style.inputinformations_content + " gap-1 bg-white" }>
            {
                <>
                {
                    Superior ? (
                        Frente ? (
                            <div className={ style.inputinformations_content_labels}>
                                <p>Mobilidade</p>
                                <p>Implante</p>
                                <p>Furca</p>
                                <p>Sangramento à sondagem</p>
                                <p>Placa</p>
                                <p>Profundidade de sondagem</p>
                                <p>Margem gengival</p>
                            </div>
                        ) : (
                            <div className={ style.inputinformations_content_labels + ` ${ style.palatino }` }>
                                <p>Profundidade de sondagem</p>
                                <p>Margem gengival</p>
                                <p>Sangramento à sondagem</p>
                                <p>Placa</p>
                                <p>Furca</p>
                            </div>
                        )
                    ) : (
                        Frente ? (
                            <div className={ style.inputinformations_content_labels + ` ${ style.lingual }` }>
                                <p>Furca</p>
                                <p>Sangramento à sondagem</p>
                                <p>Placa</p>
                                <p>Profundidade de sondagem</p>
                                <p>Margem gengival</p>
                            </div>
                        ) : (
                            <div className={ style.inputinformations_content_labels + ` ${ style.vestibular }` }>
                                <p>Profundidade de sondagem</p>
                                <p>Margem gengival</p>
                                <p>Placa</p>
                                <p>Sangramento à sondagem</p>
                                <p>Furca</p>
                                <p>Implante</p>
                                <p>Mobilidade</p>
                            </div>      
                        )
                    )
                }
                </>  
            }

            <div className={ style.inputinformations_content_inputs + ( Frente ? " mb-2" : " mt-2" )}>
                {
                    dentesYCoordsMG.flat().map((dente, index) => (
                        <>
                            <div className={ style.inputinformations_content_input }>
                                <>
                                    {
                                        Superior ? (
                                            Frente ? (
                                                <>
                                                <div className="w-100 border">
                                                    <h6 className="fw-bold pointer text-center"
                                                        onClick={() => {
                                                            const updateDentesInfo = [...dentesInfo];
                                                            updateDentesInfo[index].dente_index = index;
                                                            updateDentesInfo[index].dente_ativado = !updateDentesInfo[index].dente_ativado;
                                                            setDentesInfo(updateDentesInfo);
                        
                                                            if (updateDentesInfo[index].dente_ativado === false) {         
                                                                const setDentesToZero = dentesYCoordsMG.map((dente, denteIndex) => 
                                                                    denteIndex === index ? {...dente, point_one: 0, point_two: 0, point_three: 0 } : dente
                                                                );
                                                                
                                                                if (Superior) {
                                                                    setPontosYGrafico((prevObj) => ({
                                                                        ...prevObj,
                                                                        superior: {
                                                                            ...prevObj.superior,
                                                                            vestibular: {
                                                                                ...prevObj.superior.vestibular, 
                                                                                MG: setDentesToZero,
                                                                                PS: setDentesToZero
                                                                            },
                                                                            palatina: {
                                                                                ...prevObj.superior.palatina, 
                                                                                MG: setDentesToZero,
                                                                                PS: setDentesToZero
                                                                            },
                                                                        }
                                                                    }));
                                                                } else {
                                                                    setPontosYGrafico((prevObj) => ({
                                                                        ...prevObj,
                                                                        inferior: {
                                                                            ...prevObj.inferior,
                                                                            lingual: {
                                                                                ...prevObj.inferior.lingual, 
                                                                                MG: setDentesToZero,
                                                                                PS: setDentesToZero
                                                                            },
                                                                            vestibular: {
                                                                                ...prevObj.inferior.vestibular, 
                                                                                MG: setDentesToZero,
                                                                                PS: setDentesToZero
                                                                            },
                                                                        }
                                                                    }));
                                                                }
                                                                setPontosYGrafico(updatedDentesMG);
                                                                
                                                            }
                                                        }}
                                                    >{
                                                        Superior ? (
                                                            index >= 0 && index <= 7 ? 18 - index : 13 + index
                                                        ) : (
                                                            index >= 0 && index <= 7 ? 48 - index : 23 + index
                                                        )
                                                    }</h6>
                                                </div>
                                                
                                                <Mobilidade dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index}/>
                                                <Implante dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index}/>
                                                <Furca dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index} Superior={Superior} Frente={true}/>
    
                                                <SangramentoSondagem dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index} Frente={true}/>
                                                <Placa dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index} Frente={true}/>
    
                                                <ProfundidadeSondagem dente={dente} dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index} handleYInputChangePS={handleYInputChangePS} dentesYCoordsMG={dentesYCoordsMG} />                         
                                                <MargemGengival dente={dente} dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index} handleYInputChangeMG={handleYInputChangeMG} handleYInputChangePS={handleYInputChangePS} dentesYCoordsMG={dentesYCoordsMG} dentesYCoordsPS={dentesYCoordsPS} />
                                                </>
                                            ) : (
                                                <>     
                                                <ProfundidadeSondagem dente={dente} dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index} handleYInputChangePS={handleYInputChangePS} dentesYCoordsMG={dentesYCoordsMG} />                         
                                                <MargemGengival dente={dente} dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index} handleYInputChangeMG={handleYInputChangeMG} handleYInputChangePS={handleYInputChangePS} dentesYCoordsMG={dentesYCoordsMG} dentesYCoordsPS={dentesYCoordsPS} />
                                                <SangramentoSondagem dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index} Frente={false}/>
                                                <Placa dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index} Frente={false}/>
                                                <Furca dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index} Superior={Superior} Frente={false}/>
                                                </> 
                                            )
                                        ) : (
                                            Frente ? (
                                                <>     
                                                <Furca dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index} Superior={Superior} Frente={false}/>
                                                <SangramentoSondagem dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index} Frente={false}/>
                                                <Placa dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index} Frente={false}/>
                                                <ProfundidadeSondagem dente={dente} dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index} handleYInputChangePS={handleYInputChangePS} dentesYCoordsMG={dentesYCoordsMG} />                         
                                                <MargemGengival dente={dente} dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index} handleYInputChangeMG={handleYInputChangeMG} handleYInputChangePS={handleYInputChangePS} dentesYCoordsMG={dentesYCoordsMG} dentesYCoordsPS={dentesYCoordsPS} />
                                                </> 
                                            ) : (
                                                <>
                                                <ProfundidadeSondagem dente={dente} dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index} handleYInputChangePS={handleYInputChangePS} dentesYCoordsMG={dentesYCoordsMG} />
                                                <MargemGengival dente={dente} dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index} handleYInputChangeMG={handleYInputChangeMG} handleYInputChangePS={handleYInputChangePS} dentesYCoordsMG={dentesYCoordsMG} dentesYCoordsPS={dentesYCoordsPS} />
                                                <Placa dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index} Frente={true}/> 
                                                <SangramentoSondagem dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index} Frente={true}/>
                                                <Furca dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index} Superior={Superior} Frente={true}/>
                                                <Implante dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index}/>
                                                <Mobilidade dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index}/>

                                                <div className="w-100 border">
                                                    <h6 className="fw-bold pointer text-center"
                                                        onClick={() => {
                                                            const updateDentesInfo = [...dentesInfo];
                                                            updateDentesInfo[index].dente_index = index;
                                                            updateDentesInfo[index].dente_ativado = !updateDentesInfo[index].dente_ativado;
                                                            setDentesInfo(updateDentesInfo);
                        
                                                            if (updateDentesInfo[index].dente_ativado === false) {         
                                                                const setDentesToZero = dentesYCoordsMG.map((dente, denteIndex) => 
                                                                    denteIndex === index ? {...dente, point_one: 0, point_two: 0, point_three: 0 } : dente
                                                                );
                                                                
                                                                if (Superior) {
                                                                    setPontosYGrafico((prevObj) => ({
                                                                        ...prevObj,
                                                                        superior: {
                                                                            ...prevObj.superior,
                                                                            vestibular: {
                                                                                ...prevObj.superior.vestibular, 
                                                                                MG: setDentesToZero,
                                                                                PS: setDentesToZero
                                                                            },
                                                                            palatina: {
                                                                                ...prevObj.superior.palatina, 
                                                                                MG: setDentesToZero,
                                                                                PS: setDentesToZero
                                                                            },
                                                                        }
                                                                    }));
                                                                } else {
                                                                    setPontosYGrafico((prevObj) => ({
                                                                        ...prevObj,
                                                                        inferior: {
                                                                            ...prevObj.inferior,
                                                                            lingual: {
                                                                                ...prevObj.inferior.lingual, 
                                                                                MG: setDentesToZero,
                                                                                PS: setDentesToZero
                                                                            },
                                                                            vestibular: {
                                                                                ...prevObj.inferior.vestibular, 
                                                                                MG: setDentesToZero,
                                                                                PS: setDentesToZero
                                                                            },
                                                                        }
                                                                    }));
                                                                }
                                                                setPontosYGrafico(updatedDentesMG);
                                                                
                                                            }
                                                        }}
                                                    >{
                                                        Superior ? (
                                                            index >= 0 && index <= 7 ? 18 - index : 13 + index
                                                        ) : (
                                                            index >= 0 && index <= 7 ? 48 - index : 23 + index
                                                        )
                                                    }</h6>
                                                </div>
                                                
                                                </>
                                            )
                                        )
                                    }
                                </>
                            </div>
                        </>
                    ))    
                }
            </div>
        </section>
    )
};

export default InputInformations;