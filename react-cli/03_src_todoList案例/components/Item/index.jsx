import React, { Component } from 'react'
import ProtoTypes from "prop-types"

export default class Item extends Component {

    static protoTypes = {
        updateTodo: ProtoTypes.func.isRequired
    }

    state = { mouse: false }    // 标识鼠标移入、移出

    // 鼠标移入、移出的回调
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }

    // 勾选或取消勾选某一个todo的回调
    handleCheck = (id) => {
        const { updateTodo } = this.props
        return (event) => {
            // console.log(this.props);
            updateTodo(id, event.target.checked)
        }
    }

    // 删除某一个todo的回调
    handleDelete = (id) => {
        // 此处confirm要加window，否则会报错
        if (window.confirm('确定删除吗?')) {
            const { deleteTodo } = this.props
            deleteTodo(id)
        }
    }

    render() {
        const { id, name, done } = this.props
        const { mouse } = this.state
        return (
            <li style={{ background: mouse ? '#ddd' : 'white' }} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                    {/*此处若用checked=，则无法修改选择状态，需要同时添加onChange*/}
                    {/* 而若用defaultchecked，则会导致当点击全选或取消全选时，其状态无法被改变 */}
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button onClick={() => { this.handleDelete(id) }} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
