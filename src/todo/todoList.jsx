import React from 'react'
import IconButton from './iconButton'
import './todoList.css'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markAsDone' : ''}>
                    {todo.description}
                </td>
                <td>
                    <IconButton style='success' hide={todo.done} icon='check'
                        onClick={() => props.handleMarkAsDone(todo)} />
                    <IconButton style='warning' hide={!todo.done} icon='undo'
                        onClick={() => props.handleMarkAsPending(todo)} />
                    <IconButton style='danger' hide={!todo.done} icon='trash-o'
                        onClick={() => props.handleRemove(todo)} />
                </td>
            </tr>
        ))
    }

    return (
        <table className="list-table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='table-actions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}