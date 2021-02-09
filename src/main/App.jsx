import React from 'react'

import '../../node_modules/font-awesome/css/font-awesome.min.css'
import './App.css'

import Menu from '../template/menu'
import Routes from './routes'


export default props => (
    <div className="container-app">
        <Menu/>
        <Routes/>
    </div>
)