const Grafico = ( {dentesYCoordsMG, dentesYCoordsPS, Palatino} ) => {
    const xCoordsMG = [
        { point_one: 130, point_two: 158, point_three: 185 },
        { point_one: 205, point_two: 232, point_three: 260 },
        { point_one: 275, point_two: 308, point_three: 340 },
        { point_one: 358, point_two: 385, point_three: 410 },
        { point_one: 433, point_two: 456, point_three: 478 },
        { point_one: 503, point_two: 528, point_three: 555 },
        { point_one: 585, point_two: 613, point_three: 637 },
        { point_one: 663, point_two: 688, point_three: 708 },

        { point_one: 732, point_two: 755, point_three: 777 },
        { point_one: 803, point_two: 828, point_three: 855 },
        { point_one: 885, point_two: 913, point_three: 937 },
        { point_one: 963, point_two: 985, point_three: 1006 },
        { point_one: 1030, point_two: 1055, point_three: 1082 },
        { point_one: 1100, point_two: 1133, point_three: 1166 },
        { point_one: 1180, point_two: 1208, point_three: 1235 },
        { point_one: 1255, point_two: 1283, point_three: 1310 },
    ];

    const xCoordsPS = [
        { point_one: 130, point_two: 158, point_three: 185 },
        { point_one: 205, point_two: 232, point_three: 260 },
        { point_one: 275, point_two: 308, point_three: 340 },
        { point_one: 358, point_two: 385, point_three: 410 },
        { point_one: 433, point_two: 456, point_three: 478 },
        { point_one: 503, point_two: 528, point_three: 555 },
        { point_one: 585, point_two: 613, point_three: 637 },
        { point_one: 663, point_two: 688, point_three: 708 },

        { point_one: 732, point_two: 755, point_three: 777 },
        { point_one: 803, point_two: 828, point_three: 855 },
        { point_one: 885, point_two: 913, point_three: 937 },
        { point_one: 963, point_two: 985, point_three: 1006 },
        { point_one: 1030, point_two: 1055, point_three: 1082 },
        { point_one: 1100, point_two: 1133, point_three: 1166 },
        { point_one: 1180, point_two: 1208, point_three: 1235 },
        { point_one: 1255, point_two: 1283, point_three: 1310 },
    ];

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
        <>
        {
            Palatino ? (
                <svg className='position-absolute' style={{width: "1320px", marginBottom: "15px"}} >
                    <polyline 
                        fill="#5252A2" 
                        stroke="#5252A2" 
                        fillOpacity={.6} 
                        strokeWidth={3} 
                        points={`${xCoordsPS[0].point_one}, 0 ` + pointsPS + ` ${xCoordsPS[15].point_three}, 0`} 
                    />
                    <polyline 
                        fill="#EC554A" 
                        stroke="#EC554A" 
                        fillOpacity={0} 
                        strokeWidth={2} 
                        points={`${xCoordsMG[0].point_one}, 0 ` + pointsMG + ` ${xCoordsMG[15].point_three}, 0`} 
                    />
                </svg>
            ) : (
                <svg className='position-absolute inverted-y' style={{width: "1320px", marginBottom: "93px"}} >
                    <polyline 
                        fill="#5252A2" 
                        stroke="#5252A2" 
                        fillOpacity={.6} 
                        strokeWidth={3} 
                        points={`${xCoordsPS[0].point_one}, 0 ` + pointsPS + ` ${xCoordsPS[15].point_three}, 0`} 
                    />
                    <polyline 
                        fill="#EC554A" 
                        stroke="#EC554A" 
                        fillOpacity={0} 
                        strokeWidth={2} 
                        points={`${xCoordsMG[0].point_one}, 0 ` + pointsMG + ` ${xCoordsMG[15].point_three}, 0`} 
                    />
                </svg>
            )
        }
        </>
    )
};

export default Grafico;