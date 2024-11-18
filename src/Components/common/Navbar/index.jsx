import fp_logo from "../../../assets/fabio-palma-logo.svg";
import { FaNotesMedical } from "react-icons/fa";

import style from "../../../styles/components/Navbar.module.css";
import { useState } from "react";

const Navbar = ({ RotaInicio }) => {
    const [ menuOptionIdentificacao, setMenuOptionIdentificacao ] = useState(true);
    const handleOptionIdentificacao = () => {
        if (menuOptionAnamnese)
            setMenuOptionAnamnese(false);
        setMenuOptionIdentificacao(true);
    }
    const [ menuOptionAnamnese, setMenuOptionAnamnese ] = useState(false);
    const handleOptionAnamnese = () => {
        if (menuOptionIdentificacao)
            setMenuOptionIdentificacao(false);

        setMenuOptionAnamnese(true);
    }

    return (
        <>
        {
            RotaInicio ? (
                <nav id="top-bar" className= { style.navbar_content + " d-flex justify-content-center"}>
                    <div className={ style.navbar_content_brand }>
                        <img src={fp_logo} className={ style.navbar_content_brand_img } />
                        <h3>Exame periodontal</h3>
                    </div>
                </nav>
            ) : (
                <nav className={ style.navbar_content + " navbar bg-body-tertiary"}>
                    <div className="container-fluid">
                        <div className={ style.navbar_content_brand }>
                            <img src={fp_logo} className={ style.navbar_content_brand_img } />
                            <h3>Exame periodontal</h3>
                        </div>

                        <div className={ style.navbar_content_paciente_btn + " d-flex align-items-center gap-3 pointer" } data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <FaNotesMedical className="text-white fs-2"/>
                            <h3 className="text-white">Paciente</h3>
                        </div>

                        <div className={ style.navbar_content_menu + " collapse navbar-collapse" } id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <div className={ style.navbar_content_menu_tab }>
                                    <p className={ "pointer " + `${menuOptionIdentificacao ? style.selected : ""}` } 
                                    onClick={() => handleOptionIdentificacao()}>Identificação</p>

                                    <p className={ "pointer " + `${menuOptionAnamnese ? style.selected : ""}` } 
                                    onClick={() => handleOptionAnamnese()}>Anamnese</p>
                                </div>
                                
                                {
                                    menuOptionIdentificacao ? (
                                        <div className={ style.navbar_content_menu_paciente_identificacao }>
                                            <p><span>Nome:</span> Felipe</p>
                                            <p><span>Sobrenome:</span> Souza</p>
                                            <p><span>CPF:</span> 000.000.000-00</p>
                                            <p><span>Telefone para contato:</span> 99 99999-9999</p>
                                            <p><span>Data de nascimento:</span> 08/10/1984</p>
                                            <p><span>Indicado por Dr(a):</span> Dra. Cristiana Miura</p>
                                            <p><span>Nº Para emergência:</span> 99 99999-9999</p>
                                        </div>
                                    ) : (
                                        <div className={ style.navbar_content_menu_paciente_Anamnese }>
                                            <div className={ style.navbar_content_menu_paciente_Anamnese_left }>
                                                <p><span>Queixa principal e evolução da doença atual:</span></p>
                                                <textarea value="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, eum. Dolores laboriosam est quos iure expedita harum deleniti tempore quo aut, quas iusto culpa corrupti ullam autem consequatur alias consectetur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, eum. Dolores laboriosam est quos iure expedita harum deleniti tempore quo aut, quas iusto culpa corrupti ullam autem consequatur alias consectetur!" disabled></textarea>
                                                <p><span>Sofre de alguma doença?:</span> Sim</p>
                                                <p><span>Está em tratamento médico atualmente?:</span> Sim</p>
                                                <p><span>Gravidez:</span> Sim</p>
                                                <p><span>Está fazendo uso de alguma medicação ou método contraceptivo?:</span> Sim</p>                   
                                                <p><span>Tem alergia?:</span> Sim</p>
                                            </div>

                                            <div className={ style.navbar_content_menu_paciente_Anamnese_right }>
                                                <p><span>Já foi operado?:</span> Sim</p>
                                                <p><span>Teve problemas com cicatrização?:</span> Sim</p>
                                                <p><span>Teve problemas com anestesia?:</span> Sim</p>
                                                <p><span>Teve problemas com hemorragias?:</span> Não</p>

                                                <p><span>Observações sobre hemorragia:</span></p>
                                                <textarea value="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, eum. Dolores laboriosam est quos iure expedita harum deleniti tempore quo aut, quas iusto culpa corrupti ullam autem consequatur alias consectetur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, eum. Dolores laboriosam est quos iure expedita harum deleniti tempore quo aut, quas iusto culpa corrupti ullam autem consequatur alias consectetur!" disabled></textarea>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </nav>
            )
        }
        </>
    )
};

export default Navbar;