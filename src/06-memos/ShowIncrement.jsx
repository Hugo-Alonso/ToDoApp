import React from "react";

export const ShowIncrement = React.memo(({increment}) => {

    console.log('ShowIncrement: me volví a generar!!');
    
    return (
        <button 
            className="btn btn-primary"
            onClick={() => { increment() }}
        >
            Incrementar
        </button>
    )
})
