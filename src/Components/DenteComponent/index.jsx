import { useState } from "react";

import vestibularDenteImplante18 from "../../assets/dentes/superior/vestibular/png/DenteImplante18.svg"
import vestibularDenteImplante17 from "../../assets/dentes/superior/vestibular/png/DenteImplante17.svg"
import vestibularDenteImplante16 from "../../assets/dentes/superior/vestibular/png/DenteImplante16.svg"
import vestibularDenteImplante15 from "../../assets/dentes/superior/vestibular/png/DenteImplante15.svg"
import vestibularDenteImplante14 from "../../assets/dentes/superior/vestibular/png/DenteImplante14.svg"
import vestibularDenteImplante13 from "../../assets/dentes/superior/vestibular/png/DenteImplante13.svg"
import vestibularDenteImplante12 from "../../assets/dentes/superior/vestibular/png/DenteImplante12.svg"
import vestibularDenteImplante11 from "../../assets/dentes/superior/vestibular/png/DenteImplante11.svg"

import vestibularDenteImplante21 from "../../assets/dentes/superior/vestibular/png/DenteImplante21.svg"
import vestibularDenteImplante22 from "../../assets/dentes/superior/vestibular/png/DenteImplante22.svg"
import vestibularDenteImplante23 from "../../assets/dentes/superior/vestibular/png/DenteImplante23.svg"
import vestibularDenteImplante24 from "../../assets/dentes/superior/vestibular/png/DenteImplante24.svg"
import vestibularDenteImplante25 from "../../assets/dentes/superior/vestibular/png/DenteImplante25.svg"
import vestibularDenteImplante26 from "../../assets/dentes/superior/vestibular/png/DenteImplante26.svg"
import vestibularDenteImplante27 from "../../assets/dentes/superior/vestibular/png/DenteImplante27.svg"
import vestibularDenteImplante28 from "../../assets/dentes/superior/vestibular/png/DenteImplante28.svg"

import style from "./index.module.css";
import DenteDesativado from "./DenteDesativado";

const DenteComponent = ({ denteIndex, denteIcon, height, implanteHeight, denteImplante = false, denteWidth = 100, denteDesativado }) => {

    const implantesIcons = [vestibularDenteImplante18, vestibularDenteImplante17 ,vestibularDenteImplante16, vestibularDenteImplante15, vestibularDenteImplante14, vestibularDenteImplante13, vestibularDenteImplante12, vestibularDenteImplante11, vestibularDenteImplante21, vestibularDenteImplante22, vestibularDenteImplante23, vestibularDenteImplante24, vestibularDenteImplante25, vestibularDenteImplante26, vestibularDenteImplante27, vestibularDenteImplante28];

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
                            className={ `position-relative ${ !denteDesativado ? "opacity-50" : ""}`} 
                            
                            style={ 
                                denteImplante 
                                ? 
                                {top: implanteHeight+"px", width: denteWidth+"%"} 
                                : 
                                {top: height+"px", width: denteWidth+"%"} 
                            }
                        /> 
                    </div>
                </div>
            </div>
        </>
    )
};

export default DenteComponent;