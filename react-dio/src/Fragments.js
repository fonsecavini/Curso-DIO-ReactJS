// Fragments:
// - Um padrão comum no React é que um componente pode retornar
// mútlipos elementos. Os Fragmentos permitem agrupar uma lista
// de filhos sem adicionar nós extras ao DOM

import React from "react";

function Fragments() {

    return (
        <React.Fragment>
            <div>
                ReactJS
            </div>
            <div>
                Fragments
            </div>
        </React.Fragment>
        
    )
}

export default Fragments;