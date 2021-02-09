import React from 'react'
import './pageHeader.css'

export default props => (
    <header className="page-header">
        <h2>{props.name}</h2> <small>{props.small}</small>
    </header>
)