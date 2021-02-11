import React from 'react'
import IconButton from './iconButton'
import './todoForm.css'

export default props => {

    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if(e.key === 'Escape'){
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm'>
            <div className="input-container">
                <input id='description' className='input-form' type="text" placeholder='' value={props.description}
                    onChange={props.handleChange} onKeyUp={keyHandler}/>
            </div>

            <div className="actions-container">
                <IconButton style='add' icon='plus' onClick={props.handleAdd} />
                <IconButton style='info' icon='search' onClick={props.handleSearch} />
                <IconButton style='default' icon='close' onClick={props.handleClear} />
            </div>
        </div>
    )
}
