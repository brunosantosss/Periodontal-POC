import { useEffect, useState } from "react";

import style from "../../styles/components/exame/NavSections.module.css";

import { IoSaveOutline } from "react-icons/io5";
import { IoArrowUpOutline } from "react-icons/io5";
import { IoArrowDownOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

const NavSections = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState('danger');

    // Função para mostrar alerta
    const handleShowAlert = (type) => {
        setAlertType(type);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 6000);
    };

    useEffect(() => {
        handleShowAlert(alertType);
    }, []);

    return (
        <>  
        <div className={ style.icons_control }>
                <div className={style.arrow_up_button}>
                    <a href="#superior"><IoArrowUpOutline className="text-white fs-3" size={34} /></a>
                </div>
                <div className={style.arrow_down_button}>
                    <a href="#inferior"><IoArrowDownOutline className="text-white fs-3" size={34} /></a>
                </div>           
                <div className={style.save_button}>
                    <IoSaveOutline className="text-white fs-3" size={34} />
                </div>
            </div>

            <div className={`${style.alerts_api} ${showAlert ? style.alerts_api_show : ''}`}>
                <div className={`alert alert-${alertType} ${style.alert}`} role="alert">
                    <button type="button" className={style.close_alert} onClick={() => setShowAlert(false)}><IoCloseOutline /></button>
                    <p className={ style.alerts_api_msg }>Mensagem de {alertType} da API aqui</p>
                </div>
            </div>
        </>
    )
};

export default NavSections;