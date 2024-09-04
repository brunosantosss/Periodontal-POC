const Implante = ({ dentesInfo, setDentesInfo, denteIndex }) => {
    return (
        dentesInfo[denteIndex].dente_ativado ? (
            <input className={`form-check-input mb-4 p-3 rounded-circle ${dentesInfo[denteIndex].dente_implante ? "bg-black border-black" : "ball-bg"}`} type="checkbox"                              
                onClick={(e) => {
                    const updateDentesInfo = [...dentesInfo];
                    updateDentesInfo[denteIndex].dente_index = denteIndex;
                    updateDentesInfo[denteIndex].dente_implante = e.target.checked;
    
                    setDentesInfo(updateDentesInfo);
                }}          
            />                         
        ) : (
            <input
                className="form-check-input mb-4 p-3 rounded-circle opacity-0" type="checkbox" 
                disabled 
            />
        )
    )
};

export default Implante;