const Implante = ({ dentesInfo, setDentesInfo, denteIndex }) => {
    return (
        dentesInfo[denteIndex].dente_ativado ? (
            <div className="w-100 border d-flex justify-content-center py-2">
                <input className={`form-check-input p-2 rounded-circle mt-0 ${dentesInfo[denteIndex].dente_implante ? "bg-black border-black" : "ball-bg border"}`} type="checkbox"                              
                    onClick={(e) => {
                        const updateDentesInfo = [...dentesInfo];
                        updateDentesInfo[denteIndex].dente_index = denteIndex;
                        updateDentesInfo[denteIndex].dente_implante = e.target.checked;
        
                        setDentesInfo(updateDentesInfo);
                    }}          
                />                         
            </div>
        ) : (
            <input
                className="form-check-input mb-3 p-2 rounded-circle opacity-0" type="checkbox" 
                disabled 
            />
        )
    )
};

export default Implante;