import React from 'react'
import './menu.css'


export default props => (
    <nav className="navbar">
        <div className="nav-container">
            <div className="navbar-header">
                <a href="/" className="navbar-brand">
                    <i className="fa fa-calendar-check-o"></i> TodoApp
                </a>
            </div>
        </div>

        <div id="navbar" className="navbar-collapse">
            <ul className="navbar-nav">
                <li><a href="/todos">Tarefas</a></li>
                <li><a href="/about">Sobre</a></li>
            </ul>
        </div>
    </nav>
)