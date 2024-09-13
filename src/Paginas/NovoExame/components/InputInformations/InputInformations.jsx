import style from "../../styles/InputInformations.module.css";

import Furca from "./Inputs/Furca";
import Implante from "./Inputs/Implante";
import MargemGengival from "./Inputs/MargemGengival";
import Mobilidade from "./Inputs/Mobilidade";
import Placa from "./Inputs/Placa";
import ProfundidadeSondagem from "./Inputs/ProfundidadeSondagem";
import SangramentoSondagem from "./Inputs/SangramentoSondagem";

const InputInformations = ( {dentesInfo, setDentesInfo, dentesYCoordsMG, dentesYCoordsPS, handleYInputChangeMG, handleYInputChangePS, setDentesYCoordsMG, setDentesYCoordsPS} ) => {
    return (
        <section className={ style.inputinformations_content + " gap-1" }>
            <div className={ style.inputinformations_content_labels}>
                <p>Mobilidade</p>
                <p>Implante</p>
                <p>Furca</p>
                <p>Sangramento à sondagem</p>
                <p>Placa</p>
                <p>Profundidade de sondagem</p>
                <p>Margem gengival</p>
            </div>

            <div className={ style.inputinformations_content_inputs }>
                {
                    dentesYCoordsMG.map((dente, index) => (
                        <>
                            <div className={ style.inputinformations_content_input}>
                                <>
                                    <div className="w-100 border">
                                        <h6 className="fw-bold pointer text-center"
                                            onClick={() => {
                                                const updateDentesInfo = [...dentesInfo];
                                                updateDentesInfo[index].dente_index = index;
                                                updateDentesInfo[index].dente_ativado = !updateDentesInfo[index].dente_ativado;
                                                setDentesInfo(updateDentesInfo);
            
                                                if (updateDentesInfo[index].dente_ativado === false) {         
                                                    const updatedDentesMG = dentesYCoordsMG.map((dente, denteIndex) => 
                                                        denteIndex === index ? {...dente, point_one: 0, point_two: 0, point_three: 0 } : dente
                                                    );
                                                    
                                                    const updatedDentesPS = dentesYCoordsPS.map((dente, denteIndex) => 
                                                        denteIndex === index ? {...dente, point_one: 0, point_two: 0, point_three: 0 } : dente
                                                    );
                                                    
                                                    setDentesYCoordsMG(updatedDentesMG);     
                                                    setDentesYCoordsPS(updatedDentesPS);   
                                                    
                                                }
                                            }}
                                        >{index >= 0 && index <= 7 ? 18 - index : 13 + index}</h6>
                                    </div>
                                    
                                    <Mobilidade dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index}/>
                                    <Implante dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index}/>
                                    <Furca dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index}/>

                                    <SangramentoSondagem dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index}/>
                                    <Placa dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index}/>

                                    <ProfundidadeSondagem dente={dente} dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index} handleYInputChangePS={handleYInputChangePS} dentesYCoordsMG={dentesYCoordsMG} />                         
                                    <MargemGengival dente={dente} dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index} handleYInputChangeMG={handleYInputChangeMG} />
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