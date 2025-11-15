import React from 'react'

const Button = ({onClick, type}) => {
return <button onClick={onClick}>{type}</button>
}

export default Button