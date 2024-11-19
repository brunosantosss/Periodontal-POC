const MargemGengival = ({ dente, dentesInfo, denteIndex, handleYInputChangeMG, handleYInputChangePS, dentesYCoordsMG, dentesYCoordsPS }) => {
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
                                        let adjustY;

                                        handleYInputChangeMG(denteIndex, pointName, newValueY || 0);
                                        
                                        if(newValueY === 0 ) {
                                            adjustY = dentesYCoordsPS[denteIndex][pointName] - dentesYCoordsMG[denteIndex][pointName];
                                        }
                                        else {
                                            adjustY = dentesYCoordsPS[denteIndex][pointName] + newValueY;
                                        }

                                        handleYInputChangePS(denteIndex, pointName, adjustY);
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