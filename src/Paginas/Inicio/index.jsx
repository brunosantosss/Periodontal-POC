import Footer from "../../Components/common/Footer";
import Navbar from "../../Components/common/Navbar";
import style from "../../styles/components/Inicio.module.css";

import { useNavigate } from "react-router-dom";

const Inicio = () => {
    const routerNavigator = useNavigate();

    return (
        <>
            <Navbar RotaInicio={true}/>
            <section className="w-100 vh-100">
                <div id="content-page" className={ style.buttons_content + " w-100 h-100 "} >
                    <button className={ style.buttons_content_btn + " btn p-4"} onClick={() => routerNavigator("/novo-exame")} >Novo Exame</button>

                    <button className= { style.buttons_content_btn + " btn p-4"} >Visualizar Exame</button>
                </div>
            </section>
            <Footer />
        </>
    )
};

export default Inicio;