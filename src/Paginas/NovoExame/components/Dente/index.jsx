// Dentes vestibulares vestibulares superiores (NORMAL)

import vestibularDente18 from "../../../../assets/Dentes/18 - f .svg";
import vestibularDente17 from "../../../../assets/Dentes/17 - f.svg";
import vestibularDente16 from "../../../../assets/Dentes/16 - f.svg";
import vestibularDente15 from "../../../../assets/Dentes/15 - f.svg";
import vestibularDente14 from "../../../../assets/Dentes/14 - f.svg";
import vestibularDente13 from "../../../../assets/Dentes/13 - f.svg";
import vestibularDente12 from "../../../../assets/Dentes/12 - f.svg";
import vestibularDente11 from "../../../../assets/Dentes/11 - f.svg";

import vestibularDente21 from "../../../../assets/Dentes/21 - f.svg";
import vestibularDente22 from "../../../../assets/Dentes/22 - f.svg";
import vestibularDente23 from "../../../../assets/Dentes/23 - f.svg";
import vestibularDente24 from "../../../../assets/Dentes/24 - f.svg";
import vestibularDente25 from "../../../../assets/Dentes/25 - f.svg";
import vestibularDente26 from "../../../../assets/Dentes/26 - f.svg";
import vestibularDente27 from "../../../../assets/Dentes/27 - f.svg";
import vestibularDente28 from "../../../../assets/Dentes/28 - f.svg";

// Dentes vestibulares superiores (IMPLANTES)
import vestibularDenteImplante18 from "../../../../assets/Dentes/18 - f - i.svg";
import vestibularDenteImplante17 from "../../../../assets/Dentes/17 - f - i.svg";
import vestibularDenteImplante16 from "../../../../assets/Dentes/16 - f - i.svg";
import vestibularDenteImplante15 from "../../../../assets/Dentes/15 - f - i.svg";
import vestibularDenteImplante14 from "../../../../assets/Dentes/14 - f - i.svg";
import vestibularDenteImplante13 from "../../../../assets/Dentes/13 - f - i.svg";
import vestibularDenteImplante12 from "../../../../assets/Dentes/12 - f - i.svg";
import vestibularDenteImplante11 from "../../../../assets/Dentes/11 - f - i.svg";

import vestibularDenteImplante21 from "../../../../assets/Dentes/21 - f - i.svg";
import vestibularDenteImplante22 from "../../../../assets/Dentes/22 - f - i.svg";
import vestibularDenteImplante23 from "../../../../assets/Dentes/23 - f - i.svg";
import vestibularDenteImplante24 from "../../../../assets/Dentes/24 - f - i.svg";
import vestibularDenteImplante25 from "../../../../assets/Dentes/25 - f - i.svg";
import vestibularDenteImplante26 from "../../../../assets/Dentes/26 - f - i.svg";
import vestibularDenteImplante27 from "../../../../assets/Dentes/27 - f - i.svg";
import vestibularDenteImplante28 from "../../../../assets/Dentes/28 - f - i.svg";

// Dentes palatinos superiores (NORMAL)
import palatinaDente18 from "../../../../assets/Dentes/18 - v.svg";
import palatinaDente17 from "../../../../assets/Dentes/17 - v.svg";
import palatinaDente16 from "../../../../assets/Dentes/16 - v.svg";
import palatinaDente15 from "../../../../assets/Dentes/15 - v.svg";
import palatinaDente14 from "../../../../assets/Dentes/14 - v.svg";
import palatinaDente13 from "../../../../assets/Dentes/13 - v.svg";
import palatinaDente12 from "../../../../assets/Dentes/12 - v.svg";
import palatinaDente11 from "../../../../assets/Dentes/11 - v.svg";

