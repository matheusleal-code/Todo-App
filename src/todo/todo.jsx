import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import './todo.css'

import TodoForm from './todoForm'
import TodoList from './todoList'

import axios from 'axios'

const URL = 'http://localhost:8000/api/todos'

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

        this.refresh()
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, description: '', list: resp.data}))
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(resp=> this.refresh())
    }

    render() {
        return (
            <div className="container">
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm description={this.state.description} handleAdd={this.handleAdd} handleChange={this.handleChange} />
                <TodoList list={this.state.list} handleRemove={this.handleRemove}/>
            </div>
        )
    }
}