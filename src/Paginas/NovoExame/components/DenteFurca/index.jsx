const DenteFurca = ( {denteIndex, denteNivelFurca, Palatino} ) => {
    // Vestibular
    let furcaTop = 
        denteIndex === 0 ? 120 : 0 || 
        denteIndex === 1 ? 120 : 0 || 
        denteIndex === 2 ? 120 : 0 ||
        denteIndex === 13 ? 120 : 0 || 
        denteIndex === 14 ? 120 : 0 || 
        denteIndex === 15 ? 120 : 0; 

    let furcaLeft = 
        denteIndex === 0 ? 27 : 0 || 
        denteIndex === 1 ? 27 : 0 || 
        denteIndex === 2 ? 27 : 0 ||
        denteIndex === 13 ? 28 : 0 ||
        denteIndex === 14 ? 29 : 0 ||
        denteIndex === 15 ? 29 : 0;
    
    // Palatina ( Furca 1 )
    let palfurcaTop1 = 
        denteIndex === 0 ? 120 : 0 || 
        denteIndex === 1 ? 127 : 0 || 
        denteIndex === 2 ? 138 : 0 ||
        denteIndex === 13 ? 117 : 0 || 
        denteIndex === 14 ? 130 : 0 || 
        denteIndex === 15 ? 122 : 0; 

    let palfurcaLeft1 = 
        denteIndex === 0 ? 3 : 0 || 
        denteIndex === 1 ? 6 : 0 || 
        denteIndex === 2 ? 4 : 0 ||
        denteIndex === 13 ? 12 : 0 ||
        denteIndex === 14 ? 19 : 0 ||
        denteIndex === 15 ? 13 : 0;
    
    // Palatina ( Furca 2 ) 
    let palfurcaTop2 = 
        denteIndex === 0 ? 130 : 0 || 
        denteIndex === 1 ? 128 : 0 || 
        denteIndex === 2 ? 118 : 0 ||
        denteIndex === 13 ? 138 : 0 || 
        denteIndex === 14 ? 120 : 0 || 
        denteIndex === 15 ? 112 : 0; 

    let palfurcaLeft2 = 
        denteIndex === 0 ? 50 : 0 || 
        denteIndex === 1 ? 39 : 0 || 
        denteIndex === 2 ? 45 : 0 ||
        denteIndex === 13 ? 53 : 0 ||
        denteIndex === 14 ? 52 : 0 ||
        denteIndex === 15 ? 55 : 0;

    return (
        <>
            {
                Palatino ? (
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
                ) : (
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
                )
            }
        </>
    )
};

export default DenteFurca;