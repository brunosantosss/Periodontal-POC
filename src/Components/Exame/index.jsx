import Dentes from "../../assets/dentes.jpg";
import ChartTest from "../ChartTest";

import style from "./index.module.css";

const Exame = () => {
    return (
        <section className="vw-100 vh-100 overflow-x-hidden">
            <h1>Exame</h1>
            
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                <div className="w-25">
                    <div className="d-flex gap-3 justify-content-between">
                        <p>P.S</p>
                        <div className="w-50">
                            <input type="number" id="PS_Cord1"
                                className="w-25"
                            />
                            <input type="number" id="PS_Cord2" 
                                className="w-25"
                            />
                            <input type="number" id="PS_Cord3" 
                                className="w-25"
                            />
                        </div>
                    </div>
                    <div className="d-flex gap-3 justify-content-between">
                        <p>M.G</p>
                        <div className="w-50">
                            <input type="number" id="MG_Cord1"
                                className="w-25"
                            />
                            <input type="number" id="MG_Cord2" 
                                className="w-25"
                            />
                            <input type="number" id="MG_Cord3" 
                                className="w-25"
                            />
                        </div>
                    </div>
                </div>

                <div className= { style.graphic_exam_container + "w-100 bg-danger p-2"} >
                    <ChartTest/>
                    <img src={Dentes}/>
                </div>
            </div>

        </section>
    )
}

export default Exame;