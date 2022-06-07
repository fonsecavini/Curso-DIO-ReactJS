import React, { Component } from "react";

class Twiter extends Component {

    componentDidMount() {
        const { posts, loading } = this.props;
        console.log('componentDidMount = ', posts);
        console.log('componentDidMount:Loading = ', loading);
    }

    componentDidUpdate(prevProps) {
        const { loading } = this.props;
        if (this.props.loading !== prevProps.loading) {
            console.log('componentDidUpdate:Loagind', loading);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount: fui removido');
    }

    render () {

        const { posts } = this.props;
        console.log('render', posts);

        return (
            <div>
               teste
            </div>
        )
    }
}

export default Twiter;