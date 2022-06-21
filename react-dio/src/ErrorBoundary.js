// Error Boundary:
// - Um erro de javascript em uma parte da UI não deve quebrar toda
// a aplicação. Para resolver este problema para usuários React,
// o React 16 introduziu um novo conceito de "error boundary"

// ERROR BOUNDARIES NÃO CAPTURAM ERROS EM:
// - Manipuladores de evento
// - Código assíncrono (exp. callbacks de setTimeout ou requestAnimationFrame)
// - Renderização no servidor
// - Erros lançados na própria error boundary (ao invés de em seus filhos)

import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('error', error);
        console.log('errorInfo', errorInfo);
        this.setState({
            hasError: true
        })
    }


    render() {
        if (this.state.hasError) {
            return (<h1> ERROR </h1>)
        }
        return this.props.children
    }
}

export default ErrorBoundary;