import { useState } from "react";

import DenteDrawLineMG from "./DenteDrawLineMG";
import DenteDrawLinePS from "./DenteDrawLinePS";

import style from "./index.module.css";

const DenteComponent = ({ denteIcon, height, graphicLineHeight, denteWidth = 100 }) => {

    const [ valuePSCord1, setValuePSCord1 ] = useState(0);
    const [ valuePSCord2, setValuePSCord2 ] = useState(0);
    const [ valuePSCord3, setValuePSCord3 ] = useState(0);
    
    const [ valueMGCord1, setValueMGCord1 ] = useState(0);
    const [ valueMGCord2, setValueMGCord2 ] = useState(0);
    const [ valueMGCord3, setValueMGCord3 ] = useState(0);
    
    return (
        <>
            <div className="h-100 d-flex flex-column gap-5">
                <div className="w-100 d-flex flex-column border">
                    <div className="d-flex flex-column border-bottom p-1">
                        <div className="w-100 d-flex">
                            <input type="number" id="PS_Cord1"
                                className="w-25 flex-fill border border-0"
                                value={valuePSCord1}
                                onChange={(e) => {
                                    setValuePSCord1(parseInt(e.target.value))
                                }}
                                
                                />
                            <input type="number" id="PS_Cord2" 
                                className="w-25 flex-fill border border-0"
                                value={valuePSCord2}
                                onChange={(e) => {
                                    setValuePSCord2(parseInt(e.target.value))
                                }}
                                />
                            <input type="number" id="PS_Cord3" 
                                className="w-25 flex-fill border border-0"
                                value={valuePSCord3}
                                onChange={(e) => {
                                    setValuePSCord3(parseInt(e.target.value))
                                }}
                                />
                        </div>
                    </div>
                    <div className="d-flex flex-column p-1">
                        <div className="w-100 d-flex">
                            <input type="number" id="MG_Cord1"
                                className="w-25 flex-fill border border-0"
                                value={valueMGCord1}
                                onChange={(e) => {
                                    setValueMGCord1(parseInt(e.target.value))
                                }}
                                />
                            <input type="number" id="MG_Cord2" 
                                className="w-25 flex-fill border border-0"
                                value={valueMGCord2}
                                onChange={(e) => {
                                    setValueMGCord2(parseInt(e.target.value))
                                }}
                                />
                            <input type="number" id="MG_Cord3" 
                                className="w-25 flex-fill border border-0"
                                value={valueMGCord3}
                                onChange={(e) => {
                                    setValueMGCord3(parseInt(e.target.value))
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className={ style.dente_container + " w-100 h-100 d-flex justify-content-center align-items-center"}>  
                    <div className="position-relative d-flex justify-content-start align-items-center">
                        <DenteDrawLinePS 
                            graphicLineHeight={graphicLineHeight}
                            CordY1={valuePSCord1}
                            CordY2={valuePSCord2}
                            CordY3={valuePSCord3}
                        />
                        <DenteDrawLineMG
                            graphicLineHeight={graphicLineHeight}
                            CordY1={valueMGCord1}
                            CordY2={valueMGCord2}
                            CordY3={valueMGCord3}
                        />
                        <img src={denteIcon} className={"position-relative"} style={{top: height+"px", width: denteWidth+"%"}}/>
                    </div>
                </div>

            </div>
        </>
    )
};

export default DenteComponent;