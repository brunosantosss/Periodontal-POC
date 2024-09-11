import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";

import style from "../../../styles/components/Footer.module.css";

const Footer = () => {
    return (
        <footer className={ style.footer_content }>
            <div className="bg-blue-line d-flex flex-column justify-content-center align-items-center px-3 py-5">
                <div className="d-flex text-white fs-3 gap-3 fw-bold">
                    <p><span className="fs-5 fw-light">51</span> 3225.5841</p>
                    <p className="fw-bold">|</p>
                    <p><span className="fs-5 fw-light">51</span> 9.9693.5841</p>
                </div>
                <div className="fs-4 text-white fw-medium">
                    <p>Avenida Borges de Medeiros, 410, sala 1215 | Centro Histórico | Porto Alegre | RS</p>
                </div>
            </div>
            <div className="bg-weak-purple d-flex justify-content-center align-items-center gap-5 p-3 py-4">
                <h2 className="text-white">
                    <IoLogoInstagram className="text-weak-purple bg-white rounded-circle p-1 fs-1 mx-2" /> 
                    @drfabiopalma
                </h2>
                <h2 className="text-white">
                    <TiSocialFacebook className="text-weak-purple bg-white rounded-circle p-1 fs-1 mx-2" />
                    doutorfabiopalma
                </h2>
                <h2 className="text-white">www.drfabiopalma.com</h2>
            </div>
        </footer>
    )
};

export default Footer;