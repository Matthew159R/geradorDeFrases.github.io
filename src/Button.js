import './App.css';
import React from 'react';

const Button = ({func}) => 
{
    return <button onClick={func} className='button'>Clique aqui!</button>
}

export default Button;