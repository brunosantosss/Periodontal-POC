const Furca = ({ dentesInfo, setDentesInfo, denteIndex, Palatino }) => {
    if (dentesInfo[denteIndex].dente_ativado) {
        return (
            !dentesInfo[denteIndex].dente_implante ? (
                <div className="w-100 border d-flex justify-content-center py-2 gap-2">
                    {
                        Palatino ? (
                            <>
                            <span 
                                className={`form-check-input p-2 rounded-circle mt-0 
                                    ${(denteIndex !== 0 && denteIndex !== 1 && denteIndex !== 2 && denteIndex !== 13 && denteIndex !== 14 && denteIndex !== 15) ? "bg-white border border-white" : ""}
                                    ${dentesInfo[denteIndex].dente_nivel_furca.palatina[0] === 0 ? " border ball-bg" : ""}
                                    ${dentesInfo[denteIndex].dente_nivel_furca.palatina[0] === 1 ? " border border-black" : ""}
                                    ${dentesInfo[denteIndex].dente_nivel_furca.palatina[0] === 2 ? " border border-black bg-furca-nivel2" : ""}
                                    ${dentesInfo[denteIndex].dente_nivel_furca.palatina[0] === 3 ? " border border-black bg-furca-nivel3" : ""}`}
                                type="checkbox"                                       
                                onClick={() => {
                                    if (denteIndex !== 0 && denteIndex !== 1 && denteIndex !== 2 && denteIndex !== 13 && denteIndex !== 14 && denteIndex !== 15)
                                        return;
                                    
                                    const updateDentesInfo = [...dentesInfo];
                                    updateDentesInfo[denteIndex].dente_index = denteIndex;
                                    if (updateDentesInfo[denteIndex].dente_nivel_furca.palatina[0] >= 3) {
                                        updateDentesInfo[denteIndex].dente_nivel_furca.palatina[0] = 0;
                                    } else {
                                        updateDentesInfo[denteIndex].dente_nivel_furca.palatina[0] ++;
                                    }
                                    setDentesInfo(updateDentesInfo);
                                }}
                            />
                            <span 
                                className={`form-check-input p-2 rounded-circle mt-0 
                                    ${(denteIndex !== 0 && denteIndex !== 1 && denteIndex !== 2 && denteIndex !== 13 && denteIndex !== 14 && denteIndex !== 15) ? "bg-white border border-white" : ""}
                                    ${dentesInfo[denteIndex].dente_nivel_furca.palatina[1] === 0 ? " border ball-bg" : ""}
                                    ${dentesInfo[denteIndex].dente_nivel_furca.palatina[1] === 1 ? " border border-black" : ""}
                                    ${dentesInfo[denteIndex].dente_nivel_furca.palatina[1] === 2 ? " border border-black bg-furca-nivel2" : ""}
                                    ${dentesInfo[denteIndex].dente_nivel_furca.palatina[1] === 3 ? " border border-black bg-furca-nivel3" : ""}`}
                                type="checkbox"                                       
                                onClick={() => {
                                    if (denteIndex !== 0 && denteIndex !== 1 && denteIndex !== 2 && denteIndex !== 13 && denteIndex !== 14 && denteIndex !== 15)
                                        return;
                                    
                                    const updateDentesInfo = [...dentesInfo];
                                    updateDentesInfo[denteIndex].dente_index = denteIndex;
                                    if (updateDentesInfo[denteIndex].dente_nivel_furca.palatina[1] >= 3) {
                                        updateDentesInfo[denteIndex].dente_nivel_furca.palatina[1] = 0;
                                    } else {
                                        updateDentesInfo[denteIndex].dente_nivel_furca.palatina[1] ++;
                                    }
                                    setDentesInfo(updateDentesInfo);
                                }}
                            />
                            </>
                        ) : (
                            <span 
                                className={`form-check-input p-2 rounded-circle mt-0 
                                    ${(denteIndex !== 0 && denteIndex !== 1 && denteIndex !== 2 && denteIndex !== 13 && denteIndex !== 14 && denteIndex !== 15) ? "bg-white border border-white" : ""}
                                    ${dentesInfo[denteIndex].dente_nivel_furca.vestibular === 0 ? " border ball-bg" : ""}
                                    ${dentesInfo[denteIndex].dente_nivel_furca.vestibular === 1 ? " border border-black" : ""}
                                    ${dentesInfo[denteIndex].dente_nivel_furca.vestibular === 2 ? " border border-black bg-furca-nivel2" : ""}
                                    ${dentesInfo[denteIndex].dente_nivel_furca.vestibular === 3 ? " border border-black bg-furca-nivel3" : ""}`}
                                type="checkbox"                                       
                                onClick={() => {
                                    if (denteIndex !== 0 && denteIndex !== 1 && denteIndex !== 2 && denteIndex !== 13 && denteIndex !== 14 && denteIndex !== 15)
                                        return;
                                    
                                    const updateDentesInfo = [...dentesInfo];
                                    updateDentesInfo[denteIndex].dente_index = denteIndex;
                                    if (updateDentesInfo[denteIndex].dente_nivel_furca.vestibular >= 3) {
                                        updateDentesInfo[denteIndex].dente_nivel_furca.vestibular = 0;
                                    } else {
                                        updateDentesInfo[denteIndex].dente_nivel_furca.vestibular++;
                                    }
                                    setDentesInfo(updateDentesInfo);
                                }}
                            />
                        )
                    }
                </div>
            ) : (
                <div className="w-100 border d-flex justify-content-center py-2">
                    <span className="form-check-input p-2 rounded-circle mt-0 opacity-0" type="checkbox" disabled />
                </div>
            )
        );
    } else {
        return (
            <div className="w-100 border d-flex justify-content-center py-2">
                <span className="form-check-input p-2 rounded-circle mt-0 opacity-0" type="checkbox" disabled />
            </div>
        );
    }   
};

export default Furca;