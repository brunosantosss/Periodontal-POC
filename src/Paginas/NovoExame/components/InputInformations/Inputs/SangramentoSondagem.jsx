const SangramentoSondagem = ({ dentesInfo, setDentesInfo, denteIndex }) => {
    return (
        <div key={denteIndex} className="mb-3 w-100 d-flex">
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
                        <div key={index} className='w-100'>
                            {
                                dentesInfo[denteIndex].dente_ativado ? (
                                    <span>
                                        <input type="checkbox" className="btn-check" id={`btn-check-outlined-ss${randIndex}`} autocomplete="off"
                                            onClick={(e) => {
                                                const updateDentesInfo = [...dentesInfo];
                                                updateDentesInfo[denteIndex].dente_index = denteIndex;
                                                updateDentesInfo[denteIndex].dente_ss[index] = e.target.checked;
                                                setDentesInfo(updateDentesInfo);
                                            }} 
                                        />
                                        <label className={ "btn btn-outline-danger rounded-circle circle-input" } for={`btn-check-outlined-ss${randIndex}`}
                                        ><span></span></label>
                                    </span>
                                ) : (
                                    <span>
                                        <input type="checkbox" className="btn-check test" id={`btn-check-outlined-p${randIndex}`} autocomplete="off" disabled/>
                                        <label className="btn btn-outline-danger rounded-circle opacity-0" for={`btn-check-outlined-p${randIndex}`}><span></span></label>
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

export default SangramentoSondagem;