import style from "../styles/Placa.module.css";

const Placa = ({ dentesInfo, setDentesInfo, denteIndex }) => {
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
                                            className={ dentesInfo[denteIndex].dente_placa[index] ? style.placa_input_activate : style.placa_input_deactivate }
                                            onClick={() => {
                                                const updateDentesInfo = [...dentesInfo];
                                                updateDentesInfo[denteIndex].dente_index = denteIndex;
                                                updateDentesInfo[denteIndex].dente_placa[index] = !dentesInfo[denteIndex].dente_placa[index];
                                                setDentesInfo(updateDentesInfo);
                                            }}
                                        >
                                            
                                        </span>
                                    </span>
                                ) : (
                                    <span className={style.placa_input_deactivate + " opacity-0"}></span>
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Placa;