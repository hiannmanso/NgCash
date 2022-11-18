import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        box-sizing: border-box;
        text-decoration: none;
        outline: 0;
        padding: 0;
        border: 0;
        margin: 0;
        word-break: break-word;
        button {
            cursor: pointer;
        }
        font-family: 'Raleway', sans-serif;
    }
`
