const ProfundidadeSondagem = ({ dente, dentesInfo, denteIndex, handleYInputChangePS, dentesYCoordsMG }) => {
    return (
        <div key={denteIndex} className="w-100 d-flex py-1 border">
            {
                Object.keys(dente).map((pointName) => (
                    <div key={pointName}>
                        {    
                            dentesInfo[denteIndex].dente_ativado ? (
                                <>
                                    <input
                                        type="number"
                                        className="form-control border-0 rounded-0 input-padding text-center"
                                        placeholder={`0`}
                                        aria-label={`Y ${pointName}`}
                                        aria-describedby="basic-addon1"
                                        onChange={
                                            (e) => {
                                                const newValueY = e.target.value * 10;
                                                if(newValueY > 0 && !isNaN(Number(newValueY))) {
                                                    handleYInputChangePS(denteIndex, pointName, 
                                                        (dentesYCoordsMG[denteIndex][pointName] - newValueY) || 0)
                                                }
                                                else {
                                                    handleYInputChangePS(denteIndex, pointName, 0);
                                                }
                                            }
                                        }
                                    />
                                </>
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
                )) 
            } 
        </div>
    )
};

export default ProfundidadeSondagem;