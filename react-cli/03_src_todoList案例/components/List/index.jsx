import React, { Component } from 'react'
import ProtoTypes from "prop-types"
import Item from '../Item'
import './index.css'

export default class List extends Component {
    // 对接收的props进行：类型、必要性的限制
    static propTypes = {
        updateTodo: ProtoTypes.func.isRequired,
        deleteTodo: ProtoTypes.func.isRequired,
        todos: ProtoTypes.array.isRequired,
    }

    render() {
        const { todos, updateTodo, deleteTodo } = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((todo) => {
                        return <Item {...todo} key={todo.id} updateTodo={updateTodo} deleteTodo={deleteTodo}></Item>
                    })
                }
            </ul>
        )
    }
}
