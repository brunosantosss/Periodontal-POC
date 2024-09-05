const Mobilidade = ({ dentesInfo, setDentesInfo, denteIndex }) => {
    return (
        dentesInfo[denteIndex].dente_ativado ? (
            <input
                type="number"
                className="form-control mb-3 text-center border-0 border-bottom"
                placeholder={"0"}
                value={dentesInfo[denteIndex].dente_mobilidade}
                onChange={(e) => {
                    if ( e.target.value >= 0 && e.target.value <= 3 ) {
                        const updateDentesInfo = [...dentesInfo];
                        updateDentesInfo[denteIndex].dente_index = denteIndex;
                        updateDentesInfo[denteIndex].dente_mobilidade = e.target.value;
                        setDentesInfo(updateDentesInfo);
                    }
                }}
            />
        ) : (
            <input
                type="number"
                className="form-control mb-3 text-center border-0 border-bottom opacity-0"
                placeholder={`0`}
                disabled
            />
        )
    )
};

export default Mobilidade;