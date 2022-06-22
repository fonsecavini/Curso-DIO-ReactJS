// REFS E DOM:

// Com refs é possivel acessar a árvore do DOM e/ou elementos React.

// Quando utilizar:

// - Manipulação de bibliotecas de terceiros 
// - Gerenciamento de inputs (foco), selecão de textos ou reprodução de mídias
// - Animações imperativas

import React, { useRef } from "react";

function Ref() {
    const inputRef = useRef();

    const handlClick = () => {
        inputRef.current.focus()
    }

    return (
        <>
        Foco: <input ref={inputRef}/>
        <button onClick={handlClick}>Focar</button>
        </>
    )
}

export default Ref;