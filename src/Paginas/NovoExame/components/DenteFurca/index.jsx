const DenteFurca = ( {denteIndex, denteNivelFurca} ) => {
    let furcaTop = 
        denteIndex === 0 ? 120 : 0 || 
        denteIndex === 1 ? 120 : 0 || 
        denteIndex === 2 ? 120 : 0 ||
        denteIndex === 13 ? 120 : 0 || 
        denteIndex === 14 ? 120 : 0 || 
        denteIndex === 15 ? 120 : 0; 

    let furcaLeft = 
        denteIndex === 0 ? 30 : 0 || 
        denteIndex === 1 ? 30 : 0 || 
        denteIndex === 2 ? 35 : 0 ||
        denteIndex === 13 ? 37 : 0 ||
        denteIndex === 14 ? 33 : 0 ||
        denteIndex === 15 ? 32 : 0;

    return (
        <span 
            className={`position-absolute z-3 p-2 rounded-circle 
                ${denteNivelFurca === 0 ? " border ball-bg" : ""}
                ${denteNivelFurca === 1 ? " border border-black" : ""}
                ${denteNivelFurca === 2 ? " border border-black bg-furca-nivel2" : ""}
                ${denteNivelFurca === 3 ? " border border-black bg-furca-nivel3" : ""}
            `}                                      
            style={
                { marginTop: furcaTop+"px", marginLeft: furcaLeft+"px" }
            }
        ></span>
    )
};

export default DenteFurca;