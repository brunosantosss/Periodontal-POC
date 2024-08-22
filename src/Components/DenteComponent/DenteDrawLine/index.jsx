import style from "./index.module.css";

const DenteDrawLine = ({ graphicLineHeight, CordX1, CordX2, CordX3, CordY1, CordY2, CordY3 }) => {
    const points = [
        { x: CordX1, y: CordY1 },
        { x: CordX2, y: CordY2 },
        { x: CordX3, y: CordY3 },
    ];
    
      return (
        <div className="w-100 bg-warning">
            <svg className="position-absolute z-3" style={{top: graphicLineHeight+"em"}}>
            {/* Mapear pontos e desenhar linhas */}
            {points.slice(0, -1).map((point, index) => (
                <line 
                key={index}
                x1={point.x}
                y1={point.y}
                x2={points[index + 1].x}
                y2={points[index + 1].y}
                stroke="red"
                strokeWidth="4"
                />
            ))}
            </svg>
        </div>
      );
}

export default DenteDrawLine;