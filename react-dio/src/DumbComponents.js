// DUMB COMPONENTS:

// - Preocupa-se com a apresentação 
// - Recebe valores via props
// - Não possuem dependências com o restante da aplicação
// - Não especificam como os dados são carregados ou sofrem mutação 
// - Recebem valores e callbacks exclusivamente via props
// - Raramente possuem estado, quando precisam de estado é para 
//   controlar a interface e não os dados do usuário
// - São escritos na maioria das vezes como componetes funcionais

// EXEMPLOS: Bottun, Cards, Footer, List, Menu.

import React from "react";
import Button from './Button'

function Dumb () {

    const handleClick = () => {
        console.log('adicionando no carrinho');
    }

    return (
        <Button onClick={handleClick}>
            Adicionar no carrinho
        </Button>
    )
}

export default Dumb;