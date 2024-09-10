import style from "../../styles/InputInformations.module.css";

import Furca from "./Inputs/Furca";
import Implante from "./Inputs/Implante";
import MargemGengival from "./Inputs/MargemGengival";
import Mobilidade from "./Inputs/Mobilidade";
import Placa from "./Inputs/Placa";
import ProfundidadeSondagem from "./Inputs/ProfundidadeSondagem";
import SangramentoSondagem from "./Inputs/SangramentoSondagem";

const InputInformations = ( {dentesInfo, setDentesInfo, dentesYCoordsMG, setDentesYCoordsMG, dentesYCoordsPS, setDentesYCoordsPS} ) => {

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
        <section className={ style.inputinformations_content + " gap-1" }>
            <div className={ style.inputinformations_content_labels}>
                <p>Mobilidade</p>
                <p className="pt-3">Implante</p>
                <p className="pt-4">Furca</p>
                <p className="pt-3">Sangramento à sondagem</p>
                <p>Placa</p>
                <p>Profundidade de sondagem</p>
                <p className="pt-2">Margem gengival</p>
            </div>

            <div className={ style.inputinformations_content_inputs }>
                {
                    dentesYCoordsMG.map((dente, index) => (
                        <>
                            <div className={ style.inputinformations_content_input + " border" }>
                                <>
                                    <h4>{index >= 0 && index <= 7 ? 18 - index : 13 + index}</h4>

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