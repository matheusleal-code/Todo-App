import React from 'react'
import If from '../template/if'
import './iconButton.css'

export default props => (
    <If test={!props.hide}>
        <button className={'btn-form ' + props.style}
            onClick={props.onClick}>
            <i className={'fa fa-' + props.icon}></i>
        </button>
    </If>
)