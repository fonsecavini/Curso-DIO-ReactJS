// TYPECHECKING:

// - Na medida em que sua aplicação cresce, vocẽ pode capturar muitos bugs
//  com checagem de tipos, Em algumas aplicações, vocẽ pode usar extensões
// do javascript com Flow ou Typescript para checar os tipos de toda a sua
// aplicação. Porém, mesmo se você não usa-las, o React possui algumas 
// habilidades de checagem de tipos nativas.

import React from "react";
import PropTypes from 'pro-types'

function TypeChecking () {

    const { dogs, cats, customers, customerName } = this.props;

    return (
        <div>
            <h1>Dogs: {dogs}</h1>
            <h2>Cats: {cats}</h2>
          <div>
            Quantidade de clientes: {customers}
          </div>
          <div>
            Nome do Cliente: {customerName}
          </div>
        </div>
    )
}

TypeChecking.defaultProps = {
    cats: 0,
    customers: []
}

TypeChecking.prototypes = {
    dogs: PropTypes.number.isRequired,
    cats: PropTypes.number,
    customers: PropTypes.array,
    customerName: PropTypes.string.isRequired
}

export default TypeChecking;