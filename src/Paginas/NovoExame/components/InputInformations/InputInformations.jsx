import style from "../../styles/InputInformations.module.css";

import Furca from "./Inputs/Furca";
import Implante from "./Inputs/Implante";
import MargemGengival from "./Inputs/MargemGengival";
import Mobilidade from "./Inputs/Mobilidade";
import Placa from "./Inputs/Placa";
import ProfundidadeSondagem from "./Inputs/ProfundidadeSondagem";
import SangramentoSondagem from "./Inputs/SangramentoSondagem";

const InputInformations = ( {dentesInfo, setDentesInfo} ) => {
    return (
        <section className={ style.inputinformations_content + " gap-5" }>
            <div className={ style.inputinformations_content_labels }>
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
                    dentesInfo.map((dente, index) => (
                        <>
                            <div className={ style.inputinformations_content_input + " border" }>
                                <h4>{index >= 0 && index <= 7 ? 18 - index : 13 + index}</h4>

                                <Mobilidade dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index}/>
                                <Implante dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index}/>
                                <Furca dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index}/>
                                <SangramentoSondagem dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index}/>
                                <Placa dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index}/>
                                <SangramentoSondagem dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index}/>
                                <Placa dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index}/>
                                {/* <ProfundidadeSondagem dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index} handleYInputChangeMG={null} /> */}
                                {/* <MargemGengival dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={index} handleYInputChangeMG={null} /> */}
                            </div>
                        </>
                    ))
                }
            </div>
        </section>
    )
};

export default InputInformations;