// RENDER PROPS:

// - 'O termo "render props" se refere a uma técnica de compartilhar código entre componentes
//   React passando uma prop cujo o valor é uma função

// Um componente com uma render prop recebe uma função que retorna um elemento React e 
// a invoca no momento de renderização, não sendo necessário para o componente implementar
// uma lógica própria.

import React, { Component} from "react";

class RenderProps extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increment = () => {
        const { count } = this.state;
        this.setState({
            count: count + 1
        })
    }

    decrement = () => {
        const { count } = this.state;
       this.setState({
        count: count - 1
       })
    }

    render() {
        const { render } = this.props;
        const { decrement, increment, count } = this.state;

        return (
            <div>
                {
                    render({
                        increment,
                        decrement,
                        count
                    })
                }
            </div>
        )
    }
}

export default RenderProps;