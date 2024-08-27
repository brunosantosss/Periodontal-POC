import React, { useState } from 'react';

const DenteDrawLinePS = () => {
    const xCoords = [
        { point_one: 350, point_two: 420, point_three: 485 },
        { point_one: 520, point_two: 580, point_three: 645 },
        { point_one: 690, point_two: 760, point_three: 850 },
        { point_one: 880, point_two: 920, point_three: 970 },
        { point_one: 1000, point_two: 1050, point_three: 1090 },
        { point_one: 1130, point_two: 1180, point_three: 1225 },
        { point_one: 1270, point_two: 1315, point_three: 1360 },
        { point_one: 1400, point_two: 1460, point_three: 1510 }
    ];

    const [dentesYCoords, setDentesYCoords] = useState(
        Array.from({ length: 8 }, () => ({ point_one: 0, point_two: 0, point_three: 0 }))
    );

    const handleYInputChange = (denteIndex, pointName, value) => {
        const updatedDentes = dentesYCoords.map((dente, index) =>
            index === denteIndex ? { ...dente, [pointName]: Number(value) } : dente
        );
        setDentesYCoords(updatedDentes);
    };

    const points = dentesYCoords
        .map((dente, index) => 
            [
                `${xCoords[index].point_one},${dente.point_one}`, 
                `${xCoords[index].point_two},${dente.point_two}`, 
                `${xCoords[index].point_three},${dente.point_three}`
            ]
        )
        .flat()
        .join(' ');

    return (
        <div className="vw-100 vh-100 d-flex justify-content-around align-items-center flex-column position-absolute z-2">
            <div className='d-flex align-items-center w-50'>
                {dentesYCoords.map((dente, denteIndex) =>  
                    <div key={denteIndex} className="input-group mb-3 w-25 d-flex flex-column">
                        <p>Dente {denteIndex + 1}</p>
                        {Object.keys(dente).map((pointName) => (
                            <div key={pointName}>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder={`Y ${pointName}`}
                                    aria-label={`Y ${pointName}`}
                                    aria-describedby="basic-addon1"
                                    onChange={(e) => handleYInputChange(denteIndex, pointName, (e.target.value * 20) || 0)}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <svg style={{ width: "75%", height: "22.5em" }}>
                <polyline fill="red" stroke="red" fillOpacity={0.0} strokeWidth={2} points={points} />
            </svg>
        </div>
    );
};

export default DenteDrawLinePS;
