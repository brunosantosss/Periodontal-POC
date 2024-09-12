const Placa = ({ dentesInfo, setDentesInfo, denteIndex }) => {
    return (
        <div key={denteIndex} className="w-100 border d-flex justify-content-center py-2">
            {Array.from({ length: 3 }).map((_, index) => 
                {                       
                    let
                        i = 0,
                        randIndex = 0
                    ;

                    if (i === 0)
                        randIndex = denteIndex + index + Math.random();
                    else 
                        i ++;

                    return (
                        <div key={index} className="w-100 d-flex justify-content-center">
                            {
                                dentesInfo[denteIndex].dente_ativado ? (
                                    <span className="d-flex">
                                        <input type="checkbox" className="btn-check" id={`btn-check-outlined-p${randIndex}`} autocomplete="off"
                                            onClick={(e) => {
                                                const updateDentesInfo = [...dentesInfo];
                                                updateDentesInfo[denteIndex].dente_index = denteIndex;
                                                updateDentesInfo[denteIndex].dente_placa[index] = e.target.checked;
                                                setDentesInfo(updateDentesInfo);
                                            }} 
                                        />
                                        <label className= { "btn btn-outline-primary rounded-circle circle-input" } for={`btn-check-outlined-p${randIndex}`}><span></span></label>
                                    </span>
                                ) : (
                                    <span>
                                        <input type="checkbox" className="btn-check" id={`btn-check-outlined-p${randIndex}`} autocomplete="off" disabled/>
                                        <label className="btn btn-outline-primary rounded-circle circle-input opacity-0" for={`btn-check-outlined-p${randIndex}`}><span></span></label> 
                                    </span>
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