import palatinaDente21 from "../../../../assets/Dentes/21 - v.svg";
import palatinaDente22 from "../../../../assets/Dentes/22 - v.svg";
import palatinaDente23 from "../../../../assets/Dentes/23 - v.svg";
import palatinaDente24 from "../../../../assets/Dentes/24 - v.svg";
import palatinaDente25 from "../../../../assets/Dentes/25 - v.svg";
import palatinaDente26 from "../../../../assets/Dentes/26 - v.svg";
import palatinaDente27 from "../../../../assets/Dentes/27 - v.svg";
import palatinaDente28 from "../../../../assets/Dentes/28 - v.svg";

import style from "../../styles/Dente.module.css";

import DenteOnOff from "../DenteOnOff";
import DenteFurca from "../DenteFurca";

const Dente = ({ dentesInfo, denteIndex, Palatino }) => {

    // Dentes Superiores Vestibular
    const supVestImages = [
        vestibularDente11, vestibularDente12, vestibularDente13, vestibularDente14, vestibularDente15, vestibularDente16, vestibularDente17, vestibularDente18, vestibularDente21, vestibularDente22, vestibularDente23, vestibularDente24, vestibularDente25, vestibularDente26, vestibularDente27, vestibularDente28
    ];
    
    const implantesSupVestImages = [vestibularDenteImplante11, vestibularDenteImplante12, vestibularDenteImplante13, vestibularDenteImplante14, vestibularDenteImplante15, vestibularDenteImplante16, vestibularDenteImplante17, vestibularDenteImplante18, vestibularDenteImplante21, vestibularDenteImplante22, vestibularDenteImplante23, vestibularDenteImplante24, vestibularDenteImplante25, vestibularDenteImplante26, vestibularDenteImplante27, vestibularDenteImplante28];
    
    // Dentes Superiores Palatina
    const supPalaImages = [
        palatinaDente11, palatinaDente12, palatinaDente13, palatinaDente14, palatinaDente15, palatinaDente16, palatinaDente17,
        palatinaDente18, palatinaDente21, palatinaDente22, palatinaDente23, palatinaDente24, palatinaDente25, palatinaDente26,
        palatinaDente27, palatinaDente28
    ]
    

    return (
        <div className={ style.dentes_container }>
            {
                !dentesInfo[denteIndex].dente_ativado ? (
                    <DenteOnOff />
                ) : (
                    <></>
                )
            }  
            {
                (dentesInfo[denteIndex].dente_ativado && !dentesInfo[denteIndex].dente_implante) && dentesInfo[denteIndex].dente_nivel_furca > 0 ? (
                    <DenteFurca
                        denteIndex={denteIndex}
                        denteNivelFurca={dentesInfo[denteIndex].dente_nivel_furca}
                    />
                ) : (
                    <></>
                )
            }   
            {
                !Palatino ? (
                    <img 
                        className={ `${ !dentesInfo[denteIndex].dente_ativado ? "opacity-50" : ""}`}
                        src={ 
                            (dentesInfo[denteIndex].dente_ativado && dentesInfo[denteIndex].dente_implante) 
                            ? 
                            implantesSupVestImages[denteIndex >= 0 && denteIndex <= 7 ? (7 - denteIndex) : denteIndex]
                            : 
                            supVestImages[denteIndex >= 0 && denteIndex <= 7 ? (7 - denteIndex) : denteIndex]}
                            style={{width: "100%"}
                        }
                    /> 
                ) : (
                    <img 
                        className={ `${ !dentesInfo[denteIndex].dente_ativado ? "opacity-50" : ""}`}
                        src={ 
                            (dentesInfo[denteIndex].dente_ativado && dentesInfo[denteIndex].dente_implante) 
                            ? 
                            implantesSupVestImages[denteIndex >= 0 && denteIndex <= 7 ? (7 - denteIndex) : denteIndex]
                            : 
                            supPalaImages[denteIndex >= 0 && denteIndex <= 7 ? (7 - denteIndex) : denteIndex]}
                            style={{width: "100%"}
                        }
                    />
                )
            }
        </div>
    )
};

export default Dente;