import { useState } from "react";

import style from "./index.module.css";

const DenteComponent = ({ denteNumber, denteIcon, height, graphicLineHeight, denteWidth = 100 }) => {
    return (
        <>
            <div className="h-100 d-flex flex-column gap-5">
                <div className={ style.dente_container + " w-100 h-100 d-flex justify-content-center align-items-center"}>  
                    <div className="position-relative d-flex justify-content-start align-items-center">
                        <img src={denteIcon} className={"position-relative"} style={{top: height+"px", width: denteWidth+"%"}}/>
                    </div>
                </div>

            </div>
        </>
    )
};

export default DenteComponent;