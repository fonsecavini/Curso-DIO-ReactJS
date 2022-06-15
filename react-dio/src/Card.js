import React, { useContext } from "react";
import { ThemeContext } from './theme';
import Form from "./Form";


function Card() {
    const theme = useContext(ThemeContext)
    return (
        <div>
            <Form />
            <button style={{
                background: theme.background,
                color: theme.color
            }}>Card Button</button>
        </div>
    )

}

export default Card;