import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    state = {
        mouseIn: false // 标识鼠标是否在当前todo项中
    }

    // 勾选or取消勾选一个todo的回调
    handleCheck = (id) => {
        return ({ target }) => {
            // 调用App传递过来的checkTodo
            this.props.checkTodo(id, target.checked)
        }
    }

    // 鼠标移入移出的回调
    handleMouse = (mouseIn) => {
        return () => {
            this.setState({ mouseIn })
        }
    }

    // 删除按钮的回调
    handleDelete = (id) => {
        // react未把confirm挂载到全局window对象中，故若直接使用confirm，语法检查会过不去
        /* eslint-disable */
        if (confirm('确认删除吗?')) {
            this.props.deleteTodo(id)
        }
    }

    render() {
        const { id, name, done } = this.props
        const { mouseIn } = this.state
        return (
            <div>
                <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} style={{ backgroundColor: mouseIn ? '#ddd' : 'white' }}>
                    <label>
                        {/* 此处会产生空格的问题。Linux和Window回车不同 */}
                        <input type="checkbox" checked={done} onChange={this.handleCheck(id)} /> <span>{name}</span>
                    </label>
                    <button className="btn btn-danger" onClick={() => { this.handleDelete(id) }} style={{ display: mouseIn ? 'block' : 'none' }}>删除</button>
                </li>
            </div >
        )
    }
}
