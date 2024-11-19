import { pontosGrafico } from "./components/GraficoPontos";

const Grafico = ( {dentesYCoordsMG, dentesYCoordsPS, Superior, Frente} ) => {
    // Superiores // 
    const pointsSuperiorVestibularMG = dentesYCoordsMG.map((dente, index) => [
            `${pontosGrafico.superior.vestibular.MG[index].point_one}, ${dente.point_one}`,
            `${pontosGrafico.superior.vestibular.MG[index].point_two}, ${dente.point_two}`,
            `${pontosGrafico.superior.vestibular.MG[index].point_three}, ${dente.point_three}`,
        ]
    )
    .flat()
    .join(' ');
    const pointsSuperiorVestibularPS = dentesYCoordsPS.map((dente, index) => 
        [
            `${pontosGrafico.superior.vestibular.PS[index].point_one}, ${dente.point_one}`,
            `${pontosGrafico.superior.vestibular.PS[index].point_two}, ${dente.point_two}`,
            `${pontosGrafico.superior.vestibular.PS[index].point_three}, ${dente.point_three}`,
        ]
    )
    .flat()
    .join(' ');
    
    const pointsSuperiorPalatinaMG = dentesYCoordsMG.map((dente, index) => [
            `${pontosGrafico.superior.palatina.MG[index].point_one}, ${dente.point_one}`,
            `${pontosGrafico.superior.palatina.MG[index].point_two}, ${dente.point_two}`,
            `${pontosGrafico.superior.palatina.MG[index].point_three}, ${dente.point_three}`,
        ]
    )
    .flat()
    .join(' ');
    const pointsSuperiorPalatinaPS = dentesYCoordsPS.map((dente, index) => 
        [
            `${pontosGrafico.superior.palatina.PS[index].point_one}, ${dente.point_one}`,
            `${pontosGrafico.superior.palatina.PS[index].point_two}, ${dente.point_two}`,
            `${pontosGrafico.superior.palatina.PS[index].point_three}, ${dente.point_three}`,
        ]
    )
    .flat()
    .join(' ');

    // Inferiores //
    const pointsInferiorLingualMG = dentesYCoordsMG.map((dente, index) => 
        [
            `${pontosGrafico.inferior.lingual.MG[index].point_one}, ${dente.point_one}`,
            `${pontosGrafico.inferior.lingual.MG[index].point_two}, ${dente.point_two}`,
            `${pontosGrafico.inferior.lingual.MG[index].point_three}, ${dente.point_three}`,
        ]
    )
    .flat()
    .join(' ');
    const pointsInferiorLingualPS = dentesYCoordsPS.map((dente, index) => 
        [
            `${pontosGrafico.inferior.lingual.PS[index].point_one}, ${dente.point_one}`,
            `${pontosGrafico.inferior.lingual.PS[index].point_two}, ${dente.point_two}`,
            `${pontosGrafico.inferior.lingual.PS[index].point_three}, ${dente.point_three}`,
        ]
    )
    .flat()
    .join(' ');

    return (
        <>
        {
            Superior ? (
                <>
                    {Frente ? (
                        <svg className='position-absolute' style={{width: "1320px", height: "450px", marginBottom: "-130px"}} viewBox="0 -200 1320 400" >
                            <polyline 
                                fill="#5252A2" 
                                stroke="#5252A2" 
                                fillOpacity={.6} 
                                strokeWidth={3} 
                                points={`${pontosGrafico.superior.vestibular.PS[0].point_one}, 0 ` + pointsSuperiorVestibularPS + ` ${pontosGrafico.superior.vestibular.PS[15].point_three}, 0`} 
                            />
                            <polyline 
                                fill="#EC554A" 
                                stroke="#EC554A" 
                                fillOpacity={0} 
                                strokeWidth={3} 
                                points={`${pontosGrafico.superior.vestibular.MG[0].point_one}, 0 ` + pointsSuperiorVestibularMG + ` ${pontosGrafico.superior.vestibular.MG[15].point_three}, 0`} 
                            />
                        </svg>
                    ) : (
                        <>
                        <svg className='position-absolute inverted-y' style={{width: "1320px", height: "450px", marginBottom: "-60px"}}
                        viewBox="0 -200 1320 400" >
                            <polyline 
                                fill="#5252A2" 
                                stroke="#5252A2" 
                                fillOpacity={.6} 
                                strokeWidth={3} 
                                points={`${pontosGrafico.superior.palatina.PS[0].point_one}, 0 ` + pointsSuperiorPalatinaPS + ` ${pontosGrafico.superior.palatina.PS[15].point_three}, 0`} 
                            />
                            <polyline 
                                fill="#EC554A" 
                                stroke="#EC554A" 
                                fillOpacity={0} 
                                strokeWidth={3} 
                                points={`${pontosGrafico.superior.palatina.PS[0].point_one}, 0 ` + pointsSuperiorPalatinaMG + ` ${pontosGrafico.superior.palatina.MG[15].point_three}, 0`} 
                            />
                        </svg>
                        </>
                    )}
                </>
            ) : (
                <>
                    {Frente ? (
                        <svg className='position-absolute' style={{width: "1320px", height: "450px", marginBottom: "-128px"}} viewBox="0 -200 1320 400"  >
                            <polyline 
                                fill="#5252A2" 
                                stroke="#5252A2" 
                                fillOpacity={.6} 
                                strokeWidth={3} 
                                points={`${pontosGrafico.inferior.lingual.PS[0].point_one}, 0 ` + pointsInferiorLingualPS + ` ${pontosGrafico.inferior.lingual.PS[15].point_three}, 0`} 
                            />
                            <polyline 
                                fill="#EC554A" 
                                stroke="#EC554A" 
                                fillOpacity={0} 
                                strokeWidth={3} 
                                points={`${pontosGrafico.inferior.lingual.MG[0].point_one}, 0 ` + pointsInferiorLingualMG + ` ${pontosGrafico.inferior.lingual.MG[15].point_three}, 0`} 
                            />
                        </svg>
                    ) : (
                        <>
                        <svg className='position-absolute inverted-y' style={{width: "1320px", height: "450px", marginBottom: "-63px"}} viewBox="0 -200 1320 400"  >
                            <polyline 
                                fill="#5252A2" 
                                stroke="#5252A2" 
                                fillOpacity={.6} 
                                strokeWidth={3} 
                                points={`${pontosGrafico.inferior.vestibular.PS[0].point_one}, 0 ` + pointsSuperiorPalatinaPS + ` ${pontosGrafico.inferior.vestibular.PS[15].point_three}, 0`} 
                            />
                            <polyline 
                                fill="#EC554A" 
                                stroke="#EC554A" 
                                fillOpacity={0} 
                                strokeWidth={3} 
                                points={`${pontosGrafico.inferior.vestibular.PS[0].point_one}, 0 ` + pointsInferiorLingualMG + ` ${pontosGrafico.inferior.vestibular.MG[15].point_three}, 0`} 
                            />
                        </svg>
                        </>
                    )}
                </>
            )
        }
        </>
    )
};

export default Grafico;