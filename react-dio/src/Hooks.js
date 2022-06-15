import React, { useEffect, useState, memo } from "react";

// Não use Hooks dentro de funções JavaScript comuns. Em vez disso, você pode:

// - Chamar Hooks em componentes React.
// - Chamar Hooks dentro de Hooks Customizados.
// Seguindo essas regras, você garante que toda lógica de estado (state)
// no componente seja claramente visível no código fonte.

const areEqual = (prevProps, nextProps) => {
    return prevProps.loading === nextProps.loading;
} // inverso do shouldComponentUpdate

function Hooks(props) {
    const { posts, loading } = this.props;
    const [tweet, setTweet] = useState();

    // componentDidMount
    useEffect(() => {
        console.log('componentDidMount = ', posts);
        console.log('componentDidMount:Loading = ', loading);
    }, []) // passando um array vazio ele executará apenas uma vez

    // componentDidUpdate
    useEffect(() => {
        console.log('componentDidUpdate', loading);
    }, [loading])
    
    // componentWillUmount
    useEffect(() => {
        return () => {
            console.log('componentWillUmount', loading)  
        }
    }, [])

    const handleTweet = () => {
        setTweet('tweet atualizado')
    }

    console.log('tweet atualizado', handleTweet);
        return (
            <div>
               teste
            </div>
        )
}

export default memo(Hooks, areEqual);