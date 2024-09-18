const DenteFurca = ( {denteIndex, denteNivelFurca, Superior, Frente} ) => {
    // Vestibular
    let furcaTop = 
        denteIndex === 0 ? 120 : 0 || 
        denteIndex === 1 ? 120 : 0 || 
        denteIndex === 2 ? 120 : 0 ||
        denteIndex === 13 ? 120 : 0 || 
        denteIndex === 14 ? 120 : 0 || 
        denteIndex === 15 ? 120 : 0; 

    let furcaLeft = 
        denteIndex === 0 ? 29 : 0 || 
        denteIndex === 1 ? 30 : 0 || 
        denteIndex === 2 ? 36 : 0 ||
        denteIndex === 13 ? 36 : 0 ||
        denteIndex === 14 ? 33 : 0 ||
        denteIndex === 15 ? 31 : 0;
    
    // Palatina ( Furca 1 )
    let palfurcaTop1 = 
        denteIndex === 0 ? 110 : 0 || 
        denteIndex === 1 ? 120 : 0 || 
        denteIndex === 2 ? 138 : 0 ||
        denteIndex === 13 ? 117 : 0 || 
        denteIndex === 14 ? 130 : 0 || 
        denteIndex === 15 ? 122 : 0; 

    let palfurcaLeft1 = 
        denteIndex === 0 ? 5 : 0 || 
        denteIndex === 1 ? 6 : 0 || 
        denteIndex === 2 ? 6 : 0 ||
        denteIndex === 13 ? 16 : 0 ||
        denteIndex === 14 ? 20 : 0 ||
        denteIndex === 15 ? 13 : 0;
    
    // Palatina ( Furca 2 ) 
    let palfurcaTop2 = 
        denteIndex === 0 ? 120 : 0 || 
        denteIndex === 1 ? 128 : 0 || 
        denteIndex === 2 ? 115 : 0 ||
        denteIndex === 13 ? 138 : 0 || 
        denteIndex === 14 ? 120 : 0 || 
        denteIndex === 15 ? 112 : 0; 

    let palfurcaLeft2 = 
        denteIndex === 0 ? 45 : 0 || 
        denteIndex === 1 ? 45 : 0 || 
        denteIndex === 2 ? 60 : 0 ||
        denteIndex === 13 ? 69 : 0 ||
        denteIndex === 14 ? 60 : 0 ||
        denteIndex === 15 ? 55 : 0;

    // Lingual
    let lingualFurcaTop = 
        denteIndex === 0 ? 102 : 0 || 
        denteIndex === 1 ? 103 : 0 || 
        denteIndex === 2 ? 117 : 0 ||
        denteIndex === 13 ? 118 : 0 || 
        denteIndex === 14 ? 105 : 0 || 
        denteIndex === 15 ? 104 : 0; 

    let lingualFurcaLeft = 
        denteIndex === 0 ? 29 : 0 || 
        denteIndex === 1 ? 37 : 0 || 
        denteIndex === 2 ? 32 : 0 ||
        denteIndex === 13 ? 43 : 0 ||
        denteIndex === 14 ? 37 : 0 ||
        denteIndex === 15 ? 44 : 0;
    
    // Vestibular
    let vestibularFurcaTop = 
        denteIndex === 0 ? 134 : 0 || 
        denteIndex === 1 ? 132 : 0 || 
        denteIndex === 2 ? 126 : 0 ||
        denteIndex === 13 ? 125 : 0 || 
        denteIndex === 14 ? 133 : 0 || 
        denteIndex === 15 ? 135 : 0; 

    let vestibularFurcaLeft = 
        denteIndex === 0 ? 29 : 0 || 
        denteIndex === 1 ? 39 : 0 || 
        denteIndex === 2 ? 44 : 0 ||
        denteIndex === 13 ? 30 : 0 ||
        denteIndex === 14 ? 35 : 0 ||
        denteIndex === 15 ? 46 : 0;

    return (
        <>
            {
                Superior ? (
                    Frente ? (
                        <span 
                            className={`position-absolute z-3 p-2 rounded-circle 
                                ${denteNivelFurca === 0 ? " border ball-bg opacity-0" : ""}
                                ${denteNivelFurca === 1 ? " border border-black border-2" : ""}
                                ${denteNivelFurca === 2 ? " border border-black border-2 bg-furca-nivel2" : ""}
                                ${denteNivelFurca === 3 ? " border border-black border-2 bg-furca-nivel3" : ""}
                            `}                                      
                            style={
                                { marginTop: furcaTop+"px", marginLeft: furcaLeft+"px" }
                            }
                        />
                    ) : (
                        <>
                            <span 
                                className={`position-absolute z-3 p-2 rounded-circle 
                                    ${denteNivelFurca[0] === 0 ? " border ball-bg opacity-0" : ""}
                                    ${denteNivelFurca[0] === 1 ? " border border-black border-2" : ""}
                                    ${denteNivelFurca[0] === 2 ? " border border-black border-2 bg-furca-nivel2" : ""}
                                    ${denteNivelFurca[0] === 3 ? " border border-black border-2 bg-furca-nivel3" : ""}
                                `}                                      
                                style={
                                    { marginTop: palfurcaTop1+"px", marginLeft: palfurcaLeft1+"px" }
                                }
                            />
                            <span 
                                className={`position-absolute z-3 p-2 rounded-circle 
                                    ${denteNivelFurca[1] === 0 ? " border ball-bg opacity-0" : ""}
                                    ${denteNivelFurca[1] === 1 ? " border border-black border-2" : ""}
                                    ${denteNivelFurca[1] === 2 ? " border border-black border-2 bg-furca-nivel2" : ""}
                                    ${denteNivelFurca[1] === 3 ? " border border-blackborder-2  bg-furca-nivel3" : ""}
                                `}                                      
                                style={
                                    { marginTop: palfurcaTop2+"px", marginLeft: palfurcaLeft2+"px" }
                                }
                            />
                        </>
                    )
                ) : (
                    Frente ? (                  
                        <span 
                            className={`position-absolute z-3 p-2 rounded-circle 
                                ${denteNivelFurca === 0 ? " border ball-bg opacity-0" : ""}
                                ${denteNivelFurca === 1 ? " border border-black border-2" : ""}
                                ${denteNivelFurca === 2 ? " border border-black border-2 bg-furca-nivel2" : ""}
                                ${denteNivelFurca === 3 ? " border border-black border-2 bg-furca-nivel3" : ""}
                            `}                                      
                            style={
                                { marginTop: lingualFurcaTop+"px", marginLeft: lingualFurcaLeft+"px" }
                            }
                        />
                    ) : (
                        <span 
                            className={`position-absolute z-3 p-2 rounded-circle 
                                ${denteNivelFurca[0] === 0 ? " border ball-bg opacity-0" : ""}
                                ${denteNivelFurca[0] === 1 ? " border border-black border-2" : ""}
                                ${denteNivelFurca[0] === 2 ? " border border-black border-2 bg-furca-nivel2" : ""}
                                ${denteNivelFurca[0] === 3 ? " border border-black border-2 bg-furca-nivel3" : ""}
                            `}                                      
                            style={
                                { marginTop: vestibularFurcaTop+"px", marginLeft: vestibularFurcaLeft+"px" }
                            }
                        />   
                    )
                )
                
            }
        </>
    )
};

export default DenteFurca;