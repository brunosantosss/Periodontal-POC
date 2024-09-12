const Furca = ({ dentesInfo, setDentesInfo, denteIndex }) => {
    if (dentesInfo[denteIndex].dente_ativado) {
        return (
            !dentesInfo[denteIndex].dente_implante ? (
                <span 
                    className={`form-check-input mb-3 p-2 rounded-circle 
                        ${(denteIndex !== 0 && denteIndex !== 1 && denteIndex !== 2 && denteIndex !== 13 && denteIndex !== 14 && denteIndex !== 15) ? "bg-white border border-white" : ""}
                        ${dentesInfo[denteIndex].dente_nivel_furca === 0 ? " border ball-bg" : ""}
                        ${dentesInfo[denteIndex].dente_nivel_furca === 1 ? " border border-black" : ""}
                        ${dentesInfo[denteIndex].dente_nivel_furca === 2 ? " border border-black bg-furca-nivel2" : ""}
                        ${dentesInfo[denteIndex].dente_nivel_furca === 3 ? " border border-black bg-furca-nivel3" : ""}`}
                    type="checkbox"                                       
                    onClick={() => {
                        if (denteIndex !== 0 && denteIndex !== 1 && denteIndex !== 2 && denteIndex !== 13 && denteIndex !== 14 && denteIndex !== 15)
                            return;
                        
                        const updateDentesInfo = [...dentesInfo];
                        updateDentesInfo[denteIndex].dente_index = denteIndex;
                        if (updateDentesInfo[denteIndex].dente_nivel_furca >= 3) {
                            updateDentesInfo[denteIndex].dente_nivel_furca = 0;
                        } else {
                            updateDentesInfo[denteIndex].dente_nivel_furca++;
                        }
                        setDentesInfo(updateDentesInfo);
                    }}
                ></span>
            ) : (
                <span className={`form-check-input mb-3 p-2 rounded-circle opacity-0`} type="checkbox" disabled></span>
            )
        );
    } else {
        return (
            <span className="form-check-input mb-3 p-2 rounded-circle opacity-0" type="checkbox" disabled />
        );
    }   
};

export default Furca;