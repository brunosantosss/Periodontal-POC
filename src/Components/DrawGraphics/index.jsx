import React, { useState } from 'react';

const DrawGraphics = ({ dentesImplantes, setDentesImplantes, dentesAtivados, setDentesAtivados }) => {
    const xCoordsMG = [
        { point_one: 350, point_two: 420, point_three: 485 },
        { point_one: 520, point_two: 580, point_three: 645 },
        { point_one: 690, point_two: 760, point_three: 850 },
        { point_one: 880, point_two: 920, point_three: 970 },
        { point_one: 1000, point_two: 1050, point_three: 1090 },
        { point_one: 1130, point_two: 1180, point_three: 1225 },
        { point_one: 1270, point_two: 1315, point_three: 1360 },
        { point_one: 1400, point_two: 1460, point_three: 1510 }
    ];

    const xCoordsPS = [
        { point_one: 350, point_two: 420, point_three: 485 },
        { point_one: 520, point_two: 580, point_three: 645 },
        { point_one: 690, point_two: 760, point_three: 850 },
        { point_one: 880, point_two: 920, point_three: 970 },
        { point_one: 1000, point_two: 1050, point_three: 1090 },
        { point_one: 1130, point_two: 1180, point_three: 1225 },
        { point_one: 1270, point_two: 1315, point_three: 1360 },
        { point_one: 1400, point_two: 1460, point_three: 1510 }
    ];

    const [dentesYCoordsMG, setDentesYCoordsMG] = useState(
        Array.from({ length: 8 }, () => ({ point_one: 0, point_two: 0, point_three: 0 }))
    );
    
    const [dentesYCoordsPS, setDentesYCoordsPS] = useState(
        Array.from({ length: 8 }, () => ({ point_one: 0, point_two: 0, point_three: 0 }))
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
        <div className="vw-100 vh-100 d-flex justify-content-around align-items-center flex-column position-absolute z-2 mb-7">
            <div className='d-flex align-items-center w-50 flex-column'>
                <div className='d-flex w-100 justify-content-between align-items-end'>
                    <p className='position-absolute start-0 ms-15 mmb-4 fs-5'>Implante</p>
                    <p className='mb-4 position-absolute start-0 ms-15 fs-5'>Margem gengival</p>

                    {dentesYCoordsMG.map((dente, denteIndex) => 
                        <div className='d-flex flex-column border border-2 mx-1 align-items-center'>
                            <p 
                                className= {`w-100 fw-semibold fs-5 text-center cursor-pointer py-2 px-3 ${dentesAtivados[denteIndex].dente_ativado ? "" : "bg-body-secondary rounded-bottom"}`}

                                onClick={() => {
                                    const updatedDentesAtivados = [...dentesAtivados];
                                    updatedDentesAtivados[denteIndex].dente_index = denteIndex;
                                    updatedDentesAtivados[denteIndex].dente_ativado = !updatedDentesAtivados[denteIndex].dente_ativado;
                                    setDentesAtivados(updatedDentesAtivados);
                                }}
                            >Dente {18 - denteIndex}</p>
                            
                            {
                                dentesAtivados[denteIndex].dente_ativado ? (
                                    <input className="form-check-input mb-4 p-3" type="checkbox" aria-label="Checkbox for following text input"                                 
                                        onClick={(e) => {
                                            const updatedDentesImplantes = [...dentesImplantes];
                                            updatedDentesImplantes[denteIndex].dente_index = denteIndex;
                                            updatedDentesImplantes[denteIndex].dente_implante = e.target.checked;
                                            setDentesImplantes(updatedDentesImplantes);
                                        }}          
                                    />
                                ) : (
                                    <input className="form-check-input mb-4 p-3" type="checkbox" aria-label="Checkbox for following text input"                                 
                                        onClick={(e) => {
                                            const updatedDentesImplantes = [...dentesImplantes];
                                            updatedDentesImplantes[denteIndex].dente_index = denteIndex;
                                            updatedDentesImplantes[denteIndex].dente_implante = e.target.checked;
                                            setDentesImplantes(updatedDentesImplantes);
                                        }}
                                        disabled          
                                    />
                                )
                            }

                            <div key={denteIndex} className="mb-3 w-100 d-flex">
                                {Object.keys(dente).map((pointName) => (
                                    <div key={pointName}>
                                        {
                                            dentesAtivados[denteIndex].dente_ativado ? (
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder={`0`}
                                                    aria-label={`Y ${pointName}`}
                                                    aria-describedby="basic-addon1"
                                                    onChange={(e) => handleYInputChangeMG(denteIndex, pointName, (e.target.value * 20) || 0)}
                                                />
                                            ) : (
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder={`0`}
                                                    aria-label={`Y ${pointName}`}
                                                    aria-describedby="basic-addon1"
                                                    onChange={(e) => handleYInputChangeMG(denteIndex, pointName, (e.target.value * 20) || 0)}
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
                    <p className='mb-4 position-absolute start-0 ms-15 fs-5'>Profundidade de sondagem</p>
                    {dentesYCoordsPS.map((dente, denteIndex) =>  
                        <div className='d-flex flex-column border border-2 mx-1'>
                            <div key={denteIndex} className="mb-3 w-100 d-flex">
                                {Object.keys(dente).map((pointName) => (
                                    <div key={pointName}>
                                        {
                                            dentesAtivados[denteIndex].dente_ativado ? (
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder={`0`}
                                                    aria-label={`Y ${pointName}`}
                                                    aria-describedby="basic-addon1"
                                                    onChange={(e) => handleYInputChangePS(denteIndex, pointName, (e.target.value * 10) || 0)}
                                                />
                                            ) : (
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder={`0`}
                                                    aria-label={`Y ${pointName}`}
                                                    aria-describedby="basic-addon1"
                                                    onChange={(e) => handleYInputChangePS(denteIndex, pointName, (e.target.value * 10) || 0)}
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

            <svg style={{ width: "75%", height: "19em" }}>
                <polyline fill="blue" stroke="blue" fillOpacity={0} strokeWidth={4} points={pointsPS} />
                <polyline fill="red" stroke="red" fillOpacity={0} strokeWidth={4} points={pointsMG} />
            </svg>
        </div>
    );
};

export default DrawGraphics;