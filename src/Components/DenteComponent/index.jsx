import { useState } from "react";

import vestibularDenteImplante18 from "../../assets/dentes/superior/vestibular/png/DenteImplante18.svg"
import vestibularDenteImplante17 from "../../assets/dentes/superior/vestibular/png/DenteImplante17.svg"
import vestibularDenteImplante16 from "../../assets/dentes/superior/vestibular/png/DenteImplante16.svg"
import vestibularDenteImplante15 from "../../assets/dentes/superior/vestibular/png/DenteImplante15.svg"
import vestibularDenteImplante14 from "../../assets/dentes/superior/vestibular/png/DenteImplante14.svg"
import vestibularDenteImplante13 from "../../assets/dentes/superior/vestibular/png/DenteImplante13.svg"
import vestibularDenteImplante12 from "../../assets/dentes/superior/vestibular/png/DenteImplante12.svg"
import vestibularDenteImplante11 from "../../assets/dentes/superior/vestibular/png/DenteImplante11.svg"

import style from "./index.module.css";
import DenteDesativado from "./DenteDesativado";

const DenteComponent = ({ denteIndex, denteIcon, height, implanteHeight, denteImplante = false, denteWidth = 100, denteDesativado }) => {

    const implantesIcons = [vestibularDenteImplante18, vestibularDenteImplante17 ,vestibularDenteImplante16, vestibularDenteImplante15, vestibularDenteImplante14, vestibularDenteImplante13, vestibularDenteImplante12, vestibularDenteImplante11];

    return (
        <>
            <div className="h-100 d-flex flex-column gap-5">
                <div className={ style.dente_container + " w-100 h-100 d-flex justify-content-center align-items-center"}>  
                    <div className="position-relative d-flex justify-content-start align-items-center">   
                        {
                            !denteDesativado ? (
                                <DenteDesativado />
                            ) : (
                                <></>
                            )
                        }                               
                        <img 
                            src={ denteImplante ? implantesIcons[denteIndex] : denteIcon} 
                            className={"position-relative"} 
                            style={ 
                                denteImplante 
                                ? 
                                {top: implanteHeight+"px", width: denteWidth+"%"} 
                                : 
                                {top: height+"px", width: denteWidth+"%"} }
                        /> 
                    </div>
                </div>
            </div>
        </>
    )
};

export default DenteComponent;