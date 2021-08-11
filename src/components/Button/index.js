import React from 'react';
import {Wrapper } from './Button.styles';

const Button = ({text,callback}) => {
    return ( 
        <Wrapper type='buton' onClick={callback}>
            {text}
        </Wrapper>
    );
}
 
export default Button;