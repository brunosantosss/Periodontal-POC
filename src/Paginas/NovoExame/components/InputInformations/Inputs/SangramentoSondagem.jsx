import style from "../styles/SangramentoSondagem.module.css";

const SangramentoSondagem = ({ dentesInfo, setDentesInfo, denteIndex }) => {
    console.log("SS: ", dentesInfo)

    return (
        <div key={denteIndex} className="w-100 border d-flex justify-content-center py-2">
            {Array.from({ length: 3 }).map((_, index) =>
                {
                    return (
                        <div key={index} className="w-100 d-flex justify-content-center">
                            {
                                dentesInfo[denteIndex].dente_ativado ? (
                                    <span className="d-flex">
                                        <span 
                                        className={ dentesInfo[denteIndex].dente_ss[index] ? style.ss_input_activate : style.ss_input_deactivate }
                                            onClick={() => {
                                                const updateDentesInfo = [...dentesInfo];
                                                updateDentesInfo[denteIndex].dente_index = denteIndex;
                                                updateDentesInfo[denteIndex].dente_ss[index] = !dentesInfo[denteIndex].dente_ss[index];
                                                setDentesInfo(updateDentesInfo);
                                            }}
                                        ></span>    
                                                                       
                                    </span>
                                ) : (
                                    <span className={style.ss_input_deactivate + " opacity-0"}></span>
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    )
};

export default SangramentoSondagem;