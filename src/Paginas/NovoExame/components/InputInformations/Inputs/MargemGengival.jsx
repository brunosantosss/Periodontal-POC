const MargemGengival = ({ dente, dentesInfo, denteIndex, handleYInputChangeMG }) => {
    return (
        <div key={denteIndex} className="mb-3 w-100 d-flex">
            {Object.keys(dente).map((pointName) => (
                <div key={pointName}>
                    {
                        dentesInfo[denteIndex].dente_ativado ? (
                            <input
                                type="number"
                                className="form-control p-1"
                                placeholder={`0`}
                                aria-label={`Y ${pointName}`}
                                aria-describedby="basic-addon1"
                                onChange={
                                    (e) => {
                                        handleYInputChangeMG(denteIndex, pointName, (e.target.value * 15) || 0)
                                        
                                    }
                                }
                            />
                        ) : (
                            <input
                                type="number"
                                value={""}
                                className="form-control p-1 bg-white opacity-0"
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