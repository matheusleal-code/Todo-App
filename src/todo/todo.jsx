import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import './todo.css'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component{

    constructor(props){
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd(){
        console.log(this)
    }

    render(){
        return(
            <div className="container">
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm handleAdd={this.handleAdd}/>
                <TodoList />
            </div>
        )
    }
}