const DenteDrawLinePS = ({ graphicLineHeight, CordY1 = 0, CordY2 = 0, CordY3 = 0 }) => {
    let values = [CordY1, CordY2, CordY3];
    
    const width = 145; 
    const height = 450;
    const padding = 0;

    const mapY = (value) => {
        const minY = -15;
        const maxY = 15;
        return height - ((value - minY) / (maxY - minY)) * (height - padding * 2) - padding;
    };

    const points = values.map((value, index) => {
        const x = (index / (values.length - 1)) * (width - padding * 2) + padding;
        const y = mapY(value);
        return `${x},${y}`;
    }).join(' ');

    return (
        <div className="position-absolute z-3" style={{top: graphicLineHeight+"em"}}>
            <svg preserveAspectRatio="none" height={height} xmlns="http://www.w3.org/2000/svg" >
                <polyline 
                    points={points} 
                    fill="none" 
                    stroke="blue" 
                    strokeWidth="3" 
                />
            </svg>
        </div>
    );
}

export default DenteDrawLinePS;