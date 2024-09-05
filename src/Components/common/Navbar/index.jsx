import fp_logo from "../../../assets/fabio-palma-logo.svg";

import style from "../../../styles/components/Navbar.module.css";

const Navbar = () => {
    return (
        <nav id="top-bar" className= { style.navbar_content + " d-flex justify-content-center py-1"}>
            <div className="d-flex align-items-center gap-3">
                <img src={fp_logo} className={ style.navbar_content_img } />
                <h3 className="text-white">Exame periodontal</h3>
            </div>
        </nav>
    )
};

export default Navbar;