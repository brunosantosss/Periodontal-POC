// import vestibularDente18 from "../../../../assets/Dentes/Dentes/18 - f.png";
import vestibularDente18 from "../../../../assets/Dentes/Dentes/18 - f .png";
import vestibularDente17 from "../../../../assets/Dentes/Dentes/17 - f.png";
import vestibularDente16 from "../../../../assets/Dentes/Dentes/16 - f.png";
import vestibularDente15 from "../../../../assets/Dentes/Dentes/15 - f.png";
import vestibularDente14 from "../../../../assets/Dentes/Dentes/14 - f.png";
import vestibularDente13 from "../../../../assets/Dentes/Dentes/13 - f.png";
import vestibularDente12 from "../../../../assets/Dentes/Dentes/12 - f.png";
import vestibularDente11 from "../../../../assets/Dentes/Dentes/11 - f.png";

import vestibularDente21 from "../../../../assets/Dentes/Dentes/21 - f.png";
import vestibularDente22 from "../../../../assets/Dentes/Dentes/22 - f.png";
import vestibularDente23 from "../../../../assets/Dentes/Dentes/23 - f.png";
import vestibularDente24 from "../../../../assets/Dentes/Dentes/24 - f.png";
import vestibularDente25 from "../../../../assets/Dentes/Dentes/25 - f.png";
import vestibularDente26 from "../../../../assets/Dentes/Dentes/26 - f.png";
import vestibularDente27 from "../../../../assets/Dentes/Dentes/27 - f.png";
import vestibularDente28 from "../../../../assets/Dentes/Dentes/28 - f.png";

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