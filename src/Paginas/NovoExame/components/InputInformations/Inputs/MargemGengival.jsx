const MargemGengival = ({ dente, dentesInfo, denteIndex, handleYInputChangeMG }) => {
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