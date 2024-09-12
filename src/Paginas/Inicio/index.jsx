import style from "../../styles/components/Inicio.module.css";

import { useNavigate } from "react-router-dom";

const Inicio = () => {
    const routerNavigator = useNavigate();

    return (
        <section className="w-100 vh-100">
            <div id="content-page" className={ style.buttons_content + " w-100 h-100 "} >
                <button className={ style.buttons_content_btn + " btn p-4"} onClick={() => routerNavigator("/novo-exame")} >Novo Exame</button>

                <button className= { style.buttons_content_btn + " btn p-4"} >Visualizar Exame</button>
            </div>
        </section>
    )
};

export default Inicio;