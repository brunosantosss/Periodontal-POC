const Grafico = ( {dentesYCoordsMG, dentesYCoordsPS} ) => {
    const xCoordsMG = [
        { point_one: 145, point_two: 180, point_three: 210 },
        { point_one: 228, point_two: 260, point_three: 290 },
        { point_one: 305, point_two: 350, point_three: 390 },
        { point_one: 405, point_two: 428, point_three: 450 },
        { point_one: 470, point_two: 490, point_three: 510 },
        { point_one: 530, point_two: 553, point_three: 575 },
        { point_one: 600, point_two: 620, point_three: 640 },
        { point_one: 665, point_two: 691, point_three: 715 },

        { point_one: 740, point_two: 765, point_three: 792 },
        { point_one: 815, point_two: 838, point_three: 858 },
        { point_one: 880, point_two: 905, point_three: 930 },
        { point_one: 950, point_two: 968, point_three: 990 },
        { point_one: 1008, point_two: 1030, point_three: 1050 },
        { point_one: 1070, point_two: 1110, point_three: 1152 },
        { point_one: 1170, point_two: 1200, point_three: 1230 },
        { point_one: 1250, point_two: 1281, point_three: 1310 },
    ];

    const xCoordsPS = [
        { point_one: 145, point_two: 180, point_three: 210 },
        { point_one: 228, point_two: 260, point_three: 290 },
        { point_one: 305, point_two: 350, point_three: 390 },
        { point_one: 405, point_two: 428, point_three: 450 },
        { point_one: 470, point_two: 490, point_three: 510 },
        { point_one: 530, point_two: 553, point_three: 575 },
        { point_one: 600, point_two: 620, point_three: 640 },
        { point_one: 665, point_two: 691, point_three: 715 },

        { point_one: 740, point_two: 765, point_three: 792 },
        { point_one: 815, point_two: 838, point_three: 858 },
        { point_one: 880, point_two: 905, point_three: 930 },
        { point_one: 950, point_two: 968, point_three: 990 },
        { point_one: 1008, point_two: 1030, point_three: 1050 },
        { point_one: 1070, point_two: 1110, point_three: 1152 },
        { point_one: 1170, point_two: 1200, point_three: 1230 },
        { point_one: 1250, point_two: 1281, point_three: 1310 },
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
        <svg className='position-absolute inverted-y' style={{width: "1320px", marginBottom: "93px"}} >
            <polyline 
                fill="#5252A2" 
                stroke="#5252A2" 
                fillOpacity={.6} 
                strokeWidth={3} 
                points={`${xCoordsPS[0].point_one}, 0 ` + pointsPS + ` ${xCoordsPS[15].point_three}, 0`} 
            />
            <polyline 
                fill="red" 
                stroke="red" 
                fillOpacity={0} 
                strokeWidth={2} 
                points={`${xCoordsMG[0].point_one}, 0 ` + pointsMG + ` ${xCoordsMG[15].point_three}, 0`} 
            />
        </svg>
    )
};

export default Grafico;