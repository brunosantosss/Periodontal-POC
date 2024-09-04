const DenteFurca = ( {denteIndex, denteNivelFurca} ) => {
    let furcaTop = 
        denteIndex === 0 ? 12.5 : 0 || 
        denteIndex === 1 ? 12.5 : 0 || 
        denteIndex === 2 ? 13.5 : 0 ||
        denteIndex === 13 ? 13.5 : 0 || 
        denteIndex === 14 ? 12.5 : 0 || 
        denteIndex === 15 ? 12.5 : 0; 

    let furcaLeft = 
        denteIndex === 0 ? 3.0 : 0 || 
        denteIndex === 1 ? 3.3 : 0 || 
        denteIndex === 2 ? 4.0 : 0 ||
        denteIndex === 13 ? 4.0 : 0 ||
        denteIndex === 14 ? 3.5 : 0 ||
        denteIndex === 15 ? 3.3 : 0;

    return (
        <span 
            className={`position-absolute z-3 p-3 rounded-circle 
                ${denteNivelFurca === 0 ? " border ball-bg" : ""}
                ${denteNivelFurca === 1 ? " border border-black" : ""}
                ${denteNivelFurca === 2 ? " border border-black bg-furca-nivel2" : ""}
                ${denteNivelFurca === 3 ? " border border-black bg-furca-nivel3" : ""}
            `}                                      
            style={
                { top: furcaTop+"em", left: furcaLeft+"em" }
            }
        ></span>
    )
}

export default DenteFurca;