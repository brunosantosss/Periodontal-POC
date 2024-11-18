import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { useState } from "react"; // Importando o hook useState

import style from "../../../styles/components/Footer.module.css";

const Footer = () => {
    return (
        <footer id="footer" className={ style.footer_content }>
            <div className={ style.footer_content_top + " px-3 py-5" }>
                <div className="d-flex text-white fs-3 gap-3 fw-bold">
                    <p><span className="fs-5 fw-light">51</span> 3225.5841</p>
                    <p className="fw-bold">|</p>
                    <p><span className="fs-5 fw-light">51</span> 9.9693.5841</p>
                </div>
                <div className="fs-4 text-white fw-medium">
                    <p>Avenida Borges de Medeiros, 410, sala 1215 | Centro Histórico | Porto Alegre | RS</p>
                </div>
            </div>
            <div className={ style.footer_content_bottom + " p-3 py-4" }>
                <h2 className="text-white">
                    <IoLogoInstagram className="text-weak-purple bg-white rounded-circle p-1 fs-1 mx-2" /> 
                    @drfabiopalma
                </h2>
                <h2 className="text-white">
                    <TiSocialFacebook className="text-weak-purple bg-white rounded-circle p-1 fs-1 mx-2" />
                    doutorfabiopalma
                </h2>
                <h2 className="text-white">www.drfabiopalma.com.br</h2>
            </div>
        </footer>
    )
};

export default Footer;
