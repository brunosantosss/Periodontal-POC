const ListasGrafico = () => {
    return (
        <div className="position-absolute z-2 d-flex flex-column" style={{gap: "8.4px"}}>
            {Array.from({ length: 18 }).map((_, index) => (
                <svg key={index} className="" style={{width: "1200px", height: "1px", marginBottom: index === 17 ? "93px" : "0px"}} >
                    <line x1="0" y1="0" x2="1200" y2="0" stroke="black" strokeWidth={2} />
                </svg>
            ))}
        </div>
    );
};

export default ListasGrafico;
