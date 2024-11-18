const MargemGengival = ({ dente, dentesInfo, denteIndex, handleYInputChangeMG, handleYInputChangePS, dentesYCoordsPS }) => {
    return (
        <div key={denteIndex} className="w-100 d-flex py-1 border">
            {Object.keys(dente).map((pointName) => (
                <div key={pointName}>
                    {
                        dentesInfo[denteIndex].dente_ativado ? (
                            <input
                                type="number"
                                className="form-control border-0 rounded-0 input-padding text-center"
                                placeholder={`0`}
                                aria-label={`Y ${pointName}`}
                                aria-describedby="basic-addon1"
                                onChange={
                                    (e) => {
                                        const newValueY = e.target.value * 10;
                                        handleYInputChangeMG(denteIndex, pointName, newValueY || 0)

                                        if(dentesYCoordsPS[denteIndex][pointName] !== 0) {
                                            handleYInputChangePS(denteIndex, pointName, (newValueY / 2) || 0)
                                        }
                                    }
                                }
                            />
                        ) : (
                            <input
                                type="number"
                                value={""}
                                className="form-control border-0 rounded-0 input-padding text-center opacity-0"
                                disabled
                            />
                        )
                    }
                </div>
            ))}
        </div>   
    )
};

export default MargemGengival;