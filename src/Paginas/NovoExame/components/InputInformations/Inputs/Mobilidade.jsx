const Mobilidade = ({ dentesInfo, setDentesInfo, denteIndex }) => {
    return (
        dentesInfo[denteIndex].dente_ativado ? (
            <div className="w-100 border d-flex justify-content-center py-1">
                <input
                    type="number"
                    className="form-control text-center border-0 bg-transparent p-0"
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
            </div>
        ) : (
            <div className="w-100 border d-flex justify-content-center py-1">
                <input
                    type="number"
                    className="form-control text-center border-0 bg-transparent p-0 opacity-0"
                    placeholder={`0`}
                    disabled
                />
            </div>
        )
    )
};

export default Mobilidade;