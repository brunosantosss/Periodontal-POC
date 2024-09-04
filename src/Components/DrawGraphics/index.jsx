import React, { useState } from 'react';
import Mobilidade from './Components/Mobilidade';
import Implante from './Components/Implante/Implante';
import Furca from './Components/Furca';
import SangramentoSondagem from './Components/SangramentoSondagem';
import Placa from './Components/Placa';
import ProfundidadeSondagem from './Components/ProfundidadeSondagem';
import MargemGengival from './Components/MargemGengival';

const DrawGraphics = ({ dentesInfo, setDentesInfo }) => {
    const xCoordsMG = [
        { point_one: 35, point_two: 85, point_three: 130 },
        { point_one: 180, point_two: 230, point_three: 280 },
        { point_one: 315, point_two: 385, point_three: 455 },
        { point_one: 485, point_two: 525, point_three: 570 },
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
        { point_one: 1975, point_two: 2025, point_three: 2070 },
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
        { point_one: 1975, point_two: 2025, point_three: 2070 },
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

    console.log(dentesYCoordsMG);
    
    return (
        <div className="vw-100 h-40 d-flex align-items-center flex-column position-absolute z-2" style={{top: "3.4em"}}>
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

                                    if (updateDentesInfo[denteIndex].dente_ativado === false) {         
                                        const updatedDentesMG = dentesYCoordsMG.map((dente, index) => 
                                            index === denteIndex ? {...dente, point_one: 0, point_two: 0, point_three: 0 } : dente
                                        );
                                        
                                        const updatedDentesPS = dentesYCoordsPS.map((dente, index) => 
                                            index === denteIndex ? {...dente, point_one: 0, point_two: 0, point_three: 0 } : dente
                                        );
                                        
                                        setDentesYCoordsMG(updatedDentesMG);     
                                        setDentesYCoordsPS(updatedDentesPS);   
                                          
                                    }
                                }}
                            >Dente {denteIndex >= 0 && denteIndex <= 7 ? (18 - denteIndex) : 13 + denteIndex}</p>

                            <Mobilidade dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={denteIndex}/>
                            <Implante dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={denteIndex}/>
                            <Furca dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={denteIndex}/>

                            <SangramentoSondagem dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={denteIndex}/>
                            <Placa dentesInfo={dentesInfo} setDentesInfo={setDentesInfo} denteIndex={denteIndex}/> 

                            <ProfundidadeSondagem 
                                dente={dente} 
                                dentesInfo={dentesInfo} 
                                denteIndex={denteIndex} 
                                handleYInputChangePS={handleYInputChangePS} 
                                dentesYCoordsMG={dentesYCoordsMG}
                            />
                            <MargemGengival 
                                dente={dente}
                                dentesInfo={dentesInfo}
                                denteIndex={denteIndex}
                                handleYInputChangeMG={handleYInputChangeMG}
                            />
                        </div> 
                    )}
                </div>

            </div>

            <svg className='inverted-y' style={{ width: "75%", height: "22.8em" }}>
                <polyline 
                    fill="#5252A2" 
                    stroke="#5252A2" 
                    fillOpacity={.6} 
                    strokeWidth={5} 
                    points={`${xCoordsPS[0].point_one}, 0 ` + pointsPS + ` ${xCoordsPS[15].point_three}, 0`} 
                />
                <polyline 
                    fill="red" 
                    stroke="red" 
                    fillOpacity={0} 
                    strokeWidth={4} 
                    points={`${xCoordsMG[0].point_one}, 0 ` + pointsMG + ` ${xCoordsMG[15].point_three}, 0`} 
                />
            </svg>
        </div>
    );
};

export default DrawGraphics;