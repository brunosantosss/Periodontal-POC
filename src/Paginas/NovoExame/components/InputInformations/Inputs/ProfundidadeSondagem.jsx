const ProfundidadeSondagem = ({ dente, dentesInfo, denteIndex, handleYInputChangePS, dentesYCoordsMG }) => {
    return (
        <div key={denteIndex} className="mb-3 w-100 d-flex">
            {Object.keys(dente).map((pointName) => (
                <div key={pointName}>
                    {
                        dentesInfo[denteIndex].dente_ativado ? (
                            <input
                                type="number"
                                className="form-control"
                                placeholder={`0`}
                                aria-label={`Y ${pointName}`}
                                aria-describedby="basic-addon1"
                                onChange={(e) => {
                                    handleYInputChangePS(denteIndex, pointName, 
                                        ( ( dentesYCoordsMG[denteIndex][pointName] - ( e.target.value * 15 ) ) ) 
                                    || 0)}
                                }
                            />
                        ) : (
                            <input
                                type="number"
                                value={""}
                                className="form-control opacity-0"
                                disabled
                            />
                        )
                    }
                </div>
            ))}
        </div>
    )
};

export default ProfundidadeSondagem;