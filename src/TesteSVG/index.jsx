import { useState } from 'react';

const TesteSVG = () => {
    const [dentesYCoords, setDentesYCoords] = useState(
        Array.from({ length: 8 }, () => ({ point_one: 0, point_two: 0, point_three: 0 }))
    );

    const handleInputChange = (denteIndex, pointName, value) => {
        const updatedDentes = dentesYCoords.map((dente, index) =>
            index === denteIndex ? { ...dente, [pointName]: value } : dente
        );
        setDentesYCoords(updatedDentes);
    };

    const points = dentesYCoords
        .map((dente, index) => 
            [`${(index * 150) + 40},${dente.point_one}`, `${(index * 150) + 80},${dente.point_two}`, `${(index * 150) + 160},${dente.point_three}`]
        )
        .flat()
        .join(' ');

    return (
        <div className="vw-100 vh-100 d-flex justify-content-around align-items-center flex-column">
            <div className='d-flex flex-column align-items-center w-100'>
                {dentesYCoords.map((dente, denteIndex) => (
                    <div key={denteIndex} className="input-group mb-3 w-50">
                        {Object.keys(dente).map((pointName) => (
                            <input
                                key={pointName}
                                type="number"
                                className="form-control"
                                placeholder="Valor"
                                aria-label="Valor"
                                aria-describedby="basic-addon1"
                                onChange={(e) => handleInputChange(denteIndex, pointName, e.target.value || 0)}
                            />
                        ))}
                    </div>
                ))}
            </div>

            <svg style={{ width: "100%" }}>
                <polyline fill="none" stroke="red" strokeWidth={2} points={points} />
            </svg>
        </div>
    );
};

export default TesteSVG;