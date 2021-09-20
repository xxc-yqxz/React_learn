import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    // 全选checkBox的回调
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }

    // 清除所有已完成的回调
    handleClearAllDone = () => {
        if (window.confirm('确定删除所有已完成的？')) {
            this.props.clearAllDoneTodos()
        }
    }

    render() {
        const { todos } = this.props
        // 已完成的个数
        const doneCount = todos.reduce((pre, todo) => {
            return pre + (todo.done ? 1 : 0)
        }, 0)
        // 总数
        const total = todos.length
        return (
            <div className="todo-footer">
                <label>
                    {/* 此处若用defaultChecked，则只有第一次可以根据逻辑进行赋值，后面无法重新赋值。即便其可以改变勾选，也只是手动使得页面上发生改变，无法根据逻辑进行再次自动改变 */}
                    {/* 而若要用checked，则必须配合onChange使用，否则无法手动改变选中状态 */}
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false} />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
            </div>
        )
    }
}
