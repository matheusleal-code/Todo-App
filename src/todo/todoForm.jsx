import React from 'react'
import IconButton from './iconButton'
import './todoForm.css'

export default props => (
    <div role='form' className='todoForm'>
        <div className="input-container">
            <input id='description' className='input-form' type="text" placeholder='' value={props.description} 
            onChange={props.handleChange}/>
        </div>

        <div className="actions-container">
            <IconButton style='add' icon='plus' onClick={props.handleAdd}/>
        </div>
    </div>
)