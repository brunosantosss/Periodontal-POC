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

import style from "../../styles/Dente.module.css";

const Dente = ({ dentesInfo, denteIndex }) => {

    const denteImages = [vestibularDente11, vestibularDente12, vestibularDente13, vestibularDente14, vestibularDente15, vestibularDente16, vestibularDente17, vestibularDente18, vestibularDente21, vestibularDente22, vestibularDente23, vestibularDente24, vestibularDente25, vestibularDente26, vestibularDente27, vestibularDente28];
    return (
        <div className={ style.img_div }>
            <img src={ denteImages[denteIndex >= 0 && denteIndex <= 7 ? (7 - denteIndex) : denteIndex]} style={{width: "100%"}}/> 
        </div>
    )
};

export default Dente;