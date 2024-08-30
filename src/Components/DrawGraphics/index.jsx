import React, { useState } from 'react';

const DrawGraphics = ({ dentesInfo, setDentesInfo }) => {
    const xCoordsMG = [
        { point_one: 35, point_two: 85, point_three: 130 },
        { point_one: 180, point_two: 230, point_three: 280 },
        { point_one: 315, point_two: 385, point_three: 455 },
        { point_one: 480, point_two: 525, point_three: 570 },
        { point_one: 605, point_two: 635, point_three: 660 },
        { point_one: 710, point_two: 746, point_three: 775 },
        { point_one: 835, point_two: 865, point_three: 895 },
        { point_one: 953, point_two: 990, point_three: 1025 },

        { point_one: 1080, point_two: 1120, point_three: 1160 },
        { point_one: 1210, point_two: 1245, point_three: 1275 },
        { point_one: 1330, point_two: 1365, point_three: 1395 },
        { point_one: 1445, point_two: 1475, point_three: 1500 },
        { point_one: 1550, point_two: 1580, point_three: 1610 },
        { point_one: 1650, point_two: 1725, point_three: 1790 },
        { point_one: 1825, point_two: 1880, point_three: 1925 },
        { point_one: 1975, point_two: 2025, point_three: 2075 },
    ];

    const xCoordsPS = [
        { point_one: 35, point_two: 85, point_three: 130 },
        { point_one: 180, point_two: 230, point_three: 280 },
        { point_one: 315, point_two: 385, point_three: 455 },
        { point_one: 480, point_two: 525, point_three: 570 },
        { point_one: 605, point_two: 635, point_three: 660 },
        { point_one: 710, point_two: 746, point_three: 775 },
        { point_one: 835, point_two: 865, point_three: 895 },
        { point_one: 953, point_two: 990, point_three: 1025 },

        { point_one: 1080, point_two: 1120, point_three: 1160 },
        { point_one: 1210, point_two: 1245, point_three: 1275 },
        { point_one: 1330, point_two: 1365, point_three: 1395 },
        { point_one: 1445, point_two: 1475, point_three: 1500 },
        { point_one: 1550, point_two: 1580, point_three: 1610 },
        { point_one: 1650, point_two: 1725, point_three: 1790 },
        { point_one: 1825, point_two: 1880, point_three: 1925 },
        { point_one: 1975, point_two: 2025, point_three: 2075 },
    ];

    const [dentesYCoordsMG, setDentesYCoordsMG] = useState(
        Array.from({ length: 16 }, () => ({ point_one: 0, point_two: 0, point_three: 0 }))
    );
    
    const [dentesYCoordsPS, setDentesYCoordsPS] = useState(
        Array.from({ length: 16 }, () => ({ point_one: 0, point_two: 0, point_three: 0 }))
    );

    const handleYInputChangeMG = (denteIndex, pointName, value) => {
        const updatedDentes = dentesYCoordsMG.map((dente, index) =>
            index === denteIndex ? { ...dente, [pointName]: Number(value) } : dente
        );
        setDentesYCoordsMG(updatedDentes);
    };
    
    const handleYInputChangePS = (denteIndex, pointName, value) => {
        const updatedDentes = dentesYCoordsPS.map((dente, index) =>
            index === denteIndex ? { ...dente, [pointName]: Number(value) } : dente
        );
        setDentesYCoordsPS(updatedDentes);
    };

    const pointsMG = dentesYCoordsMG
        .map((dente, index) => 
            [
                `${xCoordsMG[index].point_one},${dente.point_one}`, 
                `${xCoordsMG[index].point_two},${dente.point_two}`, 
                `${xCoordsMG[index].point_three},${dente.point_three}`
            ]
        )
        .flat()
        .join(' ');
    
    const pointsPS = dentesYCoordsPS
        .map((dente, index) => 
            [
                `${xCoordsPS[index].point_one},${dente.point_one}`, 
                `${xCoordsPS[index].point_two},${dente.point_two}`, 
                `${xCoordsPS[index].point_three},${dente.point_three}`
            ]
        )
        .flat()
        .join(' ');

    return (
        <div className="vw-100 h-40 d-flex align-items-center flex-column position-absolute z-2" style={{top: "3.2em"}}>
            <div className='d-flex align-items-center w-75 flex-column'>
                <div className='d-flex w-100 justify-content-between align-items-end'>
                    <div className='position-absolute start-0 d-flex top-2 flex-column gap-1 align-items-end'>
                        <p className='fs-4 fw-medium'>Mobilidade</p>
                        <p className='fs-4 fw-medium'>Implante</p>
                        <p className='fs-4 fw-medium'>Furca</p>
                        <p className='fs-4 fw-medium'>Sangramento a sondagem</p>
                        <p className='fs-4 fw-medium'>Placa</p>
                        <p className='fs-4 fw-medium'>Profundidade de sondagem</p>
                        <p className='fs-4 fw-medium'>Margem gengival</p> 
                    </div>

                    {dentesYCoordsMG.map((dente, denteIndex) => 
                        <div className='d-flex flex-column border border-2 mx-1 align-items-center'>
                            <p 
                                className= {`w-100 fw-semibold fs-5 text-center cursor-pointer py-2 px-3 ${dentesInfo[denteIndex].dente_ativado ? "" : "bg-body-secondary rounded-bottom"}`}

                                onClick={() => {
                                    const updateDentesInfo = [...dentesInfo];
                                    updateDentesInfo[denteIndex].dente_index = denteIndex;
                                    updateDentesInfo[denteIndex].dente_ativado = !updateDentesInfo[denteIndex].dente_ativado;
                                    setDentesInfo(updateDentesInfo);
                                }}
                            >Dente {denteIndex >= 0 && denteIndex <= 7 ? (18 - denteIndex) : 13 + denteIndex}</p>

                            {
                                dentesInfo[denteIndex].dente_ativado ? (
                                    <>
                                        {/* Mobilidade */}
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

                                        {/* Implante */}
                                        <input className="form-check-input mb-4 p-3 rounded-circle" type="checkbox"                              
                                            onClick={(e) => {
                                                const updateDentesInfo = [...dentesInfo];
                                                updateDentesInfo[denteIndex].dente_index = denteIndex;
                                                updateDentesInfo[denteIndex].dente_implante = e.target.checked;
                                                setDentesInfo(updateDentesInfo);
                                            }}          
                                        />
                                        
                                        {/* Furca */}
                                        <span className="p-3 bg-danger rounded-circle w-100" type="checkbox"                                       
                                        onClick={() => {
                                            const updateDentesInfo = [...dentesInfo];
                                            updateDentesInfo[denteIndex].dente_index = denteIndex;
                                            if (updateDentesInfo[denteIndex].dente_nivel_furca[0] >= 3) {
                                                updateDentesInfo[denteIndex].dente_nivel_furca[0] = 0;
                                            } else {
                                                updateDentesInfo[denteIndex].dente_nivel_furca[0] ++;
                                            }
                                            setDentesInfo(updateDentesInfo);
                                        }}
                                        >.</span>
                                    </>
                                ) : (
                                    <>
                                        <input
                                            type="number"
                                            className="form-control mb-3 text-center border-0 border-bottom"
                                            placeholder={`0`}
                                            disabled
                                        />
                                        <input
                                            className="form-check-input mb-4 p-3 rounded-circle" type="checkbox" 
                                            disabled 
                                        />
                                        <input className="form-check-input mb-4 p-3 rounded-circle" type="checkbox" aria-label="Checkbox for following text input"                                 
                                            disabled          
                                        />
                                    </>
                                )
                            }

                            {/* Sangramento a sondagem */}
                            <div key={denteIndex} className="mb-3 w-100 d-flex">
                                {Array.from({ length: 3 }).map((_, index) =>
                                    {
                                        let
                                            i = 0,
                                            randIndex = 0
                                        ;

                                        if (i === 0)
                                            randIndex = denteIndex + index + Math.random();
                                        else 
                                            i ++;

                                        return (
                                            <div key={index} className='w-100'>
                                                {
                                                    dentesInfo[denteIndex].dente_ativado ? (
                                                        <>
                                                            <input type="checkbox" className="btn-check" id={`btn-check-outlined-ss${randIndex}`} autocomplete="off"
                                                                onClick={(e) => {
                                                                    const updateDentesInfo = [...dentesInfo];
                                                                    updateDentesInfo[denteIndex].dente_index = denteIndex;
                                                                    updateDentesInfo[denteIndex].dente_ss[index] = e.target.checked;
                                                                    setDentesInfo(updateDentesInfo);
                                                                }} 
                                                            />

                                                            <label className="btn btn-outline-danger rounded-circle p-3" for={`btn-check-outlined-ss${randIndex}`}><span></span></label>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <input type="checkbox" className="btn-check test" id={`btn-check-outlined-p${randIndex}`} autocomplete="off" disabled/>
                                                            <label className="btn btn-outline-danger rounded-circle p-3" for={`btn-check-outlined-p${randIndex}`}><span></span></label>
                                                        </>
                                                    )
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            
                            {/* Placa */}
                            <div key={denteIndex} className="mb-3 w-100 d-flex">
                                {Array.from({ length: 3 }).map((_, index) => 
                                    {                       
                                        let
                                            i = 0,
                                            randIndex = 0
                                        ;

                                        if (i === 0)
                                            randIndex = denteIndex + index + Math.random();
                                        else 
                                            i ++;

                                        return (
                                            <div key={index} className='w-100'>
                                                {
                                                    dentesInfo[denteIndex].dente_ativado ? (
                                                        <>
                                                            <input type="checkbox" className="btn-check test" id={`btn-check-outlined-p${randIndex}`} autocomplete="off"
                                                                onClick={(e) => {
                                                                    const updateDentesInfo = [...dentesInfo];
                                                                    updateDentesInfo[denteIndex].dente_index = denteIndex;
                                                                    updateDentesInfo[denteIndex].dente_placa[index] = e.target.checked;
                                                                    setDentesInfo(updateDentesInfo);
                                                                }} 
                                                            />
                                                            <label className="btn btn-outline-primary rounded-circle p-3" for={`btn-check-outlined-p${randIndex}`}><span></span></label>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <input type="checkbox" className="btn-check test" id={`btn-check-outlined-p${randIndex}`} autocomplete="off" disabled/>
                                                            <label className="btn btn-outline-primary rounded-circle p-3" for={`btn-check-outlined-p${randIndex}`}><span></span></label>
                                                        </>
                                                    )
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* Profundidade de sondagem */}
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
                                                        console.log("teste: ", dentesYCoordsMG[denteIndex][pointName], denteIndex)
                                                        handleYInputChangePS(denteIndex, pointName, 
                                                            ( ( dentesYCoordsMG[denteIndex][pointName] - ( e.target.value * 15 ) ) ) 
                                                        || 0)}
                                                    }
                                                />
                                            ) : (
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    disabled
                                                />
                                            )
                                        }
                                    </div>
                                ))}
                            </div>
                        </div> 
                    )}
                </div>
                <div className='d-flex'>
                    {dentesYCoordsPS.map((dente, denteIndex) =>  
                        <div className='d-flex flex-column border border-2 mx-1'>

                            {/* Margem gengival */}
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
                                                    onChange={(e) => handleYInputChangeMG(denteIndex, pointName, (e.target.value * 15) || 0)}
                                                />
                                            ) : (
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    disabled
                                                />
                                            )
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <svg className='inverted' style={{ width: "75%", height: "22.8em" }}>
                <polyline fill="blue" stroke="blue" fillOpacity={.6} strokeWidth={5} points={pointsPS} />
                <polyline fill="red" stroke="red" fillOpacity={.6} strokeWidth={5} points={pointsMG} />
            </svg>
        </div>
    );
};

export default DrawGraphics;