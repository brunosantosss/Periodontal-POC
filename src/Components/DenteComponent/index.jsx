import { useState } from "react";
import DenteDrawLine from "./DenteDrawLine";

import style from "./index.module.css";

const DenteComponent = ({ denteIcon, height, graphicLineHeight }) => {

    const [ valuePSCord1, setValuePSCord1 ] = useState(0);
    const [ valuePSCord2, setValuePSCord2 ] = useState(0);
    const [ valuePSCord3, setValuePSCord3 ] = useState(0);

    const [ valueMGCord1, setValueMGCord1 ] = useState(0);
    const [ valueMGCord2, setValueMGCord2 ] = useState(0);
    const [ valueMGCord3, setValueMGCord3 ] = useState(0);

    return (
        <div className="h-100 d-flex flex-column">
            <div className="w-100 d-flex flex-column border">
                <div className="d-flex flex-column">
                    <p>P.S</p>
                    <div className="w-100">
                        <input type="number" id="PS_Cord1"
                            className="w-25"
                            value={valuePSCord1}
                            onChange={(e) => {
                                setValuePSCord1(parseInt(e.target.value))
                            }}
                            
                            />
                        <input type="number" id="PS_Cord2" 
                            className="w-25"
                            value={valuePSCord2}
                            onChange={(e) => {
                                setValuePSCord2(parseInt(e.target.value))
                            }}
                            />
                        <input type="number" id="PS_Cord3" 
                            className="w-25"
                            value={valuePSCord3}
                            onChange={(e) => {
                                setValuePSCord3(parseInt(e.target.value))
                            }}
                            />
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <p>M.G</p>
                    <div className="w-100">
                        <input type="number" id="MG_Cord1"
                            className="w-25"
                            value={valueMGCord1}
                            onChange={(e) => {
                                setValueMGCord1(parseInt(e.target.value))
                            }}
                            />
                        <input type="number" id="MG_Cord2" 
                            className="w-25"
                            value={valueMGCord2}
                            onChange={(e) => {
                                setValueMGCord2(parseInt(e.target.value))
                            }}
                            />
                        <input type="number" id="MG_Cord3" 
                            className="w-25"
                            value={valueMGCord3}
                            onChange={(e) => {
                                setValueMGCord3(parseInt(e.target.value))
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className={ style.dente_container + " w-100 h-100 d-flex justify-content-center align-items-center"}>    
                <DenteDrawLine
                    valuePSCord1={valuePSCord1}
                    valuePSCord2={valuePSCord2}
                    valuePSCord3={valuePSCord3}
                    valueMGCord1={valueMGCord1}
                    valueMGCord2={valueMGCord2}
                    valueMGCord3={valueMGCord3}
                    graphicLineHeight={graphicLineHeight}
                />
                
                <img src={denteIcon} className={" w-100 position-relative"} style={{top: height+"px"}}/>
            </div>

        </div>
    )
};

export default DenteComponent